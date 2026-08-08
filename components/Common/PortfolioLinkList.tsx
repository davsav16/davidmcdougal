import PortfolioLink from "@/components/Common/PortfolioLink";
import type { PortfolioLink as PortfolioLinkItem } from "@/types/general";

type Props = {
  links: PortfolioLinkItem[];
  className?: string;
};

/**
 * A row of PortfolioLinks driven by constants.
 *
 * Shared by the footer and the hero so the data's `highlighted` and `external`
 * flags are forwarded in exactly one place — when each caller mapped its own
 * list, both hardcoded `highlighted` and dropped `external`.
 */
export default function PortfolioLinkList({ links, className }: Props) {
  return (
    <ul className={className ?? "my-5 flex flex-col gap-3 md:flex-row"}>
      {links.map(({ href, linkCopy, highlighted, external }) => (
        <li key={href}>
          <PortfolioLink
            href={href}
            highlighted={highlighted}
            external={external}
          >
            {linkCopy}
          </PortfolioLink>
        </li>
      ))}
    </ul>
  );
}
