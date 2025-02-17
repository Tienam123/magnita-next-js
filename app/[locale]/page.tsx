import MapComponent from "@/src/components/MapComponent";
import Hero from "@/src/components/Main/Hero";
import Criteries from "@/src/components/Main/Criteries";
import Products from "@/src/components/Main/Products";
import Questions from "@/src/components/Main/Questions";
import DownloadCatalog from "@/src/components/DownloadCatalog";
import Portfolio from "@/src/components/Main/Portfolio";
import {API_URL} from "@/contants";
import {PortfolioItemType} from "@/types";
import Certificates from "@/src/components/Certificates";
import Callback from "@/src/components/Callback";
import MainDescription from "@/src/components/Main/MainDescription";
import {getTranslations} from "next-intl/server";


async function getProductsPortfolio() {
    try {
        const response = await fetch(`${API_URL}api/fetch-all-portfolio`)
        if (!response.ok) {
            throw new Error('Failed to fetch products')
        }
        const data = await response.json();
        return data as PortfolioItemType[];
    } catch (e) {
        return []
    }
}
export default async function Home() {
    const t = await getTranslations()
    const products = await getProductsPortfolio();
    return (
        <div>
            <Hero />
            <Criteries />
            <Products />
            <div className="container block-margin">
                <h2 data-aos="fade-up" data-aos-duration="1500" className='popular-questions'>{t('faq')}</h2>
                <Questions />
            </div>
            <DownloadCatalog />
            <Portfolio products={products}/>
            <Certificates />
            <Callback />
            <MainDescription />
        <MapComponent />
        </div>
    );
}
