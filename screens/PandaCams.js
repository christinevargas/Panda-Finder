import React from 'react';
import Video from 'react-native-video';
import { StyleSheet } from 'react-native';

export default class VideoCams extends React.Component {
  render() {
    return (
      <Video
        source={{ uri: 'https://www.youtube.com/watch?v=YgFFo1-X8zY' }}
        ref={ref => {
          this.player = ref;
        }} // Store reference
        onBuffer={this.onBuffer} // Callback when remote video is buffering
        onError={this.videoError} // Callback when video cannot be loaded
        style={styles.backgroundVideo}
      />
    );
  }
}

var styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  }
});
