import React, { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function TriggeredTextBlock(props) {
  const ref = useRef(null)
  useEffect(() => {
    ScrollTrigger.refresh()
    gsap.from(ref.current, {
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ref.current,
        start: "top center",
        end: "bottom top",
        toggleActions: "play complete reverse reset",
        markers: false,
      },
    })
  })
  return (
    <div ref={ref} className={props.className}>
      {props.children}
    </div>
  )
}
