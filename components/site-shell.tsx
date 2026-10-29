import Link from "next/link";
import { dictionaries, pageUrl, type Locale, type Page } from "@/lib/content";
import { forumUrl, githubUrl } from "@/lib/site";

export function ExternalIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      aria-hidden="true"
    >
      <path d="M7 17 17 7M6 7h11v11" />
    </svg>
  );
}

export function Brand() {
  return (
    <span className="brand">
      <svg
        width="39"
        height="43"
        viewBox="0 0 39 43"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M19.5 3C10 3 3 10 3 20.5S10 40 19.5 40 36 31 36 20.5 29 3 19.5 3Z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M19.5 31V12m0 13L11 17m8.5 3L27 12"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>
      <span>
        Caledon<span className="brand-second">Institute</span>
      </span>
    </span>
  );
}

export function SiteShell({
  locale,
  page,
  children,
}: {
  locale: Locale;
  page: Page;
  children: React.ReactNode;
}) {
  const t = dictionaries[locale];
  const otherLocale = locale === "en" ? "id" : "en";
  const links = (Object.keys(t.nav) as Page[]).map((item) => (
    <Link
      key={item}
      href={pageUrl(locale, item)}
      aria-current={page === item ? "page" : undefined}
    >
      {t.nav[item]}
    </Link>
  ));
  const languageSwitch = (
    <Link
      className="language-switch"
      href={pageUrl(otherLocale, page)}
      hrefLang={otherLocale}
      lang={otherLocale}
      aria-label={
        locale === "en"
          ? "Ganti bahasa ke Indonesia"
          : "Switch language to English"
      }
    >
      <span aria-hidden="true">{locale.toUpperCase()}</span>
      <span className="language-divider" aria-hidden="true">
        /
      </span>
      {otherLocale.toUpperCase()}
    </Link>
  );

  return (
    <>
      <a className="skip-link" href="#main">
        {t.skip}
      </a>
      <header className="site-header wrap">
        <Link
          className="brand-link"
          href={pageUrl(locale)}
          aria-label="Caledon Institute"
        >
          <Brand />
        </Link>
        <nav className="desktop-nav" aria-label={t.navigation}>
          {links}
          <a href={forumUrl}>{t.forum}</a>
        </nav>
        <div className="header-end">
          {languageSwitch}
          <span className="header-note">Bandar Lampung, ID</span>
        </div>
        <details className="mobile-menu">
          <summary>
            {t.menu}
            <span aria-hidden="true">+</span>
          </summary>
          <nav aria-label={t.navigation}>
            {links}
            <a href={forumUrl}>{t.forum}</a>
          </nav>
        </details>
      </header>
      <main id="main" tabIndex={-1}>
        {children}
      </main>
      <footer className="site-footer wrap">
        <div>
          <Link className="footer-name" href={pageUrl(locale)}>
            Caledon Institute
          </Link>
          <p>{t.footer}</p>
        </div>
        <div className="footer-end">
          <div className="footer-links">
            <a href={forumUrl}>
              {t.forum} <ExternalIcon />
            </a>
            <a href={githubUrl}>
              GitHub <ExternalIcon />
            </a>
          </div>
          <p>{t.location}</p>
        </div>
      </footer>
    </>
  );
}

export function ForumLink({ locale }: { locale: Locale }) {
  return (
    <a className="button" href={forumUrl}>
      {dictionaries[locale].forumCta}
      <ExternalIcon />
    </a>
  );
}

export function NextStep({
  title,
  body,
  locale,
}: {
  title: string;
  body: string;
  locale: Locale;
}) {
  return (
    <section className="next-step wrap">
      <div>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
      <ForumLink locale={locale} />
    </section>
  );
}
