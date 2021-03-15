import { React, useRef, useEffect } from "react"
import styled from "@emotion/styled"
import gsap from "gsap"
import pattern from "../images/pattern.png"

export default function BGFloat() {
  const Objects = styled.div`
    height: 9000%;
    width: 9000%;
    position: fixed;
    background-image: url(${pattern});
    z-index: 1;
    transform-origin: top center;
  `
  const ref = useRef(null)
  useEffect(() => {
    gsap.to(ref.current, 400, {
      rotation: 10,
      repeat: -1,
    })
  })

  return <Objects ref={ref} />
}
