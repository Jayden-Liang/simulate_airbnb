import React, {Component} from 'react'
import classes from './Experience.module.css'

class Experience extends Component{
  state={
    exp:[
      {
        location: '日本',
        description: '您的私人东京摄影师！',
        price: '￥524',
        star: 4.94,
        comments: 538,
        url: 'https://z1.muscache.cn/im/pictures/763cbba6-1c23-44e2-a4dd-7605de06f445.jpg?aki_policy=poster'
      },
      {
        location: '葡萄牙',
        description: '辛特拉难忘一日！',
        price: '￥401',
        star: 4.95,
        comments: 1374,
        url:'https://z1.muscache.cn/im/pictures/943d0233-e522-40fe-ac16-d39efd49a0eb.jpg?aki_policy=poster'
      },
      {
        location: '古巴',
        description: '在敞篷车内欣赏哈瓦那最美的天台景色，品美酒',
        price: '￥383',
        star: 4.96,
        comments: 725,
        url: 'https://z1.muscache.cn/im/pictures/415dfc15-0cbd-4542-9b29-1c4a75847f50.jpg?aki_policy=poster'
      },
      {
        location: '澳大利亚',
        description: '放羊驼体验',
        price: '￥149',
        star: 4.94,
        comments: 88,
        url:'https://z1.muscache.cn/im/pictures/9c0cc0d5-ebf1-4177-82b9-0d21cf3e9a9c.jpg?aki_policy=poster'
      },
      {
        location: '澳大利亚',
        description: '体验8字水塘，海岸线探险徒步行',
        price: '￥735',
        star: 4.93,
        comments: 146,
        url:'https://z1.muscache.cn/im/pictures/lombard/MtTemplate-66434-media_library/original/ecd2c8d2-a7dd-4d80-9aee-ef6dfc61d390.jpeg?aki_policy=poster'
      },
      {
        location: '葡萄牙',
        description: '本地人带你游辛特拉',
        price: '￥486',
        star: 4.91,
        comments: 990,
        url:'https://z1.muscache.cn/im/pictures/lombard/MtTemplate-89564-media_library/original/6741931b-fcef-4618-ac45-ac9e17962848.jpeg?aki_policy=poster'
      },
      {
        location: '泰国',
        description: '泰国传统具纹身',
        price: '￥605',
        star: 4.99,
        comments: 204,
        url: 'https://z1.muscache.cn/im/pictures/45a7e80e-aadf-4cc4-bfaa-361034b85218.jpg?aki_policy=poster'
      },
      {
        location: '泰国',
        description: '清迈粘瀑布',
        price: '￥303',
        star: 4.96,
        comments: 529,
        url: 'https://z1.muscache.cn/im/pictures/42708500-e24b-48ba-af96-83c77c184aad.jpg?aki_policy=poster'
      }
    ]
  }


  render(){
   let exp= null
   exp=this.state.exp.map((item, index)=>{
     return <div key={index} className={classes.each}>
              <div className={classes.Img} style={{
                 background: `url(${item.url})`,
                 backgroundSize: "cover"
              }}></div>
              <div>{item.location}</div>
              <div className={classes.description}>{item.description}</div>
              <div>{item.price}/人起</div>
              <div>{item.star} icon ({item.comments})</div>
           </div>
   })

    return(
      <React.Fragment>
      <div className={classes.Experience}>
        <h2>高分体验</h2>
        <p>在下趟旅程中，不妨预订由本地达人组织的体验活动</p>
        <div className={classes.all}>
           {exp}
        </div>

        <div className={classes.more}><a href='/'>显示所有体验</a></div>
      </div>
      <div  className={classes.hr}></div>
      </React.Fragment>
    )
  }
}

export default Experience
