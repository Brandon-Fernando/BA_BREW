
const ESPRESSO = ["1 shot", "2 shots"];
const TYPE = ["iced", "hot"];
const COLD_FOAM = [
	"None",
	"Vanilla", 
  "Blueberry",
	"Maple Cinnamon", 
	"Caramel", 
  "Coconut", 
  "Pumpkin Spiced", 
  "Cookie Butter", 
  "Gingerbread"
];
const MILK = ["oat", "2%", "whole"];

export const CUSTOMIZE_OPTIONS = [
  {
    label: "shot options", 
    options: ESPRESSO
  }, 

  {
    label: "type", 
    options: TYPE
  }, 

  { 
    label: "cold foam", 
    options: COLD_FOAM
  }
]

export const SPECIALTY_COFFEES = [
  {
    id: "vanilla",
    title: "Vanilla", 
    options: CUSTOMIZE_OPTIONS, 
    menu: "specialty coffees"
  }, 
  {
    id: "pumpkin-spiced",
    title: "Pumpkin Spiced", 
    options: CUSTOMIZE_OPTIONS, 
    menu: "specialty coffees"
  }, 
  {
    id: "coconut", 
    title: "Coconut", 
    options: CUSTOMIZE_OPTIONS, 
    menu: "specialty coffees"
  }, 
  {
    id: "french-toast",
    title: "Maple Cinnamon", 
    options: CUSTOMIZE_OPTIONS, 
    menu: "specialty coffees"
  }, 
  {
    id: "cookie-butter",
    title: "Cookie Butter", 
    options: CUSTOMIZE_OPTIONS, 
    menu: "specialty coffees"
  }, 
  {
    id:"gingerbread"
  },
  {
    id: "caramel"
  }, 
  {
    id: "blueberry"
  },
  { 
    id: "fog-breaker"
  }
]