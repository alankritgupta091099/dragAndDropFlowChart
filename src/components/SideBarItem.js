import * as React from 'react'
import styled from 'styled-components'
import { REACT_FLOW_CHART } from '@mrblenny/react-flow-chart'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope , faUser , faClock } from "@fortawesome/free-solid-svg-icons";
import  styles from '../style.css';

const Outer = styled.div`
  background: #FFF;
  width: 279px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  margin: 8px 0 0 0;
  box-sizing: border-box;
  border: 1px solid #BAC2CA;
  border-radius: 4px;
  color: #606A72;
  transition: background-color .25s ease-out,color .25s ease-out;
  text-align: center;
`

// `
//   padding: 20px 30px;
//   font-size: 14px;
//   background: white;
//   cursor: move;
// `

// var ISidebarItemProps = {
//   type: String,
//   ports: INode['ports']
//   ,
//   properties: any
// }

export const SidebarItem = ({ type, ports , properties , bg}) => {
 // console.log(faEnvelope)
  return (
    <Outer
      style={{background: bg}}
      draggable={true}
      onDragStart={ (event) => {
        event.dataTransfer.setData(REACT_FLOW_CHART, JSON.stringify({ type, ports , properties }))
      } }
    >
    <div className="icon-container" >
      <FontAwesomeIcon 
        className="icon-bg" 
        icon={faClock}
      />
      {type}
    </div>
    </Outer>
  )
}