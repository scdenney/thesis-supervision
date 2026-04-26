document.addEventListener("DOMContentLoaded", () => {
  document.documentElement.classList.add("has-js");

  const siteHeader = document.querySelector(".site-header");
  const siteNav = document.querySelector(".site-nav");
  const mobileNavToggle = document.querySelector(".mobile-nav-toggle");
  const navDropdowns = Array.from(
    document.querySelectorAll(".site-nav .nav-dropdown"),
  );
  const tocLinks = Array.from(
    document.querySelectorAll(".page-toc a[href^='#']"),
  );
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
      if (
        event.target.closest(".site-nav") ||
        event.target.closest(".mobile-nav-toggle")
      )
        return;
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

        document.body.classList.toggle(
          "toc-open",
          sidebar.classList.contains("is-open"),
        );
        tocToggle.setAttribute(
          "aria-expanded",
          String(sidebar.classList.contains("is-open")),
        );
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

  const methodVisuals = {
    chooser: `
	      <svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg" focusable="false">
	        <rect width="320" height="180" fill="#f8fbf3"/>
	        <path d="M68 52h72c17 0 30 13 30 30v16c0 17 13 30 30 30h52" fill="none" stroke="#5E7A2F" stroke-width="8" stroke-linecap="round"/>
	        <path d="M68 128h54c17 0 30-13 30-30V82c0-17 13-30 30-30h70" fill="none" stroke="#F4A731" stroke-width="8" stroke-linecap="round"/>
	        <rect x="28" y="34" width="74" height="42" rx="8" fill="#ffffff" stroke="#d9dfcf"/>
	        <rect x="28" y="104" width="74" height="42" rx="8" fill="#ffffff" stroke="#d9dfcf"/>
	        <rect x="218" y="34" width="74" height="42" rx="8" fill="#ffffff" stroke="#d9dfcf"/>
	        <rect x="218" y="104" width="74" height="42" rx="8" fill="#ffffff" stroke="#d9dfcf"/>
	        <circle cx="65" cy="55" r="9" fill="#2C3527"/>
	        <circle cx="65" cy="125" r="9" fill="#5E7A2F"/>
	        <path d="M242 53h22M242 123h22M52 70h26M52 140h26" stroke="#6B5D4F" stroke-width="5" stroke-linecap="round"/>
	      </svg>`,
    corpus: `
	      <svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg" focusable="false">
	        <rect width="320" height="180" fill="#f8fbf3"/>
	        <path d="M34 58h88l13 17h151v75H34z" fill="#ffffff" stroke="#d9dfcf" stroke-width="3" stroke-linejoin="round"/>
	        <path d="M50 84h220M50 110h178M50 136h206" stroke="#6B5D4F" stroke-width="6" stroke-linecap="round"/>
	        <circle cx="234" cy="110" r="26" fill="#fff4dd" stroke="#F4A731" stroke-width="4"/>
	        <path d="M222 110l9 9 18-21" fill="none" stroke="#2C3527" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
	        <rect x="56" y="36" width="72" height="28" rx="6" fill="#5E7A2F"/>
	      </svg>`,
    compare: `
	      <svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg" focusable="false">
	        <rect width="320" height="180" fill="#f8fbf3"/>
	        <rect x="42" y="35" width="92" height="110" rx="8" fill="#ffffff" stroke="#d9dfcf" stroke-width="3"/>
	        <rect x="186" y="35" width="92" height="110" rx="8" fill="#ffffff" stroke="#d9dfcf" stroke-width="3"/>
	        <path d="M72 60h32M72 82h44M72 104h26M216 60h32M216 82h28M216 104h44" stroke="#6B5D4F" stroke-width="6" stroke-linecap="round"/>
	        <path d="M146 70h28M146 110h28" stroke="#F4A731" stroke-width="7" stroke-linecap="round"/>
	        <path d="M166 64l9 6-9 6M154 104l-9 6 9 6" fill="none" stroke="#F4A731" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
	      </svg>`,
    trace: `
	      <svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg" focusable="false">
	        <rect width="320" height="180" fill="#f8fbf3"/>
	        <path d="M52 92h216" stroke="#d9dfcf" stroke-width="8" stroke-linecap="round"/>
	        <circle cx="68" cy="92" r="16" fill="#2C3527"/>
	        <circle cx="132" cy="92" r="16" fill="#5E7A2F"/>
	        <circle cx="196" cy="92" r="16" fill="#F4A731"/>
	        <circle cx="260" cy="92" r="16" fill="#ffffff" stroke="#2C3527" stroke-width="5"/>
	        <path d="M80 62h48M144 122h52M208 62h48" stroke="#6B5D4F" stroke-width="6" stroke-linecap="round"/>
	      </svg>`,
    frame: `
	      <svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg" focusable="false">
	        <rect width="320" height="180" fill="#f8fbf3"/>
	        <rect x="54" y="32" width="212" height="116" rx="8" fill="#ffffff" stroke="#d9dfcf" stroke-width="3"/>
	        <path d="M80 62h88M80 88h160M80 114h124" stroke="#6B5D4F" stroke-width="7" stroke-linecap="round"/>
	        <rect x="70" y="49" width="108" height="28" rx="5" fill="none" stroke="#F4A731" stroke-width="4"/>
	        <rect x="70" y="100" width="146" height="28" rx="5" fill="none" stroke="#5E7A2F" stroke-width="4"/>
	      </svg>`,
    discourse: `
	      <svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg" focusable="false">
	        <rect width="320" height="180" fill="#f8fbf3"/>
	        <path d="M54 48h126a18 18 0 0 1 18 18v32a18 18 0 0 1-18 18H99l-32 26 8-26H54a18 18 0 0 1-18-18V66a18 18 0 0 1 18-18z" fill="#ffffff" stroke="#d9dfcf" stroke-width="3"/>
	        <path d="M144 74h124a18 18 0 0 1 18 18v26a18 18 0 0 1-18 18h-30l8 22-29-22h-73a18 18 0 0 1-18-18V92a18 18 0 0 1 18-18z" fill="#fff4dd" stroke="#F4A731" stroke-width="3"/>
	        <path d="M68 76h86M68 96h58M158 102h82M158 120h52" stroke="#6B5D4F" stroke-width="6" stroke-linecap="round"/>
	      </svg>`,
    preprocess: `
	      <svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg" focusable="false">
	        <rect width="320" height="180" fill="#f8fbf3"/>
	        <rect x="34" y="48" width="64" height="70" rx="8" fill="#ffffff" stroke="#d9dfcf" stroke-width="3"/>
	        <rect x="128" y="48" width="64" height="70" rx="8" fill="#ffffff" stroke="#d9dfcf" stroke-width="3"/>
	        <rect x="222" y="48" width="64" height="70" rx="8" fill="#ffffff" stroke="#d9dfcf" stroke-width="3"/>
	        <path d="M104 84h18M198 84h18" stroke="#F4A731" stroke-width="7" stroke-linecap="round"/>
	        <path d="M117 76l10 8-10 8M211 76l10 8-10 8" fill="none" stroke="#F4A731" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
	        <path d="M52 70h28M52 91h20M146 70h28M146 91h28M240 70h28M240 91h16" stroke="#6B5D4F" stroke-width="6" stroke-linecap="round"/>
	      </svg>`,
    topics: `
	      <svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg" focusable="false">
	        <rect width="320" height="180" fill="#f8fbf3"/>
	        <circle cx="91" cy="82" r="34" fill="#ffffff" stroke="#d9dfcf" stroke-width="3"/>
	        <circle cx="174" cy="68" r="26" fill="#fff4dd" stroke="#F4A731" stroke-width="4"/>
	        <circle cx="214" cy="118" r="35" fill="#ffffff" stroke="#5E7A2F" stroke-width="4"/>
	        <circle cx="129" cy="124" r="19" fill="#2C3527"/>
	        <path d="M76 82h30M160 68h28M196 118h36" stroke="#6B5D4F" stroke-width="6" stroke-linecap="round"/>
	      </svg>`,
    sentiment: `
	      <svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg" focusable="false">
	        <rect width="320" height="180" fill="#f8fbf3"/>
	        <path d="M48 128h226" stroke="#d9dfcf" stroke-width="6" stroke-linecap="round"/>
	        <rect x="66" y="82" width="32" height="46" rx="5" fill="#2C3527"/>
	        <rect x="122" y="58" width="32" height="70" rx="5" fill="#5E7A2F"/>
	        <rect x="178" y="96" width="32" height="32" rx="5" fill="#F4A731"/>
	        <path d="M232 96c12-22 36-22 48 0M238 102c8 11 28 11 36 0" fill="none" stroke="#6B5D4F" stroke-width="6" stroke-linecap="round"/>
	      </svg>`,
    embeddings: `
	      <svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg" focusable="false">
	        <rect width="320" height="180" fill="#f8fbf3"/>
	        <path d="M92 76l56 38 72-54M148 114l70 24M92 76l-32 58M220 60l36 68" stroke="#d9dfcf" stroke-width="5" stroke-linecap="round"/>
	        <circle cx="92" cy="76" r="16" fill="#2C3527"/>
	        <circle cx="148" cy="114" r="14" fill="#5E7A2F"/>
	        <circle cx="220" cy="60" r="17" fill="#F4A731"/>
	        <circle cx="60" cy="134" r="13" fill="#ffffff" stroke="#5E7A2F" stroke-width="4"/>
	        <circle cx="256" cy="128" r="15" fill="#ffffff" stroke="#2C3527" stroke-width="4"/>
	      </svg>`,
    ai: `
	      <svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg" focusable="false">
	        <rect width="320" height="180" fill="#f8fbf3"/>
	        <rect x="42" y="38" width="236" height="104" rx="8" fill="#2C3527"/>
	        <path d="M70 72l22 18-22 18M112 111h58" fill="none" stroke="#F4A731" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
	        <rect x="184" y="62" width="60" height="14" rx="5" fill="#ffffff" opacity="0.9"/>
	        <rect x="184" y="88" width="44" height="14" rx="5" fill="#ffffff" opacity="0.65"/>
	        <rect x="184" y="114" width="70" height="14" rx="5" fill="#ffffff" opacity="0.5"/>
	      </svg>`,
  };

  document.querySelectorAll("[data-method-visual]").forEach((visual) => {
    const type = visual.dataset.methodVisual;
    visual.innerHTML = methodVisuals[type] || methodVisuals.chooser;
  });

  const methodFilterButtons = Array.from(
    document.querySelectorAll("[data-method-filter]"),
  );
  const methodCards = Array.from(
    document.querySelectorAll("[data-method-groups]"),
  );

  if (methodFilterButtons.length && methodCards.length) {
    methodFilterButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const filter = button.dataset.methodFilter;

        methodFilterButtons.forEach((other) => {
          other.classList.toggle("is-active", other === button);
        });

        methodCards.forEach((card) => {
          const groups = (card.dataset.methodGroups || "").split(/\s+/);
          const isVisible = filter === "all" || groups.includes(filter);
          card.hidden = !isVisible;
          card.classList.toggle("is-filtered-out", !isVisible);
        });
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
      if (goal === "measure" || material === "numbers")
        return routes.computational;
      if (
        goal === "interpret" ||
        goal === "explain" ||
        material === "cases" ||
        material === "interviews"
      ) {
        return routes.qualitative;
      }
      if (code === "comfortable" && material === "texts" && goal !== "collect")
        return routes.computational;
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

  const copyButtons = Array.from(
    document.querySelectorAll("[data-copy-target]"),
  );

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

  const workflowActions = Array.from(
    document.querySelectorAll("[data-workflow-target]"),
  );

  workflowActions.forEach((button) => {
    button.setAttribute("aria-pressed", "false");

    button.addEventListener("click", () => {
      const target = document.getElementById(button.dataset.workflowTarget);
      const promptCard = target ? target.closest(".prompt-card") : null;

      workflowActions.forEach((other) => {
        const isCurrent = other === button;
        other.classList.toggle("is-active", isCurrent);
        other.setAttribute("aria-pressed", String(isCurrent));
      });

      document
        .querySelectorAll(".prompt-card.is-highlighted")
        .forEach((card) => {
          card.classList.remove("is-highlighted");
        });

      if (!promptCard) return;

      promptCard.classList.add("is-highlighted");
      promptCard.scrollIntoView({ behavior: "smooth", block: "center" });
    });
  });
});
