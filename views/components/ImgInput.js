import { useState, useEffect, useRef } from "react"
import style from "../sass/ImgInput.module.sass"
export default function ImgInput(props) {
    var imgRef = useRef()
    var reviewRef = useRef()
    var dropboxRef = useRef()


    var mult = props.type === "media" ? true : false
    var dragover = (e) => {

        e.stopPropagation();
        e.preventDefault();
    }
    var drop = (e) => {
        e.stopPropagation();
        e.preventDefault();
        const dt = e.dataTransfer;
        const files = dt.files;
        imgRef.current.files = files
        changeImg()
    }

    var changeImg = (e) => {
        var stop = false
        var Imgs = imgRef.current.files
        if (Imgs.length === 0) {
            props.change(Img)
            stop = true
        }
        if (props.tyype === "thumb" && Imgs[0].size > 1024 * 300) {
            alert("thumb img < 300kb")
            stop = true

        }
        if (props.tyype === "media") {
            for (var i = 0; i < Imgs.length; i++) {
                var element = Imgs[i]
                if (element.size > 1024 * 1024) {
                    stop = true
                    alert("media < 1Mb")
                }
            }
        }
        while (reviewRef.current.firstChild) {
            reviewRef.current.removeChild(reviewRef.current.firstChild);
        }
        props.change(Img)
        if (stop === true) {
            return
        }
        for (var i = 0; i < Imgs.length; i++) {
            var Img = Imgs[i]
            const para = document.createElement('p');
            para.textContent = `File: ${Img.name} || Filesize: ${(Img.size / (1024)).toFixed(1)}kb.`;
            const image = document.createElement('img');
            image.src = URL.createObjectURL(Img);
            image.height = 122
            image.style.display = "block"
            image.style.margin = "0 auto"

            reviewRef.current.appendChild(image);
            reviewRef.current.appendChild(para);
        }
    }
    return (<>

        <label aria-required="true" htmlFor="Img">Img :</label>
        <div className={style.dropbox} ref={dropboxRef} onDrop={drop} onDragOver={dragover} onDragEnter={dragover} >
            {
                props.type === "media" ?
                    <input ref={imgRef} multiple onChange={changeImg} required accept="image/*" type="file" name="Img" className={style.Img} />
                    :
                    <input ref={imgRef} onChange={changeImg} required accept="image/*" type="file" name="Img" className={style.Img} />
            }

            <p >Drop image here ...</p>
            <div ref={reviewRef} className={style.preview}></div>
        </div>

    </>)
}
