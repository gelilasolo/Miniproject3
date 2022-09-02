import React from "react";

import { Column, Stack, Img, Text, Row, Button, Line } from "components";

const LandingpagePage = () => {
  return (
    <>
      <Column className="bg-white_A700 font-vazirmatn justify-end mx-[auto] lg:pt-[29px] xl:pt-[33px] 2xl:pt-[38px] 3xl:pt-[45px] w-[100%]">
        <Column className="items-end lg:px-[55px] xl:px-[63px] 2xl:px-[71px] 3xl:px-[85px] w-[100%]">
          <Stack className="lg:h-[40px] xl:h-[45px] 2xl:h-[51px] 3xl:h-[61px] w-[22%]">
            <Img
              src="images/img_volume.svg"
              className="absolute lg:h-[40px] xl:h-[45px] 2xl:h-[51px] 3xl:h-[61px] left-[38%] rounded-radius12 lg:w-[39px] xl:w-[44px] 2xl:w-[50px] 3xl:w-[60px]"
              alt="volume"
            />
            <Text className="absolute font-black lg:text-[28px] xl:text-[32px] 2xl:text-[36px] 3xl:text-[43px] text-bluegray_800 top-[4%] w-[auto]">
              Online Dictionary
            </Text>
          </Stack>
        </Column>
        <Stack className="lg:h-[571px] xl:h-[653px] 2xl:h-[735px] 3xl:h-[881px] lg:ml-[43px] xl:ml-[50px] 2xl:ml-[56px] 3xl:ml-[67px] lg:mr-[111px] xl:mr-[127px] 2xl:mr-[143px] 3xl:mr-[172px] lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] w-[86%]">
          <Column className="absolute justify-end lg:pl-[35px] xl:pl-[40px] 2xl:pl-[45px] 3xl:pl-[54px] lg:py-[35px] xl:py-[40px] 2xl:py-[45px] 3xl:py-[54px] right-[0] w-[100%]">
            <Row className="justify-end lg:ml-[23px] xl:ml-[26px] 2xl:ml-[30px] 3xl:ml-[36px] lg:mt-[28px] xl:mt-[33px] 2xl:mt-[37px] 3xl:mt-[44px] w-[97%]">
              <Stack className="lg:h-[404px] xl:h-[462px] 2xl:h-[519px] 3xl:h-[623px] w-[50%]">
                <div className="absolute bg-gray_100 lg:h-[354px] xl:h-[405px] 2xl:h-[455px] 3xl:h-[546px] inset-[0] justify-center m-[auto] rounded-radius85 w-[92%]"></div>
                <Stack
                  className="absolute bg-cover bg-repeat lg:h-[404px] xl:h-[462px] 2xl:h-[519px] 3xl:h-[623px] 3xl:px-[102px] lg:px-[66px] xl:px-[75px] 2xl:px-[85px] rounded-radius85 w-[100%]"
                  style={{ backgroundImage: "url('images/img_group7.svg')" }}
                >
                  <Img
                    src="images/img_ferdowsiretro.png"
                    className="absolute lg:h-[265px] xl:h-[304px] 2xl:h-[341px] 3xl:h-[410px] inset-[0] justify-center m-[auto] w-[69%]"
                    alt="ferdowsiretro"
                  />
                </Stack>
              </Stack>
              <Column className="items-end lg:ml-[46px] xl:ml-[53px] 2xl:ml-[60px] 3xl:ml-[72px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[45%]">
                <Text className="font-black xl:leading-[102px] 2xl:leading-[115px] 3xl:leading-[138px] lg:leading-[89px] lg:text-[62px] xl:text-[71px] 2xl:text-[80px] 3xl:text-[96px] text-bluegray_800 text-right w-[100%]">
                  Online English Dictionary
                </Text>
                <Text className="font-hairline lg:mt-[42px] xl:mt-[48px] 2xl:mt-[54px] 3xl:mt-[65px] lg:text-[28px] xl:text-[32px] 2xl:text-[36px] 3xl:text-[43px] text-bluegray_800_9e w-[auto]">
                  {" "}
                  Type a word...
                </Text>
              </Column>
            </Row>
            <Button
              className="font-normal lg:ml-[213px] xl:ml-[244px] 2xl:ml-[274px] 3xl:ml-[329px] lg:mr-[554px] xl:mr-[633px] 2xl:mr-[712px] 3xl:mr-[855px] lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] not-italic lg:text-[17px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px] text-center w-[17%]"
              shape="RoundedBorder33"
              size="md"
            >
              History
            </Button>
          </Column>
          <Stack className="absolute bottom-[27%] lg:h-[60px] xl:h-[68px] 2xl:h-[77px] 3xl:h-[92px] pl-[1px] right-[0] w-[44%]">
            <div className="absolute bg-gray_100 border-bluegray_100 border-bw3 border-solid lg:h-[60px] xl:h-[68px] 2xl:h-[77px] 3xl:h-[92px] rounded-radius25 w-[100%]"></div>
            <Row className="absolute h-[max-content] inset-[0] justify-center m-[auto] pb-[1px] w-[87%]">
              <Img
                src="images/img_search.svg"
                className="lg:h-[22px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[33px] mt-[1px] w-[6%]"
                alt="search"
              />
              <Text className="font-normal not-italic lg:text-[17px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px] text-bluegray_800_90 w-[auto]">
                Search
              </Text>
            </Row>
          </Stack>
        </Stack>
        <Column className="items-center lg:mt-[31px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] w-[100%]">
          <Stack className="lg:h-[1563px] xl:h-[1787px] 2xl:h-[2011px] 3xl:h-[2412px] w-[100%]">
            <Stack className="absolute bottom-[0] lg:h-[1371px] xl:h-[1568px] 2xl:h-[1764px] 3xl:h-[2117px] w-[100%]">
              <Stack className="absolute bottom-[0] lg:h-[1079px] xl:h-[1234px] 2xl:h-[1388px] 3xl:h-[1666px] w-[100%]">
                <Column className="absolute top-[0] w-[100%]">
                  <Row className="w-[70%]">
                    <Img
                      src="images/img_ellipse11.png"
                      className="lg:h-[256px] xl:h-[293px] 2xl:h-[329px] 3xl:h-[395px] lg:mt-[33px] xl:mt-[38px] 2xl:mt-[43px] 3xl:mt-[51px] rounded-radius50 w-[31%]"
                      alt="EllipseEleven"
                    />
                    <div className="backdrop-opacity-[0.5] bg-pink_300_1e blur-[150.00px] lg:h-[256px] xl:h-[293px] 2xl:h-[329px] 3xl:h-[395px] lg:mb-[33px] xl:mb-[38px] 2xl:mb-[43px] 3xl:mb-[51px] lg:ml-[281px] xl:ml-[321px] 2xl:ml-[362px] 3xl:ml-[434px] rounded-radius501 lg:w-[255px] xl:w-[292px] 2xl:w-[328px] 3xl:w-[394px]"></div>
                  </Row>
                  <Row className="justify-between lg:mt-[170px] xl:mt-[194px] 2xl:mt-[219px] 3xl:mt-[263px] w-[100%]">
                    <Img
                      src="images/img_ellipse7.png"
                      className="lg:h-[479px] xl:h-[548px] 2xl:h-[616px] 3xl:h-[739px] rotate-[25deg] w-[36%]"
                      alt="EllipseSeven"
                    />
                    <Img
                      src="images/img_ellipse6.png"
                      className="lg:h-[287px] xl:h-[329px] 2xl:h-[370px] 3xl:h-[443px] 3xl:mt-[106px] lg:mt-[68px] xl:mt-[78px] 2xl:mt-[88px] w-[14%]"
                      alt="EllipseSix"
                    />
                  </Row>
                </Column>
                <div className="absolute backdrop-opacity-[0.5] bg-yellow_500_59 blur-[150.00px] bottom-[0] 2xl:h-[1041px] 3xl:h-[1249px] lg:h-[809px] xl:h-[926px] right-[2%] rotate-[54deg] rounded-radius54241 w-[76%]"></div>
              </Stack>
              <Img
                src="images/img_ellipse12.png"
                className="absolute 2xl:h-[1090px] 3xl:h-[1307px] lg:h-[847px] xl:h-[969px] right-[0] rotate-[39deg] top-[2%] w-[28%]"
                alt="EllipseTwelve"
              />
              <div className="absolute overflow-x-auto top-[0] w-[100%]">
                <Stack className="lg:h-[1284px] xl:h-[1468px] 2xl:h-[1652px] 3xl:h-[1982px] w-[100%]">
                  <Stack className="absolute lg:h-[1284px] xl:h-[1468px] 2xl:h-[1652px] 3xl:h-[1982px] overflow-auto w-[100%]">
                    <Stack className="absolute 3xl:h-[1060px] lg:h-[687px] xl:h-[785px] 2xl:h-[883px] inset-x-[0] mx-[auto] top-[0] w-[98%]">
                      <Row className="absolute bottom-[14%] items-center justify-between left-[0] w-[84%]">
                        <Img
                          src="images/img_persianalphabe.png"
                          className="lg:h-[405px] xl:h-[463px] 2xl:h-[520px] 3xl:h-[624px] 3xl:mb-[10px] lg:mb-[7px] xl:mb-[8px] 2xl:mb-[9px] rounded-radius85 w-[43%]"
                          alt="persianalphabe"
                        />
                        <Img
                          src="images/img_persianalphabe_517X577.png"
                          className="lg:h-[405px] xl:h-[463px] 2xl:h-[520px] 3xl:h-[624px] 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] rounded-radius85 w-[48%]"
                          alt="persianalphabe One"
                        />
                      </Row>
                      <Img
                        src="images/img_persianalphabe_878X470.png"
                        className="absolute 3xl:h-[1060px] lg:h-[687px] xl:h-[785px] 2xl:h-[883px] right-[0] rounded-radius85 w-[33%]"
                        alt="persianalphabe Two"
                      />
                    </Stack>
                    <Column className="absolute bottom-[0] items-center lg:px-[19px] xl:px-[22px] 2xl:px-[25px] 3xl:px-[30px] right-[0] w-[100%]">
                      <Stack className="lg:h-[340px] xl:h-[389px] 2xl:h-[438px] 3xl:h-[525px] w-[35%]">
                        <Row className="absolute items-center justify-between left-[3%] w-[97%]">
                          <Img
                            src="images/img_persianalphabe_435X523.png"
                            className="lg:h-[340px] xl:h-[389px] 2xl:h-[438px] 3xl:h-[525px] w-[100%]"
                            alt="persianalphabe Three"
                          />
                          <Column
                            className="bg-cover bg-repeat lg:p-[38px] xl:p-[43px] 2xl:p-[49px] 3xl:p-[59px] w-[100%]"
                            style={{
                              backgroundImage: "url('images/img_group12.png')",
                            }}
                          >
                            <Text className="font-light lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] lg:mt-[240px] xl:mt-[275px] 2xl:mt-[309px] 3xl:mt-[371px] lg:text-[21px] xl:text-[25px] 2xl:text-[28px] 3xl:text-[33px] text-bluegray_800_9e w-[auto]">
                              For a better Experiance ...
                            </Text>
                          </Column>
                          <Img
                            src="images/img_persianalphabe_1.png"
                            className="lg:h-[340px] xl:h-[389px] 2xl:h-[438px] 3xl:h-[525px] w-[100%]"
                            alt="persianalphabe Four"
                          />
                        </Row>
                        <Text className="absolute bottom-[23%] font-black left-[0] lg:text-[50px] xl:text-[57px] 2xl:text-[64px] 3xl:text-[77px] text-bluegray_800 w-[auto]">
                          Use our Library{" "}
                        </Text>
                      </Stack>
                      <Stack className="lg:h-[340px] xl:h-[389px] 2xl:h-[438px] 3xl:h-[525px] w-[94%]">
                        <Stack className="absolute lg:h-[340px] xl:h-[389px] 2xl:h-[438px] 3xl:h-[525px] right-[0] w-[100%]">
                          <Img
                            src="images/img_group12.png"
                            className="absolute lg:h-[340px] xl:h-[389px] 2xl:h-[438px] 3xl:h-[525px] right-[29%] w-[37%]"
                            alt="persianalphabe Five"
                          />
                          <Row
                            className="absolute bg-cover bg-repeat bottom-[23%] items-center justify-between lg:p-[50px] xl:p-[58px] 2xl:p-[65px] 3xl:p-[78px] rounded-bl-[0] rounded-br-[0] rounded-tl-[30px] rounded-tr-[50px] w-[100%]"
                            style={{
                              backgroundImage: "url('images/img_group24.svg')",
                            }}
                          >
                            <Button
                              className="font-normal lg:mb-[14px] xl:mb-[16px] 2xl:mb-[18px] 3xl:mb-[21px] 2xl:ml-[111px] 3xl:ml-[133px] lg:ml-[86px] xl:ml-[99px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[9%]"
                              shape="RoundedBorder17"
                              variant="OutlineGray900"
                            >
                              Sign UP
                            </Button>
                            <Text className="font-normal lg:mr-[161px] xl:mr-[184px] 2xl:mr-[207px] 3xl:mr-[248px] not-italic rotate-[1deg] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-white_A700_95 w-[auto]">
                              English dictionary built in AA Ethiopa
                            </Text>
                          </Row>
                        </Stack>
                        <Img
                          src="images/img_persianalphabe_2.png"
                          className="absolute lg:h-[340px] xl:h-[389px] 2xl:h-[438px] 3xl:h-[525px] right-[0] w-[37%]"
                          alt="persianalphabe Six"
                        />
                      </Stack>
                    </Column>
                  </Stack>
                  <Row className="absolute inset-x-[0] justify-between mx-[auto] top-[30%] w-[86%]">
                    <Stack className="lg:h-[355px] xl:h-[406px] 2xl:h-[457px] 3xl:h-[548px] lg:mb-[6px] xl:mb-[7px] 2xl:mb-[8px] 3xl:mb-[9px] w-[51%]">
                      <Column className="absolute right-[3%] w-[97%]">
                        <Stack className="lg:h-[172px] xl:h-[197px] 2xl:h-[222px] 3xl:h-[266px] w-[51%]">
                          <Column className="absolute border-bluegray_100 border-bw3 border-solid bottom-[0] items-end justify-center left-[0] lg:p-[17px] xl:p-[20px] 2xl:p-[23px] 3xl:p-[27px] rounded-radius35 shadow-bs3 w-[88%]">
                            <Text className="font-bold lg:mt-[23px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] lg:text-[17px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px] text-bluegray_800 w-[auto]">
                              Take notesا
                            </Text>
                            <Text className="font-light leading-[normal] lg:mb-[14px] xl:mb-[16px] 2xl:mb-[18px] 3xl:mb-[21px] lg:mt-[24px] xl:mt-[27px] 2xl:mt-[31px] 3xl:mt-[37px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_800_a7 text-right w-[99%]">
                              Give some example of your own with your words
                            </Text>
                          </Column>
                          <Button
                            className="absolute flex lg:h-[57px] xl:h-[65px] 2xl:h-[73px] 3xl:h-[87px] items-center justify-center right-[0] top-[0] lg:w-[56px] xl:w-[64px] 2xl:w-[72px] 3xl:w-[86px]"
                            size="smIcn"
                            variant="icbOutlineRed500"
                          >
                            <Img
                              src="images/img_quill.svg"
                              className="flex items-center justify-center"
                              alt="quill"
                            />
                          </Button>
                        </Stack>
                        <Row className="justify-end ml-[auto] lg:mt-[21px] xl:mt-[25px] 2xl:mt-[28px] 3xl:mt-[33px] w-[62%]">
                          <Img
                            src="images/img_refresh.svg"
                            className="lg:h-[28px] xl:h-[32px] 2xl:h-[36px] 3xl:h-[43px] lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] w-[7%]"
                            alt="refresh"
                          />
                          <Stack className="lg:h-[172px] xl:h-[197px] 2xl:h-[222px] 3xl:h-[266px] lg:ml-[28px] xl:ml-[33px] 2xl:ml-[37px] 3xl:ml-[44px] w-[83%]">
                            <Column className="absolute border-bluegray_100 border-bw3 border-solid bottom-[0] items-end justify-center left-[0] lg:p-[17px] xl:p-[19px] 2xl:p-[22px] 3xl:p-[26px] rounded-radius35 shadow-bs3 w-[88%]">
                              <Text className="font-bold lg:mt-[23px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] lg:text-[17px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px] text-bluegray_800 w-[auto]">
                                Think
                              </Text>
                              <Text className="font-light leading-[normal] lg:mb-[14px] xl:mb-[16px] 2xl:mb-[18px] 3xl:mb-[21px] mr-[1px] lg:mt-[24px] xl:mt-[27px] 2xl:mt-[31px] 3xl:mt-[37px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_800_a7 text-right w-[96%]">
                                Think of the words you want to look up every now
                                and then
                              </Text>
                            </Column>
                            <Button
                              className="absolute flex lg:h-[57px] xl:h-[65px] 2xl:h-[73px] 3xl:h-[87px] items-center justify-center right-[0] top-[0] lg:w-[56px] xl:w-[64px] 2xl:w-[72px] 3xl:w-[86px]"
                              size="smIcn"
                              variant="icbOutlineOrange500"
                            >
                              <Img
                                src="images/img_airplane.svg"
                                className="flex items-center justify-center"
                                alt="airplane"
                              />
                            </Button>
                          </Stack>
                        </Row>
                      </Column>
                      <Stack className="absolute lg:h-[172px] xl:h-[197px] 2xl:h-[222px] 3xl:h-[266px] right-[0] top-[1%] w-[49%]">
                        <Column className="absolute border-bluegray_100 border-bw3 border-solid bottom-[0] items-end justify-center left-[0] lg:p-[17px] xl:p-[20px] 2xl:p-[23px] 3xl:p-[27px] rounded-radius35 shadow-bs3 w-[88%]">
                          <Text className="font-bold lg:mt-[25px] xl:mt-[29px] 2xl:mt-[33px] 3xl:mt-[39px] lg:text-[17px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px] text-bluegray_800 w-[auto]">
                            Look up your history
                          </Text>
                          <Text className="font-light leading-[normal] lg:mb-[14px] xl:mb-[16px] 2xl:mb-[18px] 3xl:mb-[21px] lg:mt-[22px] xl:mt-[25px] 2xl:mt-[29px] 3xl:mt-[34px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_800_a7 text-right w-[91%]">
                            Get access to the words you have look up
                          </Text>
                        </Column>
                        <Button
                          className="absolute flex lg:h-[57px] xl:h-[65px] 2xl:h-[73px] 3xl:h-[87px] items-center justify-center right-[0] top-[0] lg:w-[56px] xl:w-[64px] 2xl:w-[72px] 3xl:w-[86px]"
                          size="mdIcn"
                          variant="icbOutlineLightgreenA701"
                        >
                          <Img
                            src="images/img_star.svg"
                            className="flex items-center justify-center lg:h-[24px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px]"
                            alt="star"
                          />
                        </Button>
                      </Stack>
                    </Stack>
                    <Column className="items-end 3xl:mt-[112px] lg:mt-[72px] xl:mt-[83px] 2xl:mt-[93px] lg:pl-[42px] xl:pl-[48px] 2xl:pl-[54px] 3xl:pl-[65px] w-[34%]">
                      <Text className="font-black leading-[normal] lg:text-[42px] xl:text-[48px] 2xl:text-[54px] 3xl:text-[65px] text-bluegray_800 text-right w-[80%]">
                        {" "}
                        Type a word and see the magic
                      </Text>
                      <Text className="font-light leading-[normal] mr-[2px] mt-[2px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-bluegray_800_9e text-right w-[99%]">
                        This Dictioary is used to look up defination of words
                        parts of thier speech adn give a simple example
                      </Text>
                      <Button
                        className="font-normal lg:mt-[44px] xl:mt-[50px] 2xl:mt-[57px] 3xl:mt-[68px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center w-[45%]"
                        shape="RoundedBorder17"
                        variant="OutlineBluegray100"
                      >
                        Search a Word
                      </Button>
                    </Column>
                  </Row>
                </Stack>
              </div>
            </Stack>
            <Row className="absolute inset-x-[0] mx-[auto] pr-[1px] top-[0] w-[86%]">
              <Column
                className="bg-cover bg-repeat items-end lg:mt-[318px] xl:mt-[363px] 2xl:mt-[409px] 3xl:mt-[491px] lg:p-[35px] xl:p-[40px] 2xl:p-[45px] 3xl:p-[54px] rounded-bl-[35px] rounded-br-[35px] rounded-tl-[35px] rounded-tr-[0] w-[42%]"
                style={{ backgroundImage: "url('images/img_message.svg')" }}
              >
                <Text className="font-light lg:mb-[28px] xl:mb-[33px] 2xl:mb-[37px] 3xl:mb-[44px] lg:mt-[22px] xl:mt-[25px] 2xl:mt-[29px] 3xl:mt-[34px] rotate-[5deg] lg:text-[26px] xl:text-[30px] 2xl:text-[34px] 3xl:text-[41px] text-bluegray_800 w-[auto]">
                  BEst online Dictionary !
                </Text>
              </Column>
              <Stack className="lg:h-[328px] xl:h-[375px] 2xl:h-[422px] 3xl:h-[506px] lg:mb-[158px] xl:mb-[181px] 2xl:mb-[204px] 3xl:mb-[244px] lg:ml-[10px] xl:ml-[11px] 2xl:ml-[13px] 3xl:ml-[15px] w-[3%]">
                <Line className="absolute bg-bluegray_100 lg:h-[312px] xl:h-[356px] 2xl:h-[401px] 3xl:h-[481px] inset-x-[0] mx-[auto] top-[0] w-[3px]" />
                <Img
                  src="images/img_point.svg"
                  className="absolute bottom-[0] lg:h-[29px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] w-[100%]"
                  alt="point"
                />
              </Stack>
              <Img
                src="images/img_writing.svg"
                className="lg:h-[270px] xl:h-[309px] 2xl:h-[347px] 3xl:h-[417px] xl:ml-[112px] 2xl:ml-[126px] 3xl:ml-[152px] lg:ml-[98px] lg:mt-[182px] xl:mt-[209px] 2xl:mt-[235px] 3xl:mt-[282px] w-[44%]"
                alt="writing"
              />
            </Row>
          </Stack>
        </Column>
      </Column>
    </>
  );
};

export default LandingpagePage;
