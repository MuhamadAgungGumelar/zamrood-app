export default async function fetchProductsData() {
  const res = await fetch(
    "https://pandooin.com/api/zamrood/itinerary?highlight=true"
  );
  const data = await res.json();
  //console.log("Fetched Data:", data); // Add this line to check the data
  return data;
}
