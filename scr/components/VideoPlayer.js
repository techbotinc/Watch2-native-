import React from 'react';
import { View } from 'react-native';
import YouTubePlayer from 'react-native-youtube-iframe';

export default function VideoPlayer({ videoId }) {
  return (
    <View style={{ height: 200, backgroundColor: 'black' }}>
      <YouTubePlayer height={200} videoId={videoId} />
    </View>
  );
}
