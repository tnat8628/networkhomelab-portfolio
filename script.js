const toggle = document.getElementById("themeToggle");

toggle.addEventListener("click", () => {
  document.body.classList.toggle("light");
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, { threshold: 0.08 });

document.querySelectorAll(".card, .lab-row, .skill-group, .status-terminal").forEach(el => {
  el.style.opacity = "0";
  el.style.transform = "translateY(10px)";
  el.style.transition = "opacity .5s ease, transform .5s ease";
  observer.observe(el);
});

const style = document.createElement("style");
style.textContent = `
  .card.visible, .lab-row.visible, .skill-group.visible, .status-terminal.visible {
    opacity: 1 !important;
    transform: translateY(0) !important;
  }
  body.light {
    --bg: #f5f7f6;
    --panel: #ffffff;
    --panel-2: #f1f5f3;
    --text: #18201d;
    --muted: #5d6d66;
    --line: #d8e1dd;
    --accent: #087f4f;
    --accent-2: #126d9b;
  }
  body.light .topbar { background: rgba(245,247,246,.9); }
  body.light .scanline { display: none; }
`;
document.head.appendChild(style);
