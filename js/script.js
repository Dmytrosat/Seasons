document.addEventListener("DOMContentLoaded", () => {
  // Ініціалізація навігації в шапці
  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const season = link.getAttribute("data-season");
      activateSeason(season);
    });
  });

  // Активуємо літо за замовчуванням
  activateSeason("summer");
});

// Глобальна функція для перемикання сезонів (працює і з шапки, і з підвалу)
function switchSeason(seasonName) {
  activateSeason(seasonName);
}

function activateSeason(season) {
  // 1. Оновлення активного класу в навігації
  document.querySelectorAll(".nav-link").forEach((l) => {
    l.classList.toggle("active", l.getAttribute("data-season") === season);
  });

  // 2. Перемикання секцій
  document
    .querySelectorAll(".season-section")
    .forEach((s) => s.classList.remove("active"));
  const targetSection = document.getElementById(season);
  if (targetSection) targetSection.classList.add("active");

  // 3. Зміна фону body
  document.body.className = `bg-${season}`;

  // 4. Прокрутка до верху контенту
  window.scrollTo({ top: 0, behavior: "smooth" });
}
