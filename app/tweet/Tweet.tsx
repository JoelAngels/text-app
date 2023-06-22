import { Text, View } from "react-native";
import React, { Component } from "react";
import tweets from "../../assets/data/tweets";
import Tweet from "../../components/Tweet";
//navigate to the tweet whenever we press a tweet
export default function TweetScreen() {
  return (
    <View>
      <Tweet tweet={tweets[0]} />
    </View>
  );
}
