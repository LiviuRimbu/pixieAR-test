import React from 'react';

type FlagProps = React.SVGProps<SVGSVGElement>;

const FlagRo: React.FC<FlagProps> = (props) =>  {
    return (
        <svg {...props} width="80" height="60" viewBox="0 0 80 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_185_861)">
                <path fillRule="evenodd" clipRule="evenodd" d="M0 0H26.6625V60H0V0Z" fill="#00319C" />
                <path fillRule="evenodd" clipRule="evenodd" d="M26.6621 0H53.3371V60H26.6621V0Z" fill="#FFDE00" />
                <path fillRule="evenodd" clipRule="evenodd" d="M53.3379 0H80.0004V60H53.3379V0Z" fill="#DE2110" />
            </g>
            <defs>
                <clipPath id="clip0_185_861">
                    <rect width="80" height="60" fill="white" />
                </clipPath>
            </defs>
        </svg>
    );
};

export default FlagRo;
