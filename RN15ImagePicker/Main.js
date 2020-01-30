import React, {Component} from 'react';
import {View, Text, Image, Button} from 'react-native';

// ImagePicker 라이브러리 npm install..
import ImagePicker from 'react-native-image-picker';

export default class Main extends Component{

    constructor(){
        super();
        this.state={
            img: { uri : "https://cdn.pixabay.com/photo/2020/01/21/21/06/river-4783973__480.jpg"}
        }
    }

    render(){
        return(
            <View style={ {flex:1, padding:16} }>
                <Button title="show Picker" onPress={ this.showPicker }></Button>
                <Text style={ {margin:8,}}>{this.state.img.uri}이미지경로</Text> 
                <Image source={ this.state.img } style={ {marginTop:8, flex:1} }></Image>
            </View>
        );
    }

    showPicker=()=>{
        // ImagePicker를 잉요해서 카메라 or 사진선택앱을 선택하여 이미지 가져오기
        // 카메라를 다루려면 Camera, External Storage 퍼미션이 필요함
        // Android의 경우 퍼미션을 주려면.. AndroidManifext.xml에서 

        // PickerDialog의 옵션객체
        const options= {
            title: 'Select Picker', // 다이얼로그의 제목
            takePhotoButtonTitle: '카메라',
            chooseFromLibraryButtonTitle: "이미지선택",
            cancelButtonTitle: '취소',
            customButtons: [
                {name: 'fb' , title: '페이스북 이미지 선택'},
                {name: 'kb' , title: '카카오 이미지 선택'},
            ],
        };

        // 위에서 만든 옵션을 기준으로 다이얼로그 보이기
        ImagePicker.showImagePicker( options, ()=>{alert('aa');} );


    }

}