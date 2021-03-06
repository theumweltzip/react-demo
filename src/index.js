import React from 'react';
import ReactDom from 'react-dom';
import {createStore,applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';

import {BrowserRouter,Link,Route,Redirect,Switch} from 'react-router-dom';


import Auth from './Auth';
import Dashboard from './Dashboard'
// import {counter} from './index.redux'
import reducers from 'reducer';

const store =createStore(reducers,compose(
applyMiddleware(thunk),
window.devToolsExtension?window.devToolsExtension():f=>f
));

ReactDom.render(
(<Provider store={store}>
<BrowserRouter>
<Switch>
<Route path='/login' exact component={Auth}></Route>
<Route path='/Dashboard' component={Dashboard}></Route>
{/* <Route path='/qibinglian' component={qibinglian}></Route> */}
<Redirect to='/Dashboard'> </Redirect>
</Switch>


</BrowserRouter>

</Provider>),
document.getElementById('root'))

