import AdminLayout from "../layout/AdminLayout"
import style from "../sass/NewTag.module.sass"
import { useState, useEffect, useRef } from "react"
import { textToSlug } from "../../helper"
export default function NewTag(props) {
    var [tagName, setTagname] = useState('')
    var [slug, setSlug] = useState('')
    var [description, setDescription] = useState("")
    var submit = (e) => {
        e.preventDefault()

        fetch(props.host + "/api/addtag", {
            method: "post",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json",
            },
            referrerPolicy: "no-referrer",
            body: JSON.stringify({
                tagName,
                description
            })
        })
    }


    var handleTagName = (e) => {
        setTagname(e.target.value)
        setSlug(textToSlug(e.target.value))
    }

    var handleSlug = (e) => {
        setSlug(e.target.value)
    }


    var handleDescription = (e) => {
        setDescription(e.target.value)
    }


    return (
        <>
            <AdminLayout {...props}>
                <div className={"col-9 start-4 " + style.newuser}>
                    <form action="submit" onSubmit={submit}>

                        <label aria-required="true" htmlFor="username">Tagname: </label>
                        <input id="username" required className={style.username} onChange={handleTagName} maxLength="120" value={tagName} minLength="2"
                            type="text" />
                        <label aria-required="true" htmlFor="displayname">SLug : </label>
                        <input id="displayname" required className={style.username} onChange={handleSlug} maxLength="120" value={slug} minLength="2"
                            type="text" />

                        <label aria-required="true" htmlFor="displayname">Description : </label>
                        <input id="displayname" required className={style.username} onChange={handleDescription} maxLength="120" value={description} minLength="16"
                            type="text" />
                        <button className={style.done}
                            type="submit"><strong>Done</strong></button>
                    </form>
                </div>


            </AdminLayout>
        </>
    )
}
