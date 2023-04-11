import Image from 'next/image'
import Link from 'next/link'
import HotTags from "../components/HotTags";
import AdPanelSideBar from "../components/AdPanelSideBar";
import AdPanel728x90 from "../components/AdPanel728x90";
import TopAds from "../components/TopAds";
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import style from "../sass/HomeBody.module.sass"
import 'swiper/css/bundle';
export default function Body(props) {
    return (
        <>
            <div className={"cont " + style.home_body}>
                <div className={"row"} >
                    <div className={"col-12"}>
                        <TopAds />
                    </div>
                </div>
                <section style={{ marginBottom: "88px" }} >
                    <div className={"row"} style={{ marginBottom: "40px" }}>
                        <div className={"col-xl-9"} style={{ backgroundColor: "#fff", padding: "8px", boxShadow: "1px 2px 5px rgba(0, 0, 0, .15)" }} >
                            <div className={"row"}>
                                <div className={"col-8 "} style={{}}>
                                    <div className={"row"} style={{ marginBottom: "30px" }}>
                                        <div className={"col-12"}>
                                            <div style={{ width: "100%" }}>
                                                <div style={{ marginBottom: "4px" }}>
                                                    <Link href={"/"}>
                                                        <a style={{ width: "100%" }}>
                                                            <Image className={style.border + " " + style.zoom} layout="responsive" width={1.6} height={1} src="/images/mark-zuckerberg-1644293841385-16442938420702071314982-0-191-750-1391-crop-16442943967191483993240.png" />
                                                        </a>
                                                    </Link>
                                                </div>
                                                <Link href={"/"}>
                                                    <a className={style.title} style={{ display: "inline-block", marginBottom: "5px" }} >
                                                        hot girl Trâm Anh nổi như cồn lào  !!hot girl tram anh noi nhu con lao !!
                                                    </a>
                                                </Link>
                                                <p className='text' >Chỉ còn chưa đầy một ngày nữa kỳ thi tuyển sinh vào lớp 10 THPT ở Hà Nội sẽ chính thức diễn ra, nhiều phụ huynh cùng sĩ tử đã đến Văn Miếu - Quốc Tử Giám cầu may mắn.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={"row"}>
                                        <div className={"col-12"} style={{ borderRadius: "4px", overflow: "hidden" }}>
                                            <Swiper
                                                spaceBetween={2}
                                                loop={true}
                                                loopFillGroupWithBlank={false}
                                                onSlideChange={() => null}
                                                onSwiper={(swiper) => null}
                                                modules={[Navigation, Pagination]}
                                                navigation={{
                                                    nextEl: ".next",
                                                }}
                                                pagination={{
                                                    el: ".pagi",
                                                    renderBullet: function (index, className) {
                                                        return '<span style=height:6px;width:18px;border-radius:0;background-color:green class="' + className + '"></span>';
                                                    }
                                                }}
                                            >
                                                <SwiperSlide>
                                                    <div >
                                                        <div style={{ width: "46%", display: "inline-block" }}>
                                                            <Link href={"/"}>
                                                                <a >
                                                                    <Image style={{}} className={style.border} layout="responsive" width={1.6} height={1} src="/images/mark-zuckerberg-1644293841385-16442938420702071314982-0-191-750-1391-crop-16442943967191483993240.png" />
                                                                </a>
                                                            </Link>
                                                        </div>
                                                        <div style={{ paddingLeft: "4px", width: "54%", display: "inline-block", verticalAlign: "top" }}>
                                                            <Link href={"/"}>
                                                                <a style={{}} className={style.title2} >ahot girl ot girff fffff fffff ffffff fffff !!</a>
                                                            </Link>
                                                            <span style={{ fontSize: "13px", color: "#777" }}>- 4 gio truoc</span>

                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div >
                                                        <div style={{ width: "46%", display: "inline-block" }}>
                                                            <Link href={"/"}>
                                                                <a >
                                                                    <Image style={{}} className={style.border} layout="responsive" width={1.6} height={1} src="/images/mark-zuckerberg-1644293841385-16442938420702071314982-0-191-750-1391-crop-16442943967191483993240.png" />
                                                                </a>
                                                            </Link>
                                                        </div>
                                                        <div style={{ paddingLeft: "4px", width: "54%", display: "inline-block", verticalAlign: "top" }}>
                                                            <Link href={"/"}>
                                                                <a style={{}} className={style.title2} >ahot girl ot girff fffff fffff ffffff fffff !!</a>
                                                            </Link>
                                                            <span style={{ fontSize: "13px", color: "#777" }}>- 4 gio truoc</span>

                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                                <div className="pagi" style={{
                                                    textAlign: "right",
                                                    position: "absolute",
                                                    bottom: "1px"
                                                }}></div>
                                                <div style={{
                                                    position: "absolute",
                                                    width: "5%",
                                                    height: "60%",
                                                    zIndex: "10",
                                                    cursor: "pointer",
                                                    right: "0",
                                                    top: "calc(100% - 80%)",
                                                }} className='next'>
                                                    <div style={{
                                                        position: "relative",
                                                        height: "100%"
                                                    }}>
                                                        <span style={{
                                                            position: "absolute",
                                                            top: "calc(50% - 2px)",
                                                            border: "solid black",
                                                            borderWidth: "0 4px 4px 0",
                                                            display: "inline-block",
                                                            padding: "6px",
                                                            transform: "rotate(-45deg)",

                                                        }}></span>
                                                    </div>
                                                </div>

                                            </Swiper>

                                        </div>
                                    </div>
                                </div>
                                <div className="col-4 " >
                                    <ul >
                                        {/* ----------------------------------------- */}
                                        <li style={{ marginBottom: "10px" }}>
                                            <Link href={"/"}>
                                                <a style={{ display: "block", width: "100%" }}>
                                                    <Image className={style.border} layout="responsive" width={1.6} height={1} src="/images/mark-zuckerberg-1644293841385-16442938420702071314982-0-191-750-1391-crop-16442943967191483993240.png" />
                                                </a>
                                            </Link>
                                            <Link href={"/"}>
                                                <a className={style.title2} style={{ padding: "0 8px" }}>
                                                    t girl tram anh noi nhu con lao !!hot girl tram anh noi nhu con lao !!
                                                </a>
                                            </Link>
                                            <p style={{ padding: "0 8px" }}>t girl tram anh noi nhu con lao !!hot girl tram anh noi nhu con lao !!t girl tram anh noi nhu con lao !!hot girl tram anh noi nhu con lao !!</p>
                                        </li>
                                        {/* ------------------------------------- */}
                                        <li style={{ marginBottom: "8px" }}>
                                            <Link href={"/"}>
                                                <a style={{ verticalAlign: "top", display: "inline-block", width: "40%", height: "68px" }}>
                                                    <Image className={style.border} layout='responsive' width={1.6} height={1} src="/images/mark-zuckerberg-1644293841385-16442938420702071314982-0-191-750-1391-crop-16442943967191483993240.png" />
                                                </a>
                                            </Link>
                                            <Link href={"/"}>
                                                <a className={style.title4} style={{ display: "inline-block", width: "60%", padding: "0 6px" }}>
                                                    hot girl tram anh noi nhu con lao !!
                                                </a>
                                            </Link>
                                        </li>
                                        <li style={{ marginBottom: "8px" }}>
                                            <Link href={"/"}>
                                                <a style={{ verticalAlign: "top", display: "inline-block", width: "40%", height: "68px" }}>
                                                    <Image className={style.border} layout='responsive' width={1.6} height={1} src="/images/mark-zuckerberg-1644293841385-16442938420702071314982-0-191-750-1391-crop-16442943967191483993240.png" />
                                                </a>
                                            </Link>
                                            <Link href={"/"}>
                                                <a className={style.title4} style={{ display: "inline-block", width: "60%", padding: "0 6px" }}>
                                                    hot girl tram anh noi nhu con lao !!
                                                </a>
                                            </Link>
                                        </li>
                                        <li style={{ marginBottom: "8px" }}>
                                            <Link href={"/"}>
                                                <a style={{ verticalAlign: "top", display: "inline-block", width: "40%", height: "68px" }}>
                                                    <Image className={style.border} layout='responsive' width={1.6} height={1} src="/images/mark-zuckerberg-1644293841385-16442938420702071314982-0-191-750-1391-crop-16442943967191483993240.png" />
                                                </a>
                                            </Link>
                                            <Link href={"/"}>
                                                <a className={style.title4} style={{ display: "inline-block", width: "60%", padding: "0 6px" }}>
                                                    hot girl tram anh noi nhu con lao !!
                                                </a>
                                            </Link>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 start-10 d-lg-none">
                            <AdPanelSideBar />
                        </div>
                    </div>
                    <div>
                        <div style={{ marginBottom: "18px" }} >
                            <h2 style={{ display: "inline" }} className="text_decor title2">Đáng chú ý :</h2>
                        </div>
                        <ul className={"row"} >
                            <li className={"col-3"}>
                                <Link href={"/"}>
                                    <a style={{ display: "inline-block", width: "100%", height: "168px" }}>
                                        <Image className={style.border} layout="responsive" width={1.6} height={1} src="/images/mark-zuckerberg-1644293841385-16442938420702071314982-0-191-750-1391-crop-16442943967191483993240.png" />
                                    </a>
                                </Link>
                                <Link href={"/"}>
                                    <a className={style.title3} style={{ display: "inline-block", width: "100%", padding: "0  0 0 8px" }}>
                                        hot girl tram anh noi nhu con lao !!!hot girl tram anh noi nhu con lao !!hot girl tram anh noi nhu con lao !!
                                    </a>
                                </Link>
                            </li>
                            <li className={"col-3"}>
                                <Link href={"/"}>
                                    <a style={{ display: "inline-block", width: "100%", height: "168px" }}>
                                        <Image className={style.border} layout="responsive" width={1.6} height={1} src="/images/mark-zuckerberg-1644293841385-16442938420702071314982-0-191-750-1391-crop-16442943967191483993240.png" />
                                    </a>
                                </Link>
                                <Link href={"/"}>
                                    <a className={style.title3} style={{ display: "inline-block", width: "100%", padding: "0  0 0 8px" }}>
                                        hot girl tram anh noi nhu con lao !!!hot girl tram anh noi nhu con lao !!hot girl tram anh noi nhu con lao !!
                                    </a>
                                </Link>
                            </li>
                            <li className={"col-3"}>
                                <Link href={"/"}>
                                    <a style={{ display: "inline-block", width: "100%", height: "168px" }}>
                                        <Image className={style.border} layout="responsive" width={1.6} height={1} src="/images/mark-zuckerberg-1644293841385-16442938420702071314982-0-191-750-1391-crop-16442943967191483993240.png" />
                                    </a>
                                </Link>
                                <Link href={"/"}>
                                    <a className={style.title3} style={{ display: "inline-block", width: "100%", padding: "0  0 0 8px" }}>
                                        hot girl tram anh noi nhu con lao !!!hot girl tram anh noi nhu con lao !!hot girl tram anh noi nhu con lao !!
                                    </a>
                                </Link>
                            </li>
                            <li className={"col-3"}>
                                <Link href={"/"}>
                                    <a style={{ display: "inline-block", width: "100%", height: "168px" }}>
                                        <Image className={style.border} layout="responsive" width={1.6} height={1} src="/images/mark-zuckerberg-1644293841385-16442938420702071314982-0-191-750-1391-crop-16442943967191483993240.png" />
                                    </a>
                                </Link>
                                <Link href={"/"}>
                                    <a className={style.title3} style={{ display: "inline-block", width: "100%", padding: "0  0 0 8px" }}>
                                        hot1 girl tram anh noi nhu con lao !!!hot girl tram anh noi nhu con lao !!hot girl tram anh noi nhu con lao !!
                                    </a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </section >
                <section >
                    <div className={"row"} style={{ marginBottom: "40px" }}>
                        <div className={"col-8 "}>
                            <div style={{ marginBottom: "36px" }}>
                                <div style={{ verticalAlign: "top", display: "inline-block", width: "36%" }}>
                                    <Link href={"/"}>
                                        <a style={{ width: "100%", height: "100%" }}>
                                            <Image className={style.border} layout="responsive" width={1.6} height={1} src="/images/mark-zuckerberg-1644293841385-16442938420702071314982-0-191-750-1391-crop-16442943967191483993240.png" />
                                        </a>
                                    </Link>
                                </div>
                                <div style={{ height: "100%", display: "inline-block", width: "64%", padding: "0  0 0 8px" }}>
                                    <Link href={"/"}>
                                        <a style={{ paddingBottom: "10px" }} className={style.title3}>
                                            hot2 girl2 tram anh noi nhu con lao !!!hot girl tram anh noi nhu con lao !!hot girl tram anh noi nhu con lao !!
                                        </a>
                                    </Link>
                                    <p style={{ marginBottom: "5px" }}>
                                        hot girl tr hot girl tram anh noi nhu con lao
                                        !!!hot girl tram a hot girl tram anh noi nhu con la
                                        hot girl traao !!!hot girl tram a hot girl tram anh noi nhu con
                                    </p>
                                    <div style={{ textAlign: "right" }}>
                                        <Link href={"/"}>
                                            <a className={style.title3} >tin ICT</a>
                                        </Link>
                                        <span style={{ marginLeft: "20px" }}>
                                            3 gio truoc
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className='lagre' style={{ marginBottom: "36px" }}>
                                <div style={{ verticalAlign: "top", display: "inline-block", width: "36%" }}>
                                    <Link href={"/"}>
                                        <a style={{ width: "100%", height: "100%" }}>
                                            <Image className={style.border} layout="responsive" width={1} height={1.2} src="/images/mark-zuckerberg-1644293841385-16442938420702071314982-0-191-750-1391-crop-16442943967191483993240.png" />
                                        </a>
                                    </Link>
                                </div>
                                <div style={{ height: "100%", display: "inline-block", width: "64%", padding: "0  0 0 8px" }}>
                                    <Link href={"/"}>
                                        <a className={style.title3} >
                                            hot girl tram anh noi nhu con lao !!!hot girl tram anh noi nhu con lao !!hot girl tram anh noi nhu con lao !!
                                        </a>
                                    </Link>
                                    <p style={{ paddingTop: "10px", marginBottom: "5px" }}>
                                        hot girl tr hot girl tram anh noi nhu con lao
                                        !!!hot girl tram a hot girl tram anh noi nhu con la
                                        hot girl traao !!!hot girl tram a hot girl tram anh noi nhu con
                                    </p>
                                    <div style={{ textAlign: "right" }}>
                                        <Link href={"#"}>
                                            <a className={style.title3} >tin ICT</a>
                                        </Link>
                                        <span style={{ marginLeft: "20px" }}>
                                            3 gio truoc
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="ads" style={{ marginBottom: "40px" }}>
                                <AdPanel728x90 />
                            </div>
                            <div style={{ marginBottom: "36px" }}>
                                <div style={{ verticalAlign: "top", display: "inline-block", width: "36%" }}>
                                    <Link href={"/"}>
                                        <a style={{ width: "100%", height: "100%" }}>
                                            <Image className={style.border} layout="responsive" width={1.6} height={1} src="/images/mark-zuckerberg-1644293841385-16442938420702071314982-0-191-750-1391-crop-16442943967191483993240.png" />
                                        </a>
                                    </Link>
                                </div>
                                <div style={{ height: "100%", display: "inline-block", width: "64%", padding: "0  0 0 8px" }}>
                                    <Link href={"/"}>
                                        <a className={style.title3}>
                                            hot girl tram anh noi nhu con lao !!!hot girl tram anh noi nhu con lao !!hot girl tram anh noi nhu con lao !!
                                        </a>
                                    </Link>
                                    <p style={{ paddingTop: "10px", marginBottom: "5px" }}>
                                        hot girl tr hot girl tram anh noi nhu con lao
                                        !!!hot girl tram a hot girl tram anh noi nhu con la
                                        hot girl traao !!!hot girl tram a hot girl tram anh noi nhu con
                                    </p>
                                    <div style={{ textAlign: "right" }}>
                                        <Link href={"#"}>
                                            <a className={style.title3}>tin ICT</a>
                                        </Link>
                                        <span style={{ marginLeft: "20px" }}>
                                            3 gio truoc
                                        </span>
                                    </div>
                                </div>
                            </div> <div style={{ marginBottom: "36px" }}>
                                <div style={{ verticalAlign: "top", display: "inline-block", width: "36%" }}>
                                    <Link href={"/"}>
                                        <a style={{ width: "100%", height: "100%" }}>
                                            <Image className={style.border} layout="responsive" width={1.6} height={1} src="/images/mark-zuckerberg-1644293841385-16442938420702071314982-0-191-750-1391-crop-16442943967191483993240.png" />
                                        </a>
                                    </Link>
                                </div>
                                <div style={{ height: "100%", display: "inline-block", width: "64%", padding: "0  0 0 8px" }}>
                                    <Link href={"/"}>
                                        <a className={style.title3}>
                                            hot girl tram anh noi nhu con lao !!!hot girl tram anh noi nhu con lao !!hot girl tram anh noi nhu con lao !!
                                        </a>
                                    </Link>
                                    <p style={{ paddingTop: "10px", marginBottom: "5px" }}>
                                        hot girl traao !!!hot girl tram a hot girl tram anh noi nhu con
                                    </p>
                                    <div style={{ textAlign: "right" }}>
                                        <Link href={"#"}>
                                            <a className={style.title3}>tin ICT</a>
                                        </Link>
                                        <span style={{ marginLeft: "20px" }}>
                                            3 gio truoc
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className={"special"} style={{ marginBottom: "36px", padding: "24px" }}>
                                <div style={{ verticalAlign: "top", display: "inline-block", width: "36%" }}>
                                    <Link href={"/"}>
                                        <a style={{ width: "100%", height: "100%" }}>

                                            <Image className={style.border} layout="responsive" width={1.6} height={1} src="/images/mark-zuckerberg-1644293841385-16442938420702071314982-0-191-750-1391-crop-16442943967191483993240.png" />
                                        </a>
                                    </Link>
                                </div>
                                <div style={{ height: "100%", display: "inline-block", width: "64%", padding: "0  0 0 8px" }}>
                                    <Link href={"/"}>
                                        <a className={style.title3}>
                                            hot girl tram anh noi nhu con lao !!!hot girl tram anh noi nhu con lao !!hot girl tram anh noi nhu con lao !!
                                        </a>
                                    </Link>
                                    <p style={{ paddingTop: "10px", marginBottom: "5px" }}>

                                        hot girl traao !!!hot girl tram a hot girl tram anh noi nhu con
                                    </p>
                                    <div style={{ textAlign: "right" }}>
                                        <Link href={"#"}>
                                            <a className={style.title3} >tin ICT</a>
                                        </Link>
                                        <span style={{ marginLeft: "20px" }}>
                                            3 gio truoc
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className='lagre' style={{ marginBottom: "36px" }}>
                                <div style={{ verticalAlign: "top", display: "inline-block", width: "36%" }}>
                                    <Link href={"/"}>
                                        <a style={{ width: "100%", height: "100%" }}>
                                            <Image className={style.border} layout="responsive" width={1} height={1.2} src="/images/mark-zuckerberg-1644293841385-16442938420702071314982-0-191-750-1391-crop-16442943967191483993240.png" />
                                        </a>
                                    </Link>
                                </div>
                                <div style={{ height: "100%", display: "inline-block", width: "64%", padding: "0  0 0 8px" }}>
                                    <Link href={"/"}>
                                        <a className={style.title3}>
                                            hot girl tram anh noi nhu con lao !!!hot girl tram anh noi nhu con lao !!hot girl tram anh noi nhu con lao !!
                                        </a>
                                    </Link>
                                    <p style={{ paddingTop: "10px", marginBottom: "5px" }}>
                                        hot girl tr hot girl tram anh noi nhu con lao
                                        !!!hot girl tram a hot girl tram anh noi nhu con la
                                        hot girl traao !!!hot girl tram a hot girl tram anh noi nhu con
                                    </p>
                                    <div style={{ textAlign: "right" }}>
                                        <Link href={"#"}>
                                            <a className={style.title3}>tin ICT</a>
                                        </Link>
                                        <span style={{ marginLeft: "20px" }}>
                                            3 gio truoc
                                        </span>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className={"col-4 start-9 d-md-none"}>
                            <AdPanelSideBar />
                        </div>
                    </div>
                    <div className={"row"}>
                        <div className={"col-8"}>
                            {/* --/-------------------------- */}
                            <div style={{ marginBottom: "36px" }}>
                                <ul >
                                    <li className={"special"} style={{ padding: "24px" }}>
                                        <Link href={"/"}>
                                            <a style={{ display: "inline-block", width: "36%" }}>
                                                <Image className={style.border} layout='responsive' width={1.6} height={1} src="/images/mark-zuckerberg-1644293841385-16442938420702071314982-0-191-750-1391-crop-16442943967191483993240.png"></Image>
                                            </a>
                                        </Link>
                                        <div style={{ verticalAlign: "top", display: "inline-block", width: "64%", padding: "0  0 0 8px" }}>
                                            <Link href={"/"}>
                                                <a className={style.title3}>
                                                    ashd saddasdkasd addkjh
                                                </a>
                                            </Link>
                                            <div style={{ textAlign: "right" }}>
                                                <span>
                                                    100 views
                                                </span>
                                                <span style={{ marginLeft: "10px" }}>
                                                    3 ngay truoc
                                                </span>
                                            </div>
                                        </div>
                                    </li>
                                    <li className={"special"} style={{ padding: "24px" }}>
                                        <Link href={"/"}>
                                            <a style={{ display: "inline-block", width: "36%" }}>
                                                <Image className={style.border} layout='responsive' width={1.6} height={1} src="/images/mark-zuckerberg-1644293841385-16442938420702071314982-0-191-750-1391-crop-16442943967191483993240.png"></Image>
                                            </a>
                                        </Link>
                                        <div style={{ verticalAlign: "top", display: "inline-block", width: "64%", padding: "0  0 0 8px" }}>
                                            <Link href={"/"}>
                                                <a className={style.title3}>
                                                    ashd saddasdkasd addkjh
                                                </a>
                                            </Link>
                                            <div style={{ textAlign: "right" }}>
                                                <span>
                                                    100 views
                                                </span>
                                                <span style={{ marginLeft: "10px" }}>
                                                    3 ngay truoc
                                                </span>
                                            </div>
                                        </div>
                                    </li>
                                    <li className={"special"} style={{ padding: "24px" }}>
                                        <Link href={"/"}>
                                            <a style={{ display: "inline-block", width: "36%" }}>
                                                <Image className={style.border} layout='responsive' width={1.6} height={1} src="/images/mark-zuckerberg-1644293841385-16442938420702071314982-0-191-750-1391-crop-16442943967191483993240.png"></Image>
                                            </a>
                                        </Link>
                                        <div style={{ verticalAlign: "top", display: "inline-block", width: "64%", padding: "0  0 0 8px" }}>
                                            <Link href={"/"}>
                                                <a className={style.title3}>
                                                    ashd saddasdkasd addkjh
                                                </a>
                                            </Link>
                                            <div style={{ textAlign: "right" }}>
                                                <span>
                                                    100 views
                                                </span>
                                                <span style={{ marginLeft: "10px" }}>
                                                    3 ngay truoc
                                                </span>
                                            </div>
                                        </div>
                                    </li >

                                </ul >
                            </div >
                            <div style={{ marginBottom: "40px" }}>
                                <AdPanel728x90 />
                            </div>
                            <div style={{ marginBottom: "36px" }}>
                                <div style={{ verticalAlign: "top", display: "inline-block", width: "36%" }}>
                                    <Link href={"/"}>
                                        <a style={{ width: "100%", height: "100%" }}>
                                            <Image className={style.border} layout="responsive" width={1.6} height={1} src="/images/mark-zuckerberg-1644293841385-16442938420702071314982-0-191-750-1391-crop-16442943967191483993240.png" />
                                        </a>
                                    </Link>
                                </div>
                                <div style={{ height: "100%", display: "inline-block", width: "64%", padding: "0  0 0 8px" }}>
                                    <Link href={"/"}>
                                        <a className={style.title3} >
                                            hot girl tram anh noi nhu con lao !!!hot girl tram anh noi nhu con lao !!hot girl tram anh noi nhu con lao !!
                                        </a>
                                    </Link>
                                    <p style={{ paddingTop: "10px", marginBottom: "5px" }}>
                                        hot girl tr hot girl tram anh noi nhu con lao
                                        !!!hot girl tram a hot girl tram anh noi nhu con la
                                        hot girl traao !!!hot girl tram a hot girl tram anh noi nhu con
                                    </p>
                                    <div style={{ textAlign: "right" }}>
                                        <Link href={"#"}>
                                            <a className={style.title3} >tin ICT</a>
                                        </Link>
                                        <span style={{ marginLeft: "20px" }}>
                                            3 gio truoc
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div style={{ marginBottom: "36px" }}>
                                <div style={{ verticalAlign: "top", display: "inline-block", width: "36%" }}>
                                    <Link href={"/"}>
                                        <a style={{ width: "100%", height: "100%" }}>
                                            <Image className={style.border} layout="responsive" width={1.6} height={1} src="/images/mark-zuckerberg-1644293841385-16442938420702071314982-0-191-750-1391-crop-16442943967191483993240.png" />
                                        </a>
                                    </Link>
                                </div>
                                <div style={{ height: "100%", display: "inline-block", width: "64%", padding: "0  0 0 8px" }}>
                                    <Link href={"/"}>
                                        <a className={style.title3} >
                                            hot girl tram anh noi nhu con lao !!!hot girl tram anh noi nhu con lao !!hot girl tram anh noi nhu con lao !!
                                        </a>
                                    </Link>
                                    <p style={{ paddingTop: "10px", marginBottom: "5px" }}>
                                        hot girl tr hot girl tram anh noi nhu con lao
                                        !!!hot girl tram a hot girl tram anh noi nhu con la
                                        hot girl traao !!!hot girl tram a hot girl tram anh noi nhu con
                                    </p>
                                    <div style={{ textAlign: "right" }}>
                                        <Link href={"#"}>
                                            <a className={style.title3} >tin ICT</a>
                                        </Link>
                                        <span style={{ marginLeft: "20px" }}>
                                            3 gio truoc
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div style={{ marginBottom: "36px" }}>
                                <div style={{ verticalAlign: "top", display: "inline-block", width: "36%" }}>
                                    <Link href={"/"}>
                                        <a style={{ width: "100%", height: "100%" }}>
                                            <Image className={style.border} layout="responsive" width={1.6} height={1} src="/images/mark-zuckerberg-1644293841385-16442938420702071314982-0-191-750-1391-crop-16442943967191483993240.png" />
                                        </a>
                                    </Link>
                                </div>
                                <div style={{ height: "100%", display: "inline-block", width: "64%", padding: "0  0 0 8px" }}>
                                    <Link href={"/"}>
                                        <a className={style.title3} >
                                            hot girl tram anh noi nhu con lao !!!hot girl tram anh noi nhu con lao !!hot girl tram anh noi nhu con lao !!
                                        </a>
                                    </Link>
                                    <p style={{ paddingTop: "10px", marginBottom: "5px" }}>
                                        hot girl tr hot girl tram anh noi nhu con lao
                                        !!!hot girl tram a hot girl tram anh noi nhu con la
                                        hot girl traao !!!hot girl tram a hot girl tram anh noi nhu con
                                    </p>
                                    <div style={{ textAlign: "right" }}>
                                        <Link href={"#"}>
                                            <a className={style.title3} >tin ICT</a>
                                        </Link>
                                        <span style={{ marginLeft: "20px" }}>
                                            3 gio truoc
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div style={{ marginBottom: "8px" }}>
                                    <h2 className=
                                        "text_decor" style={{ display: " inline" }}>
                                        Đề xuất
                                    </h2>
                                </div>
                                <div className='row' style={{ marginBottom: "36px" }}>
                                    <div className='col-8' >
                                        <Link href={"/"}>
                                            <a style={{ width: "100%", height: "100%" }}>
                                                <Image className={style.border} layout="responsive" width={1.6} height={1} src="/images/mark-zuckerberg-1644293841385-16442938420702071314982-0-191-750-1391-crop-16442943967191483993240.png" />
                                            </a>
                                        </Link>
                                        <div style={{ height: "100%", display: "inline-block", width: "64%", padding: "0  0 0 8px" }}>
                                            <Link href={"/"}>
                                                <a className={style.title3} >
                                                    hot girl tram anh noi nhu con lao !!!hot girl tram anh noi nhu con lao !!hot girl tram anh noi nhu con lao !!
                                                </a>
                                            </Link>
                                            <p style={{ paddingTop: "10px", marginBottom: "5px" }}>
                                                hot girl tr hot girl tram anh noi nhu con lao
                                                !!!hot girl tram a hot girl tram anh noi nhu con la
                                                hot girl traao !!!hot girl tram a hot girl tram anh noi nhu con
                                            </p>
                                            <div style={{ textAlign: "right" }}>
                                                <Link href={"#"}>
                                                    <a className={style.title3} >tin ICT</a>
                                                </Link>
                                                <span style={{ marginLeft: "20px" }}>
                                                    3 gio truoc
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div>
                                            <Link href={"/"}>
                                                <a style={{ display: "inline-block", width: "100%" }}>
                                                    <Image className={style.border} layout="responsive" width={1.6} height={1} src="/images/mark-zuckerberg-1644293841385-16442938420702071314982-0-191-750-1391-crop-16442943967191483993240.png" />
                                                </a>
                                            </Link>
                                            <Link href={"/"}>
                                                <a className={style.title3} style={{ verticalAlign: "top" }}> hfsdks kfhsklhf snaklh afkn nsafj asjfwie fsdknf s,f</a>
                                            </Link>
                                        </div>
                                        <div>
                                            <Link href={"/"}>
                                                <a style={{ display: "inline-block", width: "100%" }}>
                                                    <Image className={style.border} layout="responsive" width={1.6} height={1} src="/images/mark-zuckerberg-1644293841385-16442938420702071314982-0-191-750-1391-crop-16442943967191483993240.png" />
                                                </a>
                                            </Link>
                                            <Link href={"/"}>
                                                <a className={style.title3} style={{ verticalAlign: "top" }}> hfsdks kfhsklhf snaklh afkn nsafj asjfwie fsdknf s,f</a>
                                            </Link>
                                        </div>
                                    </div >
                                </div >
                            </div >
                            <div className={"row"}>
                                <div className="col-6">
                                    <h2>
                                        <Link href={"/"}>
                                            <a className='title2'>BDS</a>
                                        </Link>
                                    </h2>
                                    <div>
                                        <Link href={"/"}>
                                            <a style={{ display: "inline-block", width: "100%" }}>
                                                <Image className={style.border} layout="responsive" width={1.6} height={1} src="/images/mark-zuckerberg-1644293841385-16442938420702071314982-0-191-750-1391-crop-16442943967191483993240.png" />
                                            </a>
                                        </Link>
                                        <Link href={'/'}>
                                            <a className={style.title3} style={{ verticalAlign: "top" }}> hfsdks kfhsklhf snaklh afkn nsafj asjfwie fsdknf s,f</a>
                                        </Link>
                                    </div>
                                    <Link href={"/"}>
                                        <a className={style.title4} style={{ display: "block" }} href={"/"}> adajk  sldk daaldj</a>
                                    </Link>

                                    <Link href={"/"}>
                                        <a className={style.title4} style={{ display: "block" }} href={"/"}> ad aajka aaasdaldkaa ldj!!</a>
                                    </Link >
                                </div >
                                <div className="col-6">
                                    <h2>
                                        <Link href={"/"}>
                                            <a className={style.title2}  >BDS</a>
                                        </Link>
                                    </h2>
                                    <div>
                                        <Link href={"/"}>
                                            <a style={{ display: "inline-block", width: "100%" }}>
                                                <Image className={style.border} layout="responsive" width={1.6} height={1} src="/images/mark-zuckerberg-1644293841385-16442938420702071314982-0-191-750-1391-crop-16442943967191483993240.png" />
                                            </a>
                                        </Link>
                                        <Link href={"/"}>
                                            <a className={style.title3} style={{ verticalAlign: "top" }}> hfsdks kfhsklhf snaklh afkn nsafj asjfwie fsdknf s,f</a>
                                        </Link>
                                    </div>
                                    <Link href={"/"}>
                                        <a className={style.title4} style={{ display: "block" }} href={"/"}> adajkldkaldj</a>
                                    </Link >

                                    <Link href={"/"}>
                                        <a className={style.title4} style={{ display: " block" }} href={"/"}> adajkldkaldj</a>
                                    </Link >
                                </div >
                            </div >
                            <div className={"row"}>
                                <div className="col-6">
                                    <h2>
                                        <Link href={"/"}>
                                            <a className={style.title2}  >BDS</a>
                                        </Link>
                                    </h2>
                                    <div>
                                        <Link href={"/"}>
                                            <a style={{ display: "inline-block", width: "100%" }}>
                                                <Image className={style.border} layout="responsive" width={1} height={1.25} src="/images/mark-zuckerberg-1644293841385-16442938420702071314982-0-191-750-1391-crop-16442943967191483993240.png" />
                                            </a>
                                        </Link>
                                        <Link href={"/"}>
                                            <a className={style.title3} style={{ verticalAlign: "top" }}> hfsdks kfhsklhf snaklh afkn nsafj asjfwie fsdknf s,f</a>
                                        </Link>
                                    </div>
                                    <Link href={"/"}>
                                        <a className={style.title4} style={{ display: "block" }} href={"/"}> adajkldkaldj</a>
                                    </Link>

                                    <Link href={"/"}>
                                        <a className={style.title4} style={{ display: "block" }} href={"/"}> adajkldkaldj</a>
                                    </Link >
                                </div >
                                <div className="col-6">
                                    <h2>
                                        <Link href={"/"}>
                                            <a className={style.title2}  >BDS</a>
                                        </Link>
                                    </h2>
                                    <div>
                                        <Link href={"/"}>
                                            <a style={{ display: "inline-block", width: "100%" }}>
                                                <Image className={style.border} layout="responsive" width={1} height={1.25} src="/images/mark-zuckerberg-1644293841385-16442938420702071314982-0-191-750-1391-crop-16442943967191483993240.png" />
                                            </a>
                                        </Link>
                                        <Link href={"/"}>
                                            <a className={style.title3} style={{ verticalAlign: "top" }}> hfsdks kfhsklhf snaklh afkn nsafj asjfwie fsdknf s,f</a>
                                        </Link>
                                    </div>
                                    <Link href={"/"}>
                                        <a className={style.title4} style={{ display: "block" }} href={"/"}> adajkldkaldj</a>
                                    </Link >

                                    <Link href={"/"}>
                                        <a className={style.title4} style={{ display: " block" }} href={"/"}> adajkldkaldj</a>
                                    </Link >
                                </div >
                            </div >
                            <div className={"row"}>
                                <div className={"special col-6"} >
                                    <h2>
                                        <Link href={"/"}>
                                            <a className={style.title2}  >BDS</a>
                                        </Link>
                                    </h2>
                                    <div>
                                        <Link href={"/"}>
                                            <a style={{ display: "inline-block", width: "100%" }}>
                                                <Image className={style.border} layout="responsive" width={1.6} height={1} src="/images/mark-zuckerberg-1644293841385-16442938420702071314982-0-191-750-1391-crop-16442943967191483993240.png" />
                                            </a>
                                        </Link>
                                        <Link href={"/"}>
                                            <a className={style.title3} style={{ verticalAlign: "top" }}> hfsdks kfhsklhf snaklh afkn nsafj asjfwie fsdknf s,f</a>
                                        </Link>
                                    </div>
                                    <Link href={"/"}>
                                        <a className={style.title4} style={{ display: "block" }} href={"/"}> adajkldkaldj</a>
                                    </Link>

                                    <Link href={"/"}>
                                        <a className={style.title4} style={{ display: "block" }} href={"/"}> adajkldkaldj</a>
                                    </Link >
                                </div >
                                <div className="col-6">
                                    <h2>
                                        <Link href={"/"}>
                                            <a className={style.title2} >BDS</a>
                                        </Link>
                                    </h2>
                                    <div>
                                        <Link href={"/"}>
                                            <a style={{ display: "inline-block", width: "100%" }}>
                                                <Image className={style.border} layout="responsive" width={1.6} height={1} src="/images/mark-zuckerberg-1644293841385-16442938420702071314982-0-191-750-1391-crop-16442943967191483993240.png" />
                                            </a>
                                        </Link>
                                        <Link href={"/"}>
                                            <a className={style.title3} style={{ verticalAlign: "top" }}> hfsdks kfhsklhf snaklh afkn nsafj asjfwie fsdknf s,f</a>
                                        </Link>
                                    </div>
                                    <Link href={"/"}>
                                        <a className={style.title4} style={{ display: "block" }} href={"/"}> adajkldkaldj</a>
                                    </Link >

                                    <Link href={"/"}>
                                        <a className={style.title4} style={{ display: " block" }} href={"/"}> adajkldkaldj</a>
                                    </Link >
                                </div >
                            </div >
                            <div className={"row"} style={{ marginBottom: "36px" }}>
                                <div className={"special col-4"} >
                                    <h2>
                                        <Link href={"/"}>
                                            <a className={style.title2}>BDS</a>
                                        </Link>
                                    </h2>
                                    <div>
                                        <Link href={"/"}>
                                            <a style={{ display: "inline-block", width: "100%" }}>
                                                <Image className={style.border} layout="responsive" width={1.6} height={1} src="/images/mark-zuckerberg-1644293841385-16442938420702071314982-0-191-750-1391-crop-16442943967191483993240.png" />
                                            </a>
                                        </Link>
                                        <Link href={"/"}>
                                            <a className={style.title3} style={{ verticalAlign: "top" }}> hfsdks kfhsklhfwie fsdknf s,f</a>
                                        </Link>
                                        <span style={{ fontSize: "13px", color: "#777" }}>4 gio truoc</span>
                                    </div>
                                    <Link href={"/"}>
                                        <a className={style.title4} style={{ display: "block" }} href={"/"}> adajkldkaldj</a>
                                    </Link>

                                    <Link href={"/"}>
                                        <a className={style.title4} style={{ display: "block" }} href={"/"}> adajkldkaldj</a>
                                    </Link >
                                </div >
                                <div className="col-4">
                                    <h2>
                                        <Link href={"/"}>
                                            <a >BDS</a>
                                        </Link>
                                    </h2>
                                    <div>
                                        <Link href={"/"}>
                                            <a style={{ display: "inline-block", width: "100%" }}>
                                                <Image className={style.border} layout="responsive" width={1.6} height={1} src="/images/mark-zuckerberg-1644293841385-16442938420702071314982-0-191-750-1391-crop-16442943967191483993240.png" />
                                            </a>
                                        </Link>
                                        <Link href={"/"}>
                                            <a className={style.title3} style={{ verticalAlign: "top" }}> hfsdks kfhsklhf snaklh afkn nsafj asjfwie fsdknf s,f</a>
                                        </Link>
                                        <span style={{ fontSize: "13px", color: "#777" }}>4 gio truoc</span>

                                    </div>
                                    <Link href={"/"}>
                                        <a className={style.title4} style={{ display: "block" }} href={"/"}> adajkldkaldj</a>
                                    </Link >

                                    <Link href={"/"}>
                                        <a className={style.title4} style={{ display: " block" }} href={"/"}> adajkldkaldj</a>
                                    </Link >
                                </div >
                                <div className="col-4">
                                    <h2>
                                        <Link href={"/"}>
                                            <a className={style.title2}  >BDS</a>
                                        </Link>
                                    </h2>
                                    <div>
                                        <Link href={"/"}>
                                            <a style={{ display: "inline-block", width: "100%" }}>
                                                <Image className={style.border} layout="responsive" width={1.6} height={1} src="/images/mark-zuckerberg-1644293841385-16442938420702071314982-0-191-750-1391-crop-16442943967191483993240.png" />
                                            </a>
                                        </Link>
                                        <Link href={"/"}>
                                            <a className={style.title3} style={{ verticalAlign: "top" }}> hfsdks kfhsklhf snaklh afkn nsafj asjfwie fsdknf s,f</a>
                                        </Link>
                                        <span style={{ fontSize: "13px", color: "#777" }}>- 4 gio truoc</span>

                                    </div>
                                    <Link href={"/"}>
                                        <a className={style.title4} style={{ display: "block" }} href={"/"}> adajkldkaldj</a>
                                    </Link >

                                    <Link href={"/"}>
                                        <a className={style.title4} style={{ display: " block" }} href={"/"}> adajkldkaldj</a>
                                    </Link >
                                </div >
                            </div >
                        </div >
                        <div className="col-4">
                            <HotTags hotTags={props.hotTags} />
                            <AdPanelSideBar />
                        </div >


                    </div >
                </section >
            </div >
        </>
    )
}
