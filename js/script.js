function Question(element) {
  const iconPlus = "./assets/images/icon-plus.svg";
  const iconMinus = "./assets/images/icon-minus.svg";
  this.isExpanded = false;
  this.element = element;
  this.questionRow = this.element.querySelector(".question");
  this.answer = this.element.querySelector(".answer");
  this.answer.style.display = "none";
  this.icon = document.createElement("img");
  this.icon.setAttribute("src", iconPlus);
  this.questionRow.appendChild(this.icon);

  this.setState = function () {
    if (this.isExpanded) {
      this.questionRow.querySelector("img").setAttribute("src", iconMinus);
      this.element.querySelector(".answer").style.display = "flex";
    } else {
      this.questionRow.querySelector("img").setAttribute("src", iconPlus);
      this.element.querySelector(".answer").style.display = "none";
    }
  };

  this.element.addEventListener("click", (e) => {
    this.isExpanded = !this.isExpanded;
    this.setState();
  });
}

Array.from(document.getElementsByClassName("question-block")).forEach(
  (e) => new Question(e)
);
