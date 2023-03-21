import { View, Text, StyleSheet } from "react-native";
import React, { useContext } from "react";
import { Context } from "../context/BlogContext";

const ShowScreen = ({ route }) => {
  // const { id } = route.params;

  const { state } = useContext(Context);

  const blogPost = state.find((blogPost) => blogPost.id === route.params.id);

  // console.log(id);

  return (
    <View>
      <Text>{blogPost.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});
export default ShowScreen;
