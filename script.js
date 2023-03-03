//your code here
const display=document.querySelector("#evaluatedText");

const counter=document.querySelector("#wordCount");


display.addEventListener("input", () => {
  let txt = display.value.trim();
  counter.textContent = txt.split(/\s+/).filter((item) => item).length;
});