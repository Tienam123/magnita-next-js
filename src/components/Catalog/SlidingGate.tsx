"use client"

import GalleryFancyBox from "@/src/components/ui/GalleryFancyBox";
import {useTranslations} from "next-intl";
import ShutterMount from "@/src/components/Catalog/ShutterMount";
import {MontageItem} from "@/types";
import {Link} from "@/i18n/routing";
import MapComponent from "@/src/components/MapComponent";

export interface SlidingGateProps {
    locale: string
}

const SlidingGate = ({}: SlidingGateProps) => {
    const montageItems: MontageItem[] = [
        {imgSrc: "/img/categories/sgates/5.jpg", title: "slide_gate_title_4_1"},
        {imgSrc: "/img/categories/sgates/1.jpg", title: "slide_gate_title_4_2"},
        {imgSrc: "/img/categories/sgates/13.jpg", title: "slide_gate_title_4_3"},
        {imgSrc: "/img/categories/sgates/4.jpg", title: "slide_gate_title_4_4"},
    ];
    const t = useTranslations();
    return (
        <>
            <section className="category-content" style={{backgroundImage: "url('/img/bgg2.png')"}}>
                <div className="container">
                    <GalleryFancyBox images={['/img/categories/sgates/9.jpg', '/img/categories/sgates/2.jpg']} dataId={'gallery'} className={'images'} itemClass="img-item"/>
                    <h2 className="h2_title">{t('slide_gate_title_1_0')}</h2>
                    <div>
                        <p className="desc">
                            {t('slide_gate_desc_1_0')}
                        </p>
                    </div>
                    <div className="text-block">
                        <div title={t('slide_gate_page_h1')} className="img" style={{backgroundImage: "url('/img/categories/sgates/12.jpg')"}}></div>
                        <div className="desc-content">
                            <h2 className="h2_title">{t('slide_gate_title_1')}</h2>
                            <ol className="desc" style={{listStyle: ' - '}}>
                                <li><span>{t('slide_gate_desc_1_1')}</span>
                                    {t('slide_gate_desc_1_2')}</li>
                                <li><span> {t('slide_gate_desc_2_1')}</span>
                                    {t('slide_gate_desc_2_2')}</li>
                            </ol>
                        </div>
                    </div>
                    <div className="text-block">
                        <div title={t('slide_gate_page_h1')} className="img" style={{backgroundImage: "url('/img/categories/sgates/3.jpg')"}}></div>
                        <div className="desc-content">
                            <h2 className="h2_title">{t('slide_gate_title_2')}</h2>
                            <ol className="desc" style={{listStyle: ' - '}}>
                                <li><span> {t('slide_gate_desc_3_1')}</span>
                                    {t('slide_gate_desc_3_2')}</li>
                                <li><span>  {t('slide_gate_desc_4_1')}</span>
                                    {t('slide_gate_desc_4_2')}</li>
                            </ol>
                        </div>
                    </div>
                    <div className="text-block">
                        <div title={t('slide_gate_page_h1')} className="img" style={{backgroundImage: "url('/img/categories/sgates/10.jpg')"}}></div>
                        <div className="desc-content">
                            <h2 className="h2_title">{t('slide_gate_title_3')}</h2>
                            <ol className="desc" style={{listStyle: ' - '}}>
                                <li><span>{t('slide_gate_desc_5_1')}</span>
                                    {t('slide_gate_desc_5_2')}
                                </li>
                                <li><span> {t('slide_gate_desc_6_1')} </span>
                                    {t('slide_gate_desc_6_2')}
                                </li>
                            </ol>
                        </div>
                    </div>
                    <div style={{marginTop: "4vw", marginBottom: "4vw"}}>
                        <GalleryFancyBox images={['/img/categories/sgates/6.jpg', '/img/categories/sgates/8.jpg']} dataId={'gallery2'} className="images" itemClass="img-item"/>
                    </div>
                    <div>
                        <p className="desc">
                            {t('slide_gate_desc_7_1')}
                        </p>
                    </div>
                    <div>
                        <p className="desc">
                            {t('slide_gate_desc_7_2')}
                        </p>
                    </div>
                    <div>
                        <p className="desc">
                            {t('slide_gate_desc_7_3')}
                        </p>
                    </div>
                    <div style={{marginTop: "4vw", marginBottom: "4vw"}}>
                        <GalleryFancyBox images={['/img/categories/sgates/7.jpg', '/img/categories/sgates/11.png']} dataId={'gallery3'} className="images" itemClass="img-item"/>
                    </div>
                    <h4 style={{marginBottom: "4vw"}}>{t('slide_gate_title_4')}</h4>

                    <div className="montazh">
                        {montageItems.map((item, index) => (
                            <div key={index} className="item">
                                <img className="img" src={item.imgSrc} title={t(item.title)} alt={t(item.title)}/>
                                <h3 className="text">{t(item.title)}</h3>
                            </div>
                        ))}
                    </div>
                    <div className="text-block wide">
                        <div title={t('slide_gate_title_5')} className="img" style={{backgroundImage: "url('/img/products/23364da3873.png')"}}></div>
                        <div className="desc-content">
                            <h2 className="h2_title">{t('slide_gate_title_5')}</h2>
                            <p className="desc" dangerouslySetInnerHTML={{__html: t.raw('slide_gate_desc_8')}}/>

                        </div>
                    </div>
                    <div className="btns-block">
                        <Link href="/calculator-protective-shutters">
                            {t('individual_order')}
                        </Link>
                        <Link href="/products">
                            {t('catalog')}
                        </Link>
                    </div>
                </div>
                <MapComponent />
            </section>
        </>
    );
};

SlidingGate.propTypes = {};

export default SlidingGate;