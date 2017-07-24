class Action {

static value = "inputValue"





static getTodo(todo){
    return {
        type : Action.value,
    data : todo
    }
}




}
export default Action