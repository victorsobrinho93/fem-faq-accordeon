function Question(target) {
  this.state = false;
  this.question = target.querySelector(".question");
  this.answer = target.querySelector(".answer");
  this.answer.style.display = "none";
  this.icon = document.createElement("img");
  this.icon.setAttribute("src", "./assets/images/icon-plus.svg");
  this.question.appendChild(this.icon);

  this.setState = function () {
    this.state = !this.state;
    if (this.state) {
      this.question
        .querySelector("img")
        .setAttribute("src", "./assets/images/icon-minus.svg");
      this.answer.style.display = "flex";
    } else {
      this.question
        .querySelector("img")
        .setAttribute("src", "./assets/images/icon-plus.svg");
      this.answer.style.display = "none";
    }
  };

  target.addEventListener("click", () => this.setState());
}

Array.from(document.getElementsByClassName("qa-section")).forEach(
  (e) => new Question(e)
);
