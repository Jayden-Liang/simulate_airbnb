const initialState={
  inputWidth: "60%",
  showModal: false,
  showDes: false,
  showCal: false,
  des: '',


}



const reducer =(state=initialState, action)=>{
    switch (action.type) {
       case  'INPUTWIDTH':
          return {
            ...state,
            inputWidth: '45%',
            showModal: true,
            showCal: !state.showCal
          }
       case 'CLICKMODAL':
         console.log('clicked modal')
         return {
           ...state,
           showCal: false,
           showModal: false,
           showDes: false,
           inputWidth: "60%"
         }
      case "SHOWDES":
         return {
           ...state,
           showModal: true,
           showDes: true,
           inputWidth: '60%'
         }
      case "CHANGETEXT":
         return {
           ...state,
           des: action.value,
           inputWidth: '60%'
         }
     case "CLICKCITY":
         return{
           ...state,
           des: action.value,
           showDes: false,

           inputWidth: '45%',
           showCal: true
         }
       default:
          return state

    }

}

export default reducer
