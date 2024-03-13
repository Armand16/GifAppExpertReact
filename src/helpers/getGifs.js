export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=MoQG9CfjBOXrpeRbvEAnnH3AU4UOEbFJ&q=${category}&limit=10`;
  const resp = await fetch(url);
  const { data = [] } = await resp.json();

  const images = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));
  return images;
};
