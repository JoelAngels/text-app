import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import React from "react";

import { Entypo, EvilIcons } from "@expo/vector-icons";

import { TweetType } from "../types";

type TweetProps = {
  tweet: TweetType;
};

const Tweet = ({ tweet }: TweetProps) => {
  return (
    <View style={styles.container}>
      <Image src={tweet.user.image} style={styles.userImage} />

      <View style={styles.mainContainer}>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.name}>{tweet.user.name}</Text>
          <Text style={styles.username}>{tweet.user.username} .2h</Text>
          <Entypo
            name="dots-three-horizontal"
            size={16}
            color="gray"
            style={{ marginLeft: "auto" }}
          />
        </View>

        <Text style={styles.content}>{tweet.content}</Text>
        {/* Rendering an item on a screen based on condition */}
        {tweet.image && <Image src={tweet.image} style={styles.image} />}

        <View style={styles.footer}>
          {/* Comment IconButton */}
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            {/* Icon */}
            <EvilIcons name="comment" size={22} color="gray" />
            {/* Number */}
            <Text style={{ fontSize: 12, color: "gray" }}>123</Text>
          </View>
        </View>
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

  username: {
    color: "gray",
    marginLeft: 5,
  },

  content: {
    lineHeight: 20,
    marginTop: 5,
  },

  image: {
    width: "100%",
    // dinamic height
    aspectRatio: 16 / 9,
    marginVertical: 10,
    borderRadius: 15,
  },

  footer: {
    flexDirection: "row",
    marginVertical: 5,
  },
});
export default Tweet;
