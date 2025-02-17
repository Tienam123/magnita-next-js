import Breadcrumps from "@/src/components/ui/Breadcrumps";
import {getTranslations} from "next-intl/server";
import BlindsDesc from "@/src/components/Catalog/BlindsDesc";
import MapComponent from "@/src/components/MapComponent";

const Page = async ({}) => {
    const t =await getTranslations();
    return (
        <>
            <section className='breadcrumbs'>
                <Breadcrumps links={[{href: '/', label: 'main', active: true}, {href: '/catalog', label: 'catalog', active: true}, {label: 'protective_blinds',href:'#',active:false}]}/>
                <h1 className="h1_title" data-aos="fade-up" data-aos-duration="1500">{t('protective_blinds_h1')}</h1>
            </section>
            <BlindsDesc  />
            <MapComponent />
        </>
    );
};


export default Page;