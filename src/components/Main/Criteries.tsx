"use client"
import {useTranslations} from "next-intl";
import {useEffect} from "react";
import clsx from "clsx";

export interface CriteriesProps {

}

const items = [
    {
        id: 1,
        image: '/img/prod-adv/adv-1.jpg.webp',
        title: 'section_adv_item_1_title',
        desc: 'section_adv_item_1_desc',
        wide: false
    },
    {
        id: 2,
        image: '/img/prod-adv/adv-2.jpg.webp',
        title: 'section_adv_item_2_title',
        desc: 'section_adv_item_2_desc',
        wide: false
    },
    {
        id: 3,
        image: '/img/prod-adv/adv-4.jpg.webp',
        title: 'section_adv_item_3_title',
        desc: 'section_adv_item_3_desc',
        wide: false
    },
    {
        id: 4,
        image: '/img/prod-adv/adv-5.jpg.webp',
        title: 'section_adv_item_4_title',
        desc: 'section_adv_item_4_desc',
        wide: true
    },
    {
        id: 5,
        image: '/img/prod-adv/bg2.jpg.webp',
        title: 'section_adv_item_5_title',
        desc: 'section_adv_item_5_desc',
        wide: true,
        imgSrc: '/img/prod-adv/adv-3.png'
    },
    {
        id: 6,
        image: '/img/prod-adv/adv-6.jpg.webp',
        title: 'section_adv_item_6_title',
        desc: 'section_adv_item_6_desc',
        wide: false
    },
    {
        id: 7,
        image: '/img/prod-adv/adv-7.jpg.webp',
        title: 'section_adv_item_7_title',
        desc: 'section_adv_item_7_desc',
        wide: false
    },
    {
        id: 8,
        image: '/img/prod-adv/bg1.jpg.webp',
        title: 'section_adv_item_8_title',
        desc: 'section_adv_item_8_desc',
        wide: false,
        imgSrc: '/img/prod-adv/adv-8.png.webp'
    }
];

const Criteries = ({}: CriteriesProps) => {
    const t = useTranslations();
    const initLazyLoading = () => {
        const lazyObjects = document.querySelectorAll(".lazybg");
        lazyObjects.forEach((lazyObject: Element) => {
            const element = lazyObject as HTMLElement;
            if (element.dataset.lazybg) {
                element.style.backgroundImage = `url(${element.dataset.lazybg})`;
                element.classList.remove("lazybg");
                element.dataset.lazybg = '';
            }
        });
    };

    useEffect(() => {
        initLazyLoading();
    }, []);

    return (
        <section className="product-adv">
            <div className="container">
                <h2 data-aos="fade-up" data-aos-duration="1500">{t('section_adv_title')}</h2>
                <p className="heading-subtitle">
                    {t('section_adv_subtitle')}
                </p>
                <div className="inner">
                    {items.map(item => (
                        <div key={item.id} className={clsx('item lazybg',{wide:item.wide})} data-lazybg={item.image}>
                            <p className="title">{t(item.title)}</p>
                            <p className="second">{t(item.desc)}</p>
                            {item.imgSrc && <img src={item.imgSrc} alt="" width={300} height={200} loading={"lazy"}/>}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Criteries;