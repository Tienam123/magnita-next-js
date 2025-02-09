"use client"
import {useTranslations} from "next-intl";
import {Swiper, SwiperSlide} from "swiper/react";
import {Link} from "@/i18n/routing";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/src/simple-lightbox.scss"
import {Pagination} from "swiper/modules";
import {useEffect} from "react";

export interface CertificatesProps {

}
const images:string[] = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.webp", "prot_2.jpg"];
const Certificates = ({}: CertificatesProps) => {
    const t = useTranslations();
    useEffect(() => {
        var gallery = new SimpleLightbox('.sert-block a')
    }, []);
    return (
        <section className="certificates">
            <div className="container">
                <div className="inner">
                    <h2 data-aos="fade-up" data-aos-duration="1500">{t("section_certificates_title")}</h2>
                    <p className="subtitle" data-aos="fade-up" data-aos-duration="1500">
                        {t("section_certificates_subtitle")}
                    </p>
                    <div className="content">
                        <div className="left">
                            <div
                                className="img"
                                style={{ backgroundImage: "url(/img/sert/serts2.webp)" }}
                            ></div>
                            <div className="desc">
                                <img className="arrow" src="/img/sert/arrow2.png" alt="" />
                                <p>{t("section_certificates_cert_1")}</p>
                            </div>
                            <div className="desc2">
                                <img className="arrow" src="/img/sert/arrow2.png" alt="" />
                                <p dangerouslySetInnerHTML={{__html:t.raw('section_certificates_cert_2')}} />
                            </div>
                            <div className="desc3">
                                <img className="arrow" src="/img/sert/arrow.png" alt="" />
                                <p>{t("section_certificates_cert_3")}</p>
                            </div>
                        </div>
                        <div className="right">
                            <p className="desc">{t("section_certificates_desc")}</p>
                            <p className="adv-title">{t("section_certificates_adv_title")}</p>
                            <ul>
                                <li>{t("section_certificates_adv_1")}</li>
                                <li>{t("section_certificates_adv_2")}</li>
                                <li>{t("section_certificates_adv_3")}</li>
                                <li>{t("section_certificates_adv_4")}</li>
                            </ul>
                            <div className="sert-block">

                                <Swiper slidesPerView={3} loop={true} spaceBetween={10} autoplay={true} modules={[Pagination]}>
                                    <>
                                        {images.map(slide => (
                                            <SwiperSlide key={slide}>
                                                <a href={`/img/sert/${slide}`}
                                                    style={{backgroundImage: `url(/img/sert/${slide})`,backgroundSize:'cover',minHeight:'200px',width:'100%',display:'block'}}>
                                                </a>
                                            </SwiperSlide>
                                        ))}
                                    </>
                                </Swiper>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
)
    ;
};

Certificates.propTypes = {};

export default Certificates;