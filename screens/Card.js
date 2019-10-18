import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { Card, Button, Icon } from 'react-native-elements';
import { Linking } from 'expo';

export default function CardComponent() {
  return (
    <>
      <Text style={styles.sponsored}>Sponsored</Text>
      <Card
        containerStyle={{
          borderRadius: 4,
          backgroundColor: 'rgb(121, 210, 166)',
          height: 375
        }}
        title="Hey there!"
        image={{
          uri:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRDldxlNIML9hhMRg26-AFvw4mPiyex8B8kIhrpDIC27qf9kPPu'
        }}
        imageStyle={{ height: 200 }}
      >
        <Text style={{ marginBottom: 10, textAlign: 'center' }}>
          Do you love pandas bear-y much? We do too. Find out how to become a
          Panda Protector through the Pennies for Pandas program!
        </Text>
        <Button
          icon={<Icon name="code" color="#ffffff" />}
          buttonStyle={{
            borderRadius: 4,
            marginLeft: 0,
            marginRight: 0,
            marginBottom: 0
          }}
          title="Learn More"
          onPress={() =>
            Linking.openURL(
              'https://www.pandasinternational.org/pennies-4-pandas/'
            )
          }
        />
      </Card>
    </>
  );
}

const styles = StyleSheet.create({
  sponsored: {
    fontSize: 24,
    color: 'rgba(45, 134, 108, 0.5)',
    marginTop: 15,
    marginBottom: 15,
    textAlign: 'center'
  }
});
