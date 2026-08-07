import PortfolioLink from "@/components/Common/PortfolioLink";

export default function Footer() {
  return (
    <footer className="bg-section-glow relative z-10 px-16 py-25">
      <div className="container">
        <div className="flex max-w-lg flex-col gap-2">
          <h2>Let&rsquo;s build something that moves the numbers</h2>
          <p className="text-neutral-400">
            Senior full-stack or frontend-leaning roles - startups or
            enterprise. I usually reply within a day.
          </p>
        </div>

        <ul className="my-5 flex flex-col gap-3 md:flex-row">
          <li>
            <PortfolioLink href={"/contact"} highlighted>
              Start a conversation
            </PortfolioLink>
          </li>
          <li>
            <PortfolioLink href={"mailto:david@davidmcdougal.com"}>
              david@davidmcdougal.com
            </PortfolioLink>
          </li>
          <li>
            <PortfolioLink href={"https://www.linkedin.com/in/mcdougaldavid/"}>
              LinkedIn
            </PortfolioLink>
          </li>
          <li>
            <PortfolioLink href={"https://github.com/davsav16"}>
              GitHub
            </PortfolioLink>
          </li>
        </ul>
        <p className="mt-10 text-sm text-gray-500">
          &copy; {new Date().getFullYear()} David McDougal. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
