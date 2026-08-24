"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { BUY_URL, MAIN_NAV } from "@/content/navigation";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { cn } from "@/lib/cn";

/** True when `href` is the current page, or the section it belongs to. */
function isCurrent(pathname, item) {
  if (item.href) return pathname === item.href;
  return item.children.some((child) => child.href === pathname);
}

/**
 * A top-level entry with a submenu.
 *
 * Opens on hover at desktop widths and on click everywhere — hover alone
 * leaves the menu unreachable by keyboard and unusable on touch, which is
 * what the Bootstrap version did. Escape closes and returns focus to the
 * toggle; a click outside closes.
 *
 * Closing is deliberately delayed. The panel hangs 0.5rem below the button,
 * and the pointer crossing that gap — or cutting a corner on its way to a
 * child link — leaves the <li> for a frame or two. Closing on that first
 * mouseleave pulled the menu out from under the click.
 */
const CLOSE_DELAY = 180;

function NavDropdown({ item, pathname }) {
  const [open, setOpen] = useState(false);
  const wrapper = useRef(null);
  const toggle = useRef(null);
  const closeTimer = useRef(null);
  const menuId = useId();
  const current = isCurrent(pathname, item);

  const cancelClose = () => {
    clearTimeout(closeTimer.current);
    closeTimer.current = null;
  };

  const openNow = () => {
    cancelClose();
    setOpen(true);
  };

  const closeSoon = () => {
    cancelClose();
    closeTimer.current = setTimeout(() => setOpen(false), CLOSE_DELAY);
  };

  /* a pending close must not fire into an unmounted component */
  useEffect(() => cancelClose, []);

  /* the route changed, so the menu has done its job — and the pointer may
     still be sitting on it, which would otherwise leave it open */
  useEffect(() => {
    cancelClose();
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;

    const onPointerDown = (e) => {
      if (!wrapper.current?.contains(e.target)) setOpen(false);
    };
    const onKeyDown = (e) => {
      if (e.key !== "Escape") return;
      setOpen(false);
      toggle.current?.focus();
    };

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <li
      ref={wrapper}
      className="lg:relative"
      /*
       * Pointer events rather than mouse events, filtered to a real mouse.
       * A tap fires mouseenter first and then click, so on a phone the
       * hover-open and the click-toggle cancelled each other out and the
       * submenu never appeared.
       */
      onPointerEnter={(e) => e.pointerType === "mouse" && openNow()}
      onPointerLeave={(e) => e.pointerType === "mouse" && closeSoon()}
    >
      <button
        ref={toggle}
        type="button"
        aria-expanded={open}
        aria-controls={menuId}
        onClick={() => {
          cancelClose();
          setOpen((v) => !v);
        }}
        className={cn(
          "nav-link-underline flex w-full items-center justify-between gap-1.5 py-2 text-base font-medium",
          "transition-colors duration-200 lg:w-auto lg:justify-start",
          current ? "text-brand" : "text-white hover:text-brand"
        )}
      >
        {item.label}
        <svg
          viewBox="0 0 12 8"
          aria-hidden="true"
          className={cn("h-2 w-3 fill-current transition-transform duration-200", open && "rotate-180")}
        >
          <path d="M1 1.5 6 6.5l5-5" stroke="currentColor" strokeWidth="1.75" fill="none" strokeLinecap="round" />
        </svg>
      </button>

      <ul
        id={menuId}
        hidden={!open}
        className={cn(
          "nav-submenu mb-2 list-none space-y-0.5 pl-3",
          "lg:absolute lg:left-0 lg:top-full lg:z-50 lg:mb-0 lg:mt-6 lg:min-w-56 lg:p-2 lg:pl-2"
        )}
      >
        {item.children.map((child) => (
          <li key={child.href}>
            <Link
              href={child.href}
              onClick={() => {
                cancelClose();
                setOpen(false);
              }}
              className={cn(
                "block rounded-lg px-3 py-2 text-sm no-underline transition-colors duration-200",
                pathname === child.href
                  ? "bg-brand/15 text-brand"
                  : "text-muted hover:bg-white/5 hover:text-white"
              )}
            >
              {child.label}
            </Link>
          </li>
        ))}
      </ul>
    </li>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  // Client-side routing keeps the DOM, so the mobile menu has to be closed by
  // hand on navigation — the static kit got this free from the page reload.
  useEffect(() => setMenuOpen(false), [pathname]);

  return (
    <header className="site-header sticky top-0 z-50 pt-4">
      <Container>
        <nav
          aria-label="Main"
          className="site-nav rounded-3xl px-5 py-3 lg:px-8"
        >
          <div className="flex items-center justify-between gap-6">
            <Link href="/" className="shrink-0" aria-label="Vibecop — home">
              <img src="/assets/images/logo.png" alt="Vibecop" className="h-9 w-auto" />
            </Link>

            <button
              type="button"
              aria-expanded={menuOpen}
              aria-controls="main-menu"
              aria-label="Toggle navigation"
              onClick={() => setMenuOpen((v) => !v)}
              className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-xl border border-white/15 lg:hidden"
            >
              <span
                className={cn(
                  "block h-0.5 w-5 bg-white transition-transform duration-200",
                  menuOpen && "translate-y-2 rotate-45"
                )}
              />
              <span className={cn("block h-0.5 w-5 bg-white transition-opacity duration-200", menuOpen && "opacity-0")} />
              <span
                className={cn(
                  "block h-0.5 w-5 bg-white transition-transform duration-200",
                  menuOpen && "-translate-y-2 -rotate-45"
                )}
              />
            </button>

            <div
              id="main-menu"
              className={cn(
                "nav-drawer absolute inset-x-4 top-full mt-2 p-5 lg:static lg:mt-0 lg:p-0",
                "lg:flex lg:items-center lg:gap-8",
                menuOpen ? "block" : "hidden lg:flex"
              )}
            >
              <ul className="m-0 list-none space-y-1 p-0 lg:flex lg:items-center lg:gap-7 lg:space-y-0">
                {MAIN_NAV.map((item) =>
                  item.children ? (
                    <NavDropdown key={item.label} item={item} pathname={pathname} />
                  ) : (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        aria-current={pathname === item.href ? "page" : undefined}
                        className={cn(
                          "nav-link-underline block py-2 text-base font-medium no-underline",
                          "transition-colors duration-200",
                          pathname === item.href ? "text-brand" : "text-white hover:text-brand"
                        )}
                      >
                        {item.label}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </div>
              <div className="mt-5 gap-3 border-t border-white/10 pt-5 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 lg:border-0 lg:pt-0">
                <Button href="/contact">Contact Us</Button>
              </div>
            </div>
        </nav>
      </Container>
    </header>
  );
}
