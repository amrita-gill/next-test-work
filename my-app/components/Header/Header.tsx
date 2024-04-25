import Link from "next/link";
import Menu from "./Menu";

export default function Header() {
    return(
        <div className="site--header">
          <div className="site--wrapper">
            <div className="site--logo">
              <h1>Pracite Site</h1>
            </div>
            <Menu />
          </div>
        </div>
    )
}