// Set year
document.getElementById("year").textContent = new Date().getFullYear();

// Load projects from backend API
async function loadProjects() {
  try {
    const res = await fetch("/api/projects");
    const projects = await res.json();
    const container = document.getElementById("projects-grid");
    container.innerHTML = "";

    projects.forEach((p) => {
      const div = document.createElement("div");
      div.className = "project-card";
      div.innerHTML = `
        <div>
          <h3>${p.title}</h3>
          <p>${p.description}</p>
          <p class="project-meta">${p.stack.join(" • ")}</p>
        </div>
        <div class="project-links">
          ${p.demoUrl ? `<a href="${p.demoUrl}" target="_blank">Live Demo</a>` : ""}
          ${p.sourceUrl ? `<a href="${p.sourceUrl}" target="_blank">Source Code</a>` : ""}
        </div>
      `;
      container.appendChild(div);
    });
  } catch (err) {
    console.error(err);
  }
}

loadProjects();

// Contact form submission -> backend API
const form = document.getElementById("contact-form");
const statusEl = document.getElementById("contact-status");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  statusEl.textContent = "Sending...";
  const payload = {
    name: form.name.value,
    email: form.email.value,
    message: form.message.value,
  };

  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!res.ok) throw new Error("Request failed");
    statusEl.textContent = "Thanks for reaching out! You’ll get a reply soon.";
    form.reset();
  } catch (err) {
    statusEl.textContent = "Something went wrong. Please try again.";
    statusEl.style.color = "var(--danger)";
  }
});
