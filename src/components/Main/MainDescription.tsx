"use client"
import {useTranslations} from "next-intl";

const MainDescription = () => {
    const t = useTranslations()
    return (
        <section className="main-description">
            <div className="container">
                <h2 data-aos="fade-up" data-aos-duration="1500">{t('main_seo_title_1')}</h2>
                <p className="subtitle">{t('main_seo_sub_1')}</p>
                <ol style={{listStyle: 'disc'}} dangerouslySetInnerHTML={{__html: t.raw('main_seo_desc_1')}} />


                <h2 data-aos="fade-up" data-aos-duration="1500">{t('main_seo_title_2')}</h2>
                <p className="subtitle">{t('main_seo_sub_2')}</p>
                <ol style={{listStyle: 'octal'}} dangerouslySetInnerHTML={{__html: t.raw('main_seo_desc_2')}} />

                <h2 data-aos="fade-up" data-aos-duration="1500">{t('main_seo_title_3')}</h2>
                <p className="subtitle">{t('main_seo_sub_3')}</p>

                <h2 data-aos="fade-up" data-aos-duration="1500">{t('main_seo_title_4')}</h2>
                <p className="subtitle">{t('main_seo_sub_4')}</p>
                <ol style={{listStyle: 'octal'}} dangerouslySetInnerHTML={{__html: t.raw('main_seo_desc_4')}}/>

                <h2 data-aos="fade-up" data-aos-duration="1500">{t('main_seo_title_5')}</h2>
                <ol style={{listStyle: 'disc'}} dangerouslySetInnerHTML={{__html: t.raw('main_seo_desc_5')}} />
            </div>
        </section>
    );
};
export default MainDescription