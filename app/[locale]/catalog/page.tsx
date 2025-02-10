import {Link} from "@/i18n/routing";
import Breadcrumps from "@/src/components/ui/Breadcrumps";
import MapComponent from "@/src/components/MapComponent";
import CatalogList from "@/src/components/Catalog/CatalogList";
import {useTranslations} from "next-intl";


const Page = () => {
    const t = useTranslations()
    return (
        <>
            <section className="breadcrumbs">
                <Breadcrumps links={[{label: 'main', href: '/', active: true}, {label: 'catalog', href: '/catalog', active: true}]}/>
                <h2>{t('catalog') }</h2>
            </section>
            <CatalogList/>
            <MapComponent/>
        </>
    );
};


export default Page;