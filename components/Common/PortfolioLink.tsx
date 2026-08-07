import { cn } from "@/lib/utils";
import NextLink from "next/link";
import type { ComponentProps } from "react";

type Props = ComponentProps<typeof NextLink> & {
  external?: boolean;
  highlighted?: boolean;
};

export default function PortfolioLink({
  href,
  children,
  external,
  className,
  highlighted,
  ...rest
}: Props) {
  const openInNewTab = external ?? /^(https?:)?\/\//i.test(String(href));
  return (
    <NextLink
      href={href}
      className={cn(
        "text-accent-200 hover:bg-accent-200/22 inline-flex items-center rounded-md border-[1.5px] border-solid px-4 py-1 text-sm font-semibold transition-colors",
        highlighted ? "border-accent-200" : "border-neutral-600",
        className,
      )}
      {...(openInNewTab && { target: "_blank", rel: "noopener noreferrer" })}
      {...rest}
    >
      {children}
    </NextLink>
  );
}
