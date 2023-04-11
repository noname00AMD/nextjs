import AdminLayout from "../layout/AdminLayout"
import ImgInput from "../components/ImgInput"
import style from "../sass/NewMedia.module.sass"
import { useState, useEffect, useRef } from "react"
// import { textToSlug } from "../../helper"
export default function NewUser(props) {
    var [title, setTitle] = useState('')
    var [media, setMedia] = useState()
    var submit = (e) => {
        e.preventDefault()

        var reader = new FileReader();
        reader.readAsDataURL(media);
        reader.onloadend = function () {
            fetch(props.host + "/api/media", {
                method: "post",
                cache: "no-cache",
                credentials: "same-origin",
                headers: {
                    "Content-Type": "application/json",
                },
                referrerPolicy: "no-referrer",
                body: JSON.stringify({
                    title,


                    "Media": reader.result
                })
            })
        }
    }


    var handleTitle = (e) => {
        setTitle((e.target.value))
    }


    return (
        <>
            <AdminLayout {...props}>
                <div className={"col-9 start-4 " + style.newmedia}>
                    <form action="submit" onSubmit={submit}>

                        <ImgInput
                            change={(v) => {
                                setMedia(v)
                            }}
                            type="media"
                        />
                        <button className={style.done}
                            type="submit"><strong>Done</strong></button>
                    </form>
                </div>


            </AdminLayout>
        </>
    )
}
function imgToBase64(img, callback, outputFormat) {
    var img = new Image(img);
    img.onload = function () {
        var canvas = document.createElement('CANVAS');
        var ctx = canvas.getContext('2d');
        canvas.height = img.naturalHeight;
        canvas.width = img.naturalWidth;
        try {

            ctx.drawImage(img, 0, 0);
            dataURL = canvas.toDataURL(outputFormat);
            callback(null, dataURL);
        } catch (error) {
            callback(error, null)
        }
    }
};
