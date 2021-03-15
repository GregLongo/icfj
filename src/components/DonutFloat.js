import { React } from "react"
import Donut from "../components/Donut.js"
import styled from "@emotion/styled"

const Donutopolis = styled.div`
  overflow-x: hidden;
  width: 100vw;
  height: auto;
`

export default function DonutFloat(props) {
  const donuts = props.donuts
  const donutList = [...Array(donuts)].map((e, i) => <Donut key={i} />)
  return <Donutopolis>{donutList}</Donutopolis>
}
