import { Box, Container, Heading, Image, useColorModeValue } from "@chakra-ui/react"

const Page =  () => {
  return(
    <Container>
      <Box borderRadius = "lg" bg={useColorModeValue("whiteAlpha.600", "whiteAlpha.200")} p={3} mb={6} align="center">
      A group to find new restaurants, cafes and bars. We meet every Thursday night at 5pm in Atrium and go try new foods in different places. Dont be afraid to leave suggestions
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
    </Container>
  )
}

export default Page