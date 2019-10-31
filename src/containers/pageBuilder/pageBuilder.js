import React, {Component} from 'react'
import Header from '../../components/Header/Header'
import Promotion from '../../components/Body/Promotion/Promotion'
import Guarantee from '../../components/Body/Guarantee/Guarantee'
import Plus from '../../components/Body/Plus/Plus'
import ClassicCity from '../../components/Body/ClassicCity/ClassicCity'
import TravelStory from '../../components/Body/TravelStory/TravelStory'
import Experience from '../../components/Body/Experience/Experience'
import Footer from '../../components/Body/Footer/Footer'
import {connect} from 'react-redux'
import classes from './pageBuilder.module.css'


const mapStateToProps=state=>{
  return{
    modalShow: state.select.showModal

  }
}

const mapDispatchToProps=(dispatch)=>{
  return {
    clickModal: ()=> dispatch({type:"CLICKMODAL"})

  }
}

class pageBuilder extends Component{

  render(){
    return (
      <div>
       {this.props.modalShow? <div className={classes.Modal} onClick={this.props.clickModal}></div>:null}
        <Header />
        <Promotion />
        <Guarantee />
        <Plus />
        <ClassicCity />
        <TravelStory />
        <Experience />
        <Footer />

      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(pageBuilder)
