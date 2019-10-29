import React, {Component} from 'react'
import Banner1 from '../../../assets/images/banner_1.jpg'
import Banner2 from '../../../assets/images/banner_2.jpg'
import Banner3 from '../../../assets/images/banner_3.jpg'
import Banner4 from '../../../assets/images/banner_4.jpg'
import classes from './BackgroundWrapper.module.css'
import ProgressBar from './ProgressBar/ProgressBar'
import {connect} from 'react-redux'
import * as actions from '../../../store/actions/actions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import SelectGroup from './SelectGroup/SelectGroup'

const mapStateToProps=state=>{
  return{
    currentShow: state.bg.currentShow
  }
}

const mapDispatchToProps=(dispatch)=>{
  return {
    rightRoll: ()=>dispatch(actions.right()),
    rightClicked:()=>dispatch(actions.clickright()),
    leftClicked:()=>dispatch(actions.clickleft())
  }
}

class BackgroundWrapper extends Component{


  render(){
     let current_bg= Banner1
     let current_slogan='汇率[破七]超值游'
     switch (this.props.currentShow) {
       case 1:
        current_bg=Banner1
        current_slogan='汇率[破七]超值游'
        this.props.rightRoll()
        break;
       case 2:
        current_bg=Banner2
        current_slogan='爱彼迎东南亚特选'
        this.props.rightRoll()
        break
       case 3:
         current_bg=Banner3
         current_slogan='日本秋叶之旅'
         this.props.rightRoll()
         break
       case 4:
        current_bg=Banner4
        current_slogan='好房东，获取好房东推荐'
        this.props.rightRoll()
        break
       default:
        current_bg=Banner1

     }

      return(
        <div className={classes.Header} style={{
          backgroundImage:`url(${current_bg})`,
          backgroundSize: "cover"
        }}>
          <div className={classes.Nav}>
          {this.props.children}
          </div>
          <div className={classes.ButtonGroup}>
              <button onClick={this.props.leftClicked}><FontAwesomeIcon icon={faChevronLeft} size="lg" /></button>
              <button onClick={this.props.rightClicked}><FontAwesomeIcon icon={faChevronRight} size="lg" /></button>
          </div>
          <div className={classes.Banner_Intro}>
              <h2>{current_slogan}</h2>
              <div className={classes.More}>查看合集</div>
              <ProgressBar active={this.props.currentShow}/>

          </div>
          <SelectGroup />

        </div>
      )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BackgroundWrapper)
