import * as React from "react";
import { StyleSheet, View, Image } from "react-native";
import Spinner from "react-native-loading-spinner-overlay";
import { WebView } from "react-native-webview";

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
    };
  }

  showSpinner() {
    console.log("Show Spinner");
    this.setState({
      loading: true,
    });
  }

  hideSpinner() {
    console.log("Hide Spinner");
    this.setState({
      loading: false,
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Spinner
          customIndicator={
            <Image
              style={{ width: 100, height: 100 }}
              source={require("../assets/images/icon.png")}
            />
          }
          animation={'fade'}
          overlayColor={"rgba(255, 255, 255, .8)"}
          visible={this.state.loading}
          textContent={"Cargando..."}
          textStyle={styles.spinnerTextStyle}
        />
        <WebView
          source={{ uri: "http://desarrollo.pollosreal.com/" }}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          onLoadStart={() => this.showSpinner()}
          onLoad={() => this.hideSpinner()}
        ></WebView>
      </View>
    );
  }
}

HomeScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  spinnerTextStyle: {
    color: '#000',
  },
});
