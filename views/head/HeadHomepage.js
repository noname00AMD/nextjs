import Head from "next/head"
import GoogleMeta from "../components/GoogleMeta";
import FacebookMeta from "../components/FacebookMeta";
import TwitterMeta from "../components/TwitterMeta";
import Script from "next/script";
// import { Html, Head, Main, NextScript } from 'next/document'
// import Script from 'next/script'
export default function PageHead(props) {
    return (
        <>
            <Head>
                <meta charSet="UTF-8" />
                <meta name="robots" content="max-image-preview:large"></meta>
                <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=Edge" />
                <meta name="viewport"
                    content="user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, width=device-width" />

                {/* <!-- for PWA --> */}
                <link rel="apple-touch-icon" href="/favicon.ico" />

                {/* <!-- for RSS --> */}
                <link rel="alternate" type="application/rss+xml" title={props.title} href="/feed.rss" />

                {/* <!-- for SEO --> */}
                <title>{props.title}</title>
                <meta name="keywords" content={props.siteInfo.keyword.join(",")}

                />
                {/* <meta name="newskeywords" content={props.site_info.keywords.join(",")} /> */}
                {/* <meta name="description" content={props.site_info.description} /> */}

                <link rel="manifest" href="/manifest.json" />
                {/* <link rel="shortcut icon" href={props.site_info.icon} type="image/x-icon" /> */}
                {/* <meta name="theme-color" content={props.site_info.theme_color} /> */}
                <meta name="format-detection" content="telephone=yes,date=no,address=yes,email=yes,url=yes" />
            </Head>
            {/* -- for google  -- */}
            <GoogleMeta props={props} />
            {/* -- for facebook -- */}
            <FacebookMeta props={props} />
            {/* <!-- for twitter --> */}
            <TwitterMeta props={props} />


        </>
    )
}
