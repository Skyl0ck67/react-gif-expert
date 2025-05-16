interface imgGifs {
  id: string;
  title: string;
  images: { downsized_medium: { url: string } };
}

export const getGifs = async (categories: string) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=7N3CIyGxBy5AY8jHAMUNXbtAyrLrSo8F&q= =
      ${categories}&limit=10`;
  const resp = await fetch(url);
  const { data } = await resp.json();
  const gifs = data.map((img: imgGifs) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));
  return gifs;
};
