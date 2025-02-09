"use client"
import {useState} from "react";
import clsx from "clsx";

export interface QuestionItemProps {
    id: number;
    title: string;
    value: string;
}

const QuestionItem = ({id, title, value}: QuestionItemProps) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <li
            className={clsx('popular-questions__accordion-item', {'minuse': isOpen})} onClick={() => setIsOpen(!isOpen)}
            style={{cursor: 'pointer'}}
        >
            <div style={{display: 'flex', alignItems: 'center'}} className='popular-questions__accordion-title'>
                <p className="img faq_img_div">
                    <img
                        loading="lazy" className="faq_img" width="10" height="10"
                        src="/img/check.png"
                        alt=""
                    />
                </p>
                <div>{title}</div>
            </div>
            <div>
                <div
                    id="one" className={clsx("popular-questions__accordion-panel faq_hidden",{"faq_active":isOpen})} itemProp="text"
                >{value}</div>
            </div>
        </li>
    );
};


export default QuestionItem;