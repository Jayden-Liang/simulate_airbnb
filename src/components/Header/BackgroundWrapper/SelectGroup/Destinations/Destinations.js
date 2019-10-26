import React, {Component} from 'react'
import classes from './Destinations.module.css'

class Destinations extends Component{
  state={
     popular: ['北京','上海','重庆','新疆','湖南','广州','香港','湖北'],
     international: ['中国香港','大版','东京','英国','法国','维尔纳','曼谷','清迈'],
     fall: ['深圳','南京','武汉','吉隆坡','福建','泉州','丽江','云南']
}

  render(){
    let popular=null;
    let international=null;
    let fall=null;
    popular=this.state.popular.map((item,index)=>{

      return <div onClick={()=>this.props.clicked(item)}  className={classes.outterEach} key={index}> <span className={classes.each} >{item}</span>
      </div>
    })
    international=this.state.international.map((item,index)=>{
      return <div onClick={()=>this.props.clicked(item)} className={classes.outterEach} key={index}><span className={classes.each} >{item}</span> </div>
    })
    fall=this.state.fall.map((item,index)=>{
      return <div onClick={()=>this.props.clicked(item)} className={classes.outterEach} key={index}> <span className={classes.each} >{item}</span> </div>
    })



    return (
      <div className={classes.whole}>
         <p>温馨提示：您还可以输入城市+经典, 区县名进行搜索，如：巴黎 埃菲尔铁塔</p>

         <div className={classes.cities}>
            <div className={classes.hot}>
              <h4>国内热门城市</h4>
              <div className={classes.wrap}>{popular}</div>
            </div>
            <div>
               <h4>国际/港澳台热门城市</h4>
               <div className={classes.wrap}>{international}</div>
            </div>
            <div>
               <h4>秋季好去处</h4>
               <div className={classes.wrap}>{fall}</div>
            </div>
         </div>
      </div>
    )
  }
}

export default Destinations
