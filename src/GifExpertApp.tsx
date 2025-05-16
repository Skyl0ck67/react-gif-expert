import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

const GifExpertApp = () => {
  const [categories, setCategories] = useState(["Goku"]);

  const onAddCategory = (newCategory: string) => {
    if (categories.includes(newCategory)) return;
    console.log(newCategory);
    setCategories([newCategory, ...categories]);
  };
  return (
    <>
      <AddCategory onNewCategory={onAddCategory} />
      {categories.map((categories) => (
        <GifGrid key={categories} categories={categories} />
      ))}
    </>
  );
};

export default GifExpertApp;
