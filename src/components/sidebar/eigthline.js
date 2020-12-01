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

const Eightline = () => {
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
                    to="/ethereum_technologies"
                    style={{
                      display: "block",
                      width: "100%",
                    }}
                  >
                    以太坊技术
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
                          to="/rlp_encoding"
                          style={{
                            color: "rgb(99,100,104)",
                            fontSize: "0.9rem",
                            display:"block",
                            width:"100%"
                          }}
                        >
                          RLP 编码
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
                          to="/merkle_patricia_tree"
                          style={{
                            color: "rgb(99,100,104)",
                            fontSize: "0.9rem",
                            display:"block",
                            width:"100%"
                          }}
                        >
                          Merkle Patricia Tree
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
                          to="/web3_secret_storage"
                          style={{
                            color: "rgb(99,100,104)",
                            fontSize: "0.9rem",
                            display:"block",
                            width:"100%"
                          }}
                        >
                          Web3秘密存储
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
                          to="/light_client_protocol"
                          style={{
                            color: "rgb(99,100,104)",
                            fontSize: "0.9rem",
                            display:"block",
                            width:"100%"
                          }}
                        >
                          轻客户端协议
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
                          to="/solidity_documentation"
                          style={{
                            color: "rgb(99,100,104)",
                            fontSize: "0.9rem",
                            display:"block",
                            width:"100%"
                          }}
                        >
                          Solidity文档
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
                          _hover={{
                            color: "orange.300",
                            paddingLeft: "25px",
                            transition: " all 0.1s linear",
                            bg: "rgb(233,233,233)",
                          }}
                        >
                          <Box textAlign="left">
                            <Link
                              to="/natspec_format"
                              style={{
                                color: "rgb(99,100,104)",
                                fontSize: "0.9rem",
                                display:"block",
                                width:"100%"
                              }}
                            >
                              NatSpec格式
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
                                    to="/vyper"
                                    style={{
                                      color: "rgb(99,100,104)",
                                      fontSize: "0.9rem",
                                      display:"block",
                                      width:"100%"
                                    }}
                                  >
                                    Vyper
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
                                    to="/solidity"
                                    style={{
                                      color: "rgb(99,100,104)",
                                      fontSize: "0.9rem",
                                      display:"block",
                                      width:"100%"
                                    }}
                                  >
                                    Solidity
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

                {/* 第八栏 */}
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
                          to="/contract_abi"
                          style={{
                            color: "rgb(99,100,104)",
                            fontSize: "0.9rem",
                            display:"block",
                            width:"100%"
                          }}
                        >
                          智能合约应用程序二进制接口(ABI)
                        </Link>
                      </Box>
                    </PseudoBox>
                  </AccordionHeader>
                </AccordionItem>

                {/* 第9栏 */}
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
                          to="/bad_block_reporting"
                          style={{
                            color: "rgb(99,100,104)",
                            fontSize: "0.9rem",
                            display:"block",
                            width:"100%"
                          }}
                        >
                          坏块广播
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

export default Eightline
