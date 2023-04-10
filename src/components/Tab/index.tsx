import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";

type TabProps = {
  tabs: {
    id?: number;
    tabTitle?: string;
    tabBody: JSX.Element;
    tabIcon?: React.ReactElement;
  }[];
  className?: string;
  heading?: string;
  scroll?: boolean;
};

const TabComponent = styled.div<{ scroll?: boolean }>`
  ${tw``}
  backdrop-filter: ${({ scroll }) => scroll && "blur(5px)"};
`;
const TabNavMenu = styled.ul`
  ${tw`list-none flex gap-10 items-center justify-center py-0`}
`;
const TabNavLink = styled.li`
  ${tw`cursor-pointer text-5xl p-5 transition-all ease-in-out duration-500`}
`;
const TabComponentRenderer = styled.div``;

const TwitterTabMenu = styled.ul`
  ${tw`flex justify-between border-b-[2px] border-gray-100`};
`;

const TwitterTabLink = styled.li`
  ${tw`cursor-pointer font-bold text-center hover:bg-gray-200 transition-all ease-in-out duration-500 w-full`}

  padding: 15px;
`;

export const CustomTabComponent = ({
  tabs,
  className,
  heading,
  scroll,
}: TabProps) => {
  const [activeTab, setActiveTab] = useState<number>(0);
  return (
    <>
      <TabComponent className={className} scroll={scroll}>
        <h1 className="text-xl tracking-wide font-satoshi font-extrabold text-black pt-5 pb-2">
          {heading && heading}
        </h1>
        <div className="flex flex-col relative">
          <TwitterTabMenu>
            {tabs?.map(({ tabTitle }, index): any => {
              return (
                <>
                  {tabTitle && (
                    <>
                      <TwitterTabLink key={index}>
                        <span
                          className={`${
                            activeTab === index &&
                            "border-b-4 border-twitter text-black"
                          }`}
                          onClick={() => setActiveTab(index)}
                        >
                          {tabTitle}
                        </span>
                      </TwitterTabLink>
                    </>
                  )}
                </>
              );
            })}
          </TwitterTabMenu>
        </div>

        <TabNavMenu>
          {tabs?.map(({ tabTitle, tabIcon }, index): any => {
            return (
              <>
                {!tabTitle && (
                  <>
                    <TabNavLink
                      key={index}
                      className={`${
                        activeTab === index ? "bg-secondary" : ""
                      } `}
                      onClick={() => setActiveTab(index)}
                    >
                      {tabIcon}
                      <span className="text-xl"> {tabTitle}</span>
                    </TabNavLink>
                  </>
                )}
              </>
            );
          })}
        </TabNavMenu>
      </TabComponent>

      <TabComponentRenderer className="mt-10">
        {tabs.find((e) => e.id === activeTab)?.tabBody}
      </TabComponentRenderer>
    </>
  );
};
