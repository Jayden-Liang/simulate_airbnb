import React, {Component} from 'react'
import Header from '../../components/Header/Header'
import Promotion from '../../components/Body/Promotion/Promotion'
import Guarantee from '../../components/Body/Guarantee/Guarantee'
import Plus from '../../components/Body/Plus/Plus'
import ClassicCity from '../../components/Body/ClassicCity/ClassicCity'
import TravelStory from '../../components/Body/TravelStory/TravelStory'
import Experience from '../../components/Body/Experience/Experience'
import Footer from '../../components/Body/Footer/Footer'

class pageBuilder extends Component{
  render(){
    return (
      <div>
        <Header />
        <Promotion />
        <Guarantee />
        <Plus />
        <ClassicCity />
        <TravelStory />
        <Experience />
        <Footer />
        <div>footer</div>
      </div>
    )
  }
}

export default pageBuilder
