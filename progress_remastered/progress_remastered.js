const progressFill = document.createElement("div");
const progressBg = document.createElement("div");
progressBg.id="progressBg_RAW"
progressFill.id = "progressFill_RAW";
progressFill.style.cssText =
  "height:0.5em;position:fixed;top:0;left:10%;pointer-events:none;z-index:10000;";
progressBg.style.cssText=progressFill.style.cssText+"width:80%;";
progressBg.appendChild(progressFill)
document.body.appendChild(progressBg);
let scrollHeight = Math.max(
  document.body.scrollHeight,
  document.documentElement.scrollHeight,
);
// Visit www.rawcode55.wordpress.com for more!
const updateProgress = () => {
  const max = Math.max(scrollHeight - window.innerHeight, 0);
  progressFill.style.width = `${(window.scrollY / max) * 80}%`;
};
window.addEventListener("scroll", () => {
  updateProgress();
});
updateProgress();


