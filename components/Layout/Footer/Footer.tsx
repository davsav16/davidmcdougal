import PortfolioLinkList from "@/components/Common/PortfolioLinkList";
import { FOOTER_HEADER, FOOTER_LINKS } from "@/lib/constants/footer";

export default function Footer() {
  return (
    <footer className="bg-section-glow relative z-10 px-16 py-25">
      <div className="container">
        <div className="flex max-w-lg flex-col gap-2">
          <h2>{FOOTER_HEADER.header}</h2>
          <p className="text-neutral-400">{FOOTER_HEADER.subHeader}</p>
        </div>

        <PortfolioLinkList links={FOOTER_LINKS} />
        <p className="mt-10 text-sm text-gray-500">
          &copy; {new Date().getFullYear()} David McDougal. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
