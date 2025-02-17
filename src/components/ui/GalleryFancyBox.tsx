"use client"
import {images} from "next/dist/build/webpack/config/blocks/images";
import {useEffect} from "react";
import {Fancybox} from "@fancyapps/ui";
import '@fancyapps/ui/dist/fancybox/fancybox.css';

export interface GalleryFancyBoxProps {
images: string[],
    dataId:string,
    className?:string,
    itemClass?:string
}

const GalleryFancyBox = ({images,dataId,className,itemClass='img-item'}: GalleryFancyBoxProps) => {
    useEffect(() => {
        Fancybox.bind(`[data-fancybox="${dataId}"]`, {
        });
    }, []);
    return (
            <div className={className}>
                {images.map((image,index) => (
                    <a
                        key={image+index}
                        href={image}
                        title="$t('protective_shrutters')" className={itemClass}
                        data-fancybox={dataId} style={{backgroundImage: `url(${image})`}}
                    ></a>
                ))}

            </div>
    );
};

GalleryFancyBox.propTypes = {

};

export default GalleryFancyBox;