import Breadcrumps from "@/src/components/ui/Breadcrumps";
import {getLocale, getTranslations} from "next-intl/server";
import ShuttersIndividual from "@/src/components/Catalog/ShuttersIndividual";

export interface PageProps {

}

const Page =async ({}: PageProps) => {
    const locale = await getLocale();
    const t = await getTranslations();
    return (
        <>
            <section className='breadcrumbs'>
                <Breadcrumps links={[{href: '/', label: 'main', active: true}, {href: '/catalog', label: 'catalog', active: true}, {label: 'individual_desc_page_h1', href: '#', active: false}]}/>
                <h1 className="h1_title" data-aos="fade-up" data-aos-duration="1500">{t('individual_desc_page_h1')}</h1>
            </section>
            <ShuttersIndividual locale={locale} />

                </>
                );
                };


                export default Page;