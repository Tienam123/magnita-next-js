"use client"
import {useTranslations} from 'next-intl';
import React, {useEffect, useState} from "react";
import {useMediaQuery} from "react-responsive";
import {Link, usePathname} from "@/i18n/routing";
import {useLocale} from 'next-intl';
import ServiceList from "@/src/components/ServiceList";
import {API_URL} from "@/contants";

export type Locale = 'ua' | 'en' | 'ru';

export interface Service {
    id: number
    title_ru?: string
    title_ua?: string
    title_en?: string
    slug: string
    img: string
    content_ru: string
    content_ua: string
    content_en: string
    order?: number
    status: string
    created_at?: string
    updated_at: string
}

const Header = ({}) => {
    const locale: string = useLocale();
    const pathname = usePathname();
    const isTablet = useMediaQuery({maxWidth: 800})
    const t = useTranslations();
    const [isRivne, setIsRivne] = useState(false)
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch(`${API_URL}api/fetch-all-services`).then(res => res.json()).then(res => {
            setServices(res);
        })
    }, []);

    return (
        <header className="bg-black">
            <div className='top-header'>
                <div className="logo-block">
                    <Link href={'/'} locale={locale}
                    >
                        <img height="30" src="/img/logo_en_new.png" alt=""/>
                        <span dangerouslySetInnerHTML={{__html: t.raw('top_header_logo_desc')}}/>
                    </Link>
                    <p>
                        <span dangerouslySetInnerHTML={{__html: t.raw('top_header_activity_1')}}/>
                        <span dangerouslySetInnerHTML={{__html: t.raw('top_header_activity_2')}}/>
                    </p>
                </div>
                <div className="factory">
                    <img src="/img/122283.png" alt=""/>
                    <div className="desc">
                        <p className="title">{t('top_header_own_manufacturing')}</p>
                        <p className="second">
                            <span dangerouslySetInnerHTML={{__html: t.raw('top_header_own_manufacturing_desc')}}/>
                        </p>
                    </div>
                </div>
                <div className="calculator">
                    <a href="/price-calculator-protective-shutters" className="btn-o">
                        <span className="btn-blick"></span>
                        <img width="15" height="15" src="/img/calculator.png" alt=""/>
                        <span>
                        {t('calculator_worth')}
                    </span>
                    </a>
                </div>
                <div className="messengers">
                    <p className="title">{t('ask_a_question')}</p>
                    <div className="items">
                        <a href="viber://chat?number=%2B380676313823" className="item va" target="_blank">
                            <svg
                                className="va" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                                x="0px" y="0px" viewBox="0 0 226.978 226.978"
                            >

                                <g>

                                    <path
                                        d="M199.569,25.393C181.627,7.803,152.62-0.72,113.339,0.048C73.731,0.827,47.255,7.779,30.018,21.927

        											C13.352,35.605,5.59,55.62,5.59,84.915v29.898c0,34.584,18.532,72.605,53.951,78.358c4.089,0.669,7.941-2.111,8.605-6.201

        											c0.664-4.088-2.112-7.941-6.201-8.605c-26.861-4.363-41.355-36-41.355-63.552V84.915c0-42.006,15.565-68.347,93.043-69.871

        											c35.125-0.696,60.477,6.395,75.433,21.059c11.655,11.429,17.321,27.395,17.321,48.812v29.898c0,45.274-20.321,65.243-72.441,71.123

        											H96.988c-1.989,0-3.897,0.79-5.303,2.197l-26.041,26.041c-2.929,2.929-2.929,7.678,0,10.607c1.464,1.464,3.384,2.197,5.303,2.197

        											c1.919,0,3.839-0.732,5.303-2.197l23.845-23.845h34.27c0.276,0,0.553-0.015,0.828-0.046c29.828-3.313,50.254-11.076,64.279-24.432

        											c14.747-14.044,21.916-34.208,21.916-61.646V84.915C221.388,59.616,214.047,39.59,199.569,25.393z"
                                    ></path>

                                    <path
                                        d="M118.17,48.988c0.001,0,0.001,0,0.003,0c12.085,0,23.447,4.707,31.993,13.253c8.547,8.547,13.254,19.911,13.253,31.998

        											c0,4.142,3.357,7.5,7.499,7.5c0.001,0,0.001,0,0.001,0c4.142,0,7.5-3.357,7.5-7.499c0.001-16.094-6.266-31.225-17.646-42.605

        											c-11.379-11.38-26.507-17.646-42.6-17.646c-0.001,0-0.004,0-0.005,0c-4.142,0-7.499,3.358-7.499,7.5

        											C110.67,45.63,114.028,48.988,118.17,48.988z"
                                    ></path>

                                    <path
                                        d="M118.168,75.362c10.408,0.002,18.877,8.47,18.878,18.877c0.001,4.142,3.358,7.5,7.501,7.499c4.143,0,7.5-3.359,7.499-7.501

        											c-0.003-18.676-15.199-33.872-33.876-33.875h-0.001c-4.142,0-7.499,3.357-7.5,7.499C110.669,72.003,114.026,75.362,118.168,75.362z

        											"
                                    ></path>

                                    <path
                                        d="M84.538,88.213c-3.419,2.338-4.296,7.005-1.959,10.424c2.337,3.419,7.005,4.295,10.424,1.958

        											c2.689-1.838,8.987-6.144,8.545-14.752c-0.28-5.152-4.927-12.508-8.776-17.772C87.142,60.369,82.29,55.73,78.381,54.292

        											c-3.65-1.359-7.467-1.388-11.353-0.084c-8.049,2.712-13.893,7.613-16.899,14.173c-2.927,6.386-2.862,13.725,0.189,21.228

        											c7.206,17.678,17.294,33.155,30.051,46.067c12.845,12.689,28.321,22.777,46.006,29.987c3.827,1.557,7.613,2.336,11.252,2.336

        											c3.49,0,6.845-0.716,9.971-2.149c6.56-3.007,11.46-8.85,14.175-16.909c1.3-3.877,1.271-7.692-0.077-11.317

        											c-1.448-3.937-6.088-8.788-13.789-14.418c-5.265-3.849-12.621-8.496-17.793-8.777c-8.59-0.432-12.892,5.855-14.73,8.544

        											c-2.338,3.419-1.463,8.086,1.956,10.425c3.42,2.339,8.086,1.463,10.425-1.956c0.816-1.193,1.282-1.735,1.549-1.972

        											c4.21,1.349,16.215,10.169,18.376,13.549c0.053,0.216,0.065,0.545-0.135,1.144c-0.946,2.809-2.791,6.486-6.206,8.052

        											c-3.199,1.464-6.834,0.566-9.316-0.443c-15.847-6.461-29.682-15.466-41.058-26.703c-11.301-11.439-20.306-25.274-26.763-41.115

        											c-1.012-2.488-1.911-6.125-0.446-9.321c1.565-3.415,5.243-5.261,8.043-6.205c0.598-0.2,0.927-0.189,1.155-0.134

        											c3.381,2.165,12.196,14.163,13.546,18.374C86.272,86.931,85.731,87.398,84.538,88.213z"
                                    ></path>

                                </g>


                            </svg>
                            <span>Viber</span>
                        </a>
                        <a href="https://t.me/pnvp_magnita" className="item tg" target="_blank">
                            <svg
                                className="tg" xmlns="http://www.w3.org/2000/svg"
                                version="1.1"
                                id="Capa_1" x="0px" y="0px" viewBox="0 0 512.004 512.004"
                            >

                                <path
                                    d="M508.194,20.517c-4.43-4.96-11.42-6.29-17.21-3.76l-482,211c-5.34,2.34-8.85,7.57-8.98,13.41  c-0.13,5.83,3.14,11.21,8.38,13.79l115.09,56.6l28.68,172.06c0.93,6.53,6.06,11.78,12.74,12.73c4.8,0.69,9.57-1,12.87-4.4  l90.86-90.86l129.66,92.62c4.16,2.96,9.52,3.61,14.24,1.74c4.73-1.87,8.19-6.02,9.19-11.01l90-451  C512.604,28.967,511.454,24.177,508.194,20.517z M135.354,283.967l-84.75-41.68l334.82-146.57L135.354,283.967z M182.294,328.557  l-13.95,69.75l-15.05-90.3l183.97-138.49l-150.88,151.39C184.264,323.027,182.854,325.787,182.294,328.557z M191.424,435.857  l15.74-78.67l36.71,26.22L191.424,435.857z M396.834,455.797l-176.73-126.23l252.47-253.31L396.834,455.797z"
                                ></path>

                            </svg>
                            <span>Telegram</span>
                        </a>
                    </div>
                </div>
                {isRivne ? (
                    <div v-if="locName=='Rivne'" className="phones">

                        <a id="address" href="tel:+380673826086">
                            <img src="/img/ic-kyivstar.svg" alt=""/>
                            +38 (097) 725-62-98
                        </a>
                        <span id="header-callback-btn">{t('call_me')}</span>
                    </div>
                ) : (
                    <div className="phones">
                        <a href="tel:+380955496062">
                            <img src="/img/ic-vodafone.svg" alt=""/>
                            +38 (095) 549-60-62
                        </a>
                        <a href="tel:+380676313823">
                            <img src="/img/ic-kyivstar.svg" alt=""/>
                            +38 (067) 631-38-23
                        </a>
                        <span id="header-callback-btn">{t('call_me')}</span>
                    </div>
                )}
                <div id="mobile-burger" className="burger-btn">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

            </div>
            <div className="nav-block">
                <nav id="main-menu">
                    <ul>
                        <li className="search-field-mobile">
                            <form
                                action="/search"
                            >
                                <input type="text" name="search" placeholder="$t('i_look_for')"/>
                                <button>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 1280.000000 1270.000000"
                                        preserveAspectRatio="xMidYMid meet"
                                    >
                                        <g
                                            transform="translate(0.000000,1270.000000) scale(0.100000,-0.100000)"
                                            fill="#000000" stroke="none"
                                        >
                                            <path
                                                d="M4895 12689 c-1613 -102 -3112 -968 -4012 -2319 -694 -1043 -991
-2273 -847 -3520 185 -1607 1121 -3058 2509 -3887 677 -405 1361 -632 2180
-723 156 -18 716 -24 895 -11 870 67 1729 349 2424 798 l69 45 1516 -1515
c834 -833 1532 -1523 1551 -1534 52 -27 193 -25 285 6 100 33 247 111 336 178
123 93 205 171 493 469 286 294 357 383 431 540 74 155 94 317 51 404 -10 19
-696 714 -1544 1562 -1479 1480 -1526 1529 -1513 1550 262 420 497 991 620
1508 151 636 181 1333 85 1995 -180 1243 -840 2421 -1814 3237 -1041 872
-2355 1303 -3715 1217z m590 -1739 c1099 -82 2065 -645 2673 -1560 310 -466
492 -968 564 -1560 17 -140 17 -602 -1 -745 -72 -597 -264 -1119 -588 -1595
-427 -626 -1048 -1102 -1753 -1342 -369 -125 -670 -178 -1070 -185 -271 -5
-440 7 -672 47 -1565 273 -2755 1574 -2889 3158 -15 179 -6 582 16 742 55 398
155 729 330 1085 183 374 396 670 695 964 706 696 1707 1064 2695 991z"
                                            />
                                        </g>
                                    </svg>
                                </button>
                            </form>
                        </li>
                        <li>
                            <Link href="/" locale={locale}>{t('main')}</Link>
                        </li>
                        <li>
                            <Link href="/catalog">
                                {t('catalog_head')}
                                <svg viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M2.82808 7.00001L7.77808 11.95L6.36408 13.364L7.57376e-05 7.00001L6.36408 0.636013L7.77808 2.05001L2.82808 7.00001Z"
                                        fill="#252C32"
                                    ></path>
                                </svg>
                            </Link>
                            <ul className="icons">
                                <li>
                                    <a href="">
                                        <p className="img"></p>
                                    </a>
                                    <ul className="icons">
                                        <li>
                                            <Link locale={locale} href="/catalog/protective-roller-shutters">
                                                <p
                                                    className="img"
                                                    style={{backgroundImage: 'url(/img/categories/1s.jpg.webp)'}}
                                                ></p>
                                                <span>{t('category_1')}</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link locale={locale} href="/catalog/transparent-shutters">
                                                <p
                                                    className="img"
                                                    style={{backgroundImage: 'url(/img/categories/5c.jpg.webp)'}}
                                                ></p>
                                                <span>{t('transparent_title')}</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link locale={locale} href="/catalog/blinds-desc">
                                                <p
                                                    className="img"
                                                    style={{backgroundImage: 'url(/img/categories/2c.jpg.webp)'}}
                                                ></p>
                                                <span>{t('category_2')}</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link locale={locale} href="/catalog/shrutters-individual">
                                                <p
                                                    className="img"
                                                    style={{backgroundImage: 'url(/img/categories/10c.jpg.webp)'}}
                                                ></p>
                                                <span>{t('category_3')}</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link locale={locale} href="/catalog/shutters-kombi">
                                                <p
                                                    className="img"
                                                    style={{backgroundImage: 'url(/img/categories/13.jpg.webp)'}}
                                                ></p>
                                                <span>{t('category_13')}</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link locale={locale} href="/catalog/shutters-gates-desc">
                                                <p
                                                    className="img"
                                                    style={{backgroundImage: 'url(/img/categories/3c.jpg.webp)'}}
                                                ></p>
                                                <span>{t('category_4')}</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link locale={locale} href="/catalog/roletni-vorota">
                                                <p
                                                    className="img"
                                                    style={{backgroundImage: 'url(/img/categories/4c.jpg.webp)'}}
                                                >

                                                </p>
                                                <span>{t('rol-vorota')}</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link locale={locale} href="/catalog/sliding-gate">
                                                <p
                                                    className="img"
                                                    style={{backgroundImage: 'url(/img/categories/5s.jpg.webp)'}}
                                                ></p>
                                                <span>{t('category_6')}</span>
                                            </Link>
                                        </li>

                                        <li className="disabled">
                                            <Link href="#">
                                                <p
                                                    className="img"
                                                    style={{backgroundImage: 'url(/img/categories/6.jpg.webp)'}}
                                                >
                                                    <span>{t('section_under_construction')}</span>
                                                </p>
                                                <span>{t('category_7')}</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link locale={locale} href="/catalog/zhalyuzi">
                                                <p
                                                    className="img"
                                                    style={{backgroundImage: 'url(/img/categories/7.webp.webp)'}}
                                                >
                                                </p>
                                                <span>{t('category_8')}</span>
                                            </Link>
                                        </li>
                                        <li className="disabled">
                                            <Link href="#">
                                                <p
                                                    className="img"
                                                    style={{backgroundImage: 'url(/img/categories/8.jpg.webp)'}}
                                                >
                                                    <span>{t('section_under_construction')}</span>
                                                </p>
                                                <span>{t('category_9')}</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/catalog/product-parts">
                                                <p
                                                    className="img"
                                                    style={{backgroundImage: 'url(/img/categories/11.jpg.webp)'}}
                                                ></p>
                                                <span>{t('category_10')}</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/catalog/sop-product">
                                                <p
                                                    className="img"
                                                    style={{backgroundImage: 'url(/img/categories/9.jpg.webp)'}}
                                                >
                                                </p>
                                                <span>{t('category_11')}</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/catalog/avtomatika-desc">
                                                <p
                                                    className="img"
                                                    style={{backgroundImage: 'url(/img/categories/12c.jpg.webp)'}}
                                                >
                                                </p>
                                                <span>{t('category_12')}</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        {isTablet && (
                            <li>
                                <a href="/price-calculator-protective-shutters">
                                    {t('calculator_worth')}
                                </a>
                            </li>
                        )}
                        <li>
                            <a href="/products'">
                                {t('products')}
                                <svg viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M2.82808 7.00001L7.77808 11.95L6.36408 13.364L7.57376e-05 7.00001L6.36408 0.636013L7.77808 2.05001L2.82808 7.00001Z"
                                        fill="#252C32"
                                    ></path>
                                </svg>
                            </a>
                            <ul className="show-mobile">
                                <li>
                                    <a href="/products">{t('protective_shrutters')}</a>
                                </li>
                                <li>
                                    <a href="/protective-blinds">{t('protective_blinds')}</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="/product-parts">
                                {t('parts')}
                            </a>
                        </li>
                        <li>
                            <a href="/services">
                                {t('services')}
                                <svg viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M2.82808 7.00001L7.77808 11.95L6.36408 13.364L7.57376e-05 7.00001L6.36408 0.636013L7.77808 2.05001L2.82808 7.00001Z"
                                        fill="#252C32"
                                    ></path>
                                </svg>
                            </a>
                            <ServiceList services={services} />
                        </li>
                        <li>
                            <a href="/about'">
                                {t('about')}
                                <svg viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M2.82808 7.00001L7.77808 11.95L6.36408 13.364L7.57376e-05 7.00001L6.36408 0.636013L7.77808 2.05001L2.82808 7.00001Z"
                                        fill="#252C32"
                                    ></path>
                                </svg>
                            </a>
                            <ul className="show-mobile">
                                <li>
                                    <a href="/portfolio">{t('portfolio')}</a>
                                </li>
                                <li>
                                    <a href="/news'">{t('news')}</a>
                                </li>
                                <li>
                                    <a href="/reviews'">{t('review')}</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="/articles'">
                                {t('faq')}
                                <svg viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M2.82808 7.00001L7.77808 11.95L6.36408 13.364L7.57376e-05 7.00001L6.36408 0.636013L7.77808 2.05001L2.82808 7.00001Z"
                                        fill="#252C32"
                                    ></path>
                                </svg>
                            </a>
                            <ul className="show-mobile">
                                <li>
                                    <a href="/warranty">{t('warranty')}</a>
                                </li>
                                <li>
                                    <a href="/dostavka-ta-oplata">{t('delivery')}</a>
                                </li>
                                <li>
                                    <a href="/articles">{t('articles')}</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="/dealers">{t('dealers')}</a>
                        </li>
                        <li>
                            <a href="/contacts">{t('contact')}</a>
                        </li>
                    </ul>
                </nav>
                <div className="search-field">
                    <form action="">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 1280.000000 1270.000000"
                            preserveAspectRatio="xMidYMid meet"
                        >
                            <g
                                transform="translate(0.000000,1270.000000) scale(0.100000,-0.100000)"
                                fill="#000000" stroke="none"
                            >
                                <path
                                    d="M4895 12689 c-1613 -102 -3112 -968 -4012 -2319 -694 -1043 -991
-2273 -847 -3520 185 -1607 1121 -3058 2509 -3887 677 -405 1361 -632 2180
-723 156 -18 716 -24 895 -11 870 67 1729 349 2424 798 l69 45 1516 -1515
c834 -833 1532 -1523 1551 -1534 52 -27 193 -25 285 6 100 33 247 111 336 178
123 93 205 171 493 469 286 294 357 383 431 540 74 155 94 317 51 404 -10 19
-696 714 -1544 1562 -1479 1480 -1526 1529 -1513 1550 262 420 497 991 620
1508 151 636 181 1333 85 1995 -180 1243 -840 2421 -1814 3237 -1041 872
-2355 1303 -3715 1217z m590 -1739 c1099 -82 2065 -645 2673 -1560 310 -466
492 -968 564 -1560 17 -140 17 -602 -1 -745 -72 -597 -264 -1119 -588 -1595
-427 -626 -1048 -1102 -1753 -1342 -369 -125 -670 -178 -1070 -185 -271 -5
-440 7 -672 47 -1565 273 -2755 1574 -2889 3158 -15 179 -6 582 16 742 55 398
155 729 330 1085 183 374 396 670 695 964 706 696 1707 1064 2695 991z"
                                />
                            </g>
                        </svg>
                    </form>
                    <div className="lang-block">
                        <span>{locale.toUpperCase()}</span>
                        <ul>
                            <li>
                                <Link
                                    style={locale === 'ua' ? {color: '#fac853'} : {}} href={pathname} locale='ua'
                                >UA</Link>
                            </li>
                            <li>
                                <Link
                                    style={locale === 'ru' ? {color: '#fac853'} : {}} href={pathname} locale='ru'
                                >RU</Link>
                            </li>
                            <li>
                                <Link
                                    style={locale === 'en' ? {color: '#fac853'} : {}} href={pathname} locale="en"
                                >EN</Link>
                            </li>
                        </ul>
                    </div>
                    <a
                        href="javascript:void(0)" id="header-basket-btn-icon" className="header-basket-btn"
                        rel="nofollow"
                    >
                        <svg viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                data-v-1f42fb90=""
                                d="M4.00008 5.41396L0.75708 2.17196L2.17208 0.756958L5.41408 3.99996H20.6561C20.8119 3.99995 20.9657 4.03637 21.1049 4.10633C21.2442 4.17628 21.3652 4.27782 21.4583 4.40285C21.5514 4.52789 21.6139 4.67294 21.641 4.82644C21.668 4.97995 21.6588 5.13765 21.6141 5.28696L19.2141 13.287C19.1523 13.493 19.0258 13.6737 18.8532 13.8022C18.6806 13.9306 18.4712 14 18.2561 14H6.00008V16H17.0001V18H5.00008C4.73486 18 4.48051 17.8946 4.29297 17.7071C4.10544 17.5195 4.00008 17.2652 4.00008 17V5.41396ZM5.50008 22C5.10226 22 4.72072 21.8419 4.43942 21.5606C4.15812 21.2793 4.00008 20.8978 4.00008 20.5C4.00008 20.1021 4.15812 19.7206 4.43942 19.4393C4.72072 19.158 5.10226 19 5.50008 19C5.8979 19 6.27944 19.158 6.56074 19.4393C6.84204 19.7206 7.00008 20.1021 7.00008 20.5C7.00008 20.8978 6.84204 21.2793 6.56074 21.5606C6.27944 21.8419 5.8979 22 5.50008 22ZM17.5001 22C17.1023 22 16.7207 21.8419 16.4394 21.5606C16.1581 21.2793 16.0001 20.8978 16.0001 20.5C16.0001 20.1021 16.1581 19.7206 16.4394 19.4393C16.7207 19.158 17.1023 19 17.5001 19C17.8979 19 18.2794 19.158 18.5607 19.4393C18.842 19.7206 19.0001 20.1021 19.0001 20.5C19.0001 20.8978 18.842 21.2793 18.5607 21.5606C18.2794 21.8419 17.8979 22 17.5001 22Z"
                                fill="#B0BABF"
                            ></path>
                        </svg>
                        <span>0</span>
                    </a>
                </div>
            </div>
        </header>
    )
};

export default Header;