import style from "../page.module.css";
import Link from "next/link";

export default async function Home({searchParams}) {
  const country=searchParams.country || "global";
  console.log(country)
  const res = await fetch(`http://localhost:3000/getNews/${country}`, {
    cache: "no-store",
  });

  const data = await res.json();
  const news = data.news;

  return (
    <main className={style.main_content}>
      <h1 className={style.section_title}>
        {country === "Global"
          ? "Latest News"
          : `News from ${country}`}
      </h1>

      <div className={style.news_grid}>
        {news.map((news) => (
          <article key={news.id} className={style.news_card}>
            <Link href={`/news/${news.id}`}>
            <div className={style.news_country}>{news.country}</div>
            <div className={style.news_header}>
              <span className={style.news_category}>{news.category}</span>
              <span className={style.news_timestamp}>{news.timestamp}</span>
            </div>
            <h2 className={style.news_title}>{news.title}</h2>
            <p className={style.news_summary}>{news.summary.length>150? `${news.summary.slice(0, 150)}...`:news.summary}</p>
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}
