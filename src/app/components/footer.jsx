import Link from "next/link";
import "./footer.scss";
import LOGOSVG from "../images/logo";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="logo">
          <LOGOSVG />
          <p>Used the TMBD API</p>
        </div>

        <div className="built">
          <p>Made By Jordan Owens</p>
          <p className="item-h">
            Built with Next.js, MongoDB, GraphQL, React.js, Styled Components.
          </p>
        </div>

        <div>
          <p>Full Portfolio</p>
          <Link className="item-h" href="/">
            My Portfolio
          </Link>
        </div>
      </div>
    </footer>
  );
}
