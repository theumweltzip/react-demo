import React from 'react';
import {connect} from 'react-redux';
import {login} from './Auth.redux';


const mapStatetoProps=(state)=> {
    return {num:state}
}
const actionCreators={addGun,addGunAsync,remove}
App=connect(mapStatetoProps,actionCreators)(App)

class Auth extends React.Component{
    render(){
        return <h2>Auth登陆页面</h2>
    }
}

export default Auth;