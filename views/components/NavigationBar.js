import Link from "next/link"
import { useState, useEffect, useRef } from "react";
import style from "../sass/NavigationBar.module.sass"
export default function NavigationBar(props) {
    return (<>
        <div className="col-3">

            <ul className={style.navigationBar}>
                <li>
                    <Link href="/">
                        <a>Back to Home</a>
                    </Link>
                </li>
                <li>
                    <Link href={"/" + props.admin_path}>
                        <a>Admin</a>
                    </Link>
                </li>
                <li>
                    <Link href={"/" + props.admin_path + "/article"}>
                        <a >Articles</a>
                    </Link>
                    <ul>
                        <li>
                            <Link href={"/" + props.admin_path + "/article/add"}>
                                <a >New Article</a>
                            </Link>
                        </li>
                    </ul>
                </li>
                <li>
                    <Link href={"/" + props.admin_path + "/category"}>
                        <a >Category</a>
                    </Link>
                    <ul>
                        <li>
                            <Link href={"/" + props.admin_path + "/category/add"}>
                                <a>New Category</a>
                            </Link>
                        </li>
                    </ul>
                </li>
                <li>
                    <Link href={"/" + props.admin_path + "/user/"}>
                        <a>User</a>
                    </Link>
                    <ul>
                        <li>
                            <Link href={"/" + props.admin_path + "/user/add"}>
                                <a>New User</a>
                            </Link>
                        </li>
                    </ul>
                </li>
                <li>
                    <Link href={"/" + props.admin_path + "/media"}>
                        <a >Media</a>
                    </Link>
                    <ul>
                        <li>
                            <Link href={"/" + props.admin_path + "/media/add"}>
                                <a >New Media</a>
                            </Link>
                        </li>
                    </ul>
                </li>
                <li>
                    <Link href={"/" + props.admin_path + "/tag"}>
                        <a>Tag</a>
                    </Link>
                    <ul>
                        <li>
                            <Link href={"/" + props.admin_path + "/tag/add"}>
                                <a >New Tag</a>
                            </Link>

                        </li>
                    </ul>
                </li>
                <li>
                    <Link href={"/" + props.admin_path + "/siteinfo"}>
                        <a >Site info</a>
                    </Link>
                </li>
            </ul>
        </div>
    </>)
}
