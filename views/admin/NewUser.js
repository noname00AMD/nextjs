import AdminLayout from "../layout/AdminLayout"
import ImgInput from "../components/ImgInput"
import style from "../sass/NewUser.module.sass"
import { useState, useEffect, useRef } from "react"
import { textToSlug } from "../../helper"
export default function NewUser(props) {
    var [username, setUsername] = useState('')
    var [email, setEmail] = useState('')
    var [displayName, setDisplayName] = useState("")
    var [bio, setBio] = useState("")
    var [thumbImg, setThumbImg] = useState()
    var submit = (e) => {
        e.preventDefault()
        var user = subUserRef.current.value || null
        if (thumbImg.size > 1024 * 300) {
            alert("thumb img < 300kb")
            return
        }
        var reader = new FileReader();
        reader.readAsDataURL(thumbImg);
        reader.onloadend = function () {
            fetch(props.host + "/api/signup", {
                method: "post",
                cache: "no-cache",
                credentials: "same-origin",
                headers: {
                    "Content-Type": "application/json",
                },
                referrerPolicy: "no-referrer",
                body: JSON.stringify({
                    username,
                    bio,
                    "thumbImg": reader.result
                })
            })
        }
    }


    var handleUserName = (e) => {
        setUsername(e.target.value)
        setSlug(textToSlug(e.target.value))
    }

    var handleBio = (e) => {
        setBio(e.target.value)
    }
    var handleDisplayName = (e) => {
        setDisplayName(e.target.value)
    }

    var handleEmail = (e) => {
        setEmail(e.target.value)
    }


    return (
        <>
            <AdminLayout {...props}>
                <div className={"col-9 start-4 " + style.newuser}>
                    <form action="submit" onSubmit={submit}>
                        <label aria-required="true" htmlFor="email">Email: </label>
                        <input id="email" required className={style.username} onChange={handleEmail} maxLength="" value={email} minLength="16"
                            type="text" />
                        <label aria-required="true" htmlFor="username">Username: </label>
                        <input id="username" required className={style.username} onChange={handleUserName} maxLength="120" value={username} minLength="16"
                            type="text" />
                        <label aria-required="true" htmlFor="displayname">Display name: </label>
                        <input id="displayname" required className={style.username} onChange={handleDisplayName} maxLength="120" value={displayName} minLength="16"
                            type="text" />

                        <label aria-required="true" htmlFor="bio">Bio: </label>
                        <textarea required className={style.bio} value={bio} onChange={handleBio} maxLength="500" minLength="16"  ></textarea>
                        <ImgInput
                            change={(v) => {
                                setThumbImg(v)
                            }}
                            type="thumb"
                        />
                        <button className={style.done}
                            type="submit"><strong>Done</strong></button>
                    </form>
                </div>


            </AdminLayout>
        </>
    )
}
