import LangSwitcher from "@/components/lang-switcher";
import React from "react";
import {useTranslations} from 'next-intl';

export default function Header() {

    const t = useTranslations('header');

    return (

        <div className="relative flex flex-col justify-center items-center mt-[3rem] w-full mb-[3rem]">
            <LangSwitcher/>
            <div className="relative flex flex-row justify-center items-center mt-[2vh]  w-full ">
                <h1 className="text-7xl text-center  text-violet font-black font-herculanum text-[48px] mx-auto">{t('title')}</h1>
            </div>

        </div>

    );
}
