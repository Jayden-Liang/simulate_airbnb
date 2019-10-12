import React, {Component} from 'react'
import NavItem from './NavItems/NavItems'
import classes from './NavGroups.module.css'

class NavGroups extends Component{
  render(){
    const navGroup =['人民币- ￥', '手机端','出租房源','开展体验','故事','帮助','注册','登录']
    const nav=navGroup.map((item, index)=>{
      return <NavItem key={index}>{item}</NavItem>
    })
  return (
    <div className={classes.Header_Nav}>
      {nav}
    </div>

  )
  }
}

export default NavGroups
