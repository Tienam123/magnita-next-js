"use client"
import {useTranslations} from "next-intl";
import AOS from "aos";
import {useEffect, useState} from "react";
import "aos/dist/aos.css";
import Link from "next/link";
import AdvantageItem from "@/src/components/Main/AdvantageItem";
import ProductItem from "@/src/components/Main/ProductItem";
import {Product} from "@/types";
import {API_URL} from "@/contants";

export interface ProductsProps {

}

const categories = [
    {key: 'category_1', path: `/roller-shutters`},
    {key: 'category_2', path: `/rullonnye-reshetki`},
    {key: 'category_3', path: `/shrutters-individual`},
    {key: 'category_4', path: `/rullonnye-vorota`},
    {key: 'category_10', path: `/product-parts`},
    {key: 'rol-vorota', path: `/roletni-vorota`},
    {key: 'category_6', path: `/sliding-gate`},
    {key: 'category_7', path: `#`, disabled: true},
    {key: 'category_8', path: `/zhalyuzi`},
    {key: 'category_9', path: `#`, disabled: true},
    {key: 'category_11', path: `/sop-product`},
    {key: 'category_12', path: `/avtomatika-desc`}
];

const advantages = [
    {
        id: 1,
        image: '/img/products/adv3.png',
        title1: 'products_top_item_1_title_1',
        title2: 'products_top_item_1_title_2',
    },
    {
        id: 2,
        image: '/img/products/service.png',
        title1: 'products_top_item_2_title_1',
        title2: 'products_top_item_2_title_2',
    },
    {
        id: 3,
        image: '/img/products/measurer.png',
        title1: 'products_top_item_3_title_1',
        title2: 'products_top_item_3_title_2',
    },
    {
        id: 4,
        image: '/img/products/overpayment.png',
        title1: 'products_top_item_4_title_1',
        title2: 'products_top_item_4_title_2',
    },
    {
        id: 5,
        image: '/img/products/auto.png',
        title1: 'products_top_item_5_title_1',
        title2: 'products_top_item_5_title_2',
    },
];

const Products = ({}: ProductsProps) => {
    const t = useTranslations();
    const [products, setProducts] = useState<Product[]>([])
    useEffect(() => {
        AOS.init({
            duration: 1500,
            once: true,
        });
        fetch(`${API_URL}api/fetch-products`).then(res => res.json()).then(res => {
            setProducts(res)
        })
    }, []);

    return (
        <section className="catalogue-main-page">
            <div className="container">
                <h2 data-aos="fade-up" data-aos-duration="1500">
                    {t('section_products_title')}
                </h2>
                <div className="inner flex">
                    <div className="left">
                        <div className="filters">
                            <div className="all-one-place">
                                <p className="title">
                                    {t('section_products_all_at_same_place')}
                                </p>
                            </div>
                            <ul>
                                {categories.map(category => (
                                    <li key={category.key}>
                                        <Link href={category.path}>{t(category.key)}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="measurer" data-aos="fade-up" data-aos-duration="1500">
                            <div
                                className="img"
                                style={{backgroundImage: 'url(/img/measurer.jpg.webp)'}}
                            >
                            </div>
                            <div
                                className="content"
                                style={{backgroundImage: 'url(/img/prod-adv/bg1.jpg.webp)'}}
                            >
                                <p className="title">{t('aside_measurer_title')}</p>
                                <p className="desc">{t('aside_measurer_desc')}</p>
                                <a href="javascript:void(0)" className="btn-o">
                                    <span className="btn-blick"></span>
                                    <span>{t('aside_measurer_btn')}</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <div className="top-block">
                            {advantages.map(advantage => (
                                <AdvantageItem
                                    key={advantage.id} image={advantage.image} title1={advantage.title1}
                                    title2={advantage.title2}
                                />
                            ))}
                        </div>
                        <div className="product-items">
                            {products.map(product => (
                                <ProductItem key={product.id} product={product}/>
                            ))}
                        </div>
                        <div className="catalogue-btn" data-aos="fade-up" data-aos-duration="1500">
                            <a href="" className="btn-o">
                                <span className="btn-click"></span>
                                <img width="15" height="25" loading="lazy" src="/img/cat/adv5.png" alt=""/>
                                {t('proceed_to_catalog')}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};


export default Products;