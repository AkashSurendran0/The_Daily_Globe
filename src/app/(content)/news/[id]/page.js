import Link from "next/link";
import '../style.css'

export default async function News({params}) {
    const id=(await params).id
    console.log(id)
    const res=await fetch(`http://localhost:3000/getSingleNews/${id}`)
    const data=await res.json()
    const news=data.news
    
    return (
        <div className="news-detail-page">
        <header className="top-header">
            <div className="header-container">
            <h1 className="app-name">The Daily Globe</h1>
            <Link className="home-button" href={"/"}>
                ← Back to Home
            </Link>
            </div>
        </header>

        {/* Main Content */}
        <main className="content-container">
            <h1 className="news-title">{news.title}</h1>

            <div className="news-meta">
            <div className="meta-left">
                <span className="news-category">{news.category}</span>
            </div>

            <div className="meta-right">
                <div className="timestamp">{news.timestamp}</div>
                <span className="country-tag">{news.country}</span>
            </div>
            </div>

            <article className="news-content">{news.summary}</article>
        </main>
        </div>
    );
}
