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

export const dealsdata = [
  {
    dealtype: "Personal",
    dealdescription: "Special first packet for all",
    dealamount: "$8",
    datetype: "Month",

    dealbenefits: [
      {
        benefit: "Up to 5 page each group",
        benefit1: "Up to 10 page1 group",
        benefit2: "5 Days group page saved",
      },
    ],

    primary: false,
  },

  {
    dealtype: "Regular",
    dealdescription: "Recommended for personal pro",
    dealamount: "$20",
    datetype: "Yearly",

    dealbenefits: [
      {
        benefit: "Up to 15 page each group",
        benefit1: "Download page up to 20 pages",
        benefit2: "Up to 10 group pages",
        benefit3: "15 Days group page saved",
      },
    ],

    primary: true,
  },

  {
    dealtype: "Premium",
    dealdescription: "Packet for Startup & Company",
    dealamount: "$48",
    datetype: "Yearly",

    dealbenefits: [
      {
        benefit: "Unlimited group pages",
        benefit1: "Unlimited download page",
        benefit2: "Unlimited page each group",
        benefit3: "Customize group page name",
        benefit4: "30 Days group page saved",
      },
    ],

    primary: false,
  },
];

export type footerProp = {
  title?: string;
  link?: string;
};
export const footerlinks: Array<footerProp> = [
  { title: "Privacy Policy", link: "privacypolicy" },
  { title: "Terms and Conditions", link: "termsandcondition" },
  { title: "Contact Us", link: "contactUs" },
  { title: "Careers", link: "careers" },
];
