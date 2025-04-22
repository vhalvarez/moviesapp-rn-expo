import {
  View,
  Text,
  useWindowDimensions,
  Image,
  Pressable,
} from "react-native";
import React from "react";
import { router } from "expo-router";
import Feather from '@expo/vector-icons/Feather';

interface Props {
  poster: string;
  originalTitle: string;
  title: string;
}

const MovieHeader = ({ originalTitle, poster, title }: Props) => {
  const { height } = useWindowDimensions();

  return (
    <>
      <View
        style={{
          position: "absolute",
          zIndex: 99,
          elevation: 9,
          top: 40,
          left: 10,
        }}
      >
        <Pressable onPress={() => router.dismiss()}>
        <Feather name="arrow-left" size={35} color="white" />
        </Pressable>
      </View>

      <View
        style={{
          height: height * 0.7,
        }}
        className="shadow-xl shadow-black/20"
      >
        <View className="flex-1 rounded-b-[25px] overflow-hidden">
          <Image
            source={{ uri: poster }}
            resizeMode="cover"
            className="flex-1"
          />
        </View>
      </View>

      <View className="px-5 mt-5">
        <Text className="font-normal">{originalTitle}</Text>
        <Text className="font-semibold text-2xl">{title}</Text>
      </View>
    </>
  );
};

export default MovieHeader;
