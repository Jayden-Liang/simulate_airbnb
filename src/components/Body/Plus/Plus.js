
import React, {Component} from 'react'
import classes from './Plus.module.css'
import PlusImg from '../../../assets/images/plus.jpg'

class Plus extends Component{
  render(){
    return (
      <div className={classes.Plus}>
          <h2>爱彼迎Plus房源</h2>
          <p>品质和设计经过验证的精选房源系列</p>
          <div className={classes.pic} style={{
            background:`url(${PlusImg})`,
            backgroundSize: "cover"
          }}><button type="button">浏览Plus房源 ></button></div>

      </div>
    )
  }
}


export default Plus
