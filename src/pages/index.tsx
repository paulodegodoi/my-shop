import {styled} from "@/styles";
import {HomeContainer, Product} from "@/styles/pages/home";
import Image from "next/image";

import { useKeenSlider } from "keen-slider/react"

import Image1 from "../assets/camisetas/1.png"
import Image2 from "../assets/camisetas/2.png"
import Image3 from "../assets/camisetas/3.png"

import "keen-slider/keen-slider.min.css"

const Button = styled('button', {
  backgroundColor: "$green300",
  borderRadius: 7,
  border: 0,
  padding: '4px 8px',

  span: {
    fontWeight: "bold"
  },

  "&:hover": {
    filter: "brightness(0.8)"
  },
})


export default function Home() {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48
    }
  })

  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      <Product className="keen-slider__slide">
        <Image src={Image1} width={520} height={480} alt="" />
        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
      <Product className="keen-slider__slide">
        <Image src={Image2} width={520} height={480} alt="" />
        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
      <Product className="keen-slider__slide">
        <Image src={Image3} width={520} height={480} alt="" />
        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
      <Product className="keen-slider__slide">
        <Image src={Image3} width={520} height={480} alt="" />
        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
    </HomeContainer>
  )
}
