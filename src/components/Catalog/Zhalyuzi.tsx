import GalleryFancyBox from "@/src/components/ui/GalleryFancyBox";
import {useTranslations} from "next-intl";
import {Link} from "@/i18n/routing";
import MapComponent from "@/src/components/MapComponent";

export interface ZhalyuziProps {

}

const Zhalyuzi = ({}: ZhalyuziProps) => {
    const t = useTranslations();
    return (
        <>
            <section className="category-content" style={{backgroundImage: "url('/img/bgg2.png')"}}>
                <div className="container">
                    <GalleryFancyBox images={['/img/form_slider/4.png', '/img/form_slider/1.jpg']} dataId={"gallery"} className="images"/>
                    <p className="desc">
                        {t('zhaluz_desc_1')}
                    </p>
                    <p className="desc">
                        {t('zhaluz_desc_2')}
                    </p>
                    <p className="desc">
                        {t('zhaluz_desc_3')}
                    </p>
                    <p className="desc">
                        {t('zhaluz_desc_4')}
                    </p>
                    <h4>{t('zhaluz_desc_5')}</h4>
                    <p className="desc">
                        {t('zhaluz_desc_6')}
                    </p>
                    <p className="desc">
                        {t('zhaluz_desc_7')}
                    </p>
                    <p className="desc">
                        {t('zhaluz_desc_8')}
                    </p>
                    <div className="video" style={{margin: "50px 0"}}>
                        <iframe
                            src="//www.youtube.com/embed/MybkAmwSSGc?rel=0&amp;fs=1&amp;wmode=transparent" width="100%"
                            height="600px" frameBorder="0" allowFullScreen=""
                            title="JoomlaWorks AllVideos Player"
                        ></iframe>
                    </div>
                    <p className="desc">
                        {t('zhaluz_desc_9')}
                    </p>
                    <p className="desc">
                        {t('zhaluz_desc_10')}
                    </p>
                    <p className="desc">
                        {t('zhaluz_desc_11')}
                    </p>
                    <p className="desc">
                        {t('zhaluz_desc_12')}
                    </p>
                    <p className="desc">
                        {t('zhaluz_desc_13')}
                    </p>
                    <p className="desc">
                        {t('zhaluz_desc_14')}
                    </p>
                    <GalleryFancyBox images={['/img/form_slider/zal700.jpg', '/img/form_slider/2.jpg']} dataId={'gallery2'} className="images" itemClass="img-item"/>
                    <p className="desc">
                        {t('zhaluz_desc_15')}
                    </p>
                    <div className="btns-block" style={{marginBottom:'0px'}}>
                        <Link href="#" className="get-consult-btn-otlivy">
                            {t('get_consultation')}
                        </Link>
                        <Link href="/storage/06_Прайс_опт_жалюзи_2022_февраль.xls">
                            {t('download_price_list')}
                        </Link>
                    </div>
                </div>
            </section>
            <MapComponent />
        </>
    );
};


export default Zhalyuzi;