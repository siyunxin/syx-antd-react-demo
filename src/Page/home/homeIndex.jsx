import React,{Component} from 'react'
import {findDOMNode} from 'react-dom'
import './home.css'
import 'element-theme-default'
import {Input,Button} from 'element-react'
import { addtodo } from '../../redux/Action/index'
import { connect } from 'react-redux';
class HomeIndex extends Component{
    constructor(props){
        super(props)
        this.state = {
            addValue:''
        }
        this.changeAddValue = this.changeAddValue.bind(this) 
        this.handleSearch   = this.handleSearch.bind(this)
    }
    
    changeAddValue(e){
       this.setState({
        addValue: e
       })
    }
    handleSearch(e){
        e.preventDefault()
        console.log(this.refs.hello.value)
        
      
    }
    render(){
        const { addText } = this.props
        return(
            <div>
                <input ref="hello" type="text"></input>
                <Input ref="addInput" value={this.state.addValue} onChange={ e => this.changeAddValue(e)} placeholder="请输入文本"/>
                <Button type="primary" icon="search" onClick={addText}>添加</Button>
            </div>
        )
    }
}
function mapDispatchToProps(dispatch){
    return{
        addText:()=>dispatch(addtodo('abcdefg'))
    }

}
export default connect( mapDispatchToProps )(HomeIndex )