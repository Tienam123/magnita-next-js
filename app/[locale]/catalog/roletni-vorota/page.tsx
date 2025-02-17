import {getLocale, getTranslations} from "next-intl/server";
import Breadcrumps from "@/src/components/ui/Breadcrumps";
import GalleryFancyBox from "@/src/components/ui/GalleryFancyBox";
import {Link} from "@/i18n/routing";
import Questions from "@/src/components/Main/Questions";
import {getSubTowns} from "@/lib/api";
import RoletniVorota from "@/src/components/Catalog/RoletniVorota";
import Callback from "@/src/components/Callback";
import MapComponent from "@/src/components/MapComponent";

export interface PageProps {

}

const Page = async ({}: PageProps) => {
    const locale = await getLocale();
    const towns = await getSubTowns();
    const t = await getTranslations();
    return (
        <>
            <section className="breadcrumbs">
                <Breadcrumps links={[{href: '/', label: 'main', active: true}, {href: '/catalog', label: 'catalog', active: true}, {label: 'rol-vorota', href: '#', active: false}]}/>
                <h1 className="h1_title" data-aos="fade-up" data-aos-duration="1500">
                    {t('rol-vorota_h1')}
                </h1>
            </section>
            <RoletniVorota towns={towns} locale={locale} />
            <MapComponent />
        </>
    );
};

Page.propTypes = {};

export default Page;