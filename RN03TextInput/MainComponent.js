import React, { Component } from "react";
import { Text, View, TextInput, Button, StyleSheet, Alert } from "react-native";

// 클래스를 만들때 따로 안쓰고 바로 export 쓸 수 있다.
export default class MainComponent extends Component{

    constructor(){
        super();
        // 특별한 멤버변수 (화면 자동갱신되는)
        this.state={
            text:"Hello",
            msg:"",
        };
         // 일반 멤버변수 (사용자입렵값을 저장하는 변수)
        this.inputText='';
        this.TextInput2='';
    }

    render(){
        const {msg}=this.state; //구조분해할당
        return(
            <View style={style.root}>
                <TextInput style={style.TextInput} onChangeText={this.changeText} onSubmitEditing={this.submitEdit.bind(this)}></TextInput>

                {/* 입력된 글씨를 보여주는 Text컴포넌트 */}
                <Text style={style.plaintText}>{this.state.text}</Text>

                {/* 버튼을 눌렀을 때 Text가 입력된 값을 변경되도록 */}
                <View style={{marginTop:16,}}>
                    <Button title="완료" onPress={this.clickBtn}></Button>
                </View>

                {/* 여려줄 입력 */}
                {/* true라는 boolean값을 JS문법이므로 */}
                <TextInput onChangeText={value=>this.inputText2=value} multiline={true} numberOfLines={4} style={style.TextInput2}></TextInput>
                <Button title="입력완료" onPress={()=>this.setState({msg:this.inputText2})}></Button>
                <Text style={style.plaintText}>{msg}</Text>
            </View>
        );
    }

    // 키보드의 완료 버튼 클리시 반응
    submitEdit=function () {
        // 익명함수 안에서 bind()로 전달된객체가 이함수안에서 this가 됨
        this.setState({text:this.inputText});
    }

    // 버튼 클릭시 함수
    clickBtn=()=>{
        // 입력값을 저장하고 있는 변수 this.inputText의 값을
        // Text컴포넌트가 보여주고 있는 state변수 text에 대임
        this.setState({text:this.inputText});
    }

    // TextInput의 onChangeText속성에 지정한 콜백함수
    // 이 함수는 TextInput의 글씨가 변경될때마다 발도하면서
    // 매개변수로 변경된 글씨를 전달함
    changeText=(value)=>{
        // 파라미터 : TextInput에 써져있는 글씨문자열
        // this.setState({text:""});
        // Alert.alert('changed Text')
        this.inputText=value;
    };
}

// 스타일 객체
const style= StyleSheet.create({
    root:{
        flex:1,
        padding:16,
    },
    TextInput:{
        borderWidth:2,
        backgroundColor:'white',
        borderColor:'green',
        borderRadius:8,
        paddingLeft:16,
        paddingRight:16,
        height:40,
    },
    plaintText:{
        marginTop:16,
        fontWeight:'bold',
        paddingLeft:10,
        paddingRight:10,
    },
    TextInput2:{
        marginTop:16,
        borderWidth:2,
        borderColor:'blue',
        borderRadius:8,
        padding:16,

        // TextInput이 일정 사이즈 이상 되지 않도록.. 내용이 더 길어지면 자동 스크롤
        maxHeight:150,
    }
});