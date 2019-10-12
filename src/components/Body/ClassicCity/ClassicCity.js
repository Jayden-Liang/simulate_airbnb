import React, {Component} from 'react'
import classes from './ClassicCity.module.css'
import City from './City/City'

class ClassicCity extends Component{
  state={
    cities:[
      {
        name: '香港',
        title: '亚洲美食之都',
        price: '￥440',
        img: "https://z1.muscache.cn/airbnb/static/china_p1_redesign/HongKong-d2a0c673c4e1a28dbb7f6f0fddf38c32.jpg"
      },
      {
        name: '清迈',
        title: '泰国最文艺小城',
        price: '￥168',
        img: 'https://z1.muscache.cn/airbnb/static/china_p1_redesign/optimized/Chiang-Mai-0c02e1fa3f13340df4e366004db7a7c7.jpg'
      },
      {
        name: '伦敦',
        title: '感受英伦风情',
        price: '￥354',
        img: 'https://z1.muscache.cn/airbnb/static/china_p1_redesign/optimized/London-19c5702c00785c96a626e3989e0a3461.jpg'
      },
      {
        name: '普吉岛',
        title: '东南亚看海',
        price: '￥360',
        img: 'https://z1.muscache.cn/airbnb/static/china_p1_redesign/optimized/Phuket-237db8c73af4ec081e69c3d0571b2a51.jpg'
      },
      {
        name: '洛杉矶',
        title: '好莱坞式繁华',
        price: '￥445',
        img: 'https://z1.muscache.cn/airbnb/static/china_p1_redesign/optimized/Los-Angeles-b59e4b468916be8f5295c1491252f752.jpg'
      },
      {
        name: '巴厘岛',
        title: '度蜜月的首选',
        price: '￥396',
        img: 'https://z1.muscache.cn/airbnb/static/china_p1_redesign/optimized/Bali-380c5db84250a6207a0fca6c24e34349.jpg'
      }
    ]
  }

  render(){

    let cities=this.state.cities.map((item, index)=>{
      return <City key={index} cityinfo={item}/>
    })
    return (
      <div className={classes.Classic}>
        <h2>精彩旅行城市</h2>
        <div className={classes.cities}>
           {cities}
        </div>
      </div>
    )
  }
}

export default ClassicCity
