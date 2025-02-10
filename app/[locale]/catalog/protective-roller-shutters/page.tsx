import MapComponent from "@/src/components/MapComponent";
import Breadcrumps from "@/src/components/ui/Breadcrumps";
import ProtectiveRoller from "@/src/components/Catalog/ProtectiveRoller";
import {useTranslations} from "next-intl";

export interface PageProps {

}

const Page = ({}: PageProps) => {
    const t = useTranslations()
    return (
        <>
            <section className='breadcrumbs'>
                <Breadcrumps links={[{href: '/', label: 'main', active: true}, {href: '/catalog', label: 'catalog', active: true}, {label: 'category_1',href:'#',active:false}]}/>
                <h1 className="h1_title" data-aos="fade-up" data-aos-duration="1500">{t('protective_shrutters_h1')}</h1>
            </section>
            <ProtectiveRoller/>
            <MapComponent/>
        </>
    );
};


export default Page;