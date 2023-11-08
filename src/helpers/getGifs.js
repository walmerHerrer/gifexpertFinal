export const getGifs = async (categoria) => {
  const key = "DrU82YAfQbQyJa18SBqRQk51AdqNuNow";
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${categoria}&limit=12`;
  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));

  return gifs;
};
