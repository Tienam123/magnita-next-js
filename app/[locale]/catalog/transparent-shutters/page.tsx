import Breadcrumps from "@/src/components/ui/Breadcrumps";
import {useTranslations} from "next-intl";
import TransparentShutters from "@/src/components/Catalog/TransparentShutters";


const Page = () => {
    const t = useTranslations();
    return (
        <>
            <section className='breadcrumbs'>
                <Breadcrumps links={[{href: '/', label: 'main', active: true}, {href: '/catalog', label: 'catalog', active: true}, {label: 'transparent_title',href:'#',active:false}]}/>
                <h1 className="h1_title" data-aos="fade-up" data-aos-duration="1500">{t('transparent_title')}</h1>

            </section>
            <TransparentShutters />
        </>
    );
};


export default Page;