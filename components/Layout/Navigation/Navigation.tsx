"use client";

import PortfolioLink from "@/components/Common/PortfolioLink";
import { useNavigationStore } from "@/lib/stores/useNavigationStore";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CloseIcon, MenuIcon } from "@/components/SvgIcons";
import { NAV_LINKS, CONTACT_HREF } from "@/lib/constants";

/**
 * Sticky site header.
 *
 * A client component because it reads the menu store and the current pathname
 * for `aria-current`. It still renders to HTML on first paint — only the
 * interaction ships as client JS.
 */
export default function Navigation() {
  const pathname = usePathname();
  const isMenuOpen = useNavigationStore((state) => state.isMenuOpen);
  const openMenu = useNavigationStore((state) => state.openMenu);
  const closeMenu = useNavigationStore((state) => state.closeMenu);

  const brand = (
    <Link
      href="/"
      onClick={closeMenu}
      className="text-text hover:text-text text-lg font-semibold no-underline"
    >
      david mcdougal<span className="text-accent">.</span>
    </Link>
  );

  return (
    <>
      <header className="bg-bg/80 sticky top-0 z-30">
        <nav
          aria-label="Main"
          className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-5 md:px-16"
        >
          {brand}

          <ul className="hidden items-center gap-4 md:flex">
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  aria-current={pathname === href ? "page" : undefined}
                  className={cn(
                    "hover:text-accent text-sm no-underline transition-colors",
                    pathname === href ? "text-accent" : "text-text",
                  )}
                >
                  {label}
                </Link>
              </li>
            ))}
            <li className="ml-2">
              <PortfolioLink
                href={CONTACT_HREF}
                highlighted
                aria-current={pathname === CONTACT_HREF ? "page" : undefined}
              >
                Get in touch
              </PortfolioLink>
            </li>
          </ul>

          <button
            type="button"
            onClick={openMenu}
            aria-label="Open menu"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            className="text-text hover:text-accent -mr-4 p-4 transition-colors md:hidden"
          >
            <MenuIcon />
          </button>
        </nav>
      </header>

      {isMenuOpen && (
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
          onKeyDown={(event) => {
            if (event.key === "Escape") closeMenu();
          }}
          className="bg-bg fixed inset-0 z-50 flex flex-col overflow-y-auto overscroll-contain md:hidden"
        >
          <div className="flex items-center justify-between px-6 py-5">
            {brand}
            <button
              type="button"
              autoFocus
              onClick={closeMenu}
              aria-label="Close menu"
              className="text-text hover:text-accent -mr-4 p-4 transition-colors"
            >
              <CloseIcon />
            </button>
          </div>

          <nav aria-label="Site" className="flex flex-col">
            <ul className="flex flex-col px-6 pt-4">
              {NAV_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    onClick={closeMenu}
                    aria-current={pathname === href ? "page" : undefined}
                    className={cn(
                      "block py-3 text-xl no-underline",
                      pathname === href ? "text-accent" : "text-text",
                    )}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="px-6 py-8">
              <PortfolioLink
                href={CONTACT_HREF}
                highlighted
                onClick={closeMenu}
                aria-current={pathname === CONTACT_HREF ? "page" : undefined}
                className="w-full justify-center py-3 text-base"
              >
                Get in touch
              </PortfolioLink>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
