import React, {Component} from 'react'
import classes from './Promotion.module.css'
import Cities from './Cities/Cities'
class Promotion extends Component{
  state={
     cities:['广州','成都','北京','重庆','上海','西安','南京','武汉']
  }




  buttonVisible=()=>{
    if (document.body.scrollWidth>1210){

    }
  }

  updateDimensions=()=>{
    console.log('hi')
  }

  componentDidMount() {
    window.addEventListener('resize', this.buttonVisible);
  }

  render(){

    return (
      <div className={classes.Promotion}>
         <div className={classes.Intro}>
           <h2>秋季特惠房源</h2>
           <p>低至8折，可叠加使用礼券</p>
         </div>
         <Cities citylist={this.state.cities}/>

      </div>
    )
  }
}

export default Promotion
