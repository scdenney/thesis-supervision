document.addEventListener("DOMContentLoaded", () => {
  document.documentElement.classList.add("has-js");

  const siteHeader = document.querySelector(".site-header");
  const siteNav = document.querySelector(".site-nav");
  const mobileNavToggle = document.querySelector(".mobile-nav-toggle");
  const navDropdowns = Array.from(document.querySelectorAll(".site-nav .nav-dropdown"));
  const tocLinks = Array.from(document.querySelectorAll(".page-toc a[href^='#']"));
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

  const methodRouter = document.querySelector(".method-router");
  const methodRouterForm = document.querySelector("[data-method-router]");

  if (methodRouter && methodRouterForm) {
    const resultTitle = methodRouter.querySelector("[data-router-title]");
    const resultCopy = methodRouter.querySelector("[data-router-copy]");
    const resultLink = methodRouter.querySelector("[data-router-link]");
    const routes = {
      corpus: {
        title: "Start with corpus planning",
        copy: "Define what you will collect, how you will bound it, and how you will document it. This is the best first stop for most text-based projects.",
        label: "Open Building a Corpus",
        href: methodRouter.dataset.routeCorpus,
      },
      qualitative: {
        title: "Start with qualitative approaches",
        copy: "Your project depends on interpretation, case logic, frames, discourse, or causal explanation. Use the qualitative route to choose the closest fit.",
        label: "Open Qualitative Approaches",
        href: methodRouter.dataset.routeQualitative,
      },
      computational: {
        title: "Start with computational methods",
        copy: "You need to measure or model patterns across many documents. Begin with preprocessing, then choose topic analysis, sentiment, or embeddings.",
        label: "Open Computational & Quantitative",
        href: methodRouter.dataset.routeComputational,
      },
      ai: {
        title: "Start with AI & Code",
        copy: "Your immediate problem is workflow: organizing files, writing scripts, cleaning text, checking outputs, or documenting an agent-assisted process.",
        label: "Open AI & Code",
        href: methodRouter.dataset.routeAi,
      },
    };

    const chooseRoute = () => {
      const form = new FormData(methodRouterForm);
      const material = form.get("material");
      const goal = form.get("goal");
      const code = form.get("code");

      if (goal === "workflow") return routes.ai;
      if (goal === "measure" || material === "numbers") return routes.computational;
      if (goal === "interpret" || goal === "explain" || material === "cases" || material === "interviews") {
        return routes.qualitative;
      }
      if (code === "comfortable" && material === "texts" && goal !== "collect") return routes.computational;
      return routes.corpus;
    };

    const updateRouter = () => {
      const route = chooseRoute();
      if (!resultTitle || !resultCopy || !resultLink || !route) return;

      resultTitle.textContent = route.title;
      resultCopy.textContent = route.copy;
      resultLink.textContent = route.label;
      resultLink.href = route.href;
    };

    methodRouterForm.addEventListener("change", updateRouter);
    updateRouter();
  }

  const copyButtons = Array.from(document.querySelectorAll("[data-copy-target]"));

  copyButtons.forEach((button) => {
    button.addEventListener("click", async () => {
      const target = document.getElementById(button.dataset.copyTarget);
      if (!target) return;

      const text = target.textContent.trim();
      try {
        await navigator.clipboard.writeText(text);
        button.textContent = "Copied";
      } catch (error) {
        const fallback = document.createElement("textarea");
        fallback.value = text;
        fallback.setAttribute("readonly", "");
        fallback.style.position = "fixed";
        fallback.style.opacity = "0";
        document.body.appendChild(fallback);
        fallback.select();
        document.execCommand("copy");
        fallback.remove();
        button.textContent = "Copied";
      }

      window.setTimeout(() => {
        button.textContent = "Copy";
      }, 1800);
    });
  });

});
