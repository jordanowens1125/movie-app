import Link from "next/link";
import "./nav.scss";
export default function NavBar() {
  return (
    <nav className="container">
      <Link href="/">Home</Link>
      <Link href="/">Home</Link>
      <Link href="/">Home</Link>
      <span>Search</span>
      <p>Icon</p>
    </nav>
  );
}
