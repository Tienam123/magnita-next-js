import Breadcrumps from "@/src/components/ui/Breadcrumps";
import {useTranslations} from "next-intl";
import {getLocale, getTranslations} from "next-intl/server";
import Avtomatika from "@/src/components/Catalog/Avtomatika";

export interface PageProps {

}

const Page = async ({}: PageProps) => {
    const t = await getTranslations();
    const locale= await getLocale();
    return (
        <>
            <section className='breadcrumbs'>
                <Breadcrumps links={[{href: '/', label: 'main', active: true}, {href: '/catalog', label: 'catalog', active: true}, {label: 'category_12',href:'#',active:false}]}/>
                <h1 className="h1_title" data-aos="fade-up" data-aos-duration="1500">{t('avtomatika_h1')}</h1>
            </section>
            <Avtomatika locale={locale} />
        </>
    );
};


export default Page;