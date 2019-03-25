import axios from "axios";

const getImages = async term => {
  const results = await axios.get("https://api.unsplash.com/search/photos", {
    params: { query: term },
    headers: {
      Authorization:
        "Client-ID 7d819489482bb1c03ad9a58fa7c306492d3270aa6476622816207211d822c1f2"
    }
  });

  return results;
};

export default getImages;
