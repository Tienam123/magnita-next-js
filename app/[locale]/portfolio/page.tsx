import Breadcrumps from "@/src/components/ui/Breadcrumps";
import {getLocale, getTranslations} from "next-intl/server";
import {API_URL} from "@/contants";
import Callback from "@/src/components/Callback";
import MapComponent from "@/src/components/MapComponent";
import {Link} from "@/i18n/routing";

export interface PortfolioItemType {
    id: number
    title_ru: string
    title_ua: string
    title_en: string
    slug: string
    img: string
    order?: number
    status: string
    created_at: string
    updated_at: string
}
type Locale = 'en' | 'ua' | 'ru';
async function getPortfolio() {
    try {
    const res = await fetch(`${API_URL}api/fetch-all-portfolio`);
    return (await res).json();
    }
    catch (e) {
    }
}
const Page = async ({}) => {
    const portfolio:PortfolioItemType[] = await getPortfolio();

    const locale = await getLocale() as Locale;
    console.log(JSON.stringify(portfolio))
    const t = await getTranslations()
    return (
        <>
            <section className="breadcrumbs">
                <Breadcrumps links={[{href: '/', label: 'main', active: true}, {href: '/catalog', label: 'portfolio', active: false}]}/>
                <h1 className="h1_title" data-aos="fade-up" data-aos-duration="1500">{t('portfolio_h1')}</h1>
            </section>
            <section className="category-content">
                <div className="container">
                    <h2 className="h2_title">
                        {t('portfolio_title_1')}
                    </h2>
                    <p className="desc">
                        {t('portfolio_desc_1')}
                    </p>
                    <ol style={{listStyle: 'disc'}} dangerouslySetInnerHTML={{__html: t.raw('portfolio_desc_2')}}/>
                </div>
            </section>
            <section className="portfolio-page-items">
                <div className="container">
                    {portfolio.map((item:PortfolioItemType) => (
                        <Link key={item.id}
                              locale={locale}
                           className="item"
                              href={`/${locale}/portfolio/${item.slug}`}
                        style={{backgroundImage:`url(${API_URL}/storage/${item.img})`}}
                        >
                            <p>{item[`title_${locale}`]}</p>
                        </Link>
                    ))}
                </div>
            </section>
            <Callback />
            <MapComponent />
                </>
                );
                };

                export default Page;