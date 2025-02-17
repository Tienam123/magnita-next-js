export interface Product {
    id: string;
    picture: string[];
    title: string;
    title_ua: string;
    title_en: string;
    price: number;
}


export interface PortfolioItemType {
    id: string;
    slug: string;
    img: string;
    title_ua: string;
    title_ru: string;
    title_en: string;
}

export interface ProductTypeCatalog {
    id: number
    parent_slug: string
    title: string
    title_en: string
    title_ua: string
    slug: string
    desc: string
    desc_en: string
    desc_ua: string
    content: string
    content_en: any
    content_ua: string
    created_at: string
    updated_at: string
    table_name: string
    table_name_ua: string
    table_name_en: string
    table_first_column_name: string
    table_first_column_name_ua: string
    table_first_column_name_en: string
    title_page: string
    title_page_ua: string
    title_page_en: string
    type: number
    [key: string]: string | any;
}
export interface MontageItem {
    imgSrc:string;
    title:string;
}
export interface ControlItem {
    title:string;
    imgSrc:string|string[];
    wide?:boolean
}

