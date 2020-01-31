import React, {Component} from 'react';
import {View, Text, StyleSeet, StyleSheet} from 'react-native';

export default class MovieList extends Component{
    render(){
        return(
            <View style={style.root}>
                <Text>MovieList</Text>
            </View>
        )
    }
}

const style=StyleSheet.create({
    root:{flex:1, justifyContent:'center', alignItems:'center'},
});