import React, { useEffect, useState } from "react";
import { Button, Text, Image, View, StyleSheet } from "react-native";
import { Audio } from "expo-av";

export default function DetailScreen({ route, navigation }) {
  const { ringtone } = route.params;
  const [sound, setSound] = useState(null);

  async function playSound() {
    console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync(
      require("../../assets/ringtones/ringtone1.mp3")
    );
    setSound(sound);

    console.log("Playing Sound");
    await sound.playAsync();
  }
  React.useEffect(() => {
    return sound
      ? () => {
          console.log("Unloading Sound");
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <Text style={styles.itemTitle}>{ringtone.title}</Text>
        <Text style={styles.itemArtist}>{ringtone.artist}</Text>
      </View>

      <View style={styles.imageContainer}>
        <Image source={{ uri: ringtone.artwork }} style={styles.itemImage} />
        <View style={styles.buttonContainer}>
          <Button title="Play Sound" onPress={playSound} />
          <Button title="Go back" onPress={() => navigation.goBack()} />
        </View>
      </View>

      <View style={{ flex: 1 }}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#131b23",
    flex: 1,
    padding: 15,
    flexDirection: "column",
    justifyContent: "space-evenly",
  },
  imageContainer: {
    backgroundColor: "#373c43",
    borderRadius: 15,
    display: "flex",
    flexDirection: "column",
    flex: 4,
    justifyContent: "space-between",
    textAlign: "center",
    padding: 25,
  },
  itemImage: {
    flex: 4,
    borderRadius: 15,
  },
  buttonContainer: {
    top: 20,
    justifyContent: "space-around",
    display: "flex",
    flexDirection: "column",
    flex: 2,
  },
  itemTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  itemArtist: {
    color: "white",
    fontSize: 15,
    top: 20,
  },
});
