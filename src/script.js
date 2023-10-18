var btn = document.querySelector("#addBtn");
var iStatus = document.querySelector("h4");
var flag = 0;

btn.addEventListener("click", () => {
  if (flag == 0) {
    iStatus.innerHTML = "Friend";
    iStatus.style.color = "#9FFF0C";
    flag = 1;
  } else {
    iStatus.innerHTML = "Unknown";
    iStatus.style.color = "#FF0000";
    flag = 0;
  }
});
