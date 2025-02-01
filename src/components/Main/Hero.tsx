"use client"

import {useTranslations} from "next-intl";
import React from "react";

export interface HeroProps {

}

const Hero = ({}: HeroProps) => {
    const t = useTranslations();
    return (
        <>
            <section className="first-block">
                <div className="container">
                    <div className="content">
                        <h1 data-aos="fade-up" data-aos-duration="1500">
                            <span>{t('hero_title_1')}</span>
                            {t('hero_title_2')}
                        </h1>
                        <p className="sub-title" data-aos="fade-up" data-aos-duration="1500">
                            {t('hero_subtitle_1')} <span>{t('hero_subtitle_2')}</span>
                        </p>
                        <div className="adv-items">
                            <div className="item">
                                <img
                                    src="/img/ribbon.png"
                                    alt=""
                                    className="ribbon"
                                    width={100}
                                    height={25}
                                    loading="lazy"
                                />
                                <img
                                    src="/img/adv1.png"
                                    alt=""
                                    className="adv-img"
                                    width={15}
                                    height={15}
                                    loading="lazy"
                                />
                                <p className="title" dangerouslySetInnerHTML={{__html: t.raw('hero_adv_1')}}/>
                                <p className="subtitle">
                                    {t('hero_adv_desc_1')}
                                </p>
                            </div>
                            <div className="item">
                                <img
                                    src="/img/ribbon.png"
                                    alt=""
                                    className="ribbon"
                                    width={100}
                                    height={25}
                                    loading="lazy"
                                />
                                <img
                                    src="/img/adv2.png"
                                    alt=""
                                    className="adv-img"
                                    width={15}
                                    height={15}
                                    loading="lazy"
                                />
                                <p className="title" dangerouslySetInnerHTML={{__html: t.raw('hero_adv_2')}}/>
                                <p className="subtitle">
                                    {t('hero_adv_desc_2')}
                                </p>
                            </div>
                            <div className="item">
                                <img
                                    src="/img/ribbon.png"
                                    alt=""
                                    className="ribbon"
                                    width={100}
                                    height={25}
                                    loading="lazy"
                                />
                                <img
                                    src="/img/adv3.png"
                                    alt=""
                                    className="adv-img"
                                    loading="lazy"
                                />
                                <p className="title" dangerouslySetInnerHTML={{__html: t.raw('hero_adv_3')}}/>
                                <p className="subtitle" dangerouslySetInnerHTML={{__html: t.raw('hero_adv_desc_3')}}/>
                            </div>
                        </div>
                    </div>

                    <div className="form-block">
                        <div className="inner contact-form">
                            <img
                                src="/img/ribbon.png"
                                alt=""
                                className="ribbon contact-img"
                                width={100}
                                height={25}
                                loading="lazy"
                            />
                            <div className="contact-title">
                                <h3 className="contact-head">
                                    {t('main_contact')}
                                </h3>
                                <img
                                    src="/img/map.png"
                                    alt=""
                                    className="contact-map"
                                    width={100}
                                    height={65}
                                />
                                <span className="btn-blick"></span>
                            </div>
                            <div className="item-block">
                                <div className="item-dek">
                                    <div className="contact-phone">
                                        <p><span className="city">{t('main_contact_dnipro')}:</span></p>
                                        <a style={{color: 'white'}} href="tel:(096) 812-92-56">(096) 812-92-56</a>
                                    </div>
                                    <div className="contact-phone">
                                        <p><span className="city">{t('main_contact_kyiv')}:</span></p>
                                        <a style={{color: 'white'}} href="tel:(097) 159-76-72">(097) 159-76-72</a>
                                    </div>
                                    <div className="contact-phone">
                                        <p><span  className="city">{t('main_contact_odesa')}:</span></p>
                                        <a style={{color: 'white'}} href="tel:(095) 549-60-62">(095) 549-60-62</a>
                                    </div>
                                </div>
                                <div className="item-dek">
                                    <div className="contact-phone" >
                                        <p ><span className="city">{t('main_contact_mykolaiv')}:</span></p>
                                        <a style={{color: 'white'}} href="tel:(067) 631-38-23">(067) 631-38-23</a>
                                    </div>
                                    <div className="contact-phone">
                                        <p><span className="city">{t('main_contact_kharkiv')}:</span></p>
                                        <a style={{color: 'white'}} href="tel:(095) 599-71-40">(095) 599-71-40</a>
                                    </div>
                                    <div className="contact-phone">
                                        <p><span className="city">{t('main_contact_rivne')}:</span></p>
                                        <a style={{color: 'white'}} href="tel:(067) 382-60-86">(067) 382-60-86</a>
                                    </div>
                                    {/* Similar structure for other contact phones */}
                                </div>
                            </div>
                            <p className="call">{t('main_contact_2')}</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};


export default Hero;