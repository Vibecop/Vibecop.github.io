"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/*
 * The static kit loaded jQuery, jQuery UI, Bootstrap 4, Owl Carousel and WOW
 * from <script> tags at the end of <body>, then ran its own carousel.js /
 * counter.js / preloader.js / back-to-top-button.js on top.
 *
 * Here the libraries come from npm and are bundled by Next; they are pulled in
 * with dynamic import() inside an effect so that (a) window.jQuery exists
 * before the jQuery plugins evaluate, and (b) nothing touches the DOM until
 * React has hydrated -- Owl Carousel rewrites the markup it is given, which
 * would otherwise fight hydration.
 *
 * The kit's own four scripts are not loaded as files at all: carousel.js,
 * counter.js and preloader.js are reproduced in initPage()/startCountdown()
 * below, and back-to-top-button.js lives in <BackToTop />.
 *
 * Two things from the kit are deliberately left out. jquery-validate.js was
 * shipped but .validate() is never called on anything. And carousel.js carries
 * an "AI chat" block (#addBtn / #micBtn / #sendBtn posting to chat.php) whose
 * markup and PHP endpoint do not exist anywhere in the kit; the rest of that
 * file's handlers, including the ones whose markup is also absent, are ported
 * verbatim below.
 */

let vendorsReady = null;

function loadVendors() {
  if (vendorsReady) return vendorsReady;
  vendorsReady = (async () => {
    const jquery = (await import("jquery")).default;
    window.$ = window.jQuery = jquery;
    await import("jquery-ui-dist/jquery-ui.js");
    await import("bootstrap/dist/js/bootstrap.min.js");
    await import("owl.carousel");
    const wow = await import("wowjs");
    window.WOW = wow.WOW || wow.default?.WOW || wow.default;
    return jquery;
  })();
  return vendorsReady;
}

/* Owl's nav arrows in the kit's patched copy of owl.carousel.js use Font
 * Awesome chevrons instead of the stock ‹ › glyphs. Both carousels run with
 * nav:false so it never shows, but keep it identical anyway. */
const NAV_TEXT = [
  '<span aria-label="Previous"><i class="fa-solid fa-angle-left"></i></span>',
  '<span aria-label="Next"><i class="fa-solid fa-angle-right"></i></span>',
];

/* ------------------------------------------------------------------ *
 * Per-page initialisation — the parts of carousel.js and counter.js that
 * bind to concrete elements. Their delegated `$(document).on(...)` handlers
 * are bound once by bindGlobalHandlers() and survive navigation on their own.
 * ------------------------------------------------------------------ */
function initPage($) {
  // --- testimonial carousels ---
  $(".testimonials-con .owl-carousel").each(function () {
    if ($(this).hasClass("owl-loaded")) return;
    $(this).owlCarousel({
      margin: 30,
      nav: false,
      navText: NAV_TEXT,
      loop: true,
      dots: true,
      autoplay: true,
      autoplayTimeout: 4500,
      responsive: { 0: { items: 1 }, 576: { items: 1 }, 768: { items: 2 }, 992: { items: 3 } },
    });
  });

  $(".testimonials-con2 .owl-carousel").each(function () {
    if ($(this).hasClass("owl-loaded")) return;
    $(this).owlCarousel({
      margin: 24,
      nav: false,
      navText: NAV_TEXT,
      loop: true,
      dots: true,
      autoplay: true,
      autoplayTimeout: 8000,
      responsive: {
        0: { items: 1 },
        576: { items: 2 },
        768: { items: 3 },
        992: { items: 4 },
        1500: { items: 6 },
      },
    });
  });

  // --- range sliders + ROI calculator ---
  const updateSliderFill = (el) => {
    const min = el.attr("min");
    const max = el.attr("max");
    const val = el.val();
    const percent = ((val - min) / (max - min)) * 100;
    el.css(
      "background",
      "linear-gradient(to right, var(--primary--color) " +
        percent +
        "%, rgba(255,255,255,0.2) " +
        percent +
        "%)"
    );
  };

  const calculate = () => {
    if (!$("#teamSize").length) return;
    const team = $("#teamSize").val();
    const hours = $("#hours").val();
    const cost = $("#cost").val();

    $("#teamSizeVal").text(team + " people");
    $("#hoursVal").text(hours + " hrs");
    $("#costVal").text("$" + cost + "/hr");

    const monthly = team * hours * cost * 4;
    $("#result").text("$" + monthly.toLocaleString());

    $("#errors").text("-" + Math.round(20 + team / 5) + "%");
    $("#output").text("+" + Math.round(10 + hours / 2) + "%");
    $("#roi").text(Math.round(monthly / 1000) + "x");
  };

  $("input[type=range]")
    .off("input.opzio")
    .on("input.opzio", function () {
      calculate();
      updateSliderFill($(this));
    })
    .each(function () {
      updateSliderFill($(this));
    });
  calculate();

  // --- savings estimator ---
  const calculateSavings = () => {
    if (!$("#team").length) return;
    const team = parseInt($("#team").val(), 10);
    const handleTime = parseInt($("#handle-time").val(), 10);
    const returnRate = parseInt($("#return-rate").val(), 10);
    $("#savings-result").text(
      "$" + Math.round(team * handleTime * returnRate * 0.8).toLocaleString()
    );
  };
  calculateSavings();

  // --- progress ring ---
  const fill = document.getElementById("progressFill");
  if (fill) {
    const progress = 80;
    fill.style.transition = "none";
    fill.style.clipPath = "inset(0 100% 0 0)";
    setTimeout(() => {
      fill.style.transition = "clip-path 1.5s ease";
      fill.style.clipPath = `inset(0 ${100 - progress}% 0 0)`;
    }, 100);
  }

  // --- number counters ---
  $(".counter").each(function () {
    const el = $(this);
    if (el.data("opzioCounted")) return;
    el.data("opzioCounted", true);
    el.prop("Counter", 0).animate(
      { Counter: el.text() },
      {
        duration: 4000,
        easing: "swing",
        step(now) {
          $(this).text(Math.ceil(now));
        },
      }
    );
  });

  // --- scroll reveal ---
  if (window.WOW) new window.WOW().init();

  // --- preloader.js: uncover the page once it has finished loading ---
  const revealPage = () => {
    $(".loader").fadeOut();
    $(".loader-mask").delay(350).fadeOut("slow");
  };
  if (document.readyState === "complete") revealPage();
  else $(window).one("load", revealPage);
}

/* The document-delegated handlers from carousel.js. Bound once for the whole
 * session, exactly like the original script did on its single page load. */
let globalHandlersBound = false;

function bindGlobalHandlers($) {
  if (globalHandlersBound) return;
  globalHandlersBound = true;

  $(document).on("click", ".unlock-btn", function () {
    alert("Feature coming soon 🚀");
  });

  $(document).on("click", "#get-recommendation", function () {
    $("#recommendation-result").html(
      "<strong>Recommendation:</strong><br>" +
        "Pain: " + $("#pain").val() + "<br>" +
        "Handle time: " + $("#handle-time").val() + "<br>" +
        "Return rate: " + $("#return-rate").val()
    );
  });

  $(document).on("click", ".tool-btn", function () {
    $(this).toggleClass("active");
  });

  $(document).on("click", "#generateBuildBtn", function () {
    const tools = [];
    $(".tool-btn.active").each(function () {
      tools.push($(this).data("value"));
    });
    $("#buildResult").html(
      "<strong>Recommendation:</strong><br>" +
        "Trigger: " + $("#triggerSelect").val() + "<br>" +
        "Tools: " + tools.join(", ") + "<br>" +
        "Output: " + $("#outputSelect").val()
    );
  });

  $(document).on("click", ".option-btn", function () {
    $(".option-btn").removeClass("active");
    $(this).addClass("active");
  });

  $(document).on("submit", "#auditForm", function (e) {
    e.preventDefault();
    alert("Form submitted successfully!");
  });

  $(document).on("change", "#team, #handle-time, #return-rate", function () {
    const team = parseInt($("#team").val(), 10);
    const handleTime = parseInt($("#handle-time").val(), 10);
    const returnRate = parseInt($("#return-rate").val(), 10);
    $("#savings-result").text(
      "$" + Math.round(team * handleTime * returnRate * 0.8).toLocaleString()
    );
  });
}

/* coming-soon countdown (counter.js), kept as its own interval so it can be
 * torn down when the page is left. */
function startCountdown() {
  if (!document.getElementById("days")) return undefined;

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  let today = new Date();
  const dd = String(today.getDate()).padStart(2, "0");
  const mm = String(today.getMonth() + 1).padStart(2, "0");
  const yyyy = today.getFullYear();
  const dayMonth = "06/24/";
  let target = dayMonth + yyyy;

  today = mm + "/" + dd + "/" + yyyy;
  if (today > target) target = dayMonth + "2026";

  const countDown = new Date(target).getTime();
  const set = (id, v) => {
    const el = document.getElementById(id);
    if (el) el.innerText = String(v).padStart(2, "0");
  };

  const tick = () => {
    const distance = countDown - Date.now();
    set("days", Math.floor(distance / day));
    set("hours", Math.floor((distance % day) / hour));
    set("minutes", Math.floor((distance % hour) / minute));
    set("seconds", Math.floor((distance % minute) / second));

    if (distance < 0) {
      clearInterval(timer);
      document
        .querySelectorAll(".compaign_countdown")
        .forEach((el) => (el.style.display = "none"));
    }
  };

  const timer = setInterval(tick, 1000);
  tick();
  return timer;
}

export default function VendorScripts() {
  const pathname = usePathname();

  useEffect(() => {
    let cancelled = false;
    let timer;

    loadVendors().then(($) => {
      if (cancelled) return;
      bindGlobalHandlers($);
      initPage($);
      timer = startCountdown();
    });

    return () => {
      cancelled = true;
      if (timer) clearInterval(timer);
    };
  }, [pathname]);

  return null;
}
