
const ESPRESSO = ["1 shot", "2 shots"];
const TYPE = ["iced", "hot"];
const COLD_FOAM = [
	"None",
	"Vanilla", 
	"Ube", 
	"Maple Cinnamon", 
	"Caramel", 
	"Sweet Cream"
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