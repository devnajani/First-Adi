import { useState, useEffect } from "react";

export default function Slider() {
  const images = [
    "https://source.unsplash.com/random/1600x500?red",
    "https://source.unsplash.com/random/1600x500?business",
    "https://source.unsplash.com/random/1600x500?technology"
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const slide = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, 3000);

    return () => clearInterval(slide);
  }, []);

  return (
    <div className="slider">
      <img src={images[index]} alt="slider" />
    </div>
  );
}
