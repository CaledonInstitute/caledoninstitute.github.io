import Image from "next/image";
import Link from "next/link";
import { dictionaries, pageUrl, type Locale } from "@/lib/content";
import { members } from "@/lib/members";
import { ExternalIcon, GitHubLink, NextStep, SiteShell } from "./site-shell";

function FieldMark({ type }: { type: "security" | "ai" }) {
  return (
    <svg
      className="field-mark"
      width="46"
      height="46"
      viewBox="0 0 46 46"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.35"
      aria-hidden="true"
    >
      {type === "security" ? (
        <>
          <path d="M23 5 8 11v11c0 9 7 15 15 19 8-4 15-10 15-19V11L23 5Z" />
          <path d="m16 23 5 5 10-11" />
        </>
      ) : (
        <>
          <circle cx="23" cy="23" r="6" />
          <ellipse
            cx="23"
            cy="23"
            rx="19"
            ry="9"
            transform="rotate(45 23 23)"
          />
          <ellipse
            cx="23"
            cy="23"
            rx="19"
            ry="9"
            transform="rotate(-45 23 23)"
          />
        </>
      )}
    </svg>
  );
}

function Fields({
  locale,
  heading = true,
}: {
  locale: Locale;
  heading?: boolean;
}) {
  const t = dictionaries[locale];
  return (
    <section
      className="fields wrap"
      aria-labelledby={heading ? "fields-title" : undefined}
    >
      {heading && (
        <div className="section-heading">
          <h2 id="fields-title">{t.home.fieldsTitle}</h2>
          <p>{t.home.fieldsIntro}</p>
        </div>
      )}
      <div className="fields-grid">
        {(["security", "ai"] as const).map((type) => {
          const field = t.fields[type];
          return (
            <article className="field" key={type}>
              <FieldMark type={type} />
              <h3>{field.title}</h3>
              <p className="field-question">{field.question}</p>
              <p className="field-body">{field.body}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export function HomePage({ locale }: { locale: Locale }) {
  const t = dictionaries[locale];
  return (
    <SiteShell locale={locale} page="home">
      <section className="hero wrap">
        <div className="hero-copy">
          <h1>{t.home.title}</h1>
          <p>{t.home.intro}</p>
          <div className="hero-actions">
            <GitHubLink locale={locale} />
            <Link className="text-link" href={pageUrl(locale, "about")}>
              {t.aboutLink}
            </Link>
          </div>
        </div>
        <figure className="hero-figure">
          <Image
            className="hero-photo"
            src="/images/caledon-canopy.jpg"
            width={460}
            height={460}
            alt={t.photoAlt}
            priority
            sizes="(max-width: 760px) 92vw, 45vw"
          />
          <figcaption>
            <span className="caption-line" aria-hidden="true" />
            {t.photoCaption}
          </figcaption>
        </figure>
      </section>
      <Fields locale={locale} />
      <section className="people-preview wrap">
        <div className="avatar-cluster" aria-hidden="true">
          {members.slice(0, 4).map((member) => (
            <Image
              key={member.username}
              src={member.avatar}
              width={76}
              height={76}
              alt=""
            />
          ))}
        </div>
        <div className="people-copy">
          <h2>{t.home.peopleTitle}</h2>
          <p>{t.home.peopleBody}</p>
        </div>
        <Link className="text-link" href={pageUrl(locale, "members")}>
          {t.membersLink}
          <ExternalIcon />
        </Link>
      </section>
    </SiteShell>
  );
}

export function AboutPage({ locale }: { locale: Locale }) {
  const t = dictionaries[locale];
  return (
    <SiteShell locale={locale} page="about">
      <section className="page-intro wrap">
        <h1>{t.about.title}</h1>
        <p>{t.about.intro}</p>
      </section>
      <section className="story wrap">
        <div className="story-image">
          <Image
            src="/images/caledon-canopy.jpg"
            width={460}
            height={460}
            alt={t.photoAlt}
            sizes="(max-width: 760px) 92vw, 33vw"
          />
        </div>
        <div className="story-copy">
          <h2>{t.about.storyTitle}</h2>
          <p>{t.about.story}</p>
          <p className="welcome">{t.about.welcome}</p>
        </div>
      </section>
      <Fields locale={locale} />
      <section className="approach wrap">
        <h2>{t.about.approachTitle}</h2>
        <div className="principles">
          {t.about.principles.map((principle) => (
            <article key={principle.title}>
              <h3>{principle.title}</h3>
              <p>{principle.body}</p>
            </article>
          ))}
        </div>
      </section>
      <NextStep
        locale={locale}
        title={t.about.nextTitle}
        body={t.about.nextBody}
      />
    </SiteShell>
  );
}

export function MembersPage({ locale }: { locale: Locale }) {
  const t = dictionaries[locale];
  return (
    <SiteShell locale={locale} page="members">
      <section className="page-intro wrap">
        <h1>{t.members.title}</h1>
        <p>{t.members.intro}</p>
      </section>
      <section className="members-section wrap" aria-label={t.nav.members}>
        <ul className="members-grid">
          {members.map((member) => (
            <li key={member.username}>
              <a
                className="member"
                href={member.github}
                aria-label={`${member.name} — ${t.githubProfile}`}
              >
                <Image
                  src={member.avatar}
                  width={112}
                  height={112}
                  alt=""
                  sizes="112px"
                />
                <div className="member-info">
                  <h2>{member.name}</h2>
                  <p>@{member.username}</p>
                  <span>
                    {t.githubProfile}
                    <ExternalIcon />
                  </span>
                </div>
              </a>
            </li>
          ))}
        </ul>
        <p className="members-note">{t.members.note}</p>
      </section>
      <NextStep
        locale={locale}
        title={t.members.nextTitle}
        body={t.members.nextBody}
      />
    </SiteShell>
  );
}
