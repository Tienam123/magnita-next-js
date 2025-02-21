import {API_URL} from "@/contants";
import Breadcrumps from "@/src/components/ui/Breadcrumps";
import {getLocale, getTranslations} from "next-intl/server";
import Callback from "@/src/components/Callback";
import MapComponent from "@/src/components/MapComponent";

type Params = Promise<{slug:string}>
async function getService(slug:string) {
    try {
        const res = await fetch(`${API_URL}api/fetch-service-item/${slug}`);
        return await res.json();
    } catch (e) {
    }
}

const Page = async (props:{
    params:Params
}) => {
    const {slug} = await props.params
    const service = await getService(slug);
    const t = await getTranslations();
    const locale = await getLocale();
    return (
        <>
            <section className='breadcrumbs'>
                <ul>
                    <li>
                        <a href="'/'+$i18n.locale">{t('main')}</a>
                    </li>
                    <li>
                        <a href="'/'+$i18n.locale+'/services'">{t('services')}</a>
                    </li>
                    <li>{service[`title_${locale}`]}</li>
                </ul>
                <h1 className="h1_title" data-aos="fade-up" data-aos-duration="1500">{service[`title_${locale}`]}</h1>
            </section>
            <section className="services-page">
                <div className="container">
                    <img src={`${API_URL}storage/${service.img}`} alt=""/>
                    <div className="town__content html-content" dangerouslySetInnerHTML={{__html: service[`content_${locale}`]}}/>
                    <div id="get-consult-btn" className="get-consult">
                        <a href="#" className="btn-o">
                            <span data-v-3171a452="" className="btn-blick"></span>
                            {t('pop_up_consult_title')}
                        </a>
                    </div>
                </div>
            </section>
            <Callback />
            <MapComponent/>
        </>
    )
        ;
};


export default Page;