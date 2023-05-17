import { StyleSheet, Image } from "react-native";

import EditScreenInfo from "../../components/EditScreenInfo";
import { Text, View } from "../../components/Themed";
import tweets from "../../assets/data/tweets";

const tweet = tweets[0];

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Image src={tweet.user.image} style={styles.userImage} />
      <View style={styles.mainContainer}>
        <Text>{tweet.user.name}</Text>
        <Text>{tweet.content}</Text>
      </View>
    </View>
  );
}

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
