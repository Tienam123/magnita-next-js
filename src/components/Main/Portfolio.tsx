"use client"
import {useLocale, useTranslations} from "next-intl";
import {Link, Locale} from "@/i18n/routing";
import {PortfolioItemType} from "@/types";
import {API_URL} from "@/contants";

export interface PortfolioProps {
products:PortfolioItemType[]
}

const Portfolio = ({products}: PortfolioProps) => {
    const locale = useLocale() as Locale;
    const t = useTranslations();
    return (

        <section className="portfolio">
            <div className="container">
                <h2 data-aos="fade-up" data-aos-duration="1500">{t('gallery_section_title')}</h2>
                <p className="subtitle">{t('gallery_section_title_2')}</p>
                <div id="animated-thumbnails2" className="portfolio-items">
                    {products.map(product => (
                        <Link
                            key={product.id}
                            href={`/portfolio/${product.slug}`}
                            className="item"
                            locale={locale}
                        >
                            <img loading="lazy" className="img" src={`${API_URL}/storage/${product.img}`}/>
                            <p>{product[`title_${locale}`]}</p>
                        </Link>
                    ))}
                </div>
                <div className="portfolio-btn" data-aos="fade-up" data-aos-duration="1500">
                    <a href="/portfolio" className="btn-o">
                        <span className="btn-blick"></span>
                        <img width="15" height="15" loading="lazy" src="/img/adv1.png" alt=""/>
                        {t('gallery_section_title_btn')}
                    </a>
                </div>
            </div>
        </section>

    );
};


export default Portfolio;