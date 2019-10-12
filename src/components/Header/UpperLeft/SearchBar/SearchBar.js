import React, {Component} from 'react'
import classes from './SearchBar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import DropDown from './DropDown/DropDown'
class SearchBar extends Component{
  state={
    dropdown: false,
    focused: false,
    blured: true
  }

  focused=()=>{
    this.setState({
      dropdown: true,
      focused: true,
      blured: false
    })
  }

  blured =()=>{
    this.setState({
      dropdown: false,
      focused: false,
      blured: true
    })
  }


  render(){
    return(
      <div className={classes.Header_Search_Group}>
      <div className={classes.Header_Search} style={{
        width: this.state.focused?"650px":"450px",
        borderRadius: this.state.focused?"5px 5px 0px 0px":'5px'
      }} >
         <div className={classes.search_icon}><FontAwesomeIcon icon={faSearch} size="lg" className={classes.search_icon_itself}/></div>
            <input onFocus={this.focused} onBlur={this.blured} className={classes.Header_Input} type='text' name='search' autoComplete="off"/>
      </div>
      <DropDown
        dropdown={this.state.dropdown}
      />
      </div>

    )
  }
}

export default SearchBar
