"use client"
import {useTranslations} from "next-intl";
import QuestionItem from "@/src/components/Main/QuestionItem";

export interface QuestionsProps {

}


const Questions = ({}: QuestionsProps) => {
    const t = useTranslations();
    const questions = [
        {
            id:1,
            title:t('faq_Q_1'),
            value:t('faq_A_1')
        },
        {
            id:2,
            title:t('faq_Q_2'),
            value:t('faq_A_2')
        },
        {
            id:3,
            title:t('faq_Q_3'),
            value:t('faq_A_3')
        },
        {
            id:4,
            title:t('faq_Q_4'),
            value:t('faq_A_4')
        },
        {
            id:5,
            title:t('faq_Q_5'),
            value:t('faq_A_5')
        },
        {
            id:6,
            title:t('faq_Q_6'),
            value:t('faq_A_6')
        }
    ];
    return (
        <div className="container block-margin">
            <h2 data-aos="fade-up" data-aos-duration="1500" className='popular-questions'>{t('faq')}</h2>
            <div className="popular-questions">
                <ul className="popular-questions__accordion">
                    {questions.map(item => (
                       <QuestionItem key={item.id} id={item.id} title={item.title} value={item.value} />
                    )) }
                </ul>
                <div className="popular-questions__form">
                    <div className="popular-questions__form-title">{t('faq_qua') }</div>

                    <p>{t('faq_desc1')}</p>
                    <p>{t('faq_desc2') }</p>
                    <a href="'/'+$i18n.locale+'/articles'" className="btn-o">
                        <span className="btn-blick"></span>
                        {t('faq') }
                    </a>
                </div>
            </div>

        </div>
    );
};

export default Questions;