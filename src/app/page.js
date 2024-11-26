import "./page.scss";
import Carousel from "./components/carousels/carousel";
import MovieWTitle from "./components/movie-cards/movie-w-title";
import MovieReview from "./components/movie-cards/movie-review-card";

export default function Home() {
  return (
    <main className="home">
      <section id="trending">
        <h2 className="section-h">Trending Movies</h2>
        <Carousel
          sectionID={"trending"}
          items={
            <>
              <MovieWTitle />
              <MovieWTitle /> <MovieWTitle /> <MovieWTitle />
            </>
          }
        />
      </section>
      <section id="reviews">
        <h2 className="section-h">What your friends are saying.</h2>
        <div className="group">
          <MovieReview />
          <MovieReview />
          <MovieReview />
          <MovieReview />
          <MovieReview />
          <MovieReview />
        </div>
      </section>
    </main>
  );
}
