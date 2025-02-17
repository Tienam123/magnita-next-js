import Breadcrumps from "@/src/components/ui/Breadcrumps";
import {getLocale, getTranslations} from "next-intl/server";
import ShuttersGatesDesc from "@/src/components/Catalog/ShuttersGatesDesc";

export interface PageProps {

}

const Page = async ({}: PageProps) => {
    const t = await getTranslations();
    const locale = await getLocale();
    return (
        <>
            <section className='breadcrumbs'>
                <Breadcrumps links={[{href: '/', label: 'main', active: true}, {href: '/catalog', label: 'catalog', active: true}, {label: 'roller_gates', href: '#', active: false}]}/>
                <h1 className="h1_title" data-aos="fade-up" data-aos-duration="1500">
                    {t('gates_desc_page_h1')}
                </h1>
            </section>
            <ShuttersGatesDesc locale={locale}/>
        </>
    );
};

export default Page;