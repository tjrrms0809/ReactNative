import React, {Component} from 'react';
import {View, Text, Button, StyleSheet, ScrollView} from 'react-native';

export default class Main extends Component{

    constructor(){
        super();
        this.state= {
            text: "",
            // movies 배열 저장 변수
            movies: [],
        };
    }

    render(){
        return (
            <View style={ {flex:1, padding:16} }>
                <Button title="fetch data from network" onPress={ this.fetchData2 }></Button>
                <ScrollView style={ styles.scroll }>
                    <Text style={ styles.text }> {this.state.text} </Text>
                    {/* movies 배열 데이터 보여주기 : ListView 작업*/}
                    {/* 배열의 map()메소드 이용해서  List형태 만들기 */}
                    {
                        this.state.movies.map( (item, index)=>{
                            return <View key={index} style={ {flexDirection:'row'} }>
                                        <Text> { item.id } </Text>
                                        <Text> { item.title } </Text>
                                        <Text> { item.releaseYear } </Text>
                                   </View>
                        } )
                    }
                </ScrollView>
            </View>
        );
    }

    //network작업을 하는 메소드
    fetchData=()=>{
        //1. Javascript에서 Http통신을 담당하는 XMLHttpRequest객체 생성
        let request= new XMLHttpRequest();

        //서버의 응답(response)을 받는 콜백메소드 지정 [ 반드시 send()보다 먼저 만들어져 있어야 함]
        //서버로부터 응답을 받으면 자동으로 실행되는 메소드
        request.onreadystatechange= ()=>{
            //서버의 응답이 올바른지 검사
            if( request.status==200 && request.readyState==4 ){
                //응답된 데이터 text컴포넌트에 보이기 위해 
                //Text컴포넌트가 보여주는 this.state.text변수값을 변경
                this.setState( {text: request.responseText } );
            }
        };

        //서버주소 연결
        request.open('GET', 'http://tjrrms0809.dothome.co.kr/index.js');
        request.send();//요청보내기(request)        
    }

    //위 XMLHttpRequest 를 좀더 편하기 사용하기 위한 라이브러러
    // Fetch 라이브러러 : Volley같은 녀석, ReactNative에 기본 내장되어 있음
    fetchData2=()=>{
        //fetch()함수 사용- jquery ajax()와 비슷
        //프로미스[promiss : 약속] 문법- 비동기처리에 많이 사용
        // .then()메소드 : 비동기 처리가 끝나면 실행되는 메소드

        // fetch('http://tjrrms0809.dothome.co.kr/test.txt')
        // .then(response=>response.text())
        // .then(responseText=>this.setState({text: responseText}))
        // .catch( (error)=>{ alert(error); }  );

        //json데이터를 받는 것도 가능 [연습으로 facebook의 연습 json데이터]
        // fetch('https://facebook.github.io/react-native/movies.json')
        // .then( response=> response.json() )
        // .then( responseJson=>{
        //     //responseJson : Json객체임                 
        //     let title= responseJson.title;
        //     this.setState({ text: title });

        //     this.setState({ movies: responseJson.movies} );
        // });


        //서버에 데이터를 보내고 받는 작업 [ GET, POST 방식]
        // let name="sam";
        // let msg= "Hello world";
        // fetch(`http://tjrrms0809.dothome.co.kr/php/getMethod.php?name=${name}&msg=${msg}`)
        // .then(response=>response.text())
        // .then(responseText=> this.setState({text: responseText}))
        // .catch(error=>alert(error));

        let name= "robin";
        let msg= "Hello React native";
        fetch('http://tjrrms0809.dothome.co.kr/php/postMethod.php', {
            method:'POST',
            headers:{ "Content-Type" : "application/x-www-form-urlencoded"},
            body: "name="+name+"&msg="+msg,
        }).then(response=> response.text() )
        .then(responseText=> this.setState({text:responseText}))
        .catch(error=>alert(error));

        //서버와 데이터를 주고받을 때 일반 문자열보다는 json문자열을 선호함
        // 보낼데이터가 객체로 되어 있는 경우가 더 많을 것임
        // let dataObj= {name:"son", age:20, address:"seoul"};

        // fetch('http://mrhi2018.dothome.co.kr/php/jsonRequest.php', {
        //     method: "POST",
        //     headers: {"Content-Type":"application/json"},//보낼 데이터가 json임을 알려주는 헤더정보
        //     body: JSON.stringify(dataObj), //객체->JSON 문자열로 변환
        // }).then(response=>response.json())
        // .then(responseJson=>{
        //     let name= responseJson.name;
        //     let age= responseJson.age;
        //     let address= responseJson.address;

        //     this.setState({text: name+", "+age+", "+address  });
        // });


    }

}

const styles= StyleSheet.create({
    scroll:{ marginTop:16, backgroundColor:'gray'},
    text:{ padding:8, color:'white',},
});