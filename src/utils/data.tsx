export interface Navigation {
  pathname?: string;
  title?: string;
}

export const navigationData: Array<Navigation> = [
  { pathname: "/about", title: "About" },
  { pathname: "/howitwork", title: "How it work" },
  { pathname: "/pricing", title: "Pricing" },
  { pathname: "/solution", title: "Solution" },
  { pathname: "/features", title: "Features" },
];
