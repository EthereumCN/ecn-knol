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

const Secondline = () => {
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
                  <Link to="/eth_basics"  style={{display:"block",width:"100%"}}>以太坊基础</Link>
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
                          to="/what_is_ethereum"
                          style={{
                            color: "rgb(99,100,104)",
                            fontSize: "0.9rem",
                            display:"block",
                            width:"100%"
                          }}
                        >
                          以太坊通识
                        </Link>
                      </Box>
                    </PseudoBox>
                  </AccordionHeader>
                </AccordionItem>

                {/* 第二栏 */}

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
                          to="/whitepaper/"
                          style={{
                            color: "rgb(99,100,104)",
                            fontSize: "0.9rem",
                            display:"block",
                            width:"100%"
                          }}
                        >
                          白皮书
                        </Link>
                      </Box>
                    </PseudoBox>
                  </AccordionHeader>
                </AccordionItem>

                {/* 第三栏 */}

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
                          to="/roadmap/"
                          style={{
                            color: "rgb(99,100,104)",
                            fontSize: "0.9rem",
                            display:"block",
                            width:"100%"
                          }}
                        >
                         路线图
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
                          to="/design_rationale/"
                          style={{
                            color: "rgb(99,100,104)",
                            fontSize: "0.9rem",
                            display:"block",
                            width:"100%"
                          }}
                        >
                          设计理念
                        </Link>
                      </Box>
                    </PseudoBox>
                  </AccordionHeader>
                </AccordionItem>

                {/* 第五栏 */}

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
                          to="/ether/"
                          style={{
                            color: "rgb(99,100,104)",
                            fontSize: "0.9rem",
                            display:"block",
                            width:"100%"
                          }}
                        >
                          以太币 Ether
                        </Link>
                      </Box>
                    </PseudoBox>
                  </AccordionHeader>
                </AccordionItem>

                {/* 第六栏 */}

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
                        >
                          <PseudoBox
                            textAlign="left"
                            _hover={{
                              color: "orange.300",
                            }}
                          >
                            <Link
                              to="/evm_basics"
                              style={{
                                color: "rgb(99,100,104)",
                                fontSize: "0.9rem",
                                display:"block",
                                width:"100%"
                              }}
                            >
                              以太坊虚拟机 EVM
                            </Link>
                          </PseudoBox>
                          <Icon
                            mt="0.3rem"
                            fontSize="1rem"
                            name={isExpanded ? "chevron-down" : "chevron-right"}
                          />
                        </PseudoBox>
                      </AccordionHeader>
                      <AccordionPanel py="0">
                        <Accordion defaultIndex={[0]} allowMultiple>
                          {/* 第一栏 */}
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
                                    to="/yellowpaper"
                                    style={{
                                      color: "rgb(99,100,104)",
                                      fontSize: "0.9rem",
                                      display:"block",
                                      width:"100%"
                                    }}
                                  >
                                    黄皮书
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
                                    to="/beigepaper"
                                    style={{
                                      color: "rgb(99,100,104)",
                                      fontSize: "0.9rem",
                                      display:"block",
                                      width:"100%"
                                    }}
                                  >
                                    “浅”黄皮书
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
                                    to="/jellopaper"
                                    style={{
                                      color: "rgb(99,100,104)",
                                      fontSize: "0.9rem",
                                      display:"block",
                                      width:"100%"
                                    }}
                                  >
                                    果冻纸皮书
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
                                    to="/py_evm"
                                    style={{
                                      color: "rgb(99,100,104)",
                                      fontSize: "0.9rem",
                                      display:"block",
                                      width:"100%"
                                    }}
                                  >
                                    Py-EVM
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
              </Accordion>
            </AccordionPanel>
          </>
        )}
      </AccordionItem>
    </>
  )
}

export default Secondline
