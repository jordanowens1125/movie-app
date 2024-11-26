import Link from "next/link";
import "./movie-w-details.scss";
import RatingCircle from "../rating-circle";

const DATA = [
  {
    name: "Robert Timothy Smith",
    role: "Liam",
  },
];

export default function MovieWDetails() {
  return (
    <Link href={"/"} className="movie-w-details card">
      <img
        src="https://image.tmdb.org/t/p/w1280/uVlUu174iiKhsUGqnOSy46eIIMU.jpg"
        alt=""
        className="bg-img"
      />
      <div className="info">
        <b className="title">Wicked</b>
        <div className="year">
          Release Date <b>{2024}</b>
        </div>

        <img
          src="https://image.tmdb.org/t/p/w780/kYp5C3oIHV98E5NnObCuadLyOml.jpg"
          alt=""
          className="info-img"
        />
        <div className="right">
          <RatingCircle value={2} />
          <div className="members">
            <div className="cast">
              <p className="item-h">Robert Timothy Smith</p>
              <p className="role">Liam</p>
            </div>
            <div className="cast">
              <p className="item-h">Robert Timothy Smith</p>
              <p className="role">Liam</p>
            </div>
            <div className="cast">
              <p className="item-h">Robert Timothy Smith</p>
              <p className="role">Liam</p>
            </div>
          </div>
        </div>

        <p className="text">
          The film adaptation of Wicked is based on the Broadway musical, which
          is a loose adaptation of the 1995 novel Wicked. The L....
        </p>
      </div>
    </Link>
  );
}
