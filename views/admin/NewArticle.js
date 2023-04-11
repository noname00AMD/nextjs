import AdminLayout from "../layout/AdminLayout"
import style from "../sass/NewArticle.module.sass"
import ImgInput from "../components/ImgInput"
import { Fragment } from "react"
import { useState, useEffect, useRef } from "react"
import { textToSlug, textToTag } from "../../helper"
export default function NewArticle(props) {
    var timeRef = useRef()
    var dateRef = useRef()
    var ttsRef = useRef()
    var thumbImgRef = useRef()
    var [useTts, setUseTts] = useState(false)
    var categoryRef = useRef()
    var thumbTypeRef = useRef()
    var langRef = useRef()
    var [title, setTitle] = useState("")
    var [slug, setSlug] = useState("")
    var [description, setDescription] = useState("")
    var [excerpt, setExcerpt] = useState("")
    var [status, setStatus] = useState("public")
    const [input, setInput] = useState('');
    const [tags, setTags] = useState([]);
    const [tts, setTts] = useState("");
    const [isKeyReleased, setIsKeyReleased] = useState(false);
    var [thumbImg, setThumbImg] = useState()

    var submit = (e) => {
        e.preventDefault()
        var time = timeRef.current.value || null
        var date = dateRef.current.value || null
        var tts = null
        if (useTts) {
            tts = ttsRef.current.value
        }
        var thumbType = thumbTypeRef.current.value || null
        var lang = langRef.current.value || null
        var category = categoryRef.current.value || null
        if (thumbImg.size > 1024 * 300) {
            alert("thumb img < 300kb")
            return
        }
        var reader = new FileReader();
        reader.readAsDataURL(thumbImg);
        reader.onloadend = function () {
            console.log("fetch");
            fetch(props.host + "/api/addarticle", {
                method: "post",
                cache: "no-cache",
                credentials: "same-origin",
                headers: {
                    "Content-Type": "application/json",
                },
                referrerPolicy: "no-referrer",
                body: JSON.stringify({
                    title,
                    description,
                    excerpt,
                    status,
                    thumbType,
                    category,
                    lang,
                    tags,
                    status,
                    time,
                    date,
                    tts,
                    "thumbImg": reader.result
                })
            })
        }
    }



    var changeStatus = (e) => {
        if (e.target.value === "public") {
            timeRef.current.setAttribute("disabled", true)
            dateRef.current.setAttribute("disabled", true)
        }
        if (e.target.value === "hidden") {
            timeRef.current.setAttribute("disabled", true)
            dateRef.current.setAttribute("disabled", true)
        }
        if (e.target.value === "schedule") {
            timeRef.current.removeAttribute("disabled")
            dateRef.current.removeAttribute("disabled")
            dateRef.current.value = today
            timeRef.current.value = displayTime

        }
        // timeRef.current.setAttribute()
        setStatus(e.target.value)
    }
    var handleTitle = (e) => {
        setTitle(e.target.value)
        setSlug(textToSlug(e.target.value))
    }
    var handleSlug = (e) => {
        setSlug(textToSlug(e.target.value))
    }

    var handleDescription = (e) => {
        setDescription(e.target.value)
    }
    var handleExcerpt = (e) => {
        setExcerpt(e.target.value)
    }
    const handleTag = (e) => {
        setInput(e.target.value);
    };
    const deleteTag = (index) => {
        setTags(prevState => prevState.filter((tag, i) => i !== index))
    }
    const onKeyDown = (e) => {
        const { key } = e;
        const trimmedInput = textToTag(input);

        if ((key === ',' || key === 'Enter') && trimmedInput.length && !tags.includes(trimmedInput)) {
            e.preventDefault();
            setTags(prevState => [...prevState, trimmedInput]);
            setInput('');
        }

        if (key === "Backspace" && !input.length && tags.length && isKeyReleased) {
            const tagsCopy = [...tags];
            const poppedTag = tagsCopy.pop();
            e.preventDefault();
            setTags(tagsCopy);
            setInput(poppedTag);
        };
    }
    const onKeyUp = () => {
        setIsKeyReleased(true);
    }
    const onAddBtn = (e) => {
        const trimmedInput = textToTag(input);
        if (trimmedInput.length && !tags.includes(trimmedInput)) {
            setTags(prevState => [...prevState, trimmedInput]);
            setInput('');
        }
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
            <link rel="stylesheet" href="/css/lexical.css" />
            <AdminLayout {...props}>
                <div className={"col-9 start-4 " + style.newarticle}>
                    <form action="submit" onSubmit={submit}>
                        <label aria-required="true" htmlFor="title">Title: </label>
                        <input required className={style.title} onChange={handleTitle} maxLength="120" value={title} minLength="16"
                            type="text" />
                        <label aria-required="true" htmlFor="slug">Slug: </label>
                        <div className={style.slug} >
                            <input required className={style.slug1} onChange={handleSlug} value={slug} maxLength="120" minLength="16"

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
                        <label aria-required="true" htmlFor="excerpt ">Excerpt (Brief): </label>
                        <textarea required className={style.excerpt} value={excerpt} onChange={handleExcerpt} maxLength="500" minLength="16"
                        ></textarea>

                        <div>
                            <input type="checkbox" name="use_tts" className={style.use_tts} />
                            <label htmlFor="use_tts">Text to speech: </label>
                        </div>
                        <textarea ref={ttsRef} name="tts"
                            className={style.tts}></textarea>
                        <ImgInput
                            change={(v) => {
                                setThumbImg(v)
                            }}
                            type="thumb"
                        >
                        </ImgInput>
                        <label htmlFor="thumbtype"> Thumb type :</label>
                        <select required name="thumbType" ref={thumbTypeRef}
                            className={style.thumbType}>
                            {

                                props.siteInfo.thumbTypes.map((item, index) => {
                                    return (
                                        <option value={item} key={index}>
                                            {item}
                                        </option>
                                    )
                                })}
                        </select>
                        <label style={{ display: "block" }} htmlFor="lang"> Lang :</label>
                        <select required ref={langRef}
                            name="lang" className={style.lang}>
                            {
                                props.siteInfo.langSupport.map((lang, index) => {
                                    return (

                                        <option key={index} value={lang} >
                                            {lang}
                                        </option>

                                    )
                                })
                            }
                        </select>
                        <label htmlFor="category" style={{ margin: "5px", display: "block" }} name="category">Category: </label>
                        <select ref={categoryRef} className={style.category} aria-placeholder="select category" required >
                            {props.categories.map((category, index) => {
                                if (category.type == "category") {
                                    var sub = props.categories.filter(cate => {
                                        return ((cate.parent === category.id) && (cate.type === "subcategory"))
                                    })
                                    if (sub.length > 0) {
                                        return (<Fragment key={index}>
                                            <option style={{ fontWeight: "bold" }} value={category.id}>
                                                {category.cate_name}
                                            </option>
                                            <optgroup label={">> " + category.cate_name}>
                                                {sub.map((subcate, index1) => {
                                                    return (
                                                        <option key={subcate.id} value={subcate.id}>
                                                            {subcate.cate_name}
                                                        </option>
                                                    )
                                                })
                                                }
                                            </optgroup>
                                        </Fragment>)
                                    } else {
                                        return (
                                            <option key={index} style={{ fontWeight: "bold" }} value={category.id}>
                                                {category.cate_name}
                                            </option>
                                        )
                                    }
                                }
                            })
                            }

                        </select>
                        <label style={{ display: "block", margin: "5px" }} htmlFor="tags">Add tag: </label>

                        <input style={{ border: "1px solid black", padding: "5px", margin: "5px" }}
                            value={input}
                            placeholder="Enter a tag"
                            onKeyDown={onKeyDown}
                            onChange={handleTag}
                            onKeyUp={onKeyUp}
                        />
                        <input type="button" onClick={onAddBtn} value="Add tag"
                            className={style.add_tag_button} />
                        <div className={style.tagInput}>
                            <span>Tags :</span>
                            {tags.map((tag, ind) =>
                                <div key={ind} className="tag" style={{ display: "inline-block", margin: "0 10px" }}>
                                    {tag}
                                    <button style={{ padding: "5px 10px", marginLeft: "10px" }} onClick={() => deleteTag(ind)}>&#10006;</button>
                                </div>
                            )}
                        </div>
                        <div className={style.tag_box} style={{ fontSize: "1.8rem" }}>
                        </div>
                        <label style={{ margin: "5px" }} htmlFor="status">Status: </label>
                        <select onChange={changeStatus} name="status" className={style.status}>
                            <option value="public">Public</option>
                            <option value="hidden">Hidden</option>
                            <option value="schedule">schedule</option>
                        </select>
                        <input style={{ display: "block", padding: "5px", fontSize: "25px" }} ref={timeRef} disabled type="time" name="time" className={style.time} />
                        <input style={{ display: "block", padding: "5px", fontSize: "25px" }} ref={dateRef} disabled type="date" name="date" className={style.date} />
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
