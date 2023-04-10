import { HappeningNow } from "./Happening";
import { TwitterCard } from "./Card";

const details = [
  {
    id: 0,
    imgSrc: "",
    heading: "Da Vinci of Design",
    username: "@Mercee__ .",
    time: "1h",
    description:
      "For Today's design clan debate on which is the goat of design between trackpad and mouse, our facilities are .... ",
    links: [
      {
        link: "@kemsdesigns",
        link1: "@timxdesign",
        link2: "@iamalexoyebade",
      },
    ],
    content: "Are yall ready for the fire by 8px today??",
  },

  {
    id: 1,
    imgSrc: "",
    heading: "Da Vinci of Design",
    username: "@Mercee__ .",
    time: "1h",
    description:
      "For Today's design clan debate on which is the goat of design between trackpad and mouse, our facilities are .... ",
    links: [
      {
        link: "@kemsdesigns",
        link1: "@timxdesign",
        link2: "@iamalexoyebade",
      },
    ],
    content: "Are yall ready for the fire by 8px today??",
  },

  {
    id: 2,
    imgSrc: "",
    heading: "Da Vinci of Design",
    username: "@Mercee__ .",
    time: "1h",
    description:
      "For Today's design clan debate on which is the goat of design between trackpad and mouse, our facilities are .... ",
    links: [
      {
        link: "@kemsdesigns",
        link1: "@timxdesign",
        link2: "@iamalexoyebade",
      },
    ],
    content: "Are yall ready for the fire by 8px today??",
  },

  {
    id: 3,
    imgSrc: "",
    heading: "Da Vinci of Design",
    username: "@Mercee__ .",
    time: "1h",
    description:
      "For Today's design clan debate on which is the goat of design between trackpad and mouse, our facilities are .... ",
    links: [
      {
        link: "@kemsdesigns",
        link1: "@timxdesign",
        link2: "@iamalexoyebade",
      },
    ],
    content: "Are yall ready for the fire by 8px today??",
  },

  {
    id: 4,
    imgSrc: "",
    heading: "Da Vinci of Design",
    username: "@Mercee__ .",
    time: "1h",
    description:
      "For Today's design clan debate on which is the goat of design between trackpad and mouse, our facilities are .... ",
    links: [
      {
        link: "@kemsdesigns",
        link1: "@timxdesign",
        link2: "@iamalexoyebade",
      },
    ],
    content: "Are yall ready for the fire by 8px today??",
  },
];
export const ForYou = () => {
  return (
    <div className="-mt-[41px] gray-200 pr-6">
      <HappeningNow />
      <div className="border-b-[3px] border-gray-100 pb-0">
        <TwitterCard details={details} />
      </div>
    </div>
  );
};

// border-b-[1px] border-gray-200 pb-20
