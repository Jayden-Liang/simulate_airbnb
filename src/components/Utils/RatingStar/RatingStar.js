import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'


const ratingStar=(props)=>{
  let list=null
  if (props.stars.includes('.')){
        list=[...Array(parseInt(props.stars.split('.')[0]))].map((item,index)=>{
          return <span key={index} ><FontAwesomeIcon icon={faStar} size="xs" /></span>
         })
        list.push(<span key='alt'><FontAwesomeIcon icon={faStarHalfAlt} size="xs" /></span>)
  }else{
    list=[...Array(parseInt(props.stars))].map((item,index)=>{
         return <span key={index}><FontAwesomeIcon icon={faStar} size="xs" /></span>})
  }

  return (
    list
  )
}


export default ratingStar
