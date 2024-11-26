import "./movie-w-title.scss";
import Link from "next/link";

export default function MovieWTitle() {
  return (
    <Link href={"/"} className="movie-w-title">
      <img
        src="https://image.tmdb.org/t/p/w1280/uVlUu174iiKhsUGqnOSy46eIIMU.jpg"
        alt=""
      />
      <div className="overlay"></div>
      <p className="title">
        Gladiator II
      </p>
    </Link>
  );
}
