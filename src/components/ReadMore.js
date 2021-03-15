import React, { useState } from "react"
import styled from "@emotion/styled"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons"

function ReadMore(props) {
  const mobile = props.bp[1]
  const [readMore, setReadMore] = useState(false)
  const extraContent = props.children
  const linkName = readMore ? (
    <span>
      Read Less <FontAwesomeIcon icon={faAngleUp} size="1x" />
    </span>
  ) : (
    <span>
      Read More <FontAwesomeIcon icon={faAngleDown} size="1x" />
    </span>
  )
  const Button = styled.button`
    position: relative;
    background: tomato;
    margin-left: auto;
    color: white;
    border: none;
    position: relative;
    display: flex;
    flex-direction: row;
    outline: none;
    padding: 0 20px;
    &:hover {
      background: transparent;
      outline: 6px solid tomato;
      cursor: pointer;
      color: tomato;
    }
    &:active {
      background: tomato;
    }
  `

  const Container = styled.div`
    font-family: interstate condensed;
    font-size: 1.1em;
    color: black;
    margin-bottom: 10rem;
    @media (min-width: ${mobile}) {
      font-size: 1.7em;
      margin-top: 5rem;
      margin-bottom: 15rem;
    }
  `

  return (
    <Container className={props.className}>
      <Button
        onClick={() => {
          setReadMore(!readMore)
        }}
      >
        <h2> {linkName}</h2>
      </Button>
      {readMore && extraContent}
    </Container>
  )
}

export default ReadMore
