import React from 'react'
import { addGun,addGunAsync,remove } from './index.redux';
//import ReactDom from 'react-dom'
import {connect } from 'react-redux';
class   App extends React.Component{

constructor(props){
    super(props)
}

render (){
    const addGun=this.props.addGun;
    const removeGun=this.props.removeGun;
const addGunAsync=this.props.addGunAsync;
  
const num=this.props.num;
    return <div><h2>现在有机枪{num}</h2>
    <button onClick={addGun}>申请武器</button>
    <button onClick={removeGun}>上交武器</button>
    <button onClick={addGunAsync}>缓两天在叫</button>

    </div>
}

};
const mapStatetoProps=(state)=> {
    return {num:state}
}
const actionCreators={addGun,addGunAsync,remove}
App=connect(mapStatetoProps,actionCreators)(App)
export default App;