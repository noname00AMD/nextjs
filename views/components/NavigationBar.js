// import {  NavActiveLink } from "next/link"
import { useState, useEffect, useRef } from "react";
import ActiveLink from "./ActiveLink";
import style from "../sass/NavigationBar.module.sass"
export default function NavigationBar(props) {
    return (<>
        <div className="col-3">

            <ul className={style.navigationBar}>
                <li>
                    <ActiveLink href="/" activeClassName={style.active}>
                        <a>Back to Home</a>
                    </ActiveLink>
                </li>
                <li>
                    <ActiveLink href={"/" + props.admin_path} activeClassName={style.active}>
                        <a>Admin</a>
                    </ActiveLink>
                </li>
                <li>
                    <ActiveLink href={"/" + props.admin_path + "/article"} activeClassName={style.active}>
                        <a >Articles</a>
                    </ActiveLink>
                    <ul>
                        <li>
                            <ActiveLink href={"/" + props.admin_path + "/article/add"} activeClassName={style.active}>
                                <a >New Article</a>
                            </ActiveLink>
                        </li>
                    </ul>
                </li>
                <li>
                    <ActiveLink href={"/" + props.admin_path + "/category"} activeClassName={style.active}>
                        <a >Category</a>
                    </ActiveLink>
                    <ul>
                        <li>
                            <ActiveLink href={"/" + props.admin_path + "/category/add"} activeClassName={style.active}>
                                <a>New Category</a>
                            </ActiveLink>
                        </li>
                    </ul>
                </li>
                <li>
                    <ActiveLink href={"/" + props.admin_path + "/user"} activeClassName={style.active}>
                        <a>User</a>
                    </ActiveLink>
                    <ul>
                        <li>
                            <ActiveLink href={"/" + props.admin_path + "/user/add"} activeClassName={style.active}>
                                <a>New User</a>
                            </ActiveLink>
                        </li>
                    </ul>
                </li>
                <li>
                    <ActiveLink href={"/" + props.admin_path + "/media"} activeClassName={style.active}>
                        <a >Media</a>
                    </ActiveLink>
                    <ul>
                        <li>
                            <ActiveLink href={"/" + props.admin_path + "/media/add"} activeClassName={style.active}>
                                <a >New Media</a>
                            </ActiveLink>
                        </li>
                    </ul>
                </li>
                <li>
                    <ActiveLink href={"/" + props.admin_path + "/tag"} activeClassName={style.active}>
                        <a>Tag</a>
                    </ActiveLink>
                    <ul>
                        <li>
                            <ActiveLink href={"/" + props.admin_path + "/tag/add"} activeClassName={style.active}>
                                <a >New Tag</a>
                            </ActiveLink>

                        </li>
                    </ul>
                </li>
                <li>
                    <ActiveLink href={"/" + props.admin_path + "/siteinfo"} activeClassName={style.active}>
                        <a >Site info</a>
                    </ActiveLink>
                </li>
            </ul>
        </div>
    </>)
}
