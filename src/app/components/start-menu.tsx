import React from 'react';

interface StartMenuProps {
    handleImageClick: (src: string) => void;
}

const StartMenu: React.FC<StartMenuProps> = ({ handleImageClick }) => {
    return (
        <div className="flex flex-col items-center">
            <h1 className="text-3xl font-bold p-5">Welcome</h1>
            <p>Choose a book to scan</p>
            <div className="flex p-10 gap-4 flex-row justify-between items-center">
                <img
                    src="/images/english.jpg"
                    alt="english book"
                    className="w-1/3 h-[300px] cursor-pointer rounded-lg"
                    onClick={() => handleImageClick('https://mywebar.com/p/Project_0_qu59hfweju1802')}
                />
                <img
                    src="/images/grammar.jpg"
                    alt="grammar book"
                    className="w-1/3 h-[300px] cursor-pointer rounded-lg"
                    onClick={() => handleImageClick('https://mywebar.com/p/Project_4_6k8la19ohc7569')}
                />
            </div>
        </div>
    );
};

export default StartMenu;
