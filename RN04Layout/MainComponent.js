import React, { Component } from "react";
import { View } from "react-native";

export default class MainComponent extends Component{
    render(){
        return(
            // 여러개의 뷰를 배치하려면 가장 큰 뷰가 필요함. return은 1개만 가능함.
            // 기본 flex스타일 이며 기본적으로 flex-direaction은 column(세로) 방향
            // 크기값의 숫자의 기본단위 : dp, [숫자, %] 또는 flex를 통해서 지정가능
            // <View>
            //     <View style={{width:50,height:50,backgroundColor:'red'}}></View>
            //     <View style={{width:100,height:100, backgroundColor:'green'}}></View>
            //     <View style={{width:'70%',height:150,backgroundColor:'blue'}}></View>
            // </View>

            // 전체 사이즈 350정도 높이값, 뷰 3개의 크기 배분을 1:2::4로 배치하기
            // <View style={{flex:1, flexDirection:'row'}}>
            //     <View style={{flex:1, backgroundColor:'red'}}></View>
            //     <View style={{flex:2, backgroundColor:'green'}}></View>
            //     <View style={{flex:4,backgroundColor:'blue'}}></View>
            // </View>

            // justifyContent : 배치 방향과 같은 축의 정렬
            // alignItems 속성 : 배치 방향과 교차축의 정렬
            // <View style={{flex:1, flexDirection:'column', justifyContent:'space-evenly',alignItems:'center'}}>

            //     {/* 자식뷰들의 너비와 높이지정 */}
            //     {/* 새로배치일때 flex:1은 높이가 됨 */}
            //     <View style={{width:50,height:50, backgroundColor:'red'}}></View>
            //     <View style={{width:100,height:100, backgroundColor:'green'}}></View>
            //     <View style={{width:200,height:200,backgroundColor:'blue'}}></View>
            // </View>

            // <View style={{flex:1, flexDirection:'column'}}>
            //     <View style={{height:50, backgroundColor:'red'}}></View>

            //     {/* 남은 공간을 1:2로 배치 */}
            //     <View style={{flex:1, backgroundColor:'green'}}></View>
            //     <View style={{flex:2, backgroundColor:'blue'}}></View>
            // </View>

            // 중첩구조
            <View style={{flex:1, flexDirection:'column'}}>
                {/* 크게 세로 2분할 1:2 */}
                <View style={{flex:1, flexDirection:'row'}}>
                    {/* 좌우분할 1:2 */}
                    <View style={{flex:1, backgroundColor:'red'}}></View>
                    <View style={{flex:2, backgroundColor:'yellow'}}></View>
                </View>

                <View style={{flex:2, backgroundColor:'green'}}></View>
            </View>
        );
    }
}