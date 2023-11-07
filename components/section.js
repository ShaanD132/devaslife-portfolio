import {motion} from "framer-motion"
import {chakra, shouldForwardProp} from "@chakra-ui/react"

const StyledDiv = chakra(motion.div, {
  shouldForwardProp: prop => {
    return shouldForwardProp(prop) || prop === "transition"
  }
})

const Section = ({children, delay = 0}) => (
  <StyledDiv
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{duration: 0.8, delay: delay, ease: [0, 0.71, 0.2, 1.01]}}
    mb={6}>
  {children}
  </StyledDiv>
)

export default Section