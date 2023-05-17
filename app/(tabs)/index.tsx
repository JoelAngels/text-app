import { StyleSheet, Image } from "react-native";

import EditScreenInfo from "../../components/EditScreenInfo";
import { Text, View } from "../../components/Themed";
import Tweet from "../../components/Tweet";

export default function TabOneScreen() {
  return (
    <View>
      <Tweet />
      <Tweet />
    </View>
  );
}
