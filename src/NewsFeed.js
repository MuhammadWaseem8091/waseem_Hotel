export default async function newsFeed() {
  const response = await fetch(
    "https://newsapi.org/v2/everything?q=apple&from=2018-10-11&to=2018-10-11&sortBy=popularity&apiKey=" +
      process.env.REACT_APP_API_KEY
  );
  const data = await response.json();
  return data.articles;
}
