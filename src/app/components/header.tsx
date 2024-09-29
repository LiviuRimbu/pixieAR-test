import LangSwitcher from "@/app/components/lang-switcher";
import React from "react";
import {useTranslations} from 'next-intl';

export default function Header() {

    const t = useTranslations('HomePage');

    return (

        <div className="relative flex flex-col justify-center items-center mt-[3rem] w-full ">
            <LangSwitcher/>
            <div className="relative flex flex-row justify-center items-center mt-[2vh]  w-full ">
                <h1 className="text-7xl text-center  text-violet font-black font-herculanum text-[48px] mx-auto">{t('title')}</h1>
            </div>
            <p className="text-3xl font-bold text-violet font-herculanum text-[16px] mb-2">
                {t('instruction')}
            </p>
        </div>

    );
}
