import Link from "next/link";
import MenuList from "./MenuList";

export default function Menu() {
    return(
        <div className="site--menu">
            <ul className="flex justify-between items-center gap-6 flex-wrap">
                <MenuList mnLink="/" mnTitle="Home" />
                <MenuList mnLink="https://www.google.com" mnTitle="About Us" />
                <MenuList mnLink="https://www.google.com/images" mnTitle="Gallery" />
                <MenuList buttonClass="redButton" mnLink="https://www.google.com/contact-images" mnTitle="Contact Us" />
            </ul>
        </div>
    )
}