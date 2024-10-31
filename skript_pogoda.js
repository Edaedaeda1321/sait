const spisok = document.querySelector(".spisok");
const poyv = spisok.querySelector(".poyv");
const strelka = spisok.querySelector(".strelka");
let vlaznost = "";
const one = spisok.querySelector("#one");
const two = spisok.querySelector("#two");
const three = spisok.querySelector("#three");
const vnytri = spisok.querySelector(".vnytri");

one.addEventListener("click", () => {
  vlaznost = "низкая";
  vnytri.textContent = vlaznost;
});
two.addEventListener("click", () => {
  vlaznost = "средняя";
  vnytri.textContent = vlaznost;
});
three.addEventListener("click", () => {
  vlaznost = "высокая";
  vnytri.textContent = vlaznost;
});

spisok.addEventListener("click", () => {
  poyv.classList.toggle("poyv_active");
  strelka.classList.toggle("strelka_active");
  spisok.classList.toggle("spisok_active");
});
