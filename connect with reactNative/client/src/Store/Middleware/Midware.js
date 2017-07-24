import Action from "../Action/Actions"
import axios from "axios"


class Midware {


    static postRequest(todo) {
        return (dispatch) => {
            axios.post('https://polar-dawn-77253.herokuapp.com/api/todo', todo)
                .then(response => {
                    console.log('responce yai aya hai', response);
                    if (response.status === 200) {
                        dispatch(Midware.getRequest());
                    }
                })
                .catch(err => {
                    console.log(err);
                })

        }
    }


    getRequest() {
        return (dispatch) => {
            axios.get('https://polar-dawn-77253.herokuapp.com/api')
                .then(response => {
                    console.log('responce for get request', response)
                    if (response.status === 200) {
                        dispatch(Action.getTodo(response.data))
                    }
                })


        }
    }





}
export default Midware