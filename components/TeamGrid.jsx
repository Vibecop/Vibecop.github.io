import { TEAM, TEAM_SOCIALS } from "@/content/team";
import { cn } from "@/lib/cn";

export default function TeamGrid({ className, limit }) {
  const members = limit ? TEAM.slice(0, limit) : TEAM;

  return (
    <ul data-stagger className={cn("m-0 grid list-none gap-6 p-0 sm:grid-cols-2 lg:grid-cols-4", className)}>
      {members.map((member) => (
        <li
          key={member.name}
          className="vc-card vc-card-hover group overflow-hidden text-center"
        >
          <div className="overflow-hidden">
            <img
              src={member.image}
              alt={member.name}
              loading="lazy"
              className="vc-card-art aspect-4/5 w-full object-cover"
            />
          </div>
          <div className="p-6">
            <h3 className="text-h3">{member.name}</h3>
            <p className="mt-1 text-base text-brand">{member.role}</p>

            <ul className="m-0 mt-4 flex list-none justify-center gap-2.5 p-0">
              {TEAM_SOCIALS.map(({ label, href, icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${member.name} on ${label}`}
                    className="social-dot flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white no-underline"
                  >
                    <i className={`${icon} text-sm`} aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </li>
      ))}
    </ul>
  );
}
