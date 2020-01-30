import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';

export default class Main extends Component{

    constructor(){
        super();
        this.state={
            msg: "Hello",
        }
    }

    clickBtn= ()=>this.setState({msg:"nice to meet you."});

    render(){
        return (
            <View style={{flex:1, padding:16}}>
                {/* 새로운 Custom Component를 만드는 2가지 방법 */}
                {/* 1. stateful Component : state멤버변수보유 [extends Component] */}
                <MyComponent></MyComponent>

                {/* 2. stateless Component : state멤버변수 없음 [함수형 컴폰넌트]*/}
                <MyComponent2></MyComponent2>

                {/* state는 없지만 props는 받을 수 있음 */}
                {/* stateful 컴포넌트가 props를 받는 방법 */}
                <MyComponent3 data="aaaa"></MyComponent3>
                <MyComponent3 data="bbbb"></MyComponent3>

                {/* stateless에서 props를 받기 */}
                <MyComponent4 data="kkkk"></MyComponent4>
                <MyComponent4 data="ggggg"></MyComponent4>

                <MyComponent5 data="ccc" title="sam"></MyComponent5>

                {/* 컴포넌트들 간의 제어 :  */}
                <AA onPress={this.clickBtn}></AA>
                <BB msg={this.state.msg}></BB>

            </View>
        );
    }
}//Mian

const AA= props=> <Button title="button" onPress={ props.onPress}></Button>
const BB= ({msg})=> <Text>{msg}</Text>

const MyComponent5= ( {data, title} )=>{ //props를 구조분해할당으로 받기 ,
    return <View>
              <Text>{ data }</Text>
              <Text>{ title }</Text>
           </View>
}

//stateless는 전달된 속성들(property)을 파라미터로 받음 
const MyComponent4= props=><Text>MyComponent4 : {props.data}</Text>;

class MyComponent3 extends Component{
    render(){
        return <Text>MyComponent3 : {this.props.data}</Text>;
    }
}

//stateless component
const MyComponent2= ()=>{
    return (
        <View>
            <Text style={{margin:8, padding:8}}>MyComponent2</Text>
        </View>
    );
}


//stateful component
class MyComponent extends Component{

    constructor(){
        super();
        this.state={text:"MyComponent"}
    }

    render(){
        return (
            <View>
                <Text style={{margin:8, padding:8}}>Hello {this.state.text}</Text>
            </View>
        );
    }
}