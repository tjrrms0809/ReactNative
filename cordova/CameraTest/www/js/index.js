// 문서가 로딩이 되어야 html요소들을 제어할 수 있으므로
$(document).ready( function(){

    //html문서의 로드와는 별개로 디바이스의 준비콜백처리 필요(onResume같은 역할)
    document.addEventListener('deviceready', onDeviceReady, true);

    //카메라 실행 버튼 click이벤트
    $('#btn_takePic').click(function(){
        takePic();
    });

    //갤러리앱 실행 버튼 click이벤트
    $('#btn_getPic').click(function(){
        getPic();        
    });

} );

//디바이스가 준비되면 자동으로 실행되는 콜백함수
function onDeviceReady(){
    //alert(); //웹용 다이얼로그

    //디바이스 고유의 다이얼로그 사용
    //디바이스 고유의 기능을 사용하고자 한다면 해당 기능 package(library)를 npm에서 다운받아 plug-in해야함
    navigator.notification.alert('Device Ready', null, 'Alert Dialog', 'ok');
}

// 사진 or 갤러리 사용모두 하나의 plugin 사용
//  cordova-plugin-camera

//사진찍기
function takePic(){

    navigator.camera.getPicture( 
        function( imgData ){//사진 캡쳐 성공했을 때
            var img= document.getElementById('img_pic');
            img.src= imgData;

            $('h3').replaceWith( $('<h3>Taken Pickture</h3>') );
        },
        function( message ){//사진 캡쳐 실패했을 때
            alert( message );
        },
        {//옵션
            quality:20,
            destinationType: Camera.DestinationType.FILE_URI,
            sourceType:Camera.PictureSourceType.CAMERA,
            saveToPhotoAlbum: true
        } );

}

//갤러리 앱
function getPic(){

    navigator.camera.getPicture(
        function( imgData ){//사진 캡쳐 성공했을 때
            var img= document.getElementById('img_pic');
            img.src= imgData;

            $('h3').replaceWith( $('<h3>Taken Pickture</h3>') );
        },
        function( message ){//사진 캡쳐 실패했을 때
            alert( message );
        },
        {//옵션
            quality:20,
            destinationType: Camera.DestinationType.FILE_URI,
            sourceType:Camera.PictureSourceType.PHOTOLIBRARY
        } );
}