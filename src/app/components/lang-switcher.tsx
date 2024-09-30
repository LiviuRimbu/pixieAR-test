import { usePathname } from 'next/navigation';
import Link from 'next/link';
import FlagUK from "@/app/components/ui/icons/flag-uk";
import FlagRo from "@/app/components/ui/icons/flag-ro";


export default function LangSwitcher() {
    const pathname = usePathname();
    const pathWithoutLocale = pathname.replace(/^\/(en|ro)/, '');

    return (
        <div className="absolute sm:mt-[3rem] right-3 sm:-right-9 -top-7 flex flex-row space-x-4 items-center text-violet text-[12px] z-10">

            <Link href={`/en${pathWithoutLocale}`} locale="en" className=" flex flex-col ">
                <FlagUK className=" w-5 h-5 rounded-[5px]"/>
                <span className='text-center  text-violet font-black font-herculanum'>EN</span>
            </Link>
            <Link href={`/ro${pathWithoutLocale}`} locale="ro" className=" flex flex-col ">
                <FlagRo className="w-5 h-5 rounded-[5px]"/>
                <span className='text-center  text-violet font-black font-herculanum'>RO</span>
            </Link>
        </div>
    );
}
