import React from 'react';
import {Route,Link} from 'react-router-dom';
import App from './App';
function erying (){
    return <h3>二营</h3>
}
function qibinglian (){
    return <h3>骑兵连</h3>
}

class Dashboard extends React.Component{

    constructor(...props){
        super(...props)
    }
    render(){
        return <div>
        <ul>
           <li>
               <Link to='/dashboard/'>一营</Link>
           </li>
           <li>
               <Link to='/dashboard/erying'>二营</Link>
           </li>
           <li>
               <Link to='/dashboard/qibinglian'>骑兵连</Link>
           </li>
        </ul>
        {/* <Redirect to='/qibinglian'> </Redirect> */}
        
        
        <Route path='/dashboard/' exact  component={App}></Route>
        <Route path='/dashboard/erying' component={erying}></Route>
        <Route path='/dashboard/qibinglian' component={qibinglian}></Route>


        </div>
    }
}

export default Dashboard;