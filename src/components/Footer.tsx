"use client"
import {useTranslations} from "next-intl";
import {useEffect, useState} from "react";
import {Service} from "@/src/components/Header";
import ServiceList from "@/src/components/ServiceList";

export interface FooterProps {

}

const Footer = ({}: FooterProps) => {
    const t = useTranslations();
    const [services, setServices] = useState<Service[]>([]);
    const API_URL = process.env.NEXT_PUBLIC_API_URL;
    useEffect(() => {
        fetch(`${API_URL}/fetch-all-services`).then(res => res.json()).then(res => {
            setServices(res);
        })
    }, []);

    return (
        <footer>
            <div className="footer-nav-block">
                <div className="container">
                    <div className="logo-block">
                        <img height="30" src="/img/logo_en_new.png" alt=""/>
                        <p dangerouslySetInnerHTML={{__html: t.raw('footer_activity')}}/>
                    </div>
                    <div className="menu-links">
                        <p className="title">{t('main')}</p>
                        <ul>
                            <li>
                                <a href="/">{t('main')}</a>
                            </li>
                            <li><a href="'/'+$i18n.locale+'/about'">{t('about')}</a></li>
                            <li><a href="'/'+$i18n.locale+'/portfolio'">{t('portfolio')}</a></li>
                            <li><a href="'/'+$i18n.locale+'/news'">{t('news')}</a></li>
                            <li><a href="'/'+$i18n.locale+'/dealers'">{t('dealers')}</a>
                            </li>
                            <li><a href="'/'+$i18n.locale+'/contacts'">{t('contact')}</a>
                            </li>
                        </ul>
                    </div>
                    <div className="menu-links">
                        <p className="title">{t('catalog')}</p>
                        <ul>
                            <li><a
                                href="'/'+$i18n.locale+'/'+links.protective_roller[$i18n.locale]"
                            >{t('protective_shrutters')}</a></li>
                            <li><a
                                href="'/'+$i18n.locale+'/'+links.blinds_desc[$i18n.locale]"
                            >{t('protective_blinds')}</a></li>
                            <li><a
                                href="'/'+$i18n.locale+'/'+links.roletni_vorota[$i18n.locale]"
                            >{t('individual_shrutters')}</a></li>
                            <li><a
                                href="'/'+$i18n.locale+'/'+links.shutters_gates_desc[$i18n.locale]"
                            >{t('roller_gates')}</a>
                            </li>
                        </ul>
                    </div>
                    <div className="menu-links">
                        <p className="title">{t('services')}</p>
                        <ul>
                            <ServiceList services={services} />
                        </ul>
                    </div>
                    <div className="menu-links">
                        <p className="title">{t('footer_clients')}</p>
                        <ul>
                            <li>
                                <a href="'/'+$i18n.locale+'/price-calculator-protective-shutters'">
                                    {t('calculator_worth')}
                                </a>
                            </li>
                            <li>
                                <a href="javascript:void(0)" id="footer-callback">
                                    {t('footer_get_callback')}
                                </a>
                            </li>
                            <li>
                                <a href="'/'+$i18n.locale+'/dostavka-ta-oplata'">
                                    {t('dostavka_i_oplata')}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="footer-rights">
                    <div className="container">
                        <div className="item">
                            <p>{t('footer_company')}</p>
                            <p>{t('footer_rights')}</p>
                        </div>
                        <div className="item">
                            <p>{t('footer_copy')}</p>
                        </div>
                        <div className="item">{t('footer_made')}
                            <br/>
                            <a href="https://bluebook.com.ua/" target="_blank">bluebook</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
};


export default Footer;