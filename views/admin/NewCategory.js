import AdminLayout from "../layout/AdminLayout"
import ImgInput from "../components/ImgInput"
import style from "../sass/NewCategory.module.sass"
// import { Fragment } from "react"
import { useState, useEffect, useRef } from "react"
import { textToSlug } from "../../helper"
export default function NewArticle(props) {
    var [categoryName, setCategoryName] = useState('')
    var [slug, setSlug] = useState("")
    var [description, setDescription] = useState("")
    var [status, setStatus] = useState(true)
    var subCategoryRef = useRef()

    var [thumbImg, setThumbImg] = useState()

    var submit = (e) => {
        e.preventDefault()

        var category = subCategoryRef.current.value || null
        if (thumbImg.size > 1024 * 300) {
            alert("thumb img < 300kb")
            return
        }
        var reader = new FileReader();
        reader.readAsDataURL(thumbImg);
        reader.onloadend = function () {
            fetch(props.host + "/api/addarticle", {
                method: "post",
                cache: "no-cache",
                credentials: "same-origin",
                headers: {
                    "Content-Type": "application/json",
                },
                referrerPolicy: "no-referrer",
                body: JSON.stringify({
                    categoryName,
                    description,
                    status,
                    status,
                    "thumbImg": reader.result
                })
            })
        }
    }


    var handleCategory = (e) => {
        setCategoryName(e.target.value)
        setSlug(textToSlug(e.target.value))
    }
    var handleSlug = (e) => {
        setSlug(textToSlug(e.target.value))
    }

    var handleDescription = (e) => {
        setDescription(e.target.value)
    }

    var changeStatus = (e) => {
        setStatus(e.target.value)
    }

    var date = new Date();

    var day = date.getDate(),
        month = date.getMonth() + 1,
        year = date.getFullYear(),
        hour = date.getHours(),
        min = date.getMinutes();

    month = (month < 10 ? "0" : "") + month;
    day = (day < 10 ? "0" : "") + day;
    hour = (hour < 10 ? "0" : "") + hour;
    min = (min < 10 ? "0" : "") + min;

    var today = year + "-" + month + "-" + day,
        displayTime = hour + ":" + min;

    return (
        <>
            <AdminLayout {...props}>
                <div className={"col-9 start-4 " + style.newcategory}>
                    <form action="submit" onSubmit={submit}>
                        <label aria-required="true" htmlFor="category">Category: </label>
                        <input id="category" required className={style.title} onChange={handleCategory} maxLength="120" value={categoryName} minLength="16"
                            type="text" />
                        <label aria-required="true" htmlFor="slug">Slug: </label>
                        <div className={style.slug} >
                            <input required id="slug" className={style.slug1} onChange={handleSlug} value={slug} maxLength="120" minLength="16"
                                type="text" />
                            <svg className={style.slugGenerate} style={{ position: "absolute", cursor: "pointer", right: "8px", top: "8px" }} width="1.4em"
                                height="1.4em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd"
                                    d="M15.681 2.804A9.64 9.64 0 0011.818 2C6.398 2 2 6.48 2 12c0 5.521 4.397 10 9.818 10 2.03 0 4.011-.641 5.67-1.835a9.987 9.987 0 003.589-4.831 1.117 1.117 0 00-.664-1.418 1.086 1.086 0 00-1.393.676 7.769 7.769 0 01-2.792 3.758 7.546 7.546 0 01-4.41 1.428V4.222h.002a7.492 7.492 0 013.003.625 7.61 7.61 0 012.5 1.762l.464.551-2.986 3.042a.186.186 0 00.129.316H22V3.317a.188.188 0 00-.112-.172.179.179 0 00-.199.04l-2.355 2.4-.394-.468-.02-.02a9.791 9.791 0 00-3.239-2.293zm-3.863 1.418V2v2.222zm0 0v15.556c-4.216 0-7.636-3.484-7.636-7.778s3.42-7.777 7.636-7.778z"
                                    fill="#212134"></path>
                            </svg>
                        </div>
                        <label aria-required="true" htmlFor="description">Description: </label>
                        <textarea required className={style.description} value={description} onChange={handleDescription} maxLength="500" minLength="16"  ></textarea>



                        <label htmlFor="parent" style={{ margin: "5px", display: "block" }} name="category">Parent Category: </label>
                        <select ref={subCategoryRef} className={style.category} aria-placeholder="select category" required >
                            {props.categories.map((category, index) => {
                                if (category.type == "category") {
                                    return (
                                        <option key={index} style={{ fontWeight: "bold" }} value={category.id}>
                                            {category.cate_name}
                                        </option>
                                    )
                                }
                            })
                            }

                        </select>

                        <ImgInput
                            change={(v) => {
                                setThumbImg(v)
                            }}
                            type="thumb"
                        />


                        <label style={{ margin: "5px" }} htmlFor="status">Status: </label>
                        <select onChange={changeStatus} name="status" className={style.status}>
                            <option value={true}>Public</option>
                            <option value={false}>Hidden</option>
                        </select>
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
