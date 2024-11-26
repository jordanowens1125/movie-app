import Link from "next/link";

export default function Person(person) {
  return (
    <Link href={"/"} className="person">
      <img
        src="https://image.tmdb.org/t/p/w185/7Qq9fqLQGbMxYjw5tVGYEuYW7Ye.jpg"
        alt=""
      />
      <div className="info">
        <b>Robert Timothy Smith</b>
        <p>Liam</p>
      </div>
    </Link>
  );
}
