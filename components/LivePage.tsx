"use client";

import { useEffect } from "react";
import Script from "next/script";
import { LiveHtml } from "./LiveHtml";
import { htmlClass } from "@/lib/live-html/chrome";

type JQ = {
  (sel: string): JQEl;
  fn: Record<string, unknown>;
};

type JQEl = {
  length: number;
  hasClass: (c: string) => boolean;
  slick: (opts?: Record<string, unknown> | string) => JQEl;
  on: (ev: string, fn: (...args: unknown[]) => void) => JQEl;
  each: (fn: (this: HTMLVideoElement) => void) => JQEl;
};

declare global {
  interface Window {
    jQuery?: JQ;
    $?: JQ;
  }
}

const PREV_ARROW =
  '<button type="button" class="slick-prev slick-arrow"><svg width="14" height="24" viewBox="0 0 14 24"><polyline fill="none" stroke="#000" stroke-width="1.4" points="12.775, 1 1.225, 12 12.775, 23"></polyline></svg></button>';
const NEXT_ARROW =
  '<button type="button" class="slick-next slick-arrow"><svg width="14" height="24" viewBox="0 0 14 24"><polyline fill="none" stroke="#000" stroke-width="1.4" points="1.225, 23 12.775, 12 1.225, 1"></polyline></svg></button>';

function initCarousels() {
  const $ = window.jQuery || window.$;
  if (!$ || typeof $.fn.slick !== "function") return;

  const main = $(".mainslider");
  if (main.length && main.hasClass("slick-initialized")) {
    // Destroy and rebuild if slide geometry is wrong (e.g. after resize / late layout)
    try {
      const active = document.querySelector(
        ".mainslider .slick-active",
      ) as HTMLElement | null;
      const left = active?.getBoundingClientRect().left ?? 0;
      if (Math.abs(left) > 40) {
        main.slick("unslick");
      } else {
        main.slick("setPosition");
        return;
      }
    } catch {
      /* continue to re-init */
    }
  }

  if (main.length && !main.hasClass("slick-initialized")) {
    main.slick({
      dots: true,
      arrows: true,
      infinite: true,
      speed: 1000,
      fade: true,
      cssEase: "linear",
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: false,
      prevArrow: PREV_ARROW,
      nextArrow: NEXT_ARROW,
    });

    let playGen = 0;

    const safePlay = (video: HTMLVideoElement, gen: number) => {
      video.muted = true;
      video.playsInline = true;
      const result = video.play();
      if (result && typeof result.then === "function") {
        result.catch((err: unknown) => {
          // Ignore AbortError from pause()/slide changes interrupting play()
          if (gen !== playGen) return;
          const name =
            err && typeof err === "object" && "name" in err
              ? String((err as { name: string }).name)
              : "";
          if (name === "AbortError") return;
        });
      }
    };

    const playActiveVideo = () => {
      const gen = ++playGen;
      const videos = document.querySelectorAll<HTMLVideoElement>(
        ".mainslider video",
      );
      const active = document.querySelector<HTMLVideoElement>(
        ".mainslider .slick-active video",
      );

      videos.forEach((video) => {
        video.muted = true;
        if (video === active) return;
        video.pause();
      });

      if (!active || gen !== playGen) return;

      // Reset only after pausing others; defer play so it isn't raced by pause()
      window.requestAnimationFrame(() => {
        if (gen !== playGen) return;
        try {
          if (active.currentTime > 0.15) active.currentTime = 0;
        } catch {
          /* ignore seek errors */
        }
        safePlay(active, gen);
      });
    };

    main.on("init", playActiveVideo);
    main.on("beforeChange", () => {
      playGen += 1;
      document
        .querySelectorAll<HTMLVideoElement>(".mainslider video")
        .forEach((video) => video.pause());
    });
    main.on("afterChange", playActiveVideo);
    window.setTimeout(playActiveVideo, 100);
    window.setTimeout(() => {
      try {
        main.slick("setPosition");
      } catch {
        /* ignore */
      }
    }, 300);
  }

  const footer = $(".footericon-wrapper");
  if (footer.length && footer.hasClass("slick-initialized")) {
    try {
      footer.slick("setPosition");
    } catch {
      /* ignore */
    }
  } else if (footer.length) {
    footer.slick({
      dots: false,
      arrows: false,
      infinite: true,
      speed: 1000,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            arrows: false,
            dots: false,
          },
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            dots: false,
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
      ],
    });
  }
}

function applyHtmlClasses() {
  const root = document.documentElement;
  // Merge live Enfold classes without wiping Avia-added classes (avia_desktop, js_active, …)
  htmlClass.split(/\s+/).filter(Boolean).forEach((c) => root.classList.add(c));
  root.classList.add("js_active", "avia_desktop");
  // Ensure Avia globals exist before footer scripts run event handlers
  const w = window as Window & { avia_is_mobile?: boolean };
  if (typeof w.avia_is_mobile === "undefined") {
    w.avia_is_mobile = false;
  }
  if (typeof (globalThis as { avia_is_mobile?: boolean }).avia_is_mobile === "undefined") {
    (globalThis as { avia_is_mobile?: boolean }).avia_is_mobile = false;
  }
}

function syncHeaderScroll() {
  const scrolled = (window.scrollY || document.documentElement.scrollTop) > 40;
  document.documentElement.classList.toggle("header-scrolled", scrolled);
  document.body.classList.toggle("header-scrolled", scrolled);
  const header = document.querySelector("#header");
  header?.classList.toggle("header-scrolled", scrolled);
  header?.classList.toggle("av_header_sticky_active", scrolled);
}

function ensureDrawer() {
  if (document.querySelector(".sr-nav-drawer")) return;
  // Prefer Avia's native overlay when its script created one
  if (document.querySelector(".av-burger-overlay")) return;

  const backdrop = document.createElement("div");
  backdrop.className = "sr-nav-backdrop";
  const drawer = document.createElement("div");
  drawer.className = "sr-nav-drawer";
  const closeBtn = document.createElement("button");
  closeBtn.type = "button";
  closeBtn.className = "sr-nav-drawer-close";
  closeBtn.setAttribute("aria-label", "Close");
  closeBtn.textContent = "×";
  drawer.appendChild(closeBtn);

  document
    .querySelectorAll<HTMLLIElement>(
      "#avia-menu > li.menu-item:not(.av-burger-menu-main)",
    )
    .forEach((li) => {
      const topLink = li.querySelector<HTMLAnchorElement>(":scope > a");
      if (!topLink) return;
      const label =
        topLink.querySelector(".avia-menu-text")?.textContent?.trim() ||
        topLink.textContent?.trim() ||
        "";
      const href = topLink.getAttribute("href") || "#";
      const sub = li.querySelectorAll<HTMLAnchorElement>(
        ":scope > .sub-menu > li > a",
      );

      if (sub.length) {
        const parent = document.createElement("a");
        parent.href = href;
        parent.className = "sr-nav-parent";
        parent.innerHTML = `<span>${label}</span><span class="chevron">›</span>`;
        const subWrap = document.createElement("div");
        subWrap.className = "sr-nav-sub";
        sub.forEach((s) => {
          const a = document.createElement("a");
          a.href = s.getAttribute("href") || "#";
          a.textContent =
            s.querySelector(".avia-menu-text")?.textContent?.trim() ||
            s.textContent?.trim() ||
            "";
          subWrap.appendChild(a);
        });
        parent.addEventListener("click", (ev) => {
          if (!parent.classList.contains("open")) {
            ev.preventDefault();
            parent.classList.add("open");
            subWrap.classList.add("open");
          }
        });
        drawer.appendChild(parent);
        drawer.appendChild(subWrap);
      } else {
        const a = document.createElement("a");
        a.href = href;
        a.textContent = label;
        drawer.appendChild(a);
      }
    });

  const close = () => {
    document.documentElement.classList.remove("av-burger-overlay-active");
    document.body.classList.remove("av-burger-overlay-active");
    document.body.style.overflow = "";
  };
  closeBtn.addEventListener("click", close);
  backdrop.addEventListener("click", close);
  document.body.append(backdrop, drawer);
}

export function LivePage({
  headerHtml,
  mainHtml,
  footerHtml,
}: {
  headerHtml: string;
  mainHtml: string;
  footerHtml: string;
}) {
  useEffect(() => {
    applyHtmlClasses();
    syncHeaderScroll();

    const onScroll = () => syncHeaderScroll();
    window.addEventListener("scroll", onScroll, { passive: true, capture: true });
    document.addEventListener("scroll", onScroll, { passive: true, capture: true });

    // Fallback burger only if Avia overlay is absent after scripts load
    const burgerSetup = window.setTimeout(() => {
      ensureDrawer();
      if (document.querySelector(".av-burger-overlay")) {
        document
          .querySelectorAll(".sr-nav-drawer, .sr-nav-backdrop")
          .forEach((el) => el.remove());
        return;
      }
      const burger = document.querySelector<HTMLAnchorElement>(
        ".av-burger-menu-main > a",
      );
      if (!burger || burger.dataset.srBound) return;
      burger.dataset.srBound = "1";
      burger.addEventListener("click", (e) => {
        if (document.querySelector(".av-burger-overlay")) return;
        e.preventDefault();
        e.stopPropagation();
        ensureDrawer();
        const open = document.documentElement.classList.toggle(
          "av-burger-overlay-active",
        );
        document.body.classList.toggle("av-burger-overlay-active", open);
        document.body.style.overflow = open ? "hidden" : "";
      });
    }, 400);

    document.querySelectorAll<HTMLAnchorElement>("a[href='#']").forEach((a) => {
      if (a.closest(".av-burger-menu-main")) return;
      if (a.querySelector("img")) a.setAttribute("href", "/");
    });

    const t1 = window.setTimeout(initCarousels, 50);
    const t2 = window.setTimeout(initCarousels, 500);
    const onResize = () => initCarousels();
    window.addEventListener("resize", onResize);

    return () => {
      window.clearTimeout(burgerSetup);
      window.clearTimeout(t1);
      window.clearTimeout(t2);
      window.removeEventListener("scroll", onScroll, true);
      document.removeEventListener("scroll", onScroll, true);
      window.removeEventListener("resize", onResize);
    };
  }, [headerHtml, mainHtml, footerHtml]);

  return (
    <>
      <div id="wrap_all" suppressHydrationWarning>
        <LiveHtml html={headerHtml} />
        <LiveHtml html={mainHtml} />
        <LiveHtml html={footerHtml} />
      </div>

      <Script src="/vendor/jquery.min.js" strategy="afterInteractive" />
      <Script
        src="/vendor/slick.min.js"
        strategy="afterInteractive"
        onLoad={initCarousels}
      />
      <Script src="/vendor/modal-init.js" strategy="afterInteractive" />
    </>
  );
}
