import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  Pressable,
} from "react-native";
import { Link } from "expo-router";

const user = {
  id: "u1",
  username: "VadimNotJustDev",
  name: "Vadim",
  image:
    "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.png",
};

export default function Newtweet() {
  const onTweetPress = () => {
    console.warn("Posting the tweet");
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Link href="../" style={{ fontSize: 18 }}>
          <Text>Cancel</Text>
        </Link>

        <Pressable onPress={onTweetPress} style={styles.button}>
          <Text style={styles.buttonText}>Tweet</Text>
        </Pressable>
      </View>

      <View style={styles.inputContainer}>
        <Image src={user.image} style={styles.image} />
        <TextInput
          placeholder="What's happening "
          multiline
          numberOfLines={5}
          //take all the space but not more than you have
          style={{ flex: 1 }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "white",
    flex: 1,
  },

  buttonContainer: {
    flexDirection: "row",
    marginVertical: 10,
    justifyContent: "space-between",
    alignItems: "center",
  },

  inputContainer: {
    flexDirection: "row",
  },

  image: {
    width: 50,
    aspectRatio: 1,
    borderRadius: 50,
    marginRight: 10,
  },

  button: {
    backgroundColor: "#1C9BF0",
    padding: 10,
    paddingHorizontal: 20,
    borderRadius: 50,
  },

  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
});
