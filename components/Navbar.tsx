import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

const Navbar = () => {
    return (
        <nav className="flexBetween max-container padding-container relative z-30 py-5">
            {/* Logo */}
            <Link href="/">
            <Image 
            src="/logo.png"
            alt="logo"
            width={74}
            height={29}
            />
            </Link>

            {/* Links */}
            <ul className="hidden h-full gap-12 lg:flex">
                {NAV_LINKS.map((link)=>(
                    <Link
                    href={link.href}
                    key={link.key}
                    className="regular-20 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all duration-200 hover:scale-105"
                    >
                    {link.label}
                    </Link>
                ))}
            </ul>

            {/* Login Button */}
            <div className="lg:flexCenter hidden">
                <Button type="button" title="ورود" icon="/user.svg" varient="btn_dark_green" />
            </div>

                {/* Menu icon */}
                <Image 
                    src="/menu.svg"
                    alt="logo"
                    width={32}
                    height={32}
                    className="inline-block lg:hidden"
                />


        </nav>
    );
}

export default Navbar;