import {useTranslations} from "next-intl";
import {MontageItem} from "@/types";

export interface ShutterMountProps {
items:MontageItem[]
}

const ShutterMount = ({items}: ShutterMountProps) => {
    const t = useTranslations();
    return (
        <>
            <h2 className="h2_title">{t("montage_title")}</h2>
            <div className="montazh">
                {items.map((item, index) => (
                    <div key={index} className="item">
                        <img className="img" src={item.imgSrc} title={t(item.title)} alt={t(item.title)} />
                        <h3 className="text">{t(item.title)}</h3>
                    </div>
                ))}
            </div>
        </>
    );
};

ShutterMount.propTypes = {

};

export default ShutterMount;