import React, { Component } from "react"
// import { View, Button, Text } from "react-native"
import { connect } from "react-redux"
import Midware from "../src/Store/Middleware/Midware"
import { Container, Content, Button, Input, Text, Item , Form } from "native-base"

function mapStateToProps(state) {
    return {
        storeState: state
    }
}


function mapDispatchToProps(dispatch) {
    return {

        postReq: (todo) => dispatch(Midware.postRequest(todo))


    }
}

class Application extends Component {
    constructor() {
        super()
        this.state = {
            value: ''
        }
    }

    submit() {

        
       let todo =  this.state.value
        this.props.postReq({ todo })
    }



    render() {
        return (
            <Container>

<Form>
             <Item>
                <Input

                placeholder="type here"
                    onChangeText={value => {
                        this.setState({
                            value
                        })
                    } }
                    value={this.state.value}
                    />
</Item>
<Item>
                <Button onPress={this.submit.bind(this)}>
                    <Text>Click to make todo</Text>
                </Button>
      </Item>
      </Form>
            </Container>
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Application)