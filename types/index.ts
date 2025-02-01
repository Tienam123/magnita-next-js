export interface Product {
    id: string;
    picture: string[];
    title: string;
    title_ua: string;
    title_en: string;
    price: number;
}

export interface PortfolioItem {
    id: string;
    slug: string;
    img: string;
    title_ua: string;
    title_ru: string;
    title_en: string;
}