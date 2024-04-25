import Link from "next/link";

export default function MenuList(props:any) {
    return(
        <li className={props.buttonClass}>
            <Link href={props.mnLink}>{props.mnTitle}</Link>
        </li>
    )
}