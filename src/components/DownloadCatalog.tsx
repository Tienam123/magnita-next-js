"use client"
import {useTranslations} from "next-intl";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import '@/src/styles/DownloadCatalogue.scss'
import {Pagination} from "swiper/modules";

export interface DownloadCatalogProps {

}

const DownloadCatalog = ({}: DownloadCatalogProps) => {
    const t = useTranslations();
    return (
        <section className="download-catalogue">
            <div className="container download-catalogue-section-slider">

                <Swiper
                    pagination={{ clickable: true }}
                modules={[Pagination]}
                >
                    <SwiperSlide
                    >
                        <div className="inner">
                            <div className="content">
                                <h2 data-aos="fade-up" data-aos-duration="1500">
                                    {t('section_download_cat_title')}
                                </h2>
                                <div className="desc">
                                    <p className="exam">
                                        {t('section_download_cat_subtitle')}
                                    </p>
                                    <p className="updated">
                                        <img src="'/img/reload.webp'" alt=""/>
                                        <span>{t('updated')}: <i>2022</i></span>
                                    </p>
                                </div>
                                <div className="form-block">
                                    <p className="title">
                                        <span className="bold">{t('section_download_download_1')}</span>
                                        {t('section_download_download_2')}
                                    </p>
                                    <form className="download-price-form shutters">
                                        <div className="first-row">
                                            <input
                                                type="text" id="download-price-form3-shutters-name" name="name"
                                                placeholder="Ваше ім'я" required
                                            />
                                            <input
                                                type="text" id="download-price-form3-shutters-phone" name="phone"
                                                placeholder="+38 (___) __-__-__" required
                                            />
                                            <input
                                                type="hidden" id="download-price-form3-shutters-type" name="type"
                                                value="shutters"
                                            />
                                            <button className="btn-o">
                                                <span className="btn-blick"></span>
                                                <img height="15" width="15" src="/img/download-exel.png" alt=""/>
                                                {t('download_price_list')}
                                            </button>
                                        </div>
                                        <div className="policy">
                                            <input id="section-callback-agree" type="checkbox" required />
                                            <label htmlFor="section-callback-agree">
                                                {t('section_callback_agree')}
                                                <span>
                                    <a
                                        style={{color: 'blue'}} href="'/'+$i18n.locale+'/policy'"
                                    >  {t('section_callback_agree_2')}</a>
                                </span>
                                            </label>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div
                                className="catalogue-bg"
                                style={{backgroundImage: 'url(/img/form_slider/3.png)'}}
                            >
                            </div>
                            <div
                                className="hexahedron"
                                style={{backgroundImage: 'url(/img/1200848.png)'}}
                            >
                                <img height="15" width="15" src="/img/download-exel.png" alt=""/>
                                <span>5 Mb</span>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="inner">
                            <div className="content">
                                <h2 data-aos="fade-up" data-aos-duration="1500">
                                    {t('section_download_cat_title')}
                                </h2>
                                <div className="desc">
                                    <p className="exam">
                                        {t('section_download_cat_subtitle')}
                                    </p>
                                    <p className="updated">
                                        <img src="'/img/reload.webp'" alt=""/>
                                        <span>{t('updated')}: <i>2022</i></span>
                                    </p>
                                </div>
                                <div className="form-block">
                                    <p className="title">
                                        <span className="bold">{t('section_download_download_1')}</span>
                                        {t('section_download_download_2')}
                                    </p>
                                    <form className="download-price-form shutters">
                                        <div className="first-row">
                                            <input
                                                type="text" id="download-price-form3-shutters-name" name="name"
                                                placeholder="Ваше ім'я" required
                                            />
                                            <input
                                                type="text" id="download-price-form3-shutters-phone" name="phone"
                                                placeholder="+38 (___) __-__-__" required
                                            />
                                            <input
                                                type="hidden" id="download-price-form3-shutters-type" name="type"
                                                value="shutters"
                                            />
                                            <button className="btn-o">
                                                <span className="btn-blick"></span>
                                                <img height="15" width="15" src="/img/download-exel.png" alt=""/>
                                                {t('download_price_list')}
                                            </button>
                                        </div>
                                        <div className="policy">
                                            <input id="section-callback-agree" type="checkbox" required />
                                            <label htmlFor="section-callback-agree">
                                                {t('section_callback_agree')}
                                                <span>
                                    <a
                                        style={{color: 'blue'}} href="'/'+$i18n.locale+'/policy'"
                                    >  {t('section_callback_agree_2')}</a>
                                </span>
                                            </label>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div
                                className="catalogue-bg"
                                style={{backgroundImage: 'url(/img/form_slider/3.png)'}}
                            >
                            </div>
                            <div
                                className="hexahedron"
                                style={{backgroundImage: 'url(/img/1200848.png)'}}
                            >
                                <img height="15" width="15" src="/img/download-exel.png" alt=""/>
                                <span>5 Mb</span>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="inner">
                            <div className="content">
                                <h2 data-aos="fade-up" data-aos-duration="1500">
                                    {t('section_download_cat_title')}
                                </h2>
                                <div className="desc">
                                    <p className="exam">
                                        {t('section_download_cat_subtitle')}
                                    </p>
                                    <p className="updated">
                                        <img src="'/img/reload.webp'" alt=""/>
                                        <span>{t('updated')}: <i>2022</i></span>
                                    </p>
                                </div>
                                <div className="form-block">
                                    <p className="title">
                                        <span className="bold">{t('section_download_download_1')}</span>
                                        {t('section_download_download_2')}
                                    </p>
                                    <form className="download-price-form shutters">
                                        <div className="first-row">
                                            <input
                                                type="text" id="download-price-form3-shutters-name" name="name"
                                                placeholder="Ваше ім'я" required
                                            />
                                            <input
                                                type="text" id="download-price-form3-shutters-phone" name="phone"
                                                placeholder="+38 (___) __-__-__" required
                                            />
                                            <input
                                                type="hidden" id="download-price-form3-shutters-type" name="type"
                                                value="shutters"
                                            />
                                            <button className="btn-o">
                                                <span className="btn-blick"></span>
                                                <img height="15" width="15" src="/img/download-exel.png" alt=""/>
                                                {t('download_price_list')}
                                            </button>
                                        </div>
                                        <div className="policy">
                                            <input id="section-callback-agree" type="checkbox" required />
                                            <label htmlFor="section-callback-agree">
                                                {t('section_callback_agree')}
                                                <span>
                                    <a
                                        style={{color: 'blue'}} href="'/'+$i18n.locale+'/policy'"
                                    >  {t('section_callback_agree_2')}</a>
                                </span>
                                            </label>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div
                                className="catalogue-bg"
                                style={{backgroundImage: 'url(/img/form_slider/3.png)'}}
                            >
                            </div>
                            <div
                                className="hexahedron"
                                style={{backgroundImage: 'url(/img/1200848.png)'}}
                            >
                                <img height="15" width="15" src="/img/download-exel.png" alt=""/>
                                <span>5 Mb</span>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>

    )
};

export default DownloadCatalog;