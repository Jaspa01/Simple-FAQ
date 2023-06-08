const questions = document.querySelectorAll(".question");

questions.forEach(function(queries) {
  const btn = queries.querySelector(".btn")

  btn.addEventListener("click", function() {
    queries.classList.toggle("show-text");
  });
});