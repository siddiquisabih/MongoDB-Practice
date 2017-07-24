import Action from "../Action/Actions"

const initialState = {
    getValueFromDataBase: false,
    postValueFromDataBase: false,
}


function Reducer(state = initialState, action) {

    switch (action.type) {
        case Action.value:
            return Object.assign({}, state, { postValueFromDataBase: true })


default :
return state

    }
}

export default Reducer