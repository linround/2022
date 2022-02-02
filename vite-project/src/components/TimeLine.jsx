
export const Timeline = (props)=>{

    const p = {
        name:'l',
        age:26
    }
    const timeline = [
        <div class="start">8.21 开始自由职业</div>,
        <div class="online">10.18 专栏上线</div>
    ]
    if(props.reverse){
        timeline.reverse()
    }
    return <div>{timeline}</div>
}