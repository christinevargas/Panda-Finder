import React from 'react';
import { Text } from 'react-native';
import { Card, Button, Icon } from 'react-native-elements';
import { Linking } from 'expo';

export default function CardComponent2() {
  return (
    <Card
      containerStyle={{
        borderRadius: 4,
        backgroundColor: 'rgb(121, 210, 166)',
        height: 375
      }}
      title="Save the PANDAS! ...with Panda Pop!"
      image={{
        uri:
          'https://gamehelp.guru/wp-content/uploads/2016/06/Panda-Pop-Featured.jpg'
      }}
      imageStyle={{ height: 200 }}
    >
      <Text style={{ marginBottom: 10, textAlign: 'center' }}>
        Rating: 4.6 - 450,663 reviews - Free - iOS - Game Save the baby pandas
        from BAAAAD BABOON!
      </Text>
      <Button
        icon={<Icon name="code" color="#ffffff" />}
        buttonStyle={{
          borderRadius: 4,
          marginLeft: 0,
          marginRight: 0,
          marginBottom: 0
        }}
        title="PLAY NOW"
        onPress={() => Linking.openURL('https://www.jamcity.com/panda-pop/')}
      />
    </Card>
  );
}
