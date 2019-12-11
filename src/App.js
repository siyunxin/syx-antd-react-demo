import React, { Component } from 'react';
import './App.css';
import Child from './Child_01'
import {connect} from 'react-redux'
import { num } from './redux/Action';
class App extends Component {
  constructor(props){
    super(props)
    this.state = {
          parentText:'我是父组件的值',
          'arr': [{
            "userName": "fangMing", "text": "123333", "result": true
        }, {
            "userName": "zhangSan", "text": "345555", "result": false
        }, {
            "userName": "liSi", "text": "567777", "result": true
        }, {
            "userName": "wangWu", "text": "789999", "result": true
        },],
          'arr2':[1,2,3,4],
          'value01':'',
          'selectValue':'',
          'selectOption':[
              {'value':'syx','key': 1},
              {'value':'司云昕','key': 2},
              {'value':'司昕昕','key': 3}
          ]
    }
  }
  fn(data) {
    this.setState({
        parentText: data //把父组件中的parentText替换为子组件传递的值
    },() =>{
       console.log(this.state.parentText);//setState是异步操作，但是我们可以在它的回调函数里面进行操作
    });

}
clickButton(){
  console.log(this.state.value01)
  console.log("下拉",this.state.selectValue)

}
changeValue01(e){
  this.setState({value01:e.target.value})
}
changeSelect(e){
  this.setState({selectValue:e.target.value})
}
  render() {
    const {inputValue,NUM} = this.props
    return (
      <div className="App">
      <Child arr={this.state.arr} pfn={this.fn.bind(this)}></Child>
      <p>{this.state.parentText}</p>
      <ul>
        {this.state.arr2.map(item=>{
          return(
            <li key={item}>{item}</li>
          )
        })
      }
      </ul>
      <p>{this.state.value01}</p>
      <input value={this.state.value01} onChange={this.changeValue01.bind(this)}></input>
      <p>{this.state.selectValue}</p>
      <select value={this.state.selectValue} onChange={this.changeSelect.bind(this)}>
          {
            this.state.selectOption.map(item=>{
              return(
                <option key={(item.key).toString()}>{item.value}</option>
              )
            })
          }
      </select>
      <button onClick={this.clickButton.bind(this)}>点击我</button>

      <hr></hr>
      <p>我是store 直接获取的值***********{inputValue}</p>
      <button onClick={NUM}>改变storeFirst +10</button>
      <hr></hr>
      <p>路由</p>
      <button onClick={() => this.props.history.push('/page2')}>去路由Page1</button>    
      <button onClick={() => this.props.history.push('/page1')}>去路由Page2</button>
      </div>
    );
  }
}
function mapStateToProps (state){
  return {inputValue:state['First']}
}
function mapDispatchToProps(dispatch){
    return{
       NUM:()=>{
        dispatch(num('First'),100)
       }
    }

}
export default connect(mapStateToProps,mapDispatchToProps) (App) ;
