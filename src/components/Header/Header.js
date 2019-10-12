import React, {Component} from 'react'
import NavGroups from './UpperRight/NavGroups'
import UpperLeft from './UpperLeft/UpperLeft'
import BackgroundWrapper from './BackgroundWrapper/BackgroundWrapper'

class Header extends Component{
  render(){
    return (
      <BackgroundWrapper>
         <UpperLeft />
         <NavGroups />
      </BackgroundWrapper>
    )
  }
}


export default Header
