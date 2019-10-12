
const a=[]

export const toright=()=>{
  return{
    type: 'RIGHT'
  }
}


export const right=()=>{
  a.map(item=>{
    clearTimeout(item)
    return "none"
  })
  return dispatch=>{
    a.push(setTimeout(()=>{
      dispatch(toright())
    },10000))
  }
}

export const clickright=()=>{
  a.map(item=>{
    clearTimeout(item)
    return "none"
  })
  return toright()
}

export const clickleft=()=>{
  a.map(item=>{
    clearTimeout(item)
    return "none"
  })
  return {
    type: 'LEFT'
  }
}
