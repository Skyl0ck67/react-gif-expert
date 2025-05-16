import GifGridItem from "./GifGridItem";
import useFetchGifs from "../hooks/useFetchGifs";

interface GifGridProps {
  categories: string;
}

const GifGrid = ({ categories }: GifGridProps) => {
  const { images, isLoading } = useFetchGifs(categories);

  return (
    <>
      <h3>{categories}</h3>
      {isLoading && <h2>Cargando..</h2>}
      <div className="card-grid">
        {images.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};

export default GifGrid;
