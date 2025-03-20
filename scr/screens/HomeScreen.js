import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  const [roomId, setRoomId] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Enter Room ID"
        style={styles.input}
        value={roomId}
        onChangeText={setRoomId}
      />
      <Button title="Join Room" onPress={() => navigation.navigate("Room", { roomId })} />
      <Button title="Create Room" onPress={() => navigation.navigate("Room", { roomId: Math.random().toString(36).substr(2, 5) })} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "black" },
  input: { width: 200, padding: 10, backgroundColor: "white", marginBottom: 10 }
});
