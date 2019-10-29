import React, {Component} from 'react'
import classes from './Footer.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAirbnb, faWeibo, faWeixin } from '@fortawesome/free-brands-svg-icons'

class Footer extends Component{
  render(){
    return (
      <div className={classes.Footer}>
      <div className={classes.columns}>
         <div className={classes.each}>
          <h5>爱彼迎</h5>
          <p><a href="/">工作机会</a></p>
          <p><a href='/'>爱彼迎新闻</a></p>
          <p><a href='/'>政策</a></p>
          <p><a href='/'>帮助</a></p>
          <p><a href='/'>多元化与归属感</a></p>
          <p><a href='/'>无障碍设施</a><span>新推出</span></p>
         </div>
         <div className={classes.each}>
          <h5>发现</h5>
          <p><a href='/'>信任与安全</a></p>
          <p><a href='/'>旅行基金</a></p>
          <p><a href='/'>爱彼迎公民</a></p>
          <p><a href='/'>商务差旅</a></p>
          <p><a href='/'>缤纷体验</a><span>新推出</span></p>
          <p><a href='/'>爱彼迎杂志</a></p>
         </div>
         <div className={classes.each}>
          <h5>出租</h5>
          <p><a href='/'>为什么要出租?</a></p>
          <p><a href='/'>待客之道</a></p>
          <p><a href='/'>房东义务</a></p>
          <p><a href='/'>开展体验</a><span>新推出</span></p>
          <p><a href='/'>Open Homes</a></p>
         </div>
         <div className={classes.each}>
          <h5><FontAwesomeIcon icon={faWeibo } className={classes.faWeibo} /> <FontAwesomeIcon icon={faWeixin } className={classes.faWeixin} />  </h5>
          <p><a href='/'>条款</a></p>
          <p><a href='/'>隐私政策</a></p>
          <p><a href='/'>网站地图</a></p>
         </div>
      </div>

      <div className={classes.Sep}></div>
      <div className={classes.Bottom}>
         <div><FontAwesomeIcon icon={faAirbnb } className={classes.airbnb_icon} /></div>
         <div className={classes.text}>
            <p>京ICP备16017121号-3 京ICP证 160773号<img src="https://z1.muscache.cn/airbnb/static/packages/public_security_bureau_logo.d0289dc0.png" alt="中国公安局标志"/>京公网安备 11010502032345号 安彼迎网络（北京）有限公司 营业执照</p>
            <div>&copy;2019 Airbnb, Inc. All rights reserved.</div>
         </div>
         <div className={classes.buttons}>
            <button type="button">中文(简体)</button>
            <button type="button">CNY- ￥</button>
         </div>

      </div>

      </div>
    )
  }
}

export default Footer
