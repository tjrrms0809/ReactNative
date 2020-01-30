/**
 * @format
 */

//  자바의 import와 같은 역할
import {AppRegistry} from 'react-native';
// import App from './App';
import MyApp from './MyApp';
import {name as appName} from './app.json';

// 처음 실행되는 Component(Activity, View와 같은 역할)를 지정.
//첫번째 파라미터 : 프로젝트 이름
//두버째 파라미터 : 처음 실행할 컴포넌트를 리턴해주는 콜백함수
// AppRegistry.registerComponent(appName, () => App);
AppRegistry.registerComponent(appName, () => MyApp);
