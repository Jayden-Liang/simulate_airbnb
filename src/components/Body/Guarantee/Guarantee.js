import React, {Component} from 'react'
import classes from './Guarantee.module.css'

class Guarantee extends Component{
  render(){
    return (
      <div className={classes.Guarantee}>
        <h2>爱彼迎旅行保障</h2>
        <div className={classes.three_col}>
           <div className={classes.each}>
              <div className={classes.icon}><img aria-hidden="true" src="https://z1.muscache.cn/airbnb/static/packages/IndicatorHostGuarantee.20c37f9e.svg" width="50" height="50" alt=""/></div>
              <div className={classes.words}><strong>安心房源保障</strong><span>人工审核所有中国房源页面信息，入住更放心</span></div>
           </div>
           <div className={classes.each}>
              <div className={classes.icon}><img aria-hidden="true" src="https://z1.muscache.cn/airbnb/static/packages/IndicatorCXinsurance.32cdc2f5.svg" width="50" height="50" alt=""/></div>
              <div className={classes.words}><strong>专业中文客服</strong><span>(86) 400-120-8508(86) 010-8783-3463，24 小时服务</span></div>
           </div>
           <div className={classes.each}>
              <div className={classes.icon}><img aria-hidden="true" src="https://z1.muscache.cn/airbnb/static/packages/IndicatorExperienceInsurance.903112a9.svg" width="50" height="50" alt=""/></div>
              <div className={classes.words}><strong>旅行安全保障</strong><span>多重风险控制设计，全方位保障您的行程安全</span></div>
           </div>
        </div>
          <div className={classes.more}><a href="/">查看全方位保障计划</a></div>
      </div>
    )
  }
}


export default Guarantee
