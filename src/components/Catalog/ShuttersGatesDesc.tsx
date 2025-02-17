"use client"
import GalleryFancyBox from "@/src/components/ui/GalleryFancyBox";
import {useTranslations} from "next-intl";
import ShutterMount from "@/src/components/Catalog/ShutterMount";
import {ControlItem, MontageItem} from "@/types";
import RollerControl from "@/src/components/Catalog/RollerControl";
import {Link} from "@/i18n/routing";
import DeliveryTowns from "@/src/components/Catalog/DeliveryTowns";

export interface ShuttersGatesDescProps {
    locale: string
}

const ShuttersGatesDesc = ({locale}: ShuttersGatesDescProps) => {
    const montageItems: MontageItem[] = [
        {imgSrc: "/img/products/4f2.jpg", title: "montage_1"},
        {imgSrc: "/img/products/41f.jpg", title: "montage_2"},
        {imgSrc: "/img/products/42f.jpg", title: "montage_3"},
        {imgSrc: "/img/products/43f2.jpg", title: "montage_4"},
    ];
    const controlItems: ControlItem[] = [
        {imgSrc: "/img/products/53.jpg", title: "control_type_5"},
        {
            imgSrc: ["/img/products/54.jpg", "/img/products/control_1.png"],
            title: "control_type_6",
            wide: true,
        },
    ];
    const t = useTranslations();
    return (
        <>
            <section className="category-content" style={{backgroundImage: "url('/img/bgg2.png')"}}>
                <div className="container">
                    <GalleryFancyBox images={['/img/products/gates2.jpg', '/img/products/gates.webp']} dataId={"gallery"} className={'images'}/>
                    <h2 className="h2_title">{t('gates_desc_page_title_0')}</h2>
                    <div>
                        <h3 className="desc" dangerouslySetInnerHTML={{__html: `${t.raw('gates_desc_page_desc_1')}`}}/>
                    </div>
                    <h2 className="h2_title">{t('gates_desc_page_title_0_0')}</h2>
                    <div>
                        <h3 className="desc" dangerouslySetInnerHTML={{__html: t.raw('gates_desc_page_desc_1_0')}}/>
                    </div>
                    <div className="text-block">
                        <div className="img" style={{backgroundImage: "url('/img/1-2-2.png')"}}></div>
                        <div className="desc-content">
                            <h3>{t('gates_desc_page_title_1')}</h3>
                            <p className="desc" dangerouslySetInnerHTML={{__html: t.raw('gates_desc_page_desc_2')}}/>
                        </div>
                    </div>
                    <div className="text-block">
                        <div className="desc-content">
                            <h2 className="h2_title">{t('gates_desc_page_title_2')}</h2>
                            <h3 className="desc" dangerouslySetInnerHTML={{__html: t.raw('gates_desc_page_desc_3')}}/>
                        </div>
                        <div className="img" style={{backgroundImage: "url('/img/1-2-3.png')"}}></div>
                    </div>
                    <h2 className="h2_title">{t('gates_desc_page_title_5')}</h2>
                    <h3 className="desc" dangerouslySetInnerHTML={{__html: t.raw('gates_desc_page_desc_5')}}/>
                    <div className="text-block wide">
                        <div className="img" style={{backgroundImage: "url('/img/products/23364da3873.png')"}}></div>
                        <div className="desc-content">
                            <h2 className="h2_title">{t('gates_desc_page_title_3')}</h2>
                            <h3 className="desc" dangerouslySetInnerHTML={{__html: t.raw('gates_desc_page_desc_4')}}/>
                        </div>

                    </div>
                    <ShutterMount items={montageItems}/>
                    <RollerControl controlItems={controlItems} title={'control_title'} description={'control_desc'}/>
                    <div className="btns-block">
                        <Link href="/price-calculator-protective-shutters" locale={locale}>
                            {t('individual_order')}
                        </Link>
                        <Link href="/products" locale={locale}>
                            {t('catalog')}
                        </Link>
                    </div>
                    <DeliveryTowns towns={towns} locale={locale} />
                </div>
            </section>
        </>
    );
};

export default ShuttersGatesDesc;