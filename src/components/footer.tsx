import React from "react";
import Image from "next/image";

export default function Footer() {

    return (

        <div className="relative w-full mt-[4rem] bottom-0 left-0 sm:hidden">
            <Image
                src="/images/leafs.png"
                alt="background img"
                width={4000}
                height={20}
                className=" w-full absolute z-10 -top-[4rem] h-[6rem]"
            />
            <Image
                src="/images/ardino.png"
                alt="background img"
                width={4000}
                height={20}
                className=""
            />
        </div>

    );
}
