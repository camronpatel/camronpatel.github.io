//jQuery and accordion
document.addEventListener("DOMContentLoaded", () => {
    if (typeof $ !== "undefined") {
      if ($("#accordion").length) {
        $("#accordion").accordion({
          collapsible: true,
          heightStyle: "content"
        });
      }
      if ($("#faq-accordion").length) {
        $("#faq-accordion").accordion({
          collapsible: true,
          heightStyle: "content"
        });
      }
    }
  
    //AJAX: Load random tip
    const tipBtn = document.getElementById("load-tip");
    const tipOutput = document.getElementById("js-tip");
    if (tipBtn && tipOutput) {
      tipBtn.addEventListener("click", () => {
        fetch("tips.json")
          .then((res) => res.json())
          .then((data) => {
            const tip = data.tips[Math.floor(Math.random() * data.tips.length)];
            tipOutput.textContent = tip;
          })
          .catch(() => {
            tipOutput.textContent = "Failed to load tip.";
          });
      });
    }
  
    //Quiz 
    const quizForm = document.getElementById("quiz-form");
    const quizResult = document.getElementById("quiz-result");
    if (quizForm && quizResult) {
      quizForm.addEventListener("submit", (e) => {
        e.preventDefault();
        let score = 0;
        if (quizForm.q1.value === "let") score++;
        if (quizForm.q2.value === "function") score++;
        if (quizForm.q3.value === "012") score++;
        if (quizForm.q4.value === "sum") score++;
        if (quizForm.q5.value === "yes") score++;

        quizResult.textContent = `You scored ${score}/5`;
      });
    }
  });
  