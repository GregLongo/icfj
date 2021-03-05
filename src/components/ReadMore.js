import React,{useState} from 'react';
import styled from '@emotion/styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faAngleDown,
  faAngleUp
} from '@fortawesome/free-solid-svg-icons'


const Button = styled.button`
  background: tomato;
  color: white;
  float:right;
  border: none;
  width: 80px;
  outline: none;
    &:hover{
      background: transparent;
      outline: 6px solid tomato;
      cursor: pointer;
      color: tomato;
    }
    &:active{
      background: tomato
    }
`
function ReadMore(props) {
  const [readMore,setReadMore]=useState(false);
  const extraContent= props.children
  const linkName=readMore?<FontAwesomeIcon icon={faAngleUp} size="1x" />
                          :<FontAwesomeIcon icon={faAngleDown} size="1x" />
  return (
    <div className={props.className}>
      <Button onClick={()=>{setReadMore(!readMore)}}><h2>{linkName}</h2></Button>
      {readMore && extraContent}
    </div>
  );
}

export default ReadMore;