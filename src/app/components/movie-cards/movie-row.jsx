import Link from "next/link";
import RatingCircle from "../rating-circle";
import "./movie-row.scss";

export default function MovieRow({ movie }) {
  return (
    <Link className="movie-row card" href={"/"}>
      <img
        src="https://image.tmdb.org/t/p/w780/6JiTVGdfPU2ki1tmTAYTt2kkw7m.jpg"
        alt=""
        className="bg-img"
      />
      <img
        src="https://image.tmdb.org/t/p/w780/6JiTVGdfPU2ki1tmTAYTt2kkw7m.jpg"
        alt=""
        className="side-img"
      />
      <div className="info">
        <p className="title">Defying Gravity: The Curtain Rises on Wicked</p>
        <p className="sub-h">Self</p>
      </div>
      <RatingCircle value={24} />
      <p className="year">2024</p>
    </Link>
  );
}
