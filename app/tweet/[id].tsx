import { Text, View } from "react-native";
import React, { Component } from "react";
import tweets from "../../assets/data/tweets";
import Tweet from "../../components/Tweet";
import { useSearchParams } from "expo-router";
//navigate to the tweet whenever we press a tweet
export default function TweetScreen() {
  const { id } = useSearchParams();

  console.warn(id);

  // Query based on the id
  const tweet = tweets.find((t) => t.id === id);

  if (!tweet) {
    return <Text>Tweet {id} not found</Text>;
  }
  return (
    <View>
      {/* give me the first tweet only */}
      <Tweet tweet={tweet} />
    </View>
  );
}
