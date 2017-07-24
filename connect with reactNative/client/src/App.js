import React , {Component} from "react"
import {View , Button , Text} from "react-native"
import Application from "./Application"
import {Provider} from "react-redux"

import store from "../src/Store"




class App extends Component{
    render(){
        return(
            <Provider store={store} > 
            <Application/>
            </Provider>
        )
    }
}
export default App