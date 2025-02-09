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


export async function getProductsPortfolio() {
    try {
        const response = await fetch(`${API_URL}api/fetch-all-portfolio`)
        if (!response.ok) {
            throw new Error('Failed to fetch products')
        }
        return response.json() as PortfolioItemType[];
    } catch (e) {
    }
}
export default async function Home() {
    const products = await getProductsPortfolio();
    return (
        <div>
            <Hero />
            <Criteries />
            <Products />
            <Questions />
            <DownloadCatalog />
            <Portfolio products={products}/>
            <Certificates />
            <Callback />
            <MainDescription />
        <MapComponent />
        </div>
    );
}
