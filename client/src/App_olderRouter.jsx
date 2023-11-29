import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store';
import Layout from './hocs/Layout';

import Authentication from './containers/authentication/Authentication';
import Home from './containers/Home';
import Dashboard from './containers/Dashboard';
import Friends from './containers/friends/Friends';
import Groups from './containers/groups/Groups';
import Activity from './containers/activity/Activity';
import Account from './containers/account/Account';
import AddExpense from './containers/addExpense/AddExpense';
import PrivateRoutes from './hocs/PrivateRoutes';


const App_olderRouter = () =>{
  return(
    <Provider store={store}>
      <Router>
        <Layout>
          <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path='/authentication' element={<Authentication/>}/>
          <Route exact path="/dashboard" element={<Dashboard/>} />
          <Route exact path="/friends" element={<Friends/>}/>
          <Route exact path="/groups" element={<Groups/>} />
          <Route exact path="/friends/addExpense" element={<AddExpense basePage={'friends'}/>} />
          <Route exact path="/groups/addExpense" element={<AddExpense  basePage={'groups'}/>} />
          <Route exact path="/addExpense" element={<AddExpense/>} />
          <Route exact path="/activity" element={<Activity/>} />
          <Route exact path="/account" element={<PrivateRoutes><Account/></PrivateRoutes>} />
          
          </Routes>
        </Layout>
    </Router>
  </Provider>
  );
}

export default App_olderRouter;
