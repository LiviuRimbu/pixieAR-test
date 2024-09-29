'use client';
import React, {useState} from 'react';
import IframeComponent from "@/app/components/iframe";
import BooksList from "@/app/components/books-list";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";

const StartMenu: React.FC = () => {

    const [iframeSrc, setIframeSrc] = useState<string | null>(null);
    const [imageSrc, setImageSrc] = useState<string>('');

    const handleImageClick = (src: string, imageSrc: string) => {
        setIframeSrc(src);
        setImageSrc(imageSrc);
    };

    const closeIframe = () => {
        setIframeSrc(null);
    };
    return (
        <div className="flex flex-col items-center justify-center relative w-full max-w-xl max-h-xl mx-auto  ">
            <Header/>
            <BooksList handleImageClick={handleImageClick}/>
            {iframeSrc && <IframeComponent url={iframeSrc} imgSrc={imageSrc} onClose={closeIframe}/>}
            <Footer/>
        </div>
    )
        ;
};

export default StartMenu;
