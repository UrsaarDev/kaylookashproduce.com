export const offsetTop = (ref) => {
    var rect = ref.current.getBoundingClientRect()
    return {
      top: rect.top + window.scrollY,
      left: rect.left + window.scrollX,
    }
}
  
export const isReadByUser = (scrollY, ref) => {
    if(scrollY >= offsetTop(ref).top - window.innerHeight + ref.current.clientHeight + 30)
        return true
    else return false
}