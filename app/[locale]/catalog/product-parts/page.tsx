import Breadcrumps from "@/src/components/ui/Breadcrumps";
import {getTranslations} from "next-intl/server";
import Parts from "@/src/components/Catalog/Parts";

export interface PageProps {

}

const Page = async ({}: PageProps) => {
    const t = await getTranslations();
    return (
        <>
            <section className='breadcrumbs'>
                <Breadcrumps links={[{href: '/', label: 'main', active: true}, {href: '/catalog', label: 'catalog', active: true}, {label: 'category_10',href:'#',active:false}]}/>
                <h1 className="h1_title" data-aos="fade-up" data-aos-duration="1500">{t('parts_h1')}</h1>
            </section>
            <Parts />
        </>
    );
};


export default Page;