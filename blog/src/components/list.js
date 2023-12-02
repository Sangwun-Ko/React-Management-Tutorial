import React, {useState} from "react"

export function Modal(props){
    return(
      <div className='modal'> 
        <h4>{props.title}</h4>
        <p>{props.content}</p>
        <p>상세내용</p>
      </div>
    )
  }