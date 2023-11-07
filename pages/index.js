import { Box, Container, Heading, Image, Link, useColorModeValue, Button } from "@chakra-ui/react"
import Section from "../components/section"
import Paragraph from "../components/paragraph"
import { ChevronRightIcon } from "@chakra-ui/icons"

const Page =  () => {
  return(
    <Container>
      <Box borderRadius = "lg" bg={useColorModeValue("whiteAlpha.600", "whiteAlpha.200")} p={3} mb={6} align="center">
      Hi, I&apos;m a full-stack developer based in Hong Kong and Mauritius!
      </Box>

      <Box display={{md: "flex"}}>
        <Box flexGrow = {1}>
          <Heading as = "h2" variant = "page-title">
            Shaan Dussoye
          </Heading>

          <p>Freelancer ( Student / Developer )</p>
        </Box>

        <Box flexShrink={0} mt={{base:4, md:0}} ml={{md:6}} align="center">
          <Image borderColor="whiteAlpha.800" borderWidth={2} borderStyle="solid" maxWidth="100px" 
          display="inline-block" borderRadius="full" src="/images/main_logo.png" alt = "Profile Image" />
        </Box>
      </Box>

      <Section delay={0.2}>
        <Heading as = "h3" variant = "section-title">
          Work
        </Heading>
        <Paragraph>A group to find new restaurants, cafes and bars. We meet every Thursday night at 5pm in Atrium and go try new foods in different places. Dont be afraid to leave suggestions like {' '} <Link href="/works/topelec">Topelec</Link>.</Paragraph>
        <Box align="center" my={4}>
          <Link href="/works">
            <Button rightIcon={<ChevronRightIcon/>} colorScheme="teal">
              My Portfolio
            </Button>
          </Link>
        </Box>
      </Section>
    </Container>
  )
}

export default Page