import React from "react"
import {
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionPanel,
  Box,
  PseudoBox,
  Icon,
} from "@chakra-ui/core"
import { Link } from "gatsby"

const Fourthline = () => {
  return (
    <>
      <AccordionItem border="0">
        {({ isExpanded }) => (
          <>
            <AccordionHeader p={0} borderRadius="0.3rem" _focus="boxShadow:0px">
              <PseudoBox
                borderRadius="0.3rem"
                flex="1"
                display="flex"
                cursor="pointer"
                py="8px"
                px="16px"
                textAlign="left"
                _hover={{
                  color: "orange.300",
                  paddingLeft: "25px",
                  transition: " all 0.1s linear",
                  bg: "rgb(233,233,233)",
                }}
              >
                <Box flex="1" textAlign="left">
                  <Link
                    to="/research_and_developement"
                    style={{
                      display: "block",
                      width: "100%",
                    }}
                  >
                    研究与开发
                  </Link>
                </Box>
                <Icon
                  fontSize="1.3rem"
                  name={isExpanded ? "chevron-down" : "chevron-right"}
                />
              </PseudoBox>
            </AccordionHeader>
            {/* 子项 */}
            <AccordionPanel py="0">
              <Accordion defaultIndex={[0]} allowMultiple>
                {/* 第一栏 */}
                <AccordionItem border="0">
                  {({ isExpanded }) => (
                    <>
                      <AccordionHeader
                        p={0}
                        borderRadius="0.3rem"
                        _focus="boxShadow:0px"
                      >
                        <PseudoBox
                          borderRadius="0.3rem"
                          flex="1"
                          display="flex"
                          cursor="pointer"
                          py="8px"
                          px="16px"
                          textAlign="left"
                          _hover={{
                            color: "orange.300",
                            paddingLeft: "25px",
                            transition: " all 0.1s linear",
                            bg: "rgb(233,233,233)",
                          }}
                        >
                          <Box textAlign="left">
                            <Link
                              to="/sharding"
                              style={{
                                color: "rgb(99,100,104)",
                                fontSize: "0.9rem",
                                display:"block",
                                width:"100%"
                              }}
                            >
                              Sharding 分片
                            </Link>
                          </Box>
                          <Icon
                            mt="0.3rem"
                            fontSize="1rem"
                            name={isExpanded ? "chevron-down" : "chevron-right"}
                          />
                        </PseudoBox>
                      </AccordionHeader>
                      {/* 子项 */}
                      <AccordionPanel py="0">
                        <Accordion defaultIndex={[0]} allowMultiple>
                          {/* 第1栏 */}
                          <AccordionItem border="0">
                            <AccordionHeader
                              p={0}
                              borderRadius="0.3rem"
                              _focus="boxShadow:0px"
                            >
                              <PseudoBox
                                borderRadius="0.3rem"
                                flex="1"
                                display="flex"
                                cursor="pointer"
                                py="8px"
                                px="16px"
                                textAlign="left"
                                _hover={{
                                  color: "orange.300",
                                  paddingLeft: "25px",
                                  transition: " all 0.1s linear",
                                  bg: "rgb(233,233,233)",
                                }}
                              >
                                <Box flex="1" textAlign="left">
                                  <Link
                                    to="/sharding_research_compendium"
                                    style={{
                                      color: "rgb(99,100,104)",
                                      fontSize: "0.9rem",
                                      display:"block",
                                      width:"100%"
                                    }}
                                  >
                                    分片研究概况
                                  </Link>
                                </Box>
                              </PseudoBox>
                            </AccordionHeader>
                          </AccordionItem>

                          {/* 第2栏 */}

                          <AccordionItem border="0">
                            <AccordionHeader
                              p={0}
                              borderRadius="0.3rem"
                              _focus="boxShadow:0px"
                            >
                              <PseudoBox
                                borderRadius="0.3rem"
                                flex="1"
                                display="flex"
                                cursor="pointer"
                                py="8px"
                                px="16px"
                                textAlign="left"
                                _hover={{
                                  color: "orange.300",
                                  paddingLeft: "25px",
                                  transition: " all 0.1s linear",
                                  bg: "rgb(233,233,233)",
                                }}
                              >
                                <Box flex="1" textAlign="left">
                                  <Link
                                    to="/sharding_roadmap"
                                    style={{
                                      color: "rgb(99,100,104)",
                                      fontSize: "0.9rem",
                                      display:"block",
                                      width:"100%"
                                    }}
                                  >
                                    线路图
                                  </Link>
                                </Box>
                              </PseudoBox>
                            </AccordionHeader>
                          </AccordionItem>
                          {/* 第3栏 */}

                          <AccordionItem border="0">
                            <AccordionHeader
                              p={0}
                              borderRadius="0.3rem"
                              _focus="boxShadow:0px"
                            >
                              <PseudoBox
                                borderRadius="0.3rem"
                                flex="1"
                                display="flex"
                                cursor="pointer"
                                py="8px"
                                px="16px"
                                textAlign="left"
                                _hover={{
                                  color: "orange.300",
                                  paddingLeft: "25px",
                                  transition: " all 0.1s linear",
                                  bg: "rgb(233,233,233)",
                                }}
                              >
                                <Box flex="1" textAlign="left">
                                  <Link
                                    to="/implementation"
                                    style={{
                                      color: "rgb(99,100,104)",
                                      fontSize: "0.9rem",
                                      display:"block",
                                      width:"100%"
                                    }}
                                  >
                                    现实状况
                                  </Link>
                                </Box>
                              </PseudoBox>
                            </AccordionHeader>
                          </AccordionItem>
                          {/* 第四栏 */}
                          <AccordionItem border="0">
                            <AccordionHeader
                              p={0}
                              borderRadius="0.3rem"
                              _focus="boxShadow:0px"
                            >
                              <PseudoBox
                                borderRadius="0.3rem"
                                flex="1"
                                display="flex"
                                cursor="pointer"
                                py="8px"
                                px="16px"
                                textAlign="left"
                                _hover={{
                                  color: "orange.300",
                                  paddingLeft: "25px",
                                  transition: " all 0.1s linear",
                                  bg: "rgb(233,233,233)",
                                }}
                              >
                                <Box flex="1" textAlign="left">
                                  <Link
                                    to="/sharding_faqs"
                                    style={{
                                      color: "rgb(99,100,104)",
                                      fontSize: "0.9rem",
                                      display:"block",
                                      width:"100%"
                                    }}
                                  >
                                    Sharding FAQ
                                  </Link>
                                </Box>
                              </PseudoBox>
                            </AccordionHeader>
                          </AccordionItem>
                        </Accordion>
                      </AccordionPanel>
                    </>
                  )}
                </AccordionItem>

                {/* 第二栏 */}
                <AccordionItem border="0">
                  {({ isExpanded }) => (
                    <>
                      <AccordionHeader
                        p={0}
                        borderRadius="0.3rem"
                        _focus="boxShadow:0px"
                      >
                        <PseudoBox
                          borderRadius="0.3rem"
                          flex="1"
                          display="flex"
                          cursor="pointer"
                          py="8px"
                          px="16px"
                          textAlign="left"
                          _hover={{
                            color: "orange.300",
                            paddingLeft: "25px",
                            transition: " all 0.1s linear",
                            bg: "rgb(233,233,233)",
                          }}
                        >
                          <Box textAlign="left">
                            <Link
                              to="/casper_pos"
                              style={{
                                color: "rgb(99,100,104)",
                                fontSize: "0.9rem",
                                display:"block",
                                width:"100%"
                              }}
                            >
                              Casper PoS
                            </Link>
                          </Box>
                          <Icon
                            mt="0.3rem"
                            fontSize="1rem"
                            name={isExpanded ? "chevron-down" : "chevron-right"}
                          />
                        </PseudoBox>
                      </AccordionHeader>
                      {/* 子项 */}
                      <AccordionPanel py="0">
                        <Accordion defaultIndex={[0]} allowMultiple>
                          {/* 第1栏 */}
                          <AccordionItem border="0">
                            {({ isExpanded }) => (
                              <>
                                <AccordionHeader
                                  p={0}
                                  borderRadius="0.3rem"
                                  _focus="boxShadow:0px"
                                >
                                  <PseudoBox
                                    borderRadius="0.3rem"
                                    flex="1"
                                    display="flex"
                                    cursor="pointer"
                                    py="8px"
                                    px="16px"
                                    textAlign="left"
                                    _hover={{
                                      color: "orange.300",
                                      paddingLeft: "25px",
                                      transition: " all 0.1s linear",
                                      bg: "rgb(233,233,233)",
                                    }}
                                  >
                                    <Box textAlign="left">
                                      <Link
                                        to="/casper_ffg"
                                        style={{
                                          color: "rgb(99,100,104)",
                                          fontSize: "0.9rem",
                                          display:"block",
                                          width:"100%"
                                        }}
                                      >
                                        Casper FFG
                                      </Link>
                                    </Box>
                                    <Icon
                                      mt="0.3rem"
                                      fontSize="1rem"
                                      name={
                                        isExpanded
                                          ? "chevron-down"
                                          : "chevron-right"
                                      }
                                    />
                                  </PseudoBox>
                                </AccordionHeader>
                                {/* 子项 */}
                                <AccordionPanel py="0">
                                  <Accordion defaultIndex={[0]} allowMultiple>
                                    {/* 第1栏 */}
                                    <AccordionItem border="0">
                                      <AccordionHeader
                                        p={0}
                                        borderRadius="0.3rem"
                                        _focus="boxShadow:0px"
                                      >
                                        <PseudoBox
                                          borderRadius="0.3rem"
                                          flex="1"
                                          display="flex"
                                          cursor="pointer"
                                          py="8px"
                                          px="16px"
                                          textAlign="left"
                                          _hover={{
                                            color: "orange.300",
                                            paddingLeft: "25px",
                                            transition: " all 0.1s linear",
                                            bg: "rgb(233,233,233)",
                                          }}
                                        >
                                          <Box flex="1" textAlign="left">
                                            <Link
                                              to="/extra_intro_to_casperffg"
                                              style={{
                                                color: "rgb(99,100,104)",
                                                fontSize: "0.9rem",
                                                display:"block",
                                                width:"100%"
                                              }}
                                            >
                                              延伸阅读
                                            </Link>
                                          </Box>
                                        </PseudoBox>
                                      </AccordionHeader>
                                    </AccordionItem>
                                  </Accordion>
                                </AccordionPanel>
                              </>
                            )}
                          </AccordionItem>

                          {/* 第2栏 */}

                          <AccordionItem border="0">
                            <AccordionHeader
                              p={0}
                              borderRadius="0.3rem"
                              _focus="boxShadow:0px"
                            >
                              <PseudoBox
                                borderRadius="0.3rem"
                                flex="1"
                                display="flex"
                                cursor="pointer"
                                py="8px"
                                px="16px"
                                textAlign="left"
                                _hover={{
                                  color: "orange.300",
                                  paddingLeft: "25px",
                                  transition: " all 0.1s linear",
                                  bg: "rgb(233,233,233)",
                                }}
                              >
                                <Box flex="1" textAlign="left">
                                  <Link
                                    to="/casper_cbc"
                                    style={{
                                      color: "rgb(99,100,104)",
                                      fontSize: "0.9rem",
                                      display:"block",
                                      width:"100%"
                                    }}
                                  >
                                    Casper CBC
                                  </Link>
                                </Box>
                              </PseudoBox>
                            </AccordionHeader>
                          </AccordionItem>
                        </Accordion>
                      </AccordionPanel>
                    </>
                  )}
                </AccordionItem>

                {/* 第3栏 */}

                <AccordionItem border="0">
                  <AccordionHeader
                    p={0}
                    borderRadius="0.3rem"
                    _focus="boxShadow:0px"
                  >
                    <PseudoBox
                      borderRadius="0.3rem"
                      flex="1"
                      display="flex"
                      cursor="pointer"
                      py="8px"
                      px="16px"
                      textAlign="left"
                      _hover={{
                        color: "orange.300",
                        paddingLeft: "25px",
                        transition: " all 0.1s linear",
                        bg: "rgb(233,233,233)",
                      }}
                    >
                      <Box flex="1" textAlign="left">
                        <Link
                          to="/governance"
                          style={{
                            color: "rgb(99,100,104)",
                            fontSize: "0.9rem",
                            display:"block",
                            width:"100%"
                          }}
                        >
                          关于治理
                        </Link>
                      </Box>
                    </PseudoBox>
                  </AccordionHeader>
                </AccordionItem>

                {/* 第4栏 */}

                <AccordionItem border="0">
                  <AccordionHeader
                    p={0}
                    borderRadius="0.3rem"
                    _focus="boxShadow:0px"
                  >
                    <PseudoBox
                      borderRadius="0.3rem"
                      flex="1"
                      display="flex"
                      cursor="pointer"
                      py="8px"
                      px="16px"
                      textAlign="left"
                      _hover={{
                        color: "orange.300",
                        paddingLeft: "25px",
                        transition: " all 0.1s linear",
                        bg: "rgb(233,233,233)",
                      }}
                    >
                      <Box flex="1" textAlign="left">
                        <Link
                          to="/cryptoeconomics"
                          style={{
                            color: "rgb(99,100,104)",
                            fontSize: "0.9rem",
                            display:"block",
                            width:"100%"
                          }}
                        >
                          加密货币经济学
                        </Link>
                      </Box>
                    </PseudoBox>
                  </AccordionHeader>
                </AccordionItem>
              </Accordion>
            </AccordionPanel>
          </>
        )}
      </AccordionItem>
    </>
  )
}

export default Fourthline
