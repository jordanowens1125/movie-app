import "./movie-review.scss";
import Link from "next/link";
import RatingCircle from "../rating-circle";

export default function MovieReview() {
  return (
    <Link href={"/"} className="movie-review">
      <img
        src="https://image.tmdb.org/t/p/w1280/uVlUu174iiKhsUGqnOSy46eIIMU.jpg"
        alt=""
        className="bg-img"
      />
      <div className="info">
        <img
          src="https://sbcf.fr/wp-content/uploads/2018/03/sbcf-default-avatar.png"
          alt=""
          className="user"
        />
        <div className="name">Chris Sawin</div>
        <RatingCircle value={2} />
        <b className="title">Wicked</b>
        <p className="text">
          The film adaptation of Wicked is based on the Broadway musical, which
          is a loose adaptation of the 1995 novel Wicked. The L....
        </p>
      </div>
    </Link>
  );
}
