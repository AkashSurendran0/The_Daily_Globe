import { newsData } from "../../../../components/newsData";

export async function GET(req, {params}) {
    const country = params.country;
    if (country == "global" || !country) {
        return Response.json({ news: newsData });
    }

    const news = newsData.filter((news) => news.country.toLowerCase() == country);
    return Response.json({ news });
}
