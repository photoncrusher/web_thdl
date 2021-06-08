import React, { Component } from 'react'
import { Switch, Route, Redirect ,useRouteMatch} from 'react-router-dom'
import './Components/style.css'
import Header from "./Components/Header";
import Form from "./Components/Search";
import View from "./Components/View";


export default class Appmain extends Component {
     render() {
          return (
               <React.Fragment>
                    <Switch>
                         <Route exact path="/" component={Form} />
                         <Route exact path={"/View/:id"} component={View}>
                         </Route>
                    </Switch>

               </React.Fragment>

          )
     }
}
