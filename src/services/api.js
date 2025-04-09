import axios from "axios";

export const getArticleSummary = async (articleUrl) => {
  const options = {
    method: "GET",
    url: "https://article-extractor-and-summarizer.p.rapidapi.com/summarize",
    params: {
      url: articleUrl,
      lang: "en",
      engine: "2",
    },
    headers: {
      "x-rapidapi-key": "ee9cbea6b3msh54f28bf045a41e2p1cd866jsn140554b52e76",
      "x-rapidapi-host": "article-extractor-and-summarizer.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch summary:", error);
    throw error;
  }
};
