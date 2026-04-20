document.addEventListener("DOMContentLoaded", () => {
  document.documentElement.classList.add("has-js");

  const siteHeader = document.querySelector(".site-header");
  const siteNav = document.querySelector(".site-nav");
  const mobileNavToggle = document.querySelector(".mobile-nav-toggle");
  const navDropdowns = Array.from(document.querySelectorAll(".site-nav .nav-dropdown"));
  const tocLinks = Array.from(document.querySelectorAll(".page-toc a[href^='#']"));
  const headings = tocLinks
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);
  const sidebar = document.querySelector(".page-sidebar");
  const toc = document.querySelector(".page-toc");
  const mobileNavMedia = window.matchMedia("(max-width: 760px)");
  let tocToggle = null;

  const setMobileNavOpen = (isOpen) => {
    if (!siteHeader || !mobileNavToggle) return;

    siteHeader.classList.toggle("is-nav-open", isOpen);
    mobileNavToggle.setAttribute("aria-expanded", String(isOpen));

    if (!isOpen) {
      navDropdowns.forEach((dropdown) => {
        dropdown.open = false;
      });
    }
  };

  if (mobileNavToggle && siteHeader && siteNav) {
    mobileNavToggle.addEventListener("click", () => {
      const willOpen = !siteHeader.classList.contains("is-nav-open");
      setMobileNavOpen(willOpen);
    });

    siteNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        if (mobileNavMedia.matches) setMobileNavOpen(false);
      });
    });

    const syncMobileNav = () => {
      if (!mobileNavMedia.matches) {
        setMobileNavOpen(false);
      }
    };

    window.addEventListener("resize", syncMobileNav);
    syncMobileNav();
  }

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
      if (event.target.closest(".site-nav") || event.target.closest(".mobile-nav-toggle")) return;
      navDropdowns.forEach((dropdown) => {
        dropdown.open = false;
      });
      if (mobileNavMedia.matches && !event.target.closest(".site-header")) {
        setMobileNavOpen(false);
      }
    });

    document.addEventListener("keydown", (event) => {
      if (event.key !== "Escape") return;
      navDropdowns.forEach((dropdown) => {
        dropdown.open = false;
      });
      if (sidebar) {
        sidebar.classList.remove("is-open");
        document.body.classList.remove("toc-open");
        if (tocToggle) tocToggle.setAttribute("aria-expanded", "false");
      }
      setMobileNavOpen(false);
    });
  }

  if (sidebar && toc) {
    sidebar.classList.add("is-collapsible");

    const title = sidebar.querySelector(".page-sidebar-title");
    const layout = sidebar.closest(".page-layout");
    if (title) {
      tocToggle = document.createElement("button");
      tocToggle.type = "button";
      tocToggle.className = "toc-toggle";
      tocToggle.setAttribute("aria-expanded", "false");
      tocToggle.textContent = "Browse sections";

      if (layout) {
        layout.insertAdjacentElement("beforebegin", tocToggle);
      } else {
        title.insertAdjacentElement("afterend", tocToggle);
      }

      const syncTOCState = () => {
        const isDesktop = window.matchMedia("(min-width: 901px)").matches;
        if (isDesktop) {
          sidebar.classList.remove("is-open");
          document.body.classList.remove("toc-open");
          tocToggle.setAttribute("aria-expanded", "false");
          return;
        }

        document.body.classList.toggle("toc-open", sidebar.classList.contains("is-open"));
        tocToggle.setAttribute("aria-expanded", String(sidebar.classList.contains("is-open")));
      };

      tocToggle.addEventListener("click", () => {
        sidebar.classList.toggle("is-open");
        syncTOCState();
      });

      window.addEventListener("resize", syncTOCState);
      syncTOCState();
    }

    sidebar.addEventListener("click", (event) => {
      if (!window.matchMedia("(max-width: 900px)").matches) return;
      if (event.target !== sidebar) return;
      sidebar.classList.remove("is-open");
      document.body.classList.remove("toc-open");
      if (tocToggle) tocToggle.setAttribute("aria-expanded", "false");
    });

    tocLinks.forEach((link) => {
      link.addEventListener("click", () => {
        if (window.matchMedia("(max-width: 900px)").matches) {
          sidebar.classList.remove("is-open");
          document.body.classList.remove("toc-open");
          if (tocToggle) tocToggle.setAttribute("aria-expanded", "false");
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
