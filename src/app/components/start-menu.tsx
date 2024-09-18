import React from 'react';
import Image from 'next/image';

interface StartMenuProps {
    handleImageClick: (src: string) => void;
}

const StartMenu: React.FC<StartMenuProps> = ({handleImageClick}) => {
    return (
        <div className="flex flex-col items-center ">
            <div className="flex flex-col items-center mt-[8vh]">
                <h1 className="text-7xl   text-violet font-black font-herculanum text-[48px]">Welcome</h1>
                <p className="text-3xl font-bold text-violet font-herculanum text-[16px]">Choose a book to scan</p>
                <div className="flex gap-4 flex-row items-center justify-center mt-[20px]">
                    <div className="w-1/3  min-h-[300px]">
                        <Image
                            src="/images/english.jpg"
                            alt="english book"
                            layout="responsive"
                            width={0}
                            height={0}
                            className=" cursor-pointer rounded-lg hover:scale-105 transition-transform active:scale-105 drop-shadow-2xl"
                            onClick={() => handleImageClick('https://mywebar.com/p/Project_0_qu59hfweju1802')}
                        />
                    </div>
                    <div className="w-1/3 aspect-w-1 aspect-h-1 min-h-[300px]">
                        <Image
                            src="/images/grammar.jpg"
                            alt="grammar book"
                            layout="responsive"
                            width={0}
                            height={0}
                            className="cursor-pointer rounded-lg hover:scale-105 transition-transform active:scale-105 drop-shadow-2xl"
                            onClick={() => handleImageClick('https://mywebar.com/p/Project_4_6k8la19ohc7569')}
                        />
                    </div>
                </div>
            </div>
            <div className=" w-full h-[50vh] fixed bottom-0 left-0 block sm:hidden">
                <Image
                    src="/images/leafs.png"
                    alt="background img"
                    // layout="fill"
                     width={4000}
                     height={40}
                    // objectFit="cover"
                    // priority={true}
                    className=" w-full relative z-10 -top-[4rem]"
                />
                <Image
                    src="/images/ardino.png"
                    alt="background img"
                    layout="fill"
                    className="w-full h-full"
                />

            </div>
        </div>
    );
};

export default StartMenu;
