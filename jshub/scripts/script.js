//Jquery 
document.addEventListener("DOMContentLoaded", () => {
    if (typeof $ !== "undefined" && $("#accordion").length) {
      $("#accordion").accordion();
    }
  
    //AJAX: Load a random tip
    const tipBtn = document.getElementById("load-tip");
    const tipOutput = document.getElementById("js-tip");
    if (tipBtn && tipOutput) {
      tipBtn.addEventListener("click", () => {
        fetch("tips.json")
          .then(response => response.json())
          .then(data => {
            const tip = data.tips[Math.floor(Math.random() * data.tips.length)];
            tipOutput.textContent = tip;
          })
          .catch(() => {
            tipOutput.textContent = "Failed to load tip.";
          });
      });
    }
  
    // Quiz 
    const quizForm = document.getElementById("quiz-form");
    const quizResult = document.getElementById("quiz-result");
    if (quizForm && quizResult) {
      quizForm.addEventListener("submit", function(e) {
        e.preventDefault();
        let score = 0;
        if (quizForm.q1.value === "let") score++;
        if (quizForm.q2.value === "function") score++;
        quizResult.textContent = `You scored ${score}/2`;
      });
    }
  
    //Code Editor
    const runJsBtn = document.getElementById("run-js");
    const codeInput = document.getElementById("code-input");
    const codeOutput = document.getElementById("code-output");
    if (runJsBtn && codeInput && codeOutput) {
      runJsBtn.addEventListener("click", () => {
        try {
          const result = eval(codeInput.value);
          codeOutput.textContent = result !== undefined ? result : "JS executed.";
        } catch (err) {
          codeOutput.textContent = `Error: ${err.message}`;
        }
      });
    }
  
    const renderHtmlBtn = document.getElementById("render-html");
    const htmlOutput = document.getElementById("html-output");
    if (renderHtmlBtn && codeInput && htmlOutput) {
      renderHtmlBtn.addEventListener("click", () => {
        htmlOutput.srcdoc = codeInput.value;
      });
    }
  });
  