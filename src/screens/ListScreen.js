import React from "react";
import {
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Text,
  Image,
  View,
  StyleSheet,
  StatusBar,
} from "react-native";
import ringtones from "../../ringtones.json";

export default function ListScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={ringtones.ringtones}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate("Detail", { ringtone: item })}
          >
            <View style={styles.counter}>
              <Text style={styles.counterNum}>{item.id}</Text>
            </View>
            <Image source={{ uri: item.artwork }} style={styles.itemImage} />
            <View style={{ left: 20 }}>
              <Text style={styles.itemTitle}>{item.title}</Text>
              <Text style={styles.itemArtist}>{item.artist}</Text>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
        style={styles.flatList}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: "#131b23",
  },
  flatList: {
    marginHorizontal: 15,
  },
  item: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#373c43",
    paddingLeft: 0,
    marginVertical: 1,
    height: 90,
  },
  counter: {
    width: 30,
    height: 30,
    backgroundColor: "#131b23",
    borderTopRightRadius: 13,
    borderBottomRightRadius: 13,
    justifyContent: "center",
  },
  counterNum: {
    color: "white",
    left: 10,
  },
  itemImage: {
    width: 60,
    height: 60,
    borderRadius: 13,
    left: 10,
    right: 20,
  },
  itemTitle: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  itemArtist: {
    top: 5,
    color: "white",
    fontSize: 14,
  },
});