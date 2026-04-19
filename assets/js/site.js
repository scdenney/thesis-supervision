document.addEventListener("DOMContentLoaded", () => {
  const tocLinks = Array.from(document.querySelectorAll(".page-toc a[href^='#']"));
  const headings = tocLinks
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);
  const sidebar = document.querySelector(".page-sidebar");
  const toc = document.querySelector(".page-toc");

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

  if (!tocLinks.length || !headings.length || typeof IntersectionObserver !== "function") {
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

  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

      if (visible.length) {
        activate(visible[0].target.id);
      }
    },
    {
      rootMargin: "-20% 0px -65% 0px",
      threshold: [0, 1],
    }
  );

  headings.forEach((heading) => observer.observe(heading));
});
