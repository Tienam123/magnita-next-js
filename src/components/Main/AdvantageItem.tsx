"use client"
import {useTranslations} from "next-intl";

export interface AdvantageItemProps {
    image: string;
    title1: string;
    title2: string;
}

const AdvantageItem = ({image,title2,title1}: AdvantageItemProps) => {
    const t = useTranslations();
    return (
        <div className="item">
            <div
                className="img"
                style={{backgroundImage: `url(${image})`}}
            ></div>
            <p>
                <span style={{paddingRight:'5px'}}>{t(title1)}</span>
                 {t(title2)}</p>
        </div>
    );
};


export default AdvantageItem;