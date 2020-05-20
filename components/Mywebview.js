import * as React from 'react';
import { WebView } from 'react-native-webview';

export default class MyWebview extends React.Component{
    render(){
        return (
            <WebView
            source={{ uri: 'http://desarrollo.pollosreal.com/' }}>
            </WebView>
        )
    }
}