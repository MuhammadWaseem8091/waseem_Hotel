export default async function newsFeed() {
  const response = await fetch(
    "https://newsapi.org/v2/everything?q=bitcoin&from=2018-11-05&sortBy=publishedAt&apiKey=" +
      process.env.REACT_APP_API_KEY
  );
  const data = await response.json();
  return data.articles;
}
