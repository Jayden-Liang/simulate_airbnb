const initialState={
  currentShow: 1,
  all_settimefunc: {}
}

const reducer =(state=initialState, action)=>{
  switch (action.type) {
    case 'RIGHT':
    if (state.currentShow===4){
      return {
          ...state,
          currentShow: 1
        }
    }else{
      return {
          ...state,
          currentShow: state.currentShow+1
        }
    }
    case 'LEFT':
      if(state.currentShow===1){
        return{
          ...state,
          currentShow: 4
        }
      }else{
        return{
          ...state,
          currentShow: state.currentShow-1
        }
      }
    default:
      return state
  }
}


export default reducer
