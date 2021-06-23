import "./styles.css";

for (var num = 1; num < 10; num++) {
  var elm = document.createElement("button");
  elm.innerHTML = num;
  elm.setAttribute("id", num);
  elm.setAttribute("class", "circle");
  elm.setAttribute("onclick", "remove()");
  document.getElementById("main").appendChild(elm);

  var left_pos = 10;
  var top_pos = 100;

  left_pos = left_pos + Math.floor(Math.random() * 400);
  top_pos = top_pos + Math.floor(Math.random() * 600);

  document.getElementById(num).style.left = "" + left_pos + "px";
  document.getElementById(num).style.top = "" + top_pos + "px";
}

document.remove = function () {
  document.getElementById("main").removeChild(document.getElementById("1"));
};
