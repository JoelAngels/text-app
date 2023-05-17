import { StyleSheet, Image } from "react-native";

import EditScreenInfo from "../../components/EditScreenInfo";
import { Text, View } from "../../components/Themed";
import Tweet from "../../components/Tweet";
import tweets from "../../assets/data/tweets";

const tweet = tweets[0];

export default function TabOneScreen() {
  return (
    <View style={styles.page}>
      <Tweet />
      <Tweet />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "white",
  },
});
