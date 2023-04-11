import Link from "next/link"
import Script from "next/script";
import { useState, useEffect, useRef } from "react";
import Image from "next/image"
import Submenu from "./Submenu";
import style from "../sass/Header.module.sass"
export default function Header(props) {
    const [time, setTime] = useState((new Date()).toDateString());
    const topBarElm = useRef()
    const headerElm = useRef()
    var show_all_btn = useRef()
    var hide_all_btn = useRef()
    var submenu = useRef()
    var [show, setShow] = useState(false)
    var [willHide, setWillHide] = useState(false)
    var [pin, setPin] = useState(false)
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([e]) => {
                if (e.isIntersecting) {
                    setPin(false)
                    // headerElm.current.classList.remove("pin")
                } else {
                    setPin(true)
                }
            },
            { threshold: [0] }
        );
        observer.observe(topBarElm.current)

    })
    var search = () => {
        console.log("search");
    }
    var show_menu = () => {

        if (show === true) {
            setWillHide(show)
            setTimeout(() => {
                setWillHide(!show)
                setShow(!show)
            }, 300);
            return
        }
        setShow(!show)
    }
    return (
        <>

            <div className={style.top_bar} ref={topBarElm}>
                <div className={"cont-fluid"}>
                    <div className={"row"}>
                        <div className={"col-2 " + style.logo + " " + style["col-2"]}>
                            <div style={{ width: "168px" }}>
                                <Link href="/" >
                                    <a title="home"
                                        style={{ backgroundImage: "url('/images/logo.png')", backgroundRepeat: "no-repeat", backgroundSize: "100% 100%" }}>
                                    </a>
                                </Link>
                            </div>
                        </div>
                        <div className={"col-2 " + style["col-2"]}>
                            <time className={style.time} id={"time"}>{time}</time>
                        </div>
                        <div className={"col-2 " + style["col-2"]}>
                            <p className={style.lang}>eng vi</p>
                        </div>
                        <div className={"col-2 " + style["col-2"]}>
                            <Link href={"/" + props.admin_path}>
                                <a>
                                    Admin
                                </a>
                            </Link>
                            <a href="/signup">signup</a>
                            <a href="/signin">signin</a>
                        </div>
                        <div className={"col-2 " + style["col-2"]}>
                            <div>
                                <input placeholder="tim kiem" type="text" />
                                <ul className={style.search_dropdown + " hidden"}>
                                    <li>
                                        asdas
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className={"col-2 " + style["col-2"]}>
                            <button type="submit" onClick={search}>Search</button>
                        </div>
                    </div>
                </div>
            </div>

            <header className={style.header + " " + (pin ? style.pin : "") + " " + (show ? style.show : "")} >
                <div className={style.nav}>
                    <div className={"cont " + style.cont}>
                        <div className={"row"}>
                            <ul className={"col-12 " + style["col-12"]}>
                                <li className={style.home}>
                                    <Link href="/">
                                        <a>Home</a>
                                    </Link>
                                </li>
                                {props.categories.map((category, index) => {
                                    if (category.type === "category" && category.visible === true && index <= 5) {
                                        return (
                                            <li key={category.id} className={"category"}>
                                                <a href={category.slug}>
                                                    {category.cate_name}
                                                </a>
                                            </li>
                                        )
                                    }
                                })}
                                <li className={style.show_all_btn} ref={show_all_btn} onClick={show_menu}>
                                    <button >{show ? <>&#10006; </> : <> &#8759;</>}</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <Submenu
                    showing={show}
                    hide={show_menu}
                    categories={props.categories}
                    willHide={willHide}
                />
            </header>
        </>
    )
}
