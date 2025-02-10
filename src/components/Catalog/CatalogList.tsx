"use client"
import {Link} from "@/i18n/routing";
import {useTranslations} from "next-intl";

export interface CatalogListProps {

}
const categories = [
    { path:'/protective-roller-shutters', img: '/img/categories/1.jpeg.webp', label: 'category_1',disabled: false },
    { path: '/transparent-shutters', img: '/img/categories/transparent/5.jpg', label: 'transparent_title' ,disabled: false},
    { path: '/blinds-desc', img: '/img/categories/2.jpg.webp', label: 'category_2' ,disabled: false},
    { path: '/shrutters-individual', img: '/img/categories/10.jpg.webp', label: 'category_3' ,disabled: false},
    { path: '/shutters-kombi', img: '/img/categories/13.jpg.webp', label: 'category_13' ,disabled: false},
    { path: '/shutters-gates-desc', img: '/img/categories/3.jpg.webp', label: 'category_4',disabled: false },
    { path: '/product-parts', img: '/img/categories/11.jpg.webp', label: 'category_10',disabled: false },
    { path: '/roletni-vorota', img: '/img/categories/4.jpg.webp', label: 'rol-vorota',disabled: false },
    { path: '/sliding-gate', img: '/img/categories/5.jpg.webp', label: 'category_6' ,disabled: false},
    { path: '#', img: '/img/categories/6.jpg.webp', label: 'category_7', disabled: true },
    { path: '/zhalyuzi', img: '/img/categories/7.webp', label: 'category_8' ,disabled: false},
    { path: '#', img: '/img/categories/8.jpg.webp', label: 'category_9', disabled: true },
    { path: '/sop-product', img: '/img/categories/9.jpg.webp', label: 'category_11',disabled: false },
    { path: '/avtomatika-desc', img: '/img/categories/12.jpg.webp', label: 'category_12' ,disabled: false},
];
const CatalogList = ({}: CatalogListProps) => {
    const t = useTranslations();
    return (
        <section className="portfolio-page-items categories-page">
            <div className="container">
                {categories.map((category, index) => (
                    <Link
                        key={index}
                        href={category.disabled ? '#' : `/catalog/${category.path}`}
                        className={`item ${category.disabled ? 'disabled' : ''}`}
                        style={{backgroundImage: `url(${category.img})`}}
                    >
                        <p>{t(category.label)}</p>
                        {category.disabled && <span>{t('section_under_construction')}</span>}
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default CatalogList;