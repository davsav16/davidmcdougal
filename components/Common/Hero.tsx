import { Header } from "@/types/general";
import PortfolioLinkList from "@/components/Common/PortfolioLinkList";

export default function Hero({
  superHeader,
  header,
  subHeader,
  links,
}: Header) {
  return (
    <>
      {superHeader && (
        <p className="text-accent text-xs tracking-widest uppercase">
          {superHeader}
        </p>
      )}
      <h1>{header}</h1>
      {subHeader && <p className="max-w-md text-neutral-400">{subHeader}</p>}
      {links && <PortfolioLinkList links={links} />}
    </>
  );
}
