const progress = document.createElement("progress");
progress.id = "pageProgress_RAW";
progress.style.cssText =
  "width:80%;height:1em;position:fixed;top:0;left:10%;pointer-events:none;z-index:9999";
document.body.appendChild(progress);
//Schauen Sie gerne mal bei rawcode55.wordpress.com vorbei!
let scrollHeight = Math.max(
  document.body.scrollHeight,
  document.documentElement.scrollHeight,
);
let ticking = false;
const updateProgress = () => {
  const max = Math.max(scrollHeight - window.innerHeight, 0);
  progress.max = max;
  progress.value = Math.min(Math.max(window.scrollY, 0), max);
  ticking = false;
};
window.addEventListener("scroll", () => {
  if (!ticking) {
    requestAnimationFrame(updateProgress);
    ticking = true;
  }
});
window.addEventListener("resize", () => {
  scrollHeight = Math.max(
    document.body.scrollHeight,
    document.documentElement.scrollHeight,
  );
  updateProgress();
});
updateProgress();
