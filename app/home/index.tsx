import { View, Text, ActivityIndicator, ScrollView } from "react-native";
import React from "react";
import { useMovies } from "@/presentation/hooks/useMovies";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import MainSlideshow from "@/presentation/components/movies/MainSlideshow";
import MovieHorizontalList from "@/presentation/components/movies/MovieHorizontalList";

const HomeScreen = () => {
  const safeArea = useSafeAreaInsets();
  const { nowPlayingQuery, popularQuery, topRatedQuery, upcomingQuery } =
    useMovies();

  if (nowPlayingQuery.isLoading) {
    return (
      <View className="justify-center items-center flex-1">
        <ActivityIndicator color={"purple"} size={40} />
      </View>
    );
  }

  return (
    <ScrollView>
      <View className="mt-2 pb-10" style={{ paddingTop: safeArea.top }}>
        {/* Carrousel de imagenes */}
        <MainSlideshow title="Movies App" movies={nowPlayingQuery.data ?? []} />

        {/* Popular */}
        <MovieHorizontalList
          title="Populares"
          movies={popularQuery.data ?? []}
          className="mb-5"
        />

        {/* Top Rated */}
        <MovieHorizontalList
          title="Mejores Calificadas"
          movies={topRatedQuery.data?.pages.flat() ?? []}
          className="mb-5"
          loadNextPage={ topRatedQuery.fetchNextPage }
        />

        <MovieHorizontalList
          title="Proximamente en Cines"
          movies={upcomingQuery.data ?? []}
          className="mb-5"
        />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
