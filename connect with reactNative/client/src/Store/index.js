import {createStore  , applyMiddleware} from "redux"
import Reducer from "../Store/Reducer/Reducer"
import thunk from "redux-thunk"

const middleware = applyMiddleware(thunk)


const store = createStore(Reducer , middleware)


store.subscribe(()=>{
    console.log(store.getState())
})


export default store






//Todo 

// application component mai redux aply karni hai
// middleware say request bhejni hai