import Breadcrumps from "@/src/components/ui/Breadcrumps";
import {getTranslations} from "next-intl/server";
import GalleryFancyBox from "@/src/components/ui/GalleryFancyBox";
import ShuttersCombi from "@/src/components/Catalog/ShuttersCombi";

export interface PageProps {

}

const Page = async ({}: PageProps) => {
    const t = await getTranslations();
    return (
        <>
            <section className='breadcrumbs'>
                <Breadcrumps links={[{href: '/', label: 'main', active: true}, {href: '/catalog', label: 'catalog', active: true}, {label: 'category_13', href: '#', active: false}]}/>
                <h1 className="h1_title" data-aos="fade-up" data-aos-duration="1500">
                    {t('category_13')}
                </h1>
            </section>
            <ShuttersCombi />
        </>
    );
};


export default Page;