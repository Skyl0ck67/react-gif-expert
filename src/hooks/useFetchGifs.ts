import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

interface GifItem {
  id: string;
  title: string;
  url: string;
}

const useFetchGifs = (categories: string) => {
  const [images, setImages] = useState<GifItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const getImages = async () => {
    const newImages = await getGifs(categories);
    setImages(newImages);
    setIsLoading(false);
  };
  useEffect(() => {
    getImages();
  }, []);
  return {
    images,
    isLoading,
  };
};

export default useFetchGifs;
