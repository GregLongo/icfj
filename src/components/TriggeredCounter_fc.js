import { React, useRef, useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import styled from "@emotion/styled"
//
gsap.registerPlugin(ScrollTrigger)

export default function TriggeredCounter({ props, className }) {
  const Counter = styled.div`
    font-size: 160px;
  `
  const ref = useRef(null)
  // const count = 0;

  useEffect(() => {
    gsap.to(ref.current, {
      duration: 1,
      textContent: "+=1000",
      roundProps: "textContent",
      scrollTrigger: {
        trigger: ref.current,
        start: "top center",
        toggleActions: "play complete reverse reverse",
        markers: true,
      },
    })
  })
  return (
    <Counter className={className} ref={ref}>
      {" "}
      {0}
    </Counter>
  )
}
