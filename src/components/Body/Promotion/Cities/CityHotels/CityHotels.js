import React, {Component} from 'react'
import homeData from '../../../../../assets/data/homes.json'
import classes from './CityHotels.module.css'
// import Rating from 'react-rating'
import Stars from '../../../../Utils/RatingStar/RatingStar'
// var Rating = require('react-rating');



class CityHotels extends Component{
  state={

  }

  render(){

    let each=<div>其他后端获取的数据</div>
    const data=homeData[this.props.city]
    console.log(homeData)
    if (data){
       each=data.map((item, index)=>{
         const myclass='each_'+index
         return <div key={index} className={`each ${myclass}`}>
                     <div className={classes.Img} style={{
                       background: `url(${item.img_url})`,
                       backgroundSize:"cover"
                     }}>
                     </div>
                     <div className={classes.type}>{item.type} . {item.bed}张床</div>
                     <div className={classes.description}>{item.title}</div>
                     <div><span className={classes.current_price}>￥{item.price}</span><s className={classes.former_price}>￥{item.discountPrice}</s>   <span>每晚</span> </div>
                     <div className={classes.icons}>
                         <Stars stars={item.star}/>
                         {item.commentsCount===0?
                           <div className={classes.comments_count}>New</div>:
                           <div className={classes.comments_count}>{item.commentsCount} . {item.badge}</div>}

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
