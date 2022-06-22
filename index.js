const ques = document.getElementsByClassName("questions");
const ans = document.querySelectorAll(".hide");
var i;
for (i = 0; i < ques.length; i++) {
  ques[i].addEventListener("click", function () {
    this.classList.toggle("active");
    ans[i].classList.toggle("answer");
  });
}
