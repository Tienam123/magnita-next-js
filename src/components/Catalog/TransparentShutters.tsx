"use client"
import GalleryFancyBox from "@/src/components/ui/GalleryFancyBox";
import {useEffect} from "react";
import {Fancybox} from "@fancyapps/ui";
import {useTranslations} from "next-intl";
import {ControlItem} from "@/types";
import RollerControl from "@/src/components/Catalog/RollerControl";
import Callback from "@/src/components/Callback";
import MapComponent from "@/src/components/MapComponent";

export interface TransparentShuttersProps {
}

const TransparentShutters = ({}: TransparentShuttersProps) => {
    const t = useTranslations()
    const controlItems:ControlItem[] = [
        { imgSrc: "/img/products/512.jpg", title: "control_type_3" },
        { imgSrc: "/img/products/52.jpg", title: "control_type_4" },
        { imgSrc: "/img/products/53.jpg", title: "control_type_5" },
        {
            imgSrc: ["/img/products/54.jpg", "/img/products/control_1.png"],
            title: "control_type_6",
            wide: true,
        },
    ];
    useEffect(() => {
        Fancybox.bind(`[data-fancybox="test2"]`, {});
    }, []);
    return (
        <>
            <section className="category-content" style={{backgroundImage: "url('/img/bgg2.png')"}}>
                <div className="container">
                    <GalleryFancyBox images={['/img/categories/transparent/3.jpg', '/img/categories/transparent/5.jpg']} dataId={'test2'}/>
                    <h2 className="h2_title">{t('transparent_h2')}</h2>
                    <div>
                        <p className="desc">
                            <span>● {t('transparent_title')} </span> {t('transparent_desc')}</p>
                    </div>

                    <div className="text-block">
                        <div className="img" title={t('transparent_title')} style={{backgroundImage: "url('/img/categories/transparent/2.jpg')"}}></div>
                        <div className="desc-content">
                            <h2 className="h2_title">{t('transparent_title_1')} </h2>
                            <ol className="desc" style={{listStyle: 'disc'}} dangerouslySetInnerHTML={{__html: t.raw('transparent_desc_1')}}/>
                        </div>
                    </div>
                    <div className="text-block">
                        <div
                            title={t('transparent_title')}
                            className="img"
                            style={{backgroundImage: "url('/img/categories/transparent/4.jpg')"}}
                        ></div>
                        <div className="desc-content">
                            <h2 className="h2_title">{t('transparent_title_2')}</h2>
                            <p className="desc">{t('transparent_desc_2')}</p>
                        </div>
                    </div>
                    <div className="text-block">
                        <div
                            title={t('transparent_title')}
                            className="img"
                            style={{backgroundImage: "url('/img/categories/transparent/6.jpg')"}}
                        ></div>
                        <div className="desc-content">
                            <h2 className="h2_title">{t('transparent_title_3')}</h2>
                            <p className="desc">{t('transparent_desc_3')}</p>
                        </div>
                    </div>
                    <p className="desc">{t('transparent_desc_4')}</p>
                    <RollerControl controlItems={controlItems} title="control_title" description="control_desc" />
                    <Callback />
                </div>
                <MapComponent />
            </section>
        </>
    );
};

TransparentShutters.propTypes = {};

export default TransparentShutters;