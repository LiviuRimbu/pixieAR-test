import React from 'react';
import Image from 'next/image';

interface BooksListProps {
    handleImageClick: (src: string, imageSrc: string) => void;
}
interface Book {
    src: string;
    imageSrc: string;
}

const books: Book[] = [
    {src: 'https://mywebar.com/p/Project_0_qu59hfweju1802', imageSrc: '/images/english.jpg'},
    {src: 'https://mywebar.com/p/Project_4_6k8la19ohc75691675', imageSrc: '/images/grammar.jpg'},
    {src: 'https://mywebar.com/p/Project_7_87chzb90ir33869729', imageSrc: '/images/france.png'},
]
const BooksList: React.FC<BooksListProps> = ({handleImageClick}) => {

    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 w-[90vw] sm:w-[60vw] sm:mt-10 max-w-2xl">
            {books.map((book, index) => {
                const lastImagePosition = books.length % 2 !== 0 && index === books.length - 1;
                return (
                    <Image
                        key={index}
                        src={book.imageSrc}
                        alt="book cover"
                        width={200}
                        height={300}
                        className={`cursor-pointer rounded-lg hover:scale-105 transition-transform active:scale-105 h-[50vw] w-[100%] sm:h-[20vw] aspect-h-3 sm:ml-0 ${lastImagePosition ? 'ml-[50%]' : ''}`}
                        onClick={() => handleImageClick(book.src, book.imageSrc)}
                    />
                );
            })}
        </div>
   );
};

export default BooksList;
