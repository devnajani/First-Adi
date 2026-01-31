import Slider from "./Slider";

export default function Hero() {
  return (
    <div className="hero">
      <h1>We Build Stunning Websites</h1>
      <p style={{ fontSize: 18, color: "#444" }}>
        Fast • Modern • Responsive • Professional
      </p>

      <Slider />
    </div>
  );
}
