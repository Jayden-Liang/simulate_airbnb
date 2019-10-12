import React, {Component} from 'react'
import classes from './City.module.css'

class City extends Component{
  render(){
    return (
      <div className={classes.each} style={{  display:"inline-block"}}>
         <img style={{ width:"100%"}} src={this.props.cityinfo.img} alt=''/>
         <div><span>{this.props.cityinfo.city}</span><span>{this.props.cityinfo.title}</span></div>
         <div>人均<span>{this.props.cityinfo.price}</span>/晚</div>
      </div>
    )
  }
}

export default City
