import React, {Component} from 'react'
import Destinations from './Destinations/Destinations'
import classes from './SelectGroup.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faMapMarkerAlt, faCalendarWeek } from '@fortawesome/free-solid-svg-icons'
import {connect} from 'react-redux'


const mapStateToProps=state=>{
  return {
    inputWidth: state.select.inputWidth,
    showDes: state.select.showDes,
    des: state.select.des,
    showCal: state.select.showCal
  }
}

const mapDispatchToProps=(dispatch)=>{
  return {
    setInputWidth: ()=> dispatch({type:"INPUTWIDTH"}),
    showdes:()=> dispatch({type:"SHOWDES"}),
    changeText: (event)=>dispatch({type:"CHANGETEXT", value:event.target.value}),
    clickCity: (value)=>dispatch({type:"CLICKCITY", value: value})
  }
}



class SelectGroup extends Component{
  state={
    typetoggle: false,
    types:['房源', '体验'],
    des: '',
    current_type: "房源",
    CalWidth: "35%",
    showDes: false
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
      this.setState({
        current_type: item
      })
    }
  }








  render(){
    let types=null          //点击房源toggle选项
    let destinations=null
    let calendar=null;
    if (this.state.typetoggle){
      const a=this.state.types.map((item,index)=>{
        return <div key={index}  onClick={()=>this.shiftType(item)}>{item}</div>
      })
      types=<div className={classes.typeSelector} onMouseLeave={this.typeToggleFalse} >
            {a}
      </div>
    }

    if(this.props.showDes){
      destinations=<div  className={classes.destinations}><Destinations clicked={this.props.clickCity} /> </div>
    }

    if(this.props.showCal){
      calendar=<div className={classes.calendar} style={{width:`calc(100% - ${this.props.inputWidth} + 79px)`, transition: "0.3s all ease"}}><h1>calendar</h1></div>
    }


    return (
      <div className={classes.selectGroup_Wrapper}>
        {types}
        {destinations}
      <div className={classes.selectGroup}>
        <div className={classes.type} onClick={this.changeType}>
           <span>{this.state.current_type}</span>
           <span><FontAwesomeIcon icon={faChevronDown} size="sm" /></span>
        </div>

        <div className={classes.inputAndCal}>
        <div className={classes.input} onClick={this.props.showdes} style={{ width:`${this.props.inputWidth}`, transition: "0.3s all ease"}}>
            <span><FontAwesomeIcon icon={faMapMarkerAlt} size="lg" /></span>
            <input type='text' id='input' onChange={(event)=>this.props.changeText(event)} name='something' value={this.props.des} placeholder='输入目的地, 城市或景点'/>
        </div>
        <div className={classes.Cal} style={{ width:`${this.state.CalWidth}`}} onClick={this.props.setInputWidth}>
            <span><FontAwesomeIcon icon={faCalendarWeek} size="lg" /></span>
            <span>{this.state.current_type==='房源'?"入住日期-退房日期":"开始日期-结束日期"}</span>

         </div>

         {calendar}
        </div>

        <div className={classes.searchbutton}><button type='button'>搜索</button></div>
      </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectGroup)
