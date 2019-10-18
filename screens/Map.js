import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Polyline } from 'react-native-maps';
import mapStyle from './MapStyle';

export default class Map extends React.Component {
  constructor() {
    super();
    this.state = {
      mapRegion: {
        latitude: 41.8827,
        longitude: -87.61939,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
      }
    };
  }
  handleMapRegionChange(mapRegion) {
    this.setState({ mapRegion });
  }

  render() {
    return (
      <View>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.mapContainer}
          region={this.state.mapRegion}
          onRegionChange={() => this.handleMapRegionChange.bind(this)}
          showsUserLocation={true}
          customMapStyle={mapStyle}
        >
          <MapView.Marker
            coordinate={{
              latitude: 38.92531,
              longitude: -77.04317
            }}
            title="National Zoological Park"
            description="3 pandas"
            pinColor="rgb(64, 191, 128)"
          >
            <Image
              source={require('../icon.png')}
              style={{ width: 40, height: 40 }}
            />
          </MapView.Marker>
          <MapView.Marker
            coordinate={{
              latitude: 35.15,
              longitude: -89.9943
            }}
            title="Memphis Zoo"
            description="2 pandas"
            pinColor="rgb(64, 191, 128)"
          >
            <Image
              source={require('../icon.png')}
              style={{ width: 40, height: 40 }}
            />
          </MapView.Marker>
          <MapView.Marker
            coordinate={{
              latitude: 33.72615,
              longitude: -84.36846
            }}
            title="Zoo Atlanta"
            description="2 pandas"
            pinColor="rgb(64, 191, 128)"
          >
            <Image
              source={require('../icon.png')}
              style={{ width: 40, height: 40 }}
            />
          </MapView.Marker>
          <MapView.Polyline
            geodesic={true}
            strokeColor="rgb(45, 134, 89)"
            strokeWidth={5}
            coordinates={[
              { latitude: 41.895268, longitude: -87.639034 },
              { latitude: 38.92531, longitude: -77.04317 }
            ]}
          />
          <MapView.Polyline
            geodesic={true}
            strokeColor="rgb(45, 134, 89)"
            strokeWidth={5}
            coordinates={[
              { latitude: 41.895268, longitude: -87.639034 },
              { latitude: 35.15, longitude: -89.9943 }
            ]}
          />
          <MapView.Polyline
            geodesic={true}
            strokeColor="rgb(45, 134, 89)"
            strokeWidth={5}
            coordinates={[
              { latitude: 41.895268, longitude: -87.639034 },
              { latitude: 33.72615, longitude: -84.36846 }
            ]}
          />
        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(218, 236, 231, 1)'
  },
  contentContainer: {
    paddingTop: 30
  },
  mapContainer: {
    alignSelf: 'stretch',
    height: 500
  },
  calloutView: {
    flexDirection: 'row',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 10,
    width: '40%',
    marginLeft: '30%',
    marginRight: '30%',
    marginTop: 20
  },
  calloutSearch: {
    borderColor: 'transparent',
    marginLeft: 10,
    width: '90%',
    marginRight: 10,
    height: 40,
    borderWidth: 0.0
  }
});
