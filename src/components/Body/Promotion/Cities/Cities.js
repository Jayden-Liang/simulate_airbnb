import React,{Component} from 'react'
import Buttons from './buttons/buttons'
import classes from './Cities.module.css'
import CityHotels from './CityHotels/CityHotels'

class Cities extends Component{
  state={
    left: 0,
    myleft:0,
    myright:936,
    hideleftbtn: false,
    hiderightbtn: false,
    cityOn: this.props.citylist[0]

  }


  changeLeft=()=>{
    this.setState({
      left: this.state.left+132,
      myleft: this.state.myleft+132,
      myright: this.state.myright+132

    })
  }
  changeRight=()=>{
    this.setState({
      left: this.state.left-132,
      myleft: this.state.myleft-132,
      myright: this.state.myright-132
    })
  }


  clicked=(item)=>{
    this.setState({
      cityOn: item
    })
  }


  render(){
    let newCitylist=[...this.props.citylist]
    newCitylist.pop()
    newCitylist.shift()
    const citygroup=newCitylist.map((item,index)=>{
      return <span className={this.state.cityOn===item?"city_active":null} onClick={()=>this.clicked(item)} key={index}>{item}</span>
    })



    return (
      <div className={classes.outterWrapper}>
      <div className={classes.CityWrap}>
      <span className={this.state.cityOn===this.props.citylist[0]?"city_active"+" "+classes.firstOne:"button"+" "+classes.firstOne}  onClick={()=>this.clicked(this.props.citylist[0])} style={{left:`${this.state.myleft}px`}}>{this.props.citylist[0]}</span>
      <span  className={this.state.cityOn===this.props.citylist[this.props.citylist.length-1]?"city_active"+" "+classes.firstOne:"button"+" "+classes.lastOne} onClick={()=>this.clicked(this.props.citylist[this.props.citylist.length-1])} style={{left:`${this.state.myright}px`}}>{this.props.citylist[this.props.citylist.length-1]}</span>
      <div className={classes.City} style={{transform:`translateX(${this.state.left}px)`}}>
        {citygroup}
      </div>

      </div>
      <Buttons changeLeft={this.changeLeft} changeRight={this.changeRight}/>
     <CityHotels  city={this.state.cityOn}/>
     </div>
    )
  }
}

export default Cities
