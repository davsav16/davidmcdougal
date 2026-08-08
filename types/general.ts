export interface PortfolioLink {
  href: string;
  linkCopy: string;
  external?: boolean;
  highlighted?: boolean;
}

export interface FooterHeader {
  header: string;
  subHeader: string;
}

export interface Header {
  superHeader?: string;
  header: string;
  subHeader?: string;
  links?: PortfolioLink[];
}
