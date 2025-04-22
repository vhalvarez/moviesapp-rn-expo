import { View, Text, useWindowDimensions } from "react-native";
import { useRef } from "react";
import { Movie } from "@/infrastructure/interfaces/movie.interface";

import Carousel, { ICarouselInstance } from "react-native-reanimated-carousel";
import MoviePoster from "./MoviePoster";

interface Props {
  title: string;
  movies: Movie[];
}

const MainSlideshow = ({ title, movies }: Props) => {
  const ref = useRef<ICarouselInstance>(null);
  const width = useWindowDimensions().width;

  return (
    <>
      <Text className="text-3xl font-bold px-4 mb-2">{title}</Text>
      <View className="h-[250px] w-full">
        <Carousel
          ref={ref}
          data={movies}
          renderItem={({ item }) => (
            <MoviePoster id={item.id} poster={item.poster} />
          )}
          width={200}
          height={350}
          style={{
            width: width,
            height: 350,
            justifyContent: "center",
            alignItems: "center",
          }}
          mode="parallax"
          modeConfig={{
            parallaxScrollingOffset: 50,
            parallaxScrollingScale: 0.9,
          }}
          defaultIndex={1}
        />
      </View>
    </>
  );
};

export default MainSlideshow;
