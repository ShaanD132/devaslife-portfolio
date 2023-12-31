import Link from "next/link"
import Image from "next/image"
import {Text, useColorModeValue} from "@chakra-ui/react"
import styled from "@emotion/styled"

const LogoBox = styled.span`
font-weight: bold;
font-size: 18px;
display: inline-flex;
align-items: center;
height: 30px;
line-height: 20px;
padding: 10px;
`

const Logo = () => {
  const logoImg = `/images/logo${useColorModeValue("","-dark")}.png`

  return (
    <Link href="/">
        <LogoBox>
          <Text
            color = {useColorModeValue("gray.800", "whiteAlpha.900")}
            fontFamily = "Afacad">
              SD
            </Text>
        </LogoBox>
    </Link>
  )
}

export default Logo