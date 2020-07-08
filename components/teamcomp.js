import React from "react";
import { StyleSheet, Text, View, Dimensions, FlatList } from "react-native";
import ChampionAvatar from "./championAvatar";
import CompTrait from "./compTrait";
const Comp = {
  name: "Sorcerers",
  champs: [
    {
      name: "TwistedFate",
    },
    {
      name: "Zoe",
    },
    {
      name: "Ahri",
    },
    {
      name: "Annie",
    },
    {
      name: "Syndra",
    },
    {
      name: "Riven",
    },
    {
      name: "Viktor",
    },
    {
      name: "Janna",
    },
  ],
  traits: [
    {
      name: "battlecast",
      count: 8,
    },
    {
      name: "vanguard",
      count: 4,
    },
    {
      name: "starguardian",
      count: 2,
    },
  ],
};

export default function TeamComp({ tier, name, champions }) {
  return (
    <View
      style={[
        styles.container,
        tier === "S"
          ? { backgroundColor: "#e74c3c" }
          : tier === "A"
          ? { backgroundColor: "#f1c40f" }
          : { backgroundColor: "#2ecc71" },
      ]}
    >
      <Text
        style={[
          styles.name,
          tier === "S"
            ? { backgroundColor: "#e74c3c" }
            : tier === "A"
            ? { backgroundColor: "#f1c40f" }
            : { backgroundColor: "#2ecc71" },
        ]}
      >
        {Comp.name}
      </Text>
      <View>
        <FlatList
          data={Comp.champs}
          numColumns={5}
          renderItem={({ item }) => <ChampionAvatar name={item.name} />}
          keyExtractor={(index) => index}
        />

        <FlatList
          data={Comp.traits}
          horizontal={true}
          renderItem={({ item }) => (
            <CompTrait trait={item.name} count={item.count} />
          )}
          keyExtractor={(index) => index}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width * 0.75,
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderRadius: 4,
    marginVertical: 10,
    elevation: 5,
  },
  name: {
    width: 200,
    fontSize: 18,
    fontFamily: "RobotoBold",
    color: "#fff",
    textAlign: "center",
    marginTop: "-8%",
    marginLeft: (Dimensions.get("window").width * 0.75 - 200) / 2,
    borderTopLeftRadius: 55,
    borderBottomRightRadius: 55,
  },
});
