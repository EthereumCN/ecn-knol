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

const Nineline = () => {
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
                    to="/ethereum_ecosystem"
                    style={{
                      display: "block",
                      width: "100%",
                    }}
                  >
                    以太坊生态
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
                              to="/ethereum_community"
                              style={{
                                color: "rgb(99,100,104)",
                                fontSize: "0.9rem",
                                display: "block",
                                width: "100%",
                              }}
                            >
                              以太坊社区
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
                          {/* 第一行 */}
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
                                        to="/organization"
                                        style={{
                                          color: "rgb(99,100,104)",
                                          fontSize: "0.9rem",
                                          display: "block",
                                          width: "100%",
                                        }}
                                      >
                                        相关组织
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
                                    {/* 组织第一行 */}
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
                                              to="/ethereum_foundation"
                                              style={{
                                                color: "rgb(99,100,104)",
                                                fontSize: "0.9rem",
                                                display: "block",
                                                width: "100%",
                                              }}
                                            >
                                              EF 以太坊基金会
                                            </Link>
                                          </Box>
                                        </PseudoBox>
                                      </AccordionHeader>
                                    </AccordionItem>
                                    {/* 组织第二行 */}
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
                                              to="/ethereum_community_fund"
                                              style={{
                                                color: "rgb(99,100,104)",
                                                fontSize: "0.9rem",
                                                display: "block",
                                                width: "100%",
                                              }}
                                            >
                                              ECF 以太坊社区基金会
                                            </Link>
                                          </Box>
                                        </PseudoBox>
                                      </AccordionHeader>
                                    </AccordionItem>
                                    {/* 组织第三行 */}
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
                                              to="/ethereum_network"
                                              style={{
                                                color: "rgb(99,100,104)",
                                                fontSize: "0.9rem",
                                                display: "block",
                                                width: "100%",
                                              }}
                                            >
                                              Ethereum.network
                                            </Link>
                                          </Box>
                                        </PseudoBox>
                                      </AccordionHeader>
                                    </AccordionItem>
                                    {/* 组织第四行 */}
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
                                              to="/ethglobal"
                                              style={{
                                                color: "rgb(99,100,104)",
                                                fontSize: "0.9rem",
                                                display: "block",
                                                width: "100%",
                                              }}
                                            >
                                              EthGlobal
                                            </Link>
                                          </Box>
                                        </PseudoBox>
                                      </AccordionHeader>
                                    </AccordionItem>
                                    {/* 第五行 */}

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
                                              to="/ethereumcn"
                                              style={{
                                                color: "rgb(99,100,104)",
                                                fontSize: "0.9rem",
                                                display: "block",
                                                width: "100%",
                                              }}
                                            >
                                              ECN 以太坊中国
                                            </Link>
                                          </Box>
                                        </PseudoBox>
                                      </AccordionHeader>
                                    </AccordionItem>

                                    {/* 第六行 */}
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
                                              to="/ethfans"
                                              style={{
                                                color: "rgb(99,100,104)",
                                                fontSize: "0.9rem",
                                                display: "block",
                                                width: "100%",
                                              }}
                                            >
                                              EthFans 以太坊爱好者
                                            </Link>
                                          </Box>
                                        </PseudoBox>
                                      </AccordionHeader>
                                    </AccordionItem>
                                    {/* 第七行 */}

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
                                              to="/ethplanet"
                                              style={{
                                                color: "rgb(99,100,104)",
                                                fontSize: "0.9rem",
                                                display: "block",
                                                width: "100%",
                                              }}
                                            >
                                              EthPlanet 以太行星
                                            </Link>
                                          </Box>
                                        </PseudoBox>
                                      </AccordionHeader>
                                    </AccordionItem>

                                    {/* 第八行 */}
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
                                              to="/unitimes"
                                              style={{
                                                color: "rgb(99,100,104)",
                                                fontSize: "0.9rem",
                                                display: "block",
                                                width: "100%",
                                              }}
                                            >
                                              Unitimes 独角时代
                                            </Link>
                                          </Box>
                                        </PseudoBox>
                                      </AccordionHeader>
                                    </AccordionItem>
                                    {/* 第九行 */}
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
                                              to="/ethsino"
                                              style={{
                                                color: "rgb(99,100,104)",
                                                fontSize: "0.9rem",
                                                display: "block",
                                                width: "100%",
                                              }}
                                            >
                                              EthSino 以太坊九州
                                            </Link>
                                          </Box>
                                        </PseudoBox>
                                      </AccordionHeader>
                                    </AccordionItem>
                                    {/* 第十行 */}
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
                                              to="/ethereum_france"
                                              style={{
                                                color: "rgb(99,100,104)",
                                                fontSize: "0.9rem",
                                                display: "block",
                                                width: "100%",
                                              }}
                                            >
                                              Ethereum France
                                            </Link>
                                          </Box>
                                        </PseudoBox>
                                      </AccordionHeader>
                                    </AccordionItem>
                                    {/* 第十一行 */}
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
                                              to="/ethereum_japan"
                                              style={{
                                                color: "rgb(99,100,104)",
                                                fontSize: "0.9rem",
                                                display: "block",
                                                width: "100%",
                                              }}
                                            >
                                              Ethereum Japan
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

                          {/* 第二行 */}
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
                                        to="/xiang_guan_hui_yi"
                                        style={{
                                          color: "rgb(99,100,104)",
                                          fontSize: "0.9rem",
                                          display: "block",
                                          width: "100%",
                                        }}
                                      >
                                        相关会议
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
                                    {/* 第一行 */}
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
                                              to="/devcon"
                                              style={{
                                                color: "rgb(99,100,104)",
                                                fontSize: "0.9rem",
                                                display: "block",
                                                width: "100%",
                                              }}
                                            >
                                              Devcon
                                            </Link>
                                          </Box>
                                        </PseudoBox>
                                      </AccordionHeader>
                                    </AccordionItem>
                                    {/* 第二行 */}
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
                                              to="/edcon"
                                              style={{
                                                color: "rgb(99,100,104)",
                                                fontSize: "0.9rem",
                                                display: "block",
                                                width: "100%",
                                              }}
                                            >
                                              EDCON
                                            </Link>
                                          </Box>
                                        </PseudoBox>
                                      </AccordionHeader>
                                    </AccordionItem>
                                    {/* 第三行 */}
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
                                              to="/ethereum_community_conference"
                                              style={{
                                                color: "rgb(99,100,104)",
                                                fontSize: "0.9rem",
                                                display: "block",
                                                width: "100%",
                                              }}
                                            >
                                              EthCC
                                            </Link>
                                          </Box>
                                        </PseudoBox>
                                      </AccordionHeader>
                                    </AccordionItem>
                                    {/* 第四行 */}
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
                                              to="/ethereal_summit"
                                              style={{
                                                color: "rgb(99,100,104)",
                                                fontSize: "0.9rem",
                                                display: "block",
                                                width: "100%",
                                              }}
                                            >
                                              Ethereal Summit
                                            </Link>
                                          </Box>
                                        </PseudoBox>
                                      </AccordionHeader>
                                    </AccordionItem>
                                    {/* 第五行 */}
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
                                              to="/dappcon"
                                              style={{
                                                color: "rgb(99,100,104)",
                                                fontSize: "0.9rem",
                                                display: "block",
                                                width: "100%",
                                              }}
                                            >
                                              DappCon
                                            </Link>
                                          </Box>
                                        </PseudoBox>
                                      </AccordionHeader>
                                    </AccordionItem>
                                    {/* 第六行 */}
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
                                              to="/trufflecon"
                                              style={{
                                                color: "rgb(99,100,104)",
                                                fontSize: "0.9rem",
                                                display: "block",
                                                width: "100%",
                                              }}
                                            >
                                              TruffleCon
                                            </Link>
                                          </Box>
                                        </PseudoBox>
                                      </AccordionHeader>
                                    </AccordionItem>
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
                                              to="/buildeth"
                                              style={{
                                                color: "rgb(99,100,104)",
                                                fontSize: "0.9rem",
                                                display: "block",
                                                width: "100%",
                                              }}
                                            >
                                              BuildETH
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
                          {/* 第三行 */}

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
                                        to="/forum"
                                        style={{
                                          color: "rgb(99,100,104)",
                                          fontSize: "0.9rem",
                                          display: "block",
                                          width: "100%",
                                        }}
                                      >
                                        社区论坛
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
                                    {/* 第一行 */}
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
                                              to="/ethresear_ch"
                                              style={{
                                                color: "rgb(99,100,104)",
                                                fontSize: "0.9rem",
                                                display: "block",
                                                width: "100%",
                                              }}
                                            >
                                              Ethresear.ch
                                            </Link>
                                          </Box>
                                        </PseudoBox>
                                      </AccordionHeader>
                                    </AccordionItem>
                                    {/* 第二行 */}
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
                                              to="/gitter"
                                              style={{
                                                color: "rgb(99,100,104)",
                                                fontSize: "0.9rem",
                                                display: "block",
                                                width: "100%",
                                              }}
                                            >
                                              Gitter
                                            </Link>
                                          </Box>
                                        </PseudoBox>
                                      </AccordionHeader>
                                    </AccordionItem>
                                    {/* 第三行 */}
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
                                              to="/ethereum_stack_exchange"
                                              style={{
                                                color: "rgb(99,100,104)",
                                                fontSize: "0.9rem",
                                                display: "block",
                                                width: "100%",
                                              }}
                                            >
                                              Ethereum Stack Exchange
                                            </Link>
                                          </Box>
                                        </PseudoBox>
                                      </AccordionHeader>
                                    </AccordionItem>
                                    {/* 第四行 */}
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
                                              to="/discord"
                                              style={{
                                                color: "rgb(99,100,104)",
                                                fontSize: "0.9rem",
                                                display: "block",
                                                width: "100%",
                                              }}
                                            >
                                              Discord
                                            </Link>
                                          </Box>
                                        </PseudoBox>
                                      </AccordionHeader>
                                    </AccordionItem>
                                    {/* 第五行 */}
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
                                              to="/reddit"
                                              style={{
                                                color: "rgb(99,100,104)",
                                                fontSize: "0.9rem",
                                                display: "block",
                                                width: "100%",
                                              }}
                                            >
                                              Reddit
                                            </Link>
                                          </Box>
                                        </PseudoBox>
                                      </AccordionHeader>
                                    </AccordionItem>
                                    {/* 第六行 */}
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
                                              to="/fellowship_of_ethereum_magicians"
                                              style={{
                                                color: "rgb(99,100,104)",
                                                fontSize: "0.9rem",
                                                display: "block",
                                                width: "100%",
                                              }}
                                            >
                                              Fellowship of Ethereum Magicians
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
                              to="/enterprise_or_organization"
                              style={{
                                color: "rgb(99,100,104)",
                                fontSize: "0.9rem",
                                display: "block",
                                width: "100%",
                              }}
                            >
                              企业/组织
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
                                    to="/consensys"
                                    style={{
                                      color: "rgb(99,100,104)",
                                      fontSize: "0.9rem",
                                      display: "block",
                                      width: "100%",
                                    }}
                                  >
                                    Consensys
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
                                    to="/parity_technology"
                                    style={{
                                      color: "rgb(99,100,104)",
                                      fontSize: "0.9rem",
                                      display: "block",
                                      width: "100%",
                                    }}
                                  >
                                    Parity Technology
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
                                    to="/casper_labs"
                                    style={{
                                      color: "rgb(99,100,104)",
                                      fontSize: "0.9rem",
                                      display: "block",
                                      width: "100%",
                                    }}
                                  >
                                    Casper Labs
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
                                    to="/enterprise_ethereum_alliance"
                                    style={{
                                      color: "rgb(99,100,104)",
                                      fontSize: "0.9rem",
                                      display: "block",
                                      width: "100%",
                                    }}
                                  >
                                    EEA
                                  </Link>
                                </Box>
                              </PseudoBox>
                            </AccordionHeader>
                          </AccordionItem>

                          {/* 5栏 */}

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
                                    to="/hyperledger"
                                    style={{
                                      color: "rgb(99,100,104)",
                                      fontSize: "0.9rem",
                                      display: "block",
                                      width: "100%",
                                    }}
                                  >
                                    Hyperledger
                                  </Link>
                                </Box>
                              </PseudoBox>
                            </AccordionHeader>
                          </AccordionItem>

                          {/* 第六栏 */}

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
                                    to="/axa"
                                    style={{
                                      color: "rgb(99,100,104)",
                                      fontSize: "0.9rem",
                                      display: "block",
                                      width: "100%",
                                    }}
                                  >
                                    AXA
                                  </Link>
                                </Box>
                              </PseudoBox>
                            </AccordionHeader>
                          </AccordionItem>
                          {/* 第七栏 */}

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
                                    to="/unicef"
                                    style={{
                                      color: "rgb(99,100,104)",
                                      fontSize: "0.9rem",
                                      display: "block",
                                      width: "100%",
                                    }}
                                  >
                                    Unicef
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

                {/* 第三栏 */}

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
                              to="/wallets"
                              style={{
                                color: "rgb(99,100,104)",
                                fontSize: "0.9rem",
                                display: "block",
                                width: "100%",
                              }}
                            >
                              钱包
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
                                    to="/desktop_wallets"
                                    style={{
                                      color: "rgb(99,100,104)",
                                      fontSize: "0.9rem",
                                      display: "block",
                                      width: "100%",
                                    }}
                                  >
                                    桌面钱包
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
                                    to="/web_wallets"
                                    style={{
                                      color: "rgb(99,100,104)",
                                      fontSize: "0.9rem",
                                      display: "block",
                                      width: "100%",
                                    }}
                                  >
                                    网页钱包
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
                                    to="/mobile_wallets"
                                    style={{
                                      color: "rgb(99,100,104)",
                                      fontSize: "0.9rem",
                                      display: "block",
                                      width: "100%",
                                    }}
                                  >
                                    移动钱包
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
                                    to="/hardware_wallets"
                                    style={{
                                      color: "rgb(99,100,104)",
                                      fontSize: "0.9rem",
                                      display: "block",
                                      width: "100%",
                                    }}
                                  >
                                    硬件钱包
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
                          to="/blockchain_explorer"
                          style={{
                            color: "rgb(99,100,104)",
                            fontSize: "0.9rem",
                            display: "block",
                            width: "100%",
                          }}
                        >
                          区块浏览器
                        </Link>
                      </Box>
                    </PseudoBox>
                  </AccordionHeader>
                </AccordionItem>

                {/* 第5栏 */}

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
                          to="/gas_price_calculators_and_tools"
                          style={{
                            color: "rgb(99,100,104)",
                            fontSize: "0.9rem",
                            display: "block",
                            width: "100%",
                          }}
                        >
                          Gas 价格计算器与工具
                        </Link>
                      </Box>
                    </PseudoBox>
                  </AccordionHeader>
                </AccordionItem>

                {/* 第6栏 */}

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
                          to="/services"
                          style={{
                            color: "rgb(99,100,104)",
                            fontSize: "0.9rem",
                            display: "block",
                            width: "100%",
                          }}
                        >
                          服务
                        </Link>
                      </Box>
                    </PseudoBox>
                  </AccordionHeader>
                </AccordionItem>

                {/* 第7栏 */}

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
                          to="/knowledge_education"
                          style={{
                            color: "rgb(99,100,104)",
                            fontSize: "0.9rem",
                            display: "block",
                            width: "100%",
                          }}
                        >
                          知识/教育
                        </Link>
                      </Box>
                    </PseudoBox>
                  </AccordionHeader>
                </AccordionItem>

                {/* 第8栏 */}

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
                          to="/security_best_practices"
                          style={{
                            color: "rgb(99,100,104)",
                            fontSize: "0.9rem",
                            display: "block",
                            width: "100%",
                          }}
                        >
                          最佳安全性实践
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
                          to="/solidity_games"
                          style={{
                            color: "rgb(99,100,104)",
                            fontSize: "0.9rem",
                            display: "block",
                            width: "100%",
                          }}
                        >
                          Solidity游戏
                        </Link>
                      </Box>
                    </PseudoBox>
                  </AccordionHeader>
                </AccordionItem>

                {/* 第10栏 */}
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
                          to="/how_governance"
                          style={{
                            color: "rgb(99,100,104)",
                            fontSize: "0.9rem",
                            display: "block",
                            width: "100%",
                          }}
                        >
                          治理
                        </Link>
                      </Box>
                    </PseudoBox>
                  </AccordionHeader>
                </AccordionItem>

                {/* 第11栏 */}
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
                          to="/market"
                          style={{
                            color: "rgb(99,100,104)",
                            fontSize: "0.9rem",
                            display: "block",
                            width: "100%",
                          }}
                        >
                          市场
                        </Link>
                      </Box>
                    </PseudoBox>
                  </AccordionHeader>
                </AccordionItem>

                {/* 第12栏 */}
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
                          to="/decentralized_exchange"
                          style={{
                            color: "rgb(99,100,104)",
                            fontSize: "0.9rem",
                            display: "block",
                            width: "100%",
                          }}
                        >
                          去交易化交易所
                        </Link>
                      </Box>
                    </PseudoBox>
                  </AccordionHeader>
                </AccordionItem>

                {/* 第13栏 */}
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
                          to="/incentivisation_monetisation_tools"
                          style={{
                            color: "rgb(99,100,104)",
                            fontSize: "0.9rem",
                            display: "block",
                            width: "100%",
                          }}
                        >
                          激励/货币化工具
                        </Link>
                      </Box>
                    </PseudoBox>
                  </AccordionHeader>
                </AccordionItem>

                {/* 第14栏 */}
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
                          to="/decentralized_finance_defi"
                          style={{
                            color: "rgb(99,100,104)",
                            fontSize: "0.9rem",
                            display: "block",
                            width: "100%",
                          }}
                        >
                          去中心化金融(DeFi)
                        </Link>
                      </Box>
                    </PseudoBox>
                  </AccordionHeader>
                </AccordionItem>

                {/* 第15栏 */}
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
                          to="/blockchain_game"
                          style={{
                            color: "rgb(99,100,104)",
                            fontSize: "0.9rem",
                            display: "block",
                            width: "100%",
                          }}
                        >
                          区块链游戏
                        </Link>
                      </Box>
                    </PseudoBox>
                  </AccordionHeader>
                </AccordionItem>

                {/* 第16栏 */}
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
                          to="/supply_chain"
                          style={{
                            color: "rgb(99,100,104)",
                            fontSize: "0.9rem",
                            display: "block",
                            width: "100%",
                          }}
                        >
                          供应链
                        </Link>
                      </Box>
                    </PseudoBox>
                  </AccordionHeader>
                </AccordionItem>

                {/* 第17栏 */}
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
                          to="/awesome_lists"
                          style={{
                            color: "rgb(99,100,104)",
                            fontSize: "0.9rem",
                            display: "block",
                            width: "100%",
                          }}
                        >
                          其他列表
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

export default Nineline
