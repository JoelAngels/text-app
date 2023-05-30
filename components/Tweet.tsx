import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import React from "react";

import { TweetType } from "../types";

type TweetProps = {
  tweet: TweetType;
};

const Tweet = ({ tweet }: TweetProps) => {
  return (
    <View style={styles.container}>
      <Image src={tweet.user.image} style={styles.userImage} />

      <View style={styles.mainContainer}>
        <Text style={styles.name}>{tweet.user.name}</Text>
        <Text style={styles.content}>{tweet.content}</Text>
        {/* Rendering an item on a screen based on condition */}
        {tweet.image && <Image src={tweet.image} style={styles.image} />}
      </View>
    </View>
  );
};
3178;
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: "lightgrey",
    backgroundColor: "white",
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

  image: {
    width: "100%",
    // dinamic height
    aspectRatio: 16 / 9,
    marginTop: 10,
    borderRadius: 15,
  },
});
export default Tweet;
