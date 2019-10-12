import React, {Component} from 'react'
import homeData from '../../../../../assets/data/homes.json'
import classes from './CityHotels.module.css'
import Rating from 'react-rating'
import Stars from '../../../../Utils/RatingStar/RatingStar'
// var Rating = require('react-rating');



class CityHotels extends Component{
  state={

  }

  render(){

    let each=<div>请切换最前面两个</div>
    const data=homeData[this.props.city]
    if (data){
       each=data.map((item, index)=>{
         const myclass='each_'+index
         return <div key={index} className={'each'+' '+myclass}>
                     <div className={classes.Img} style={{
                       background: "url('https://z1.muscache.cn/im/pictures/473cbf2c-aab0-4492-9d02-e4377a8e609b.jpg?aki_policy=large')",
                       backgroundSize:"contain"
                     }}>
                     </div>
                     <div className={classes.type}>整套房子 . 一张床</div>
                     <div className={classes.description}>in火烈鸟 6号线龙洞植物园 巨幕电影院 步行街 森林公园 天河客运站 广州东站</div>
                     <div><span className={classes.current_price}>￥74</span><s className={classes.former_price}>￥84</s>   <span>每晚</span> </div>
                     <div className={classes.icons}>
                         <Stars stars={"4.5"}/>
                         <div className={classes.comments_count}>4 . 超赞房东</div>
                     </div>

                   </div>
       })
    }


    return(
          <div className={classes.wrapper}>
             {each}
          </div>

    )
  }
}


export default CityHotels
