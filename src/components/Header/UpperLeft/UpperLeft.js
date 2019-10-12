import React, {Component} from 'react'
import classes from './UpperLeft.module.css'
import SearchBar from './SearchBar/SearchBar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAirbnb } from '@fortawesome/free-brands-svg-icons'

class UpperLeft extends Component{
  render(){
    return(
      < div className={classes.upperleft}>
        <div><FontAwesomeIcon icon={faAirbnb } className={classes.airbnb_icon} /></div>
        <SearchBar/>
      </div>
    )
  }
}

export default UpperLeft
