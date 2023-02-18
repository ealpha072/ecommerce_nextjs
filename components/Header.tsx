import Link from "next/link";
import Image from "next/image";

export default function Header(){
    return(
        <header>
            <Link href="/">
                Alpha
            </Link>
            <Link href="/">
                <h1>FishCastle</h1>
            </Link>
            <a href="">
                <svg width="31" height="27" viewBox="0 0 31 27" fill="none" xmlns="<http://www.w3.org/2000/svg>">
                    <path d="" fill="#9094FF"/>
                </svg>
                <span></span>
            </a>
        </header>
    )
}