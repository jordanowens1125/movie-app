import RatingCircle from "@/app/components/rating-circle";
import ShowMore from "@/app/components/show-more";

export default function Review({ review }) {
  return (
    <div className="review">
      <RatingCircle value={review.rating} size="L" />
      <div className="info">
        <b className="user">{review.name}</b>
        <p className="date">{review.date}</p>
      </div>{" "}
      <ShowMore text={review.text} length={500} />
    </div>
  );
}
