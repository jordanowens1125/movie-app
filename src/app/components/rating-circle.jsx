import "./rating-circle.scss";

export default function RatingCircle({
  width,
  value,
  borderGradient,
  size = "M",
}) {
  return (
    <span className={`${size} rating-circle`}>
      {" "}
      <b>{value}</b>
    </span>
  );
}
