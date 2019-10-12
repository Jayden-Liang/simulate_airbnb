import React,{ Component} from 'react'
import './ProgressBar.css'


class ProgressBar extends Component{
  render(){
    const bar_group=[...Array(4)]
    bar_group[this.props.active-1]='active'
    const bar=bar_group.map((item, index)=>{
      if (item){
        return <div className='bar active' key={index}><div></div></div>
      }
      return <div className='bar' key={index}><div></div></div>
      // return item?<div barClass={barclass.push(classes.active)}/>:<Bar barClass={barclass}/>
    })
    return(
      <div className='progressBar'>
       {bar}
      </div>
    )
  }
}

export default ProgressBar
