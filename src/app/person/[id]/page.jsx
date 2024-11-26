import Carousel from "@/app/components/carousels/carousel";
import "./page.scss";
import RatingCircle from "@/app/components/rating-circle";
import ShowMore from "@/app/components/show-more";
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
              <RatingCircle value={34} size="L" />
              <div className="tag">Killing</div>
            </div>
            <p className="from">
              <b>Born</b>
              May 1, 1995 in Hackensack, New Jersey, USA
            </p>
            <ShowMore
              text={
                "Marion Mitchell Morrison (born Marion Robert Morrison; May 26, 1907 – June 11, 1979), known professionally as John Wayne and nicknamed Duke, was an American actor and filmmaker. An Academy Award-winner for True Grit (1969), Wayne was among the top box office draws for three decades. Born in Winterset, Iowa, Wayne grew up in Southern California. He was president of Glendale High class of 1925. He found work at local film studios when he lost his football scholarship to the University of Southern California as a result of a bodysurfing accident. Initially working for the Fox Film Corporation, he appeared mostly in small bit parts. His first leading role came in Raoul Walsh's The Big Trail (1930), which led to leading roles in numerous B movies throughout the 1930s, many of them in the Western genre. Wayne's career took off in 1939, with John Ford's Stagecoach making him an instant star. He went on to star in 142 pictures. Biographer Ronald Davis said, 'John Wayne personified for millions the nation's frontier heritage. Eighty-three of his movies were Westerns, and in them, he played cowboys, cavalrymen, and unconquerable loners extracted from the Republic's central creation myth.' Wayne's other well-known Western roles include a cattleman driving his herd north on the Chisholm Trail in Red River (1948), a Civil War veteran whose young niece is abducted by a tribe of Comanches in The Searchers (1956), and a troubled rancher competing with a lawyer for a woman's hand in marriage in The Man Who Shot Liberty Valance (1962). He is also remembered for his roles in The Quiet Man (1952), Rio Bravo (1959), and The Longest Day (1962). In his final screen performance, he starred as an aging gunfighter battling cancer in The Shootist (1976). He appeared with many important Hollywood stars of his era, and his last public appearance was at the Academy Awards ceremony on April 9, 1979."
              }
              length={250}
            />
            <div className="links">
              <Link href={"/"}>Instagram</Link>
              <Link href={"/"}>Twitter</Link>
              <Link href={"/"}>IMDB</Link>
            </div>
          </div>
        </section>
        <section>
          <Carousel />
        </section>
      </div>
    </main>
  );
}
