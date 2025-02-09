import {SwiperSlide} from "swiper/swiper-react";

export interface CertificateItemProps {

}

const CertificateItem = ({}: CertificateItemProps) => {
    return (
        <>
            <SwiperSlide>
                <img src={`/img/sert/${img}`} alt=""/>
            </SwiperSlide>
        </>
    );
};

CertificateItem.propTypes = {
    
};

export default CertificateItem;