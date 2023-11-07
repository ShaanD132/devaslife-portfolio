import {Global} from "@emotion/react"

const Fonts = () => (
  <Global styles={`
    @font-face{font-family:"Afacad"; src: url("/fonts/Outfit-Black.otf") format(opentype)}
  `}/>
)

export default Fonts