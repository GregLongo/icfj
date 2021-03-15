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
      <FontAwesomeIcon icon={faAngleUp} size="1x" />
    </span>
  ) : (
    <span>
      <FontAwesomeIcon icon={faAngleDown} size="1x" />
    </span>
  )
  const Button = styled.button`
    position: relative;
    background: tomato;
    color: white;
    border: none;
    position: relative;
    display: flex;
    flex-direction: row;
    outline: none;
    margin-left: 20px;
    padding: 0 20px;
    transform: skewX(-25deg) skewY(0deg);
    &:hover {
      background: transparent;
      outline: 6px solid tomato;
      cursor: pointer;
      color: tomato;
    }
    &:active {
      background: tomato;
    }
    h2 {
      margin: 5px 0;
      transform: skewX(25deg) skewY(0deg);
    }
    @media (min-width: ${mobile}) {
      margin-left: 210px;
    }
  `

  const Container = styled.div`
    font-family: interstate condensed;
    font-size: 1.1em;
    color: black;
    margin-top: -189px;
    @media (min-width: ${mobile}) {
      margin-top: -110px;
      font-size: 1.7em;
    }
    &.close {
      > p, > svg {
        display: none;
      }
      p {
        &:first-of-type {
          display: block;
          width: 100%;
          clear: both;
          display: inline-block;
          overflow: hidden;
          white-space: nowrap;
          position: relative;        
          &:before {
            content: '';
            width: 100%;
            height: 100%;    
            position: absolute;
            left: 0;
            top: 0;
            background: linear-gradient(transparent 5px, #ddaf25);
            opacity: 0;
          }
          &.yellow {
            &:before {
              background: linear-gradient(transparent 5px, #ddaf25);
              opacity: 1;
            }
          }
          &.blue {            
            &:before {
              background: linear-gradient(transparent 5px, #2f9ee7);
              opacity: 1;
            }
          }
      }
    }
  `

  return (
    <Container className={`${props.className} ${readMore ? "open" : "close"}`}>
      <Button
        onClick={() => {
          setReadMore(!readMore)
        }}
      >
        <h2> {linkName}</h2>
      </Button>
      {extraContent}
    </Container>
  )
}

export default ReadMore
