var e,
  divs = document.getElementsByTagName("div");
for (e in divs) {
  if (divs.hasOwnProperty(e)) {
    divs[e].onclick = function () {
      alert("click");
    };
  }
}
