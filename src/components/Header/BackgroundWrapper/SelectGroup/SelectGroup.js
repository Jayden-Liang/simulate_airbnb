import React, {Component} from 'react'
import classes from './SelectGroup.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faMapMarkerAlt, faCalendarWeek } from '@fortawesome/free-solid-svg-icons'

class SelectGroup extends Component{
  state={
    typetoggle: false,
    types:['房源', '体验'],
    current_type: "房源",
    CalWidth: "35%",
    inputWidth: "60%"
  }

  changeType=()=>{
    console.log('hi')
    this.setState({
      typetoggle: !this.state.typetoggle
    })
  }

  typeToggleFalse=()=>{
    this.setState({
      typetoggle: false
    })
  }

  shiftType=(item)=>{
    if (item!==this.state.current_type){
      console.log('gio')
      this.setState({
        current_type: item
      })
    }
  }

  CalWidth=()=>{
   this.setState({
     CalWidth: "50%",
     inputWidth: "40%"
   })
  }

  render(){
    let types=null          //点击房源toggle选项
    if (this.state.typetoggle){
      const a=this.state.types.map((item,index)=>{
        return <div key={index} onMouseOut={console.log('fuck')} onClick={()=>this.shiftType(item)}>{item}</div>
      })
      types=<div className={classes.typeSelector} onMouseLeave={this.typeToggleFalse} >
            {a}
      </div>
    }
    return (
      <div className={classes.selectGroup_Wrapper}>
        {types}
      <div className={classes.selectGroup}>
        <div className={classes.type} onClick={this.changeType}>
           <span>{this.state.current_type}</span>
           <span><FontAwesomeIcon icon={faChevronDown} size="sm" /></span>
        </div>

        <div className={classes.inputAndCal}>
        <div className={classes.input} style={{ width:`${this.state.inputWidth}`}}>
            <span><FontAwesomeIcon icon={faMapMarkerAlt} size="lg" /></span>
            <input type='text' name='something' placeholder='输入目的地, 城市或景点'/>
        </div>
        <div className={classes.Cal} style={{ width:`${this.state.CalWidth}`}} onClick={this.CalWidth}>
            <span><FontAwesomeIcon icon={faCalendarWeek} size="lg" /></span>
            <span>{this.state.current_type=='房源'?"入住日期-退房日期":"开始日期-结束日期"}</span>
         </div>
        </div>

        <div className={classes.searchbutton}><button type='button'>搜索</button></div>
      </div>
      </div>
    )
  }
}

export default SelectGroup
