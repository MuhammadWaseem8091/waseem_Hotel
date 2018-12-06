export default async function newsFeed() {
  const response = await fetch(
    "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=" +
      process.env.REACT_APP_API_KEY
  );
  const data = await response.json();
  return data.articles;
}
