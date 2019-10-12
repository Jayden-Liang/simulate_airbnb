import React from 'react'
import classes from './DropDown.module.css'


const dropdown=(props)=>{
  const AllClasses=[classes.outer_dropdown]
  props.dropdown? AllClasses.push(classes.Open):AllClasses.push(classes.Close)
  return (
    <div className={AllClasses.join(' ')} style={{
      width:props.dropdown?"650px":"450px"
    }}>
        <div className={classes.welcome}> 探索爱彼迎</div>
        <div>
           <ul >
             <li className={classes.active}><a href='/'>全部</a></li>
             <li><a href='/'>房源</a></li>
             <li><a href='/'>体验</a></li>
             <li><a href='/'>多天探险体验</a></li>
             <li><a href='/'>餐馆</a></li>
           </ul>
        </div>
    </div>

  )
}


export default dropdown
