import { useLayoutEffect, useRef } from "react"
import { CartTitle, DrinksTitle, MenuTitle } from "./TitleSvgs";

const titles = {
  drinks: DrinksTitle, 
  menu: MenuTitle,
  cart: CartTitle
}

const CursiveTitles = ({type}) => {
  const textRef = useRef(null);
  const Title = titles[type];

  useLayoutEffect(() => {
    if(!textRef.current) return;

    const paths = textRef.current.querySelectorAll("path");
    const animations = [];
    const speed = 100;
    let delay = 0;

    paths.forEach((path) => {
      const length = path.getTotalLength();
      const duration = (length / speed) * 500;

      path.style.strokeDasharray = `${length} ${length}`;
      path.style.strokeDashoffset = `${length}`;

      const animation = path.animate(
        [
          {strokeDashoffset: `${length}`}, 
          {strokeDashoffset: "0"}
        ], 
        {
          duration, 
          delay, 
          easing: "linear", 
          fill: "both"
        }
      );

      animations.push(animation);
      delay += duration;
    });

    return () => {
      animations.forEach((animation) => animation.cancel());

      paths.forEach((path) => {
        path.style.strokeDasharray = "";
        path.style.strokeDashoffset = "";
      });
    }
  }, [type]);

  if (!Title) return null;

  return (
    <div 
      ref={textRef}
      role="img"
      aria-label={type}
    >
      <Title />
    </div>
  )
}

export default CursiveTitles;