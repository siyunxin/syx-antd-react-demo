import React,{Component}from 'react';
class Child extends Component{
    constructor(props){
        super(props)
        this.state = ({
            childText: "我是子组件的文字"
        })
    }
    clickFn(text){
        this.props.pfn(text)
    }
    render(){
        return(
            <div>
                <ul>
                    {
                        this.props.arr.map(item => {
                            return(
                                <li key={item.userName} onClick={this.clickFn.bind(this,item.text)}>
                                    {item.userName}的评论是{item.text}
                                </li>
                            )
                        })
                    }
                    <li>   
                    </li>
                </ul>
                <button >点我给父组件传值</button>
            </div>
        );
    }
}

export default Child;