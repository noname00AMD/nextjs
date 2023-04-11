import Link from "next/link"
import { useState, useEffect, useRef } from "react";
import style from "./sass/AdminArticle.module.sass"
export default function AdminArticle({ props }) {
    return (<>
        <ul>
            {props.article.forEach((item, index) => {
                <li style={{ margin: "20px 0", fontSize: "2rem" }}>
                    <a href={"/" + item.slug}>
                        {item.title}
                    </a>
                </li>
            })}
        </ul>


    </>)
}
