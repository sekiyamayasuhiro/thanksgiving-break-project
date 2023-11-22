document.addEventListener("DOMContentLoaded", function () {
    const languageButton = document.getElementById("languageButton");
    const pEnglish1 = document.getElementById("p_english1");
    const pEnglish2 = document.getElementById("p_english2");
    const pChinese1 = document.getElementById("p_chinese1");
    const pChinese2 = document.getElementById("p_chinese2");

    languageButton.addEventListener("click", function () {
      pEnglish1.classList.toggle("hidden");
      pEnglish2.classList.toggle("hidden");
      pChinese1.classList.toggle("hidden");
      pChinese2.classList.toggle("hidden");
    });
  });
