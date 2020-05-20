import * as React from "react";
import { StyleSheet, View, Button } from "react-native";
import MapView, { Polyline, Marker } from "react-native-maps";

export default class LinkScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      mapa: "standard",
      region: {
        latitude: 13.7109447,
        longitude: -89.2050614,
        latitudeDelta: 0.1,
      longitudeDelta: 0.1,
      },
    };
  }

  componentDidMount() {
    this.getLocation(),
      this.setState({
        isLoading: false,
      });
  }

  //localizacion real
  getLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (position) =>
        this.setState({
          region: {
            ...this.state.region,
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          },
        }),
      (error) => alert(JSON.stringify(error)),
      {
        enableHighAccuracy: true,
        timeout: 20000,
        maximumAge: 1000,
      }
    );
  };

  getMapaStandar = () => {
    this.setState({
      mapa: "standard",
    })
  }

  getMapaSatellite = () => {
    this.setState({
      mapa: "satellite",
    })
  }

  getMapaHibrid = () => {
    this.setState({
      mapa: "hybrid",
    })
  }

  render() {
    const data = [
      {
        latitude: 13.7109447,
        longitude: -89.2050614,
        title: "Pollos Real",
        description: "La Fuente",
      },
      {
        latitude: 13.702968,
        longitude: -89.2272297,
        title: "Pollos Real",
        description: "Escalon",
      },
      {
        latitude: 13.7020955,
        longitude: -89.2139854,
        title: "Pollos Real",
        description: "Flor Blanca",
      },
      {
        latitude: 13.722208,
        longitude: -89.222284,
        title: "Pollos Real",
        description: "Miralvalle",
      },
    ];

    console.log(data);

    return (
      <View style={styles.container}>
        <MapView
          initialRegion={this.state.region}
          mapType={this.state.mapa}
          showsUserLocation={true}
          followsUserLocation={true}
          style={{ flex: 1 }}
        >
          {this.state.isLoading
            ? null
            : data.map((data, index) => {
                const coords = {
                  latitude: data.latitude,
                  longitude: data.longitude,
                };
                return (
                  <Marker
                    key={index}
                    coordinate={coords}
                    title={data.title}
                    description={data.description}
                  />
                );
              })}
        </MapView>
        <View style={styles.mapas}>
          <Button 
          title="Mapa estandar" onPress={() => this.getMapaStandar()}></Button>
          <Button title="Mapa Satelital" onPress={() => this.getMapaSatellite()}></Button>
          <Button title="Mapa Hibrido" onPress={() => this.getMapaHibrid()}></Button>
        </View>
      </View> 
    );
  }
}

LinkScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  mapas: {
    position: "absolute",
    justifyContent: "center",
    flexDirection: "row",
    height: "8%",
    width: "100%",
    textAlign: "center",
  },
});
