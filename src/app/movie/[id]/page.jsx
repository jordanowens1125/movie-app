import "./page.scss";
import DEMOMOVIE from "../../constants/movie";
import Person from "./person";
import Carousel from "@/app/components/carousels/carousel";
import MovieWDetails from "@/app/components/movie-cards/movie-w-details";
import RatingCircle from "@/app/components/rating-circle";
import Review from "./review";

export default async function Page({ params }) {
  const ID = (await params).id;
  console.log(ID);
  return (
    <main>
      <div className="movie">
        <div className="container">
          <section className="upper">
            <img src={DEMOMOVIE.bgimg} alt="" className="movie-img" />
            <div className="info">
              <h1>{DEMOMOVIE.title}</h1>
              <div className="row">
                <b>{DEMOMOVIE.year}</b>
                <p>
                  Directed By : <b>{DEMOMOVIE.director}</b>
                </p>
              </div>
            </div>

            <div className="ratings">
              <RatingCircle value={6.6} size="L" />
              <span className="votes">
                <b>{DEMOMOVIE.votes}</b>
                Total Votes
              </span>
            </div>
          </section>
          <section className="tags">
            {DEMOMOVIE.tags.map((tag) => (
              <div className="tag" key={tag}>
                {tag}
              </div>
            ))}
          </section>
          <section className="story">
            <span className="content">
              <p>{DEMOMOVIE.content}</p>
              <p>{DEMOMOVIE.duration}</p>
            </span>
            <span>
              <h2>Storyline</h2>
              <p>{DEMOMOVIE.storyline}</p>
            </span>
          </section>
          <section className="trailer">
            <h2>Watch Trailer</h2>
            <iframe
              src={DEMOMOVIE.trailer}
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              title="video"
            />
          </section>
          <section className="reviews">
            {DEMOMOVIE.reviews.length > 0 ? (
              <>
                <h2>Reviews</h2>
                <Review review={DEMOMOVIE.reviews[0]} />
              </>
            ) : (
              <>
                <h2>No Reviews Yet...</h2>
              </>
            )}
          </section>
          <section className="related" id="related">
            <h2>Related</h2>
            <Carousel
              count={3}
              showPerSlide={3}
              sectionID={"related"}
              items={
                <>
                  <MovieWDetails />
                  <MovieWDetails />
                  <MovieWDetails />
                </>
              }
            />
          </section>
          <section className="sidebar">
            <div className="cast">
              <h2>Cast</h2>
              {DEMOMOVIE.cast.map((person) => (
                <Person key={person.name} />
              ))}
            </div>
            <div className="crew">
              <h2>Crew</h2>
              {DEMOMOVIE.crew.map((person) => (
                <Person key={person.name} />
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
