import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ListItem } from 'react-native-elements';
import { memphis, smithsonian, atlanta } from './ZooIcons';

export default function PandaList() {
  const list = [
    {
      title: 'You are 484 miles away from Le Le and Ya Ya at the Memphis Zoo!',
      icon: 'my-location'
    },
    {
      title: 'You are 592 miles away from Lun Lun at Zoo Atlanta!',
      icon: 'my-location'
    },
    {
      title:
        'You are 594 miles away from Tian Tian, Mei Xiang and Bei Bei and the Smithsonian National Zoo!',
      icon: 'my-location'
    }
  ];
  return (
    <View>
      <Text style={styles.panda}>How far away are the pandas?!</Text>
      {list.map((item, i) => (
        <ListItem
          key={i}
          title={item.title}
          leftIcon={{ name: item.icon }}
          bottomDivider
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  panda: {
    fontSize: 24,
    color: 'rgba(45, 134, 108, 0.5)',
    marginTop: 15,
    marginBottom: 15,
    textAlign: 'center'
  }
});
