document.addEventListener("DOMContentLoaded", () => {
  const navDropdowns = Array.from(document.querySelectorAll(".site-nav .nav-dropdown"));
  const tocLinks = Array.from(document.querySelectorAll(".page-toc a[href^='#']"));
  const headings = tocLinks
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);
  const sidebar = document.querySelector(".page-sidebar");
  const toc = document.querySelector(".page-toc");

  if (navDropdowns.length) {
    navDropdowns.forEach((dropdown) => {
      const summary = dropdown.querySelector("summary");
      if (!summary) return;

      summary.addEventListener("click", () => {
        window.requestAnimationFrame(() => {
          if (!dropdown.open) return;

          navDropdowns.forEach((other) => {
            if (other !== dropdown) other.open = false;
          });
        });
      });
    });

    document.addEventListener("click", (event) => {
      if (event.target.closest(".site-nav")) return;
      navDropdowns.forEach((dropdown) => {
        dropdown.open = false;
      });
    });

    document.addEventListener("keydown", (event) => {
      if (event.key !== "Escape") return;
      navDropdowns.forEach((dropdown) => {
        dropdown.open = false;
      });
    });
  }

  if (sidebar && toc) {
    sidebar.classList.add("is-collapsible");

    const title = sidebar.querySelector(".page-sidebar-title");
    if (title) {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "toc-toggle";
      button.setAttribute("aria-expanded", "false");
      button.textContent = "Browse sections";
      title.insertAdjacentElement("afterend", button);

      const syncTOCState = () => {
        const isDesktop = window.matchMedia("(min-width: 901px)").matches;
        const isOpen = isDesktop || sidebar.classList.contains("is-open");
        sidebar.classList.toggle("is-open", isOpen);
        button.setAttribute("aria-expanded", String(isOpen));
      };

      button.addEventListener("click", () => {
        sidebar.classList.toggle("is-open");
        syncTOCState();
      });

      window.addEventListener("resize", syncTOCState);
      syncTOCState();
    }

    tocLinks.forEach((link) => {
      link.addEventListener("click", () => {
        if (window.matchMedia("(max-width: 900px)").matches) {
          sidebar.classList.remove("is-open");
          const toggle = sidebar.querySelector(".toc-toggle");
          if (toggle) toggle.setAttribute("aria-expanded", "false");
        }
      });
    });
  }

  if (!tocLinks.length || !headings.length) {
    return;
  }

  const activate = (id) => {
    tocLinks.forEach((link) => {
      const isActive = link.getAttribute("href") === `#${id}`;
      link.classList.toggle("is-active", isActive);
      if (isActive) {
        link.setAttribute("aria-current", "location");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  };

  const syncActiveHeading = () => {
    const offset = window.matchMedia("(max-width: 900px)").matches ? 108 : 132;
    let currentId = headings[0].id;

    headings.forEach((heading) => {
      if (heading.getBoundingClientRect().top - offset <= 0) {
        currentId = heading.id;
      }
    });

    activate(currentId);
  };

  tocLinks.forEach((link) => {
    link.addEventListener("click", () => {
      const targetId = link.getAttribute("href").slice(1);
      activate(targetId);
    });
  });

  syncActiveHeading();
  window.addEventListener("scroll", syncActiveHeading, { passive: true });
  window.addEventListener("resize", syncActiveHeading);
});
