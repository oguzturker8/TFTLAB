import React, { useState } from "react";
import {
  StyleSheet,
  Image,
  View,
  Dimensions,
  TouchableHighlight,
} from "react-native";
import origins from "../../assets/origins/origins";
import Tooltip from "react-native-walkthrough-tooltip";
import OriginDetails from "./origindetails";

export default function ClassAvatar({ origin }) {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <View style={styles.container}>
      <Tooltip
        isVisible={isVisible}
        content={<OriginDetails origin={origin} />}
        placement="center"
        onClose={() => setIsVisible(false)}
        contentStyle={styles.tooltip}
        showChildInTooltip={false}
      >
        <TouchableHighlight onPress={() => setIsVisible(true)}>
          <Image style={styles.logo} source={origins[origin.name]} />
        </TouchableHighlight>
      </Tooltip>
    </View>
  );
}

const styles = StyleSheet.create({
  tooltip: {
    width: Dimensions.get("window").width * 0.8,
    height: "auto",
    backgroundColor: "#34495e",
  },
  container: {
    marginHorizontal: 5,
    marginTop: 5,
    elevation: 5,
    justifyContent: "center",
    alignItems: "center",
    width: (Dimensions.get("window").width * 0.75 - 60) / 5,
  },
  logo: {
    width: (Dimensions.get("window").width * 0.75 - 60) / 6,
    height: (Dimensions.get("window").width * 0.75 - 60) / 6,
  },
  title: {
    fontSize: 8,
    color: "#fff",
    fontFamily: "RobotoRegular",
    textAlign: "center",
  },
});