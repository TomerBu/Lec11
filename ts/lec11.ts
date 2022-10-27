import { Color, capRGB } from "./color.js";

const redInput = document.getElementById("red-input") as HTMLInputElement;
const greenInput = document.getElementById("green-input") as HTMLInputElement;
const blueInput = document.getElementById("blue-input") as HTMLInputElement;

const box = document.getElementById("box") as HTMLDivElement;

const allInputs = [redInput, greenInput, blueInput];

function rgb() {
  //cap red to min of value or 255 (if red > 255 => red = 255)
  //cap  r, g, b are between 0 to 255
  const [red, green, blue] = capRGB(
    Number(redInput.value),
    Number(greenInput.value),
    Number(blueInput.value)
  );

  const c = new Color(red, green, blue);
  const hexColor = c.hex();
  const rgbColor = c.rgb();
  box.innerHTML = rgbColor + "<br>" + hexColor;

  box.style.background = rgbColor;

  return c;
}

allInputs.forEach((i) => {
  i.addEventListener("input", (e) => {
    rgb();
    //console.log(e.target);
  });
});

box.addEventListener("click", () => {
  const color = rgb();
  alert(color.r + ', ' + color.g + ', ' + color.b);//?object!
});




