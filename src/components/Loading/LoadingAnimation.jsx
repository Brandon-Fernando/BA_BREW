import { useEffect, useState } from "react";

const frames = [
  "/Loading/frame-1.png",
  "/Loading/frame-2.png",
  "/Loading/frame-3.png",
  "/Loading/frame-4.png",
]; // Put these files in public/frames.

function LoadingAnimation({ isLoading }) {
  const [frame, setFrame] = useState(0);

  useEffect(() => {
    if (!isLoading) return;

    setFrame(0);

    // Preload the images.
    frames.forEach((src) => {
      const image = new Image();
      image.src = src;
    });

    const timer = setInterval(() => {
      setFrame((current) => (current + 1) % frames.length);
    }, 130); // 10 frames per second

    return () => clearInterval(timer);
  }, [isLoading]);

  if (!isLoading) return null;

  return (
    <img
      src={frames[frame]}
      alt="Loading…"
      width={180}
      height={180}
      style={{ objectFit: "contain" }}
    />
  );
}

export default LoadingAnimation;