import Breadcrumps from "@/src/components/ui/Breadcrumps";
import {getLocale, getTranslations} from "next-intl/server";
import Otlivy from "@/src/components/Catalog/Otlivy";

export interface PageProps {

}

const Page = async ({}: PageProps) => {
    const t = await getTranslations();
    const locale = await getLocale();
    return (
        <>
            <section className='breadcrumbs'>
                <Breadcrumps links={[{href: '/', label: 'main', active: true}, {href: '/catalog', label: 'catalog', active: true}, {label: 'category_11', href: '#', active: false}]}/>
                <h1 className="h1_title" data-aos="fade-up" data-aos-duration="1500">
                    {t('category_11')}
                </h1>
            </section>
            <Otlivy locale={locale} />
        </>
    );
};


export default Page;