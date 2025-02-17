import Breadcrumps from "@/src/components/ui/Breadcrumps";
import {useTranslations} from "next-intl";
import Zhalyuzi from "@/src/components/Catalog/Zhalyuzi";

export interface PageProps {

}

const Page = ({}: PageProps) => {
    const t = useTranslations();
    return (
        <>
            <section className="breadcrumbs">
                <Breadcrumps links={[{href: '/', label: 'main', active: true}, {href: '/catalog', label: 'catalog', active: true}, {label: 'category_8', href: '#', active: false}]}/>
                <h1 className="h1_title" data-aos="fade-up" data-aos-duration="1500">{t('zhaluz_h1')}</h1>
            </section>
            <Zhalyuzi />
        </>
    );
};


export default Page;