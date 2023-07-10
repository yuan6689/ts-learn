const ul = Array.from(document.querySelectorAll("a"));

let currentTime = 0;

const totalTime = ul.reduce((pre, item, index) => {
  // console.log(index, item.querySelector("img").style.display);
  const img = item.querySelector("img") as HTMLImageElement;
  if (item !== null && img.style.display !== "none") {
    currentTime = pre;
  }

  const duration = item.querySelector(".duration") as HTMLElement;

  let [mins, secs] = duration.innerText.split(":");
  pre += +mins * 60 + +secs;
  return pre;
}, 0);

const totalHour = Math.floor(totalTime / 3600);
const totalMinute = Math.floor((totalTime % 3600) / 60);
const totalSecond = totalTime % 60;

console.log(currentTime, totalTime, currentTime / totalTime);
