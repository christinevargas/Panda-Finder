import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  Image,
  TouchableHighlight,
  TouchableOpacity,
  Alert
} from 'react-native';
import { Linking } from 'expo';
import { memphis, smithsonian, atlanta, gif } from './ZooIcons';

export default function LinksScreen() {
  const linkClicked = url => {
    Alert.alert(
      'More pandamonium ahead!',
      'You will be redirected to a new site',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: "Let's Go!",
          onPress: () => Linking.openURL(url)
        }
      ]
    );
  };
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titleText}>Pandas in the U.S.</Text>
      <TouchableHighlight>
        <>
          <Text
            style={styles.links}
            onPress={() => linkClicked('https://www.memphiszoo.org/')}
          >
            Memphis Zoo
          </Text>
          <TouchableOpacity
            onPress={() => linkClicked('https://www.memphiszoo.org/')}
          >
            <Image style={styles.images} source={memphis} />
          </TouchableOpacity>
          <Text
            style={styles.links}
            onPress={() => linkClicked('https://nationalzoo.si.edu/')}
          >
            Smithsonian National Zoo
          </Text>

          <TouchableOpacity
            onPress={() => linkClicked('https://www.memphiszoo.org/')}
          >
            <Image style={styles.images} source={smithsonian} />
          </TouchableOpacity>

          <Text
            style={styles.links}
            onPress={() => linkClicked('https://zooatlanta.org/')}
          >
            Zoo Atlanta
          </Text>

          <TouchableOpacity
            onPress={() => linkClicked('https://www.memphiszoo.org/')}
          >
            <Image style={styles.images} source={atlanta} />
          </TouchableOpacity>
        </>
      </TouchableHighlight>

      <Text style={styles.titleText}>Panda Cams</Text>
      <TouchableHighlight>
        <>
          <Text
            style={styles.pandaCam}
            onPress={() => linkClicked('https://www.memphiszoo.org/panda-cam')}
          >
            Memphis Zoo
          </Text>
          <Text
            style={styles.pandaCam}
            onPress={() =>
              linkClicked('https://nationalzoo.si.edu/webcams/panda-cam')
            }
          >
            Smithsonian National Zoo
          </Text>
          <Text
            style={styles.pandaCam}
            onPress={() => linkClicked('https://zooatlanta.org/panda-cam/')}
          >
            Zoo Atlanta
          </Text>
        </>
      </TouchableHighlight>
      <Image style={styles.gif} source={gif} />
    </ScrollView>
  );
}

LinksScreen.navigationOptions = {
  title: 'Links'
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: 'rgba(218, 236, 231, 1)'
  },
  titleText: {
    fontSize: 40,
    textAlign: 'center',
    backgroundColor: 'rgb(179, 229, 204)'
  },
  links: {
    color: 'rgba(45, 134, 108, 0.5)',
    fontSize: 32,
    textAlign: 'center'
  },
  images: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginBottom: 20,
    alignSelf: 'center'
  },
  pandaCam: {
    color: 'rgba(45, 134, 108, 0.5)',
    fontSize: 32,
    textAlign: 'center',
    marginTop: 15
  },
  gif: {
    width: 300,
    height: 250,
    alignSelf: 'center',
    marginTop: 25
  }
});
