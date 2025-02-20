import {getLocale, getTranslations} from "next-intl/server";
import {Link} from "@/i18n/routing";
import {API_URL} from "@/contants";
import {Metadata} from "next";
import GalleryFancyBox from "@/src/components/ui/GalleryFancyBox";
import Callback from "@/src/components/Callback";
import MapComponent from "@/src/components/MapComponent";

interface Params {
    slug: string
}

export interface PageProps {
    params: Params
}

export async function generateMetadata({params}: PageProps): Promise<Metadata> {
    const locale = await getLocale()
    const {slug} = await params;
    const item = await getPortfolioItem(slug);
    return {
        title: item[`title_${locale}`]
    }
}

async function getPortfolioItem(slug) {
    try {
        const res = await fetch(`${API_URL}api/fetch-portfolio/${slug}`)
        return res.json();
    } catch (e) {
    }
}

async function getPortfolioImgs(slug) {
    try {
        const res = fetch(`${API_URL}api/fetch-portfolio-images/${slug}`);
        return (await res).json();
    } catch (e) {
    }
}

const Page = async ({params}: PageProps) => {
    const t = await getTranslations()
    const locale = await getLocale();
    const {slug} = await params;
    const portfolioItem = await getPortfolioItem(slug);
    const portfolioImages = await getPortfolioImgs(slug);

    return (
        <>
            <section className="breadcrumbs">
                <ul>
                    <li>
                        <Link locale={locale} href={`/`}>{t('main')}</Link>
                    </li>
                    <li>
                        <Link locale={locale} href={`/portfolio`}>{t('portfolio')}</Link>
                    </li>
                    <li>
                        {portfolioItem[`title_${locale}`]}
                    </li>
                </ul>
                <h2 data-aos="fade-up" data-aos-duration="1500">{portfolioItem[`title_${locale}`]}</h2>
            </section>
            <section className="portfolio portfolio-page-item">
                <div className="container">

                            <GalleryFancyBox images={portfolioImages.map(item => `${API_URL}storage/${item.img}`)} dataId={'test2'} className={'portfolio-items'} itemClass={'item'} />
                </div>
            </section>
            <Callback />
            <MapComponent />
        </>
    );
};

Page.propTypes = {};

export default Page;