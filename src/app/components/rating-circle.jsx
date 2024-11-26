import "./rating-circle.scss";

export default function RatingCircle({
  width,
  value,
  borderGradient,
  size = "M",
}) {
  return (
    <span className="rating-circle">
      {" "}
      <b>{value}</b>
    </span>
  );
}
