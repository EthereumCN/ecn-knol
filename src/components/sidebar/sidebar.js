import React from "react"
import { Accordion, AccordionItem, PseudoBox,Text } from "@chakra-ui/core"
import Secondline from "./secondline"
import Thirdline from "./thirdline"
import Fourthline from "./fourthline"
import Fifthline from "./fifthline"
import Sixthline from "./sixthline"
import Seventhline from "./seventhline"
import Eigthline from "./eigthline"
import Nineline from "./nineline"
import { Link } from "gatsby"
const Sidebar = () => {
  return (
    // 总得sidebar
    <Accordion defaultIndex={[0]} allowMultiple>
      {/* 第一行 */}
      <AccordionItem border="0">
        <PseudoBox
          borderRadius="0.3rem"
          cursor="pointer"
          py="8px"
          px="16px"
          _hover={{
            color: "orange.300",
            paddingLeft: "25px",
            transition: " all 0.1s linear",
            bg: "rgb(233,233,233)",
          }}
        >
          <Link to="/hello_eth" style={{ display: "block", width: "100%" }}>
            探秘以太坊
          </Link>
        </PseudoBox>
      </AccordionItem>
      {/* 第二行 */}
      <Secondline />
      {/* 第三行 */}
      <Thirdline />
      {/* 第四行 */}
      <Fourthline />
      {/* 第五行 */}
      <Fifthline />
      {/* 第六行 */}
      <Sixthline />
      {/* 第七行 */}
      <Seventhline />
      {/* 第八行 */}
      <Eigthline />
      {/* 第九行 */}
      <Nineline />
      {/* 第十行 */}
      <AccordionItem border="0">
        <PseudoBox
          borderRadius="0.3rem"
          cursor="pointer"
          py="8px"
          px="16px"
          _hover={{
            color: "orange.300",
            paddingLeft: "25px",
            transition: " all 0.1s linear",
            bg: "rgb(233,233,233)",
          }}
        >
          <Link
            to="/glossary"
            style={{
              display: "block",
              width: "100%",
            }}
          >
            术语列表
          </Link>
        </PseudoBox>
      </AccordionItem>

 {/* 延伸阅读 */}
 <AccordionItem border="0">
        <Text fontWeight="700" color="#9DAAB6" mt="3vh" px="16px">
          延伸阅读
        </Text>
        <PseudoBox
          borderRadius="0.3rem"
          cursor="pointer"
          py="8px"
          px="16px"
          _hover={{
            color: "orange.300",
            paddingLeft: "25px",
            transition: " all 0.1s linear",
            bg: "rgb(233,233,233)",
          }}
        >
          <Link to="/short-history-of-ethereum" style={{ display: "block", width: "100%" }}>
            以太坊简史
          </Link>
        </PseudoBox>
      </AccordionItem>

      {/* 以太坊设计原理 */}
      <AccordionItem border="0">
        <PseudoBox
          borderRadius="0.3rem"
          cursor="pointer"
          py="8px"
          px="16px"
          _hover={{
            color: "orange.300",
            paddingLeft: "25px",
            transition: " all 0.1s linear",
            bg: "rgb(233,233,233)",
          }}
        >
          <Link to="/other-resources" style={{ display: "block", width: "100%" }}>
         品牌相关资源
          </Link>
        </PseudoBox>
      </AccordionItem>


    </Accordion>
  )
}

export default Sidebar
