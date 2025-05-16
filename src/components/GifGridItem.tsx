interface GifGridItemProps {
  id: string;
  title: string;
  url: string;
}

const GifGridItem = ({ url, title }: GifGridItemProps) => {
  return (
    <div className="card">
      <img src={url} alt={title}></img>
      <p>{title}</p>
    </div>
  );
};

export default GifGridItem;
