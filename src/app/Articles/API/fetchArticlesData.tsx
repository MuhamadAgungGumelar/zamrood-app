export default async function fetchArticlesData() {
  const res = await fetch("https://pandooin.com/api/zamrood/article");
  const data = await res.json();
  //console.log("Fetched Data:", data); // Add this line to check the data
  return data;
}
