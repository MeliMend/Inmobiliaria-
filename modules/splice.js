const splice = (data,id)=>{
    let pos = data.indexOf(id)
    data.splice(pos, 1)
}
export default splice