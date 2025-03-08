import React from 'react';
import Image from 'next/image';

interface CardProps {
    imageSrc: string;
    title: string;
    text: string;
}

const Card1: React.FC<CardProps> = ({ imageSrc, title, text }) => {
    return (
        <div className="bg-[#DAFCE4]  shadow-md p-4 aspect-square flex flex-col items-center justify-center">
            <Image
                src={imageSrc}
                alt={title}
                width={80}
                height={80}
                className=""
            />
            <h2 className="text-lg text-[#03624C] mt-3 text-center">{title}</h2>
            <p className="text-[#626262] mt-1 flex-wrap text-sm text-center">{text}</p>
        </div>
    );
};

export default Card1;
