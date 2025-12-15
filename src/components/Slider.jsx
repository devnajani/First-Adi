import { useState, useEffect } from "react";

export default function Slider() {
  const images = [
    "https://source.unsplash.com/random/1200x400?technology",
    "https://source.unsplash.com/random/1200x400?business",
    "https://source.unsplash.com/random/1200x400?nature",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="slider">
      <img src={images[index]} alt="slide" />
    </div>
  );
}
