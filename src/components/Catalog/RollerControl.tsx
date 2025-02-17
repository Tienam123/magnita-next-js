import {ControlItem} from "@/types";
import {useTranslations} from "next-intl";

export interface RollerControlProps {
controlItems:ControlItem[];
title:string;
description:string;
}

const RollerControl = ({controlItems,title,description}: RollerControlProps) => {
    const t = useTranslations();
    return (
        <>
            <h2 className="h2_title">{t(`${title}`)}</h2>
            <h3 className="desc">{t(`${description}`)}</h3>
            <div className="type-control">
                <h3 className="desc">{t("control_type_1")}</h3>
                <h3 className="desc">{t("control_type_2")}</h3>
            </div>
            <div className="control-items">
                {controlItems.map((item, index) => {
                    if (Array.isArray(item.imgSrc)) {
                        return (
                            <div key={index} className="item-wide">
                                <div className="imgs">
                                    {item.imgSrc.map((image,idx) => (<img className="img" src={image} key={idx} alt={t(item.title)}/>))}
                                </div>
                                <h3 className="desc">{t(item.title)}</h3>
                            </div>
                        )
                    } else {
                        return (
                            <div key={index} className="item">
                                <img className="img" src={item.imgSrc} title={t(item.title)} alt={t(item.title)} />
                                <h3 className="desc">{t(item.title)}</h3>
                            </div>
                        )
                    }
                })}
            </div>
        </>
    );
};

RollerControl.propTypes = {
    
};

export default RollerControl;