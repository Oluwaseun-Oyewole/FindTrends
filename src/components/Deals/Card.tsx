import styled from "styled-components";
import tw from "twin.macro";
import { BsCheckLg } from "react-icons/bs";
import { Button } from "../Button";
import { Tilt } from "../Tilt";
import { dealsdata } from "../../utils/data";

const BenefitCard = styled.div`
  ${tw`flex flex-col gap-4 text-sm`}
  > p {
    ${tw`flex items-center gap-2 font-medium `}
  }

  > div:first-child {
    display: none;
  }
`;

const DealContent = styled.div`
  > div:first-child {
    // display: none;
  }
`;

const DealContainer = styled.div`
  > div:first-child {
    // display: none;
  }
`;
export const Card = ({ click }: any) => {
  return (
    <div className=" mt-8 grid grid-cols-3 gap-5">
      {dealsdata?.map((item: any, index: number) => {
        return (
          <Tilt>
            <DealContainer>
              <DealContent
                className={`${
                  item.primary ? "bg-secondary" : "bg-white"
                } text-black p-7 rounded-lg cursor-pointer`}
              >
                <div
                  className={`py-4 border-b-2 ${
                    item.primary ? "border-gray-500" : "border-gray-100"
                  }`}
                >
                  <h2 className="text-2xl font-bold">{item.dealtype}</h2>
                  <p className="text-black font-bold text-sm py-1">
                    {item.dealdescription}
                  </p>
                </div>

                <div className="py-6 text-4xl font-bold">
                  {item.dealamount}
                  <span className="text-sm pl-2">/ Month</span>
                </div>

                <div className="h-[200px]">
                  {/* <BsCheckLg /> */}
                  {item.dealbenefits?.map((deal: any, index: number) => {
                    return (
                      <BenefitCard>
                        <p>
                          <BsCheckLg />
                          {deal.benefit}
                        </p>
                        <p>
                          <BsCheckLg />
                          {deal.benefit1}
                        </p>
                        <p>
                          <BsCheckLg />
                          {deal.benefit2}
                        </p>
                        <p>
                          {deal.benefit3 && (
                            <>
                              <BsCheckLg />
                              {deal.benefit3}
                            </>
                          )}
                        </p>
                        <p>
                          {deal.benefit4 && (
                            <>
                              <BsCheckLg />
                              {deal.benefit4}
                            </>
                          )}
                        </p>
                      </BenefitCard>
                    );
                  })}
                </div>

                <Button
                  children="Start Free Trial"
                  padding={true}
                  paddingvalues="12px 60px"
                  background={item.primary ? "#000" : "#A8FF35"}
                  color={item.primary ? "#fff" : "#000"}
                />
              </DealContent>
            </DealContainer>
          </Tilt>
        );
      })}
    </div>
  );
};