import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

// 단순 Tab버튼 구조 스타일링만 하면 되므로
// 간단하게 stateless컴포넌트로 제작
const TabComponent= (props)=>{ //파라미터로 속성을 전달받음

    // 선택된 탭에 따라 생상이 변경되므로...
    let color= props.selected ? '#292929' : '#929292' ;

    // 선택된 탭에 따라 아래 경계선(Indicator역할)의 생상도 변경
    containerStyle.borderColor=color;

    return(
        <TouchableOpacity style={containerStyle} onPress={props.onPress}>
            {/* 전달받은 label값을 탭버튼 글씨 표시 */}
            <Text style={{color: color}}>{props.label}</Text>
        </TouchableOpacity>
    );

}

let containerStyle={
    flex:1, //탭이 놓여질때 다른 탭과 flex값을 같게하여 가로 사이즈가 균등하게 하기 위해
    borderBottomWidth:1,
    borderColor:'#929292',
    paddingBottom: 8,
    alignItems:'center',
    justifyContent:'center',
};

// 안에 내용을 바꿀수가 없음
// const style= StyleSheet.create({
//     container:{
//         flex:1, //탭이 놓여질때 다른 탭과 flex값을 같게하여 가로 사이즈가 균등하게 하기 위해
//         borderBottomWidth:1,
//         borderColor:'#929292',
//         paddingBottom: 8,
//         alignItems:'center',
//         justifyContent:'center',
//     }
// });

export default TabComponent;