import React from 'react'
import classes from './buttons.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

const buttons=(props)=>{
  return (
    <React.Fragment>
    <div   className={classes.leftbuttonWrapper}><button  onClick={props.changeLeft} className={classes.leftbutton}><FontAwesomeIcon icon={faChevronLeft} size="lg" /></button></div>
    <div   className={classes.rightbuttonWrapper}><button  onClick={props.changeRight} ><FontAwesomeIcon icon={faChevronRight} size="lg" /></button></div>
    </React.Fragment>
  )
}

export default buttons
  
