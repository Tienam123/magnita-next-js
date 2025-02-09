"use client"
import {useTranslations} from "next-intl";

export interface CallbackProps {

}


const Callback = ({}: CallbackProps) => {
const t = useTranslations();
    return (
        <section className="callback">
            <div className="left">
                <p className="heading-section" data-aos="fade-up" data-aos-duration="1500">
                    {t('section_callback_title')}
                </p>
                <span className="free">{t('section_callback_its_free')}</span>
                <div className="list-block">
                    <ul>
                        {[1, 2, 3, 4].map((num) => (
                            <li key={num}>
                                <p className="img"><img width="10" height="10" src="/img/check.png" alt="" /></p>
                                <p className="text">
                                    <span>{t(`section_callback_adv_${num}`)}</span>
                                    {t(`section_callback_adv_${num}_1`)}
                                </p>
                            </li>
                        ))}
                    </ul>
                    <div className="phone-block">
                        <p className="title">{t('section_callback_call')}</p>
                        <a href="tel:+380676313823">
                            <img height="11" width="5" src="/img/kyivstar.png" alt="" />
                            +38 (067) 631-38-23
                        </a>
                        <a href="tel:+380955496062">
                            <img height="11" width="11" src="/img/vodafone.png" alt="" />
                            +38 (095) 549-60-62
                        </a>
                    </div>
                </div>
                <div className="form-block">
                    <p className="title">
                        {t('section_callback_or')} <span className="bold">{t('section_callback_fill_form')}</span> {t('section_callback_fill_form_2')}
                        <span className="sm">{t('section_callback_fill_form_3')}</span>
                    </p>
                    <form action="" className="download-price-form">
                        <div className="first-row">
                            <input type="text" name="phone" placeholder="+38 (___) __-__-__" required />
                            <button className="btn-o">
                                <span className="btn-blick"></span>
                                {t('section_callback_call_us')}
                            </button>
                        </div>
                        <div className="policy">
                            <input id="section-callback-agree22" type="checkbox" required defaultChecked />
                            <label htmlFor="section-callback-agree22">
                                {t('section_callback_agree')} <a style={{ color: "blue" }} href={`/policy`}> {t('section_callback_agree_2')}</a>
                            </label>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

Callback.propTypes = {
    
};

export default Callback;