import "./page.scss";
import RatingCircle from "@/app/components/rating-circle";
import Link from "next/link";

export default async function Page({ params }) {
  const ID = (await params).id;
  console.log(ID);
  return (
    <main>
      <div className="container person">
        <section className="upper">
          <img
            src="https://image.tmdb.org/t/p/h632/2zk0hYmVtDNVENhHbsVs2FPzP3o.jpg"
            alt=""
          />
          <div className="right">
            <h1>Tony Montana</h1>
            <div className="row">
              <RatingCircle value={34} />
              <div className="tag">Killing</div>
            </div>
            <p className="from">
              <b>Born</b>
              May 1, 1995 in Hackensack, New Jersey, USA
            </p>
            {/* See More */}
            <div className="links">
              <Link href={"/"}>Instagram</Link>
              <Link href={"/"}>Twitter</Link>
              <Link href={"/"}>IMDB</Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
