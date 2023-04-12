// import { useRouter } from 'next/router'

// function ActiveLink({ children, href }) {
//     const router = useRouter()
//     const style = {
//         marginRight: 10,
//         color: router.asPath === href ? 'red' : 'black',
//     }

//     const handleClick = (e) => {
//         e.preventDefault()
//         router.push(href)
//     }

//     return (
//         <a href={href} onClick={handleClick} style={style}>
//             {children}
//         </a>
//     )
// }

// export default ActiveLink
// import { useRouter } from "next/router";
// import Link, { LinkProps } from "next/link";
// import React, { useState, useEffect } from "react";


// export default function NavLink({
//     children,
//     activeClassName,
//     className,
//     ...props
// }) {
//     const { asPath, isReady } = useRouter();
//     const [computedClassName, setComputedClassName] = useState(className);

//     // Dynamic route will be matched via props.as
//     // Static route will be matched via props.href
//     const linkPathname = new URL(
//         (props.as || props.href),
//         location.href
//     ).pathname;

//     // Using URL().pathname to get rid of query and hash
//     const activePathname = new URL(asPath, location.href).pathname;

//     const isActive = linkPathname === activePathname;

//     useEffect(() => {
//         // Check if the router fields are updated client-side
//         if (isReady) {
//             const newClassName = isActive
//                 ? `${className} ${activeClassName}`.trim()
//                 : className;

//             if (newClassName !== computedClassName) {
//                 setComputedClassName(newClassName);
//             }
//         }
//     }, [
//         asPath,
//         isReady,
//         props.as,
//         props.href,
//         activeClassName,
//         className,
//         computedClassName,
//         isActive,
//     ]);

//     return (
//         <Link className={computedClassName} {...props}>
//             {typeof children === "function" ? children({ isActive }) : children}
//         </Link>
//     );
// }
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import Link from "next/link";
import React, { Children } from "react";

const ActiveLink = ({ children, activeClassName, ...props }) => {
    const { asPath } = useRouter();
    const child = Children.only(children);
    const childClassName = child.props.className || "";

    const className =
        asPath === props.href || asPath === props.as
            ? `${childClassName} ${activeClassName}`.trim()
            : childClassName;

    return (
        <Link {...props}>
            {React.cloneElement(child, {
                className: className || null,
            })}
        </Link>
    );
};

ActiveLink.propTypes = {
    activeClassName: PropTypes.string.isRequired,
};

export default ActiveLink;
