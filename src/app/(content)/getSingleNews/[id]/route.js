import { newsData } from "../../../../components/newsData"

export async function GET(req, {params}) {
    const id=params.id  
    const news=newsData.filter(news=>news.id==id)
    return Response.json({news: news[0]})
}