import React, {Component} from 'react'
import classes from './TravelStory.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faCommentDots } from '@fortawesome/free-solid-svg-icons'
import { faHandPointUp } from '@fortawesome/free-regular-svg-icons'

class TravelStory extends Component{
  state={
    stories:[
      {
        name: "广州",
        description:'房东说，欢迎体验你的“珠江之夜”。',
        thumbup: 28,
        comments: 3,
        url: "https://z1.muscache.cn/im/pictures/c6a66b67-57d4-4206-90b9-82d94329762a.jpg?aki_policy=x_large"
      },
      {
        name: "台州市",
        description:'去这家深藏最美渔村的海边石墅 赏一场不容错过的东海日出！',
        thumbup: 44,
        comments: 5,
        url:"https://z1.muscache.cn/im/pictures/694ef74b-4caf-4a10-98c4-78215bf0fb6c.jpg?aki_policy=x_large"
      },
      {
        name: "曼谷",
        description:'曼谷有座四合院，隐秘又惊艳',
        thumbup: 50,
        comments: 4,
        url:'https://z1.muscache.cn/im/pictures/41d3443a-97bf-401b-9acc-c5ba9ef1bf5e.jpg?aki_policy=x_large'
      },
      {
        name: "威克斯福德",
        description:'为了体验地道的爱尔兰乡村风情，我竟然住进城堡马厩！',
        thumbup: 17,
        comments: 0,
        url:'https://z1.muscache.cn/im/pictures/ed07ac15-ea02-4b73-8ada-9e511618f9dd.jpg?aki_policy=x_large'
      },
      {
        name: "上海",
        description:'一秒穿越到18世纪的欧洲',
        thumbup: 13,
        comments: 0,
        url: 'https://z1.muscache.cn/im/pictures/4b2f982f-68e6-44c8-a547-7c47291c1736.jpg?aki_policy=x_large'
      },
      {
        name: "青岛",
        description:'领地咖啡-大隐隐于市的室外桃园',
        thumbup: 17,
        comments: 0,
        url: 'https://z1.muscache.cn/im/pictures/c3361ff9-3aca-45da-901c-509532afeef0.jpg?aki_policy=x_large'
      },
      {
        name: "汉城",
        description:'拔草首尔治愈系小浣熊咖啡厅-Raccoon Cafe',
        thumbup: 16,
        comments: 1,
        url: 'https://z1.muscache.cn/im/pictures/210dd2ac-53da-41c3-b15d-f70ac51f61ba.jpg?aki_policy=x_large'
      },
      {
        name: "牛津",
        description:'英式最乡村生活, 尽在Cotswolds',
        thumbup: 21,
        comments: 1,
        url: 'https://z1.muscache.cn/im/pictures/b8765b8e-dc7e-4e09-982b-a466117ab6fc.jpg?aki_policy=x_large'
      }
    ]
  }

  render(){
    let stories=null
    stories=this.state.stories.map((item,index)=>{
      return <div key={index} className={classes.each}>
                 <div className={classes.Img} style={{
                   background: `url(${item.url})`,
                   backgroundSize: "cover"
                 }} >
                 <span className={classes.thumbup}><FontAwesomeIcon icon={faHandPointUp} size="lg" className={classes.faHandPointUp}/></span>
                 <span className={classes.type}>房源</span>

                 </div>
                 <div className={classes.title}><span>{item.name}</span>{item.description}</div>
                 <div className={classes.icons}><span></span>
                 <FontAwesomeIcon icon={faThumbsUp} size="sm" className={classes.thumb}/>{item.thumbup}
                 <FontAwesomeIcon icon={faCommentDots} size="sm" className={classes.comments}/> {item.comments}</div>
                </div>
    })
    return(
        <div className={classes.TravelStory}>
          <h2>精彩旅行故事</h2>

          <div className={classes.all}>
            {stories}
          </div>

          <div className={classes.more}><a href='/'>显示全部 ></a></div>
        </div>
    )
  }
}

export default TravelStory
