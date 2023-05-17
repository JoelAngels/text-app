import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import React from "react";

import tweets from "../assets/data/tweets";

const tweet = tweets[0];
const Tweet = () => {
  return (
    <View style={styles.container}>
      <Image src={tweet.user.image} style={styles.userImage} />
      <View style={styles.mainContainer}>
        <Text>{tweet.user.name}</Text>
        <Text>{tweet.content}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: "lightgrey",
  },

  userImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },

  mainContainer: {
    marginLeft: 10,
    flex: 1,
  },

  name: {
    fontWeight: "600",
  },

  content: {
    lineHeight: 20,
    marginTop: 5,
  },
});
export default Tweet;
