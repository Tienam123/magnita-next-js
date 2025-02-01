"use client"
import {useLocale, useTranslations} from "next-intl";
import {Product} from "@/types";
import {useEffect} from "react";

export interface ProductItemProps {
    product: Product
}

const ProductItem = ({product}: ProductItemProps) => {
    const locale: string = useLocale();
    const t = useTranslations();
    useEffect(() => {
        console.log(locale)
    }, []);
    return (
        <div className="item">
            <div className="tags">
                <span className="hit">Хит продаж</span>
                <span className="discount">Скидка -5%</span>
            </div>
            <div className="img">
                <a href="'/'+$i18n.locale+'/product/'+item.id">
                    <img width="140" height="140" loading="lazy" src={product.picture[0]} alt=""/>
                </a>
            </div>
            <p className="status available">
                <span></span>
                {t('available')}
            </p>
            <a href="'/'+$i18n.locale+'/product/'+item.id" className="product-name">
                {locale === 'ua' ? product.title_ua : locale === 'ru' ? product.title : locale === 'en' ? product.title_en : ""}
            </a>
            <div className="price-block">
                <span className="title">{t('price')}:</span>
                <span className="price">{product.price} <i>₴</i></span>
            </div>
            <div className="btns-block">
                <a href="" className="btn-o">
                    <span className="btn-blick"></span>
                    {t('add_to_basket')}
                </a>
                <a href="'/'+$i18n.locale+'/product/'+item.id" className="more">
                    {t('news_more')}
                </a>
            </div>
        </div>
    )
};


export default ProductItem;