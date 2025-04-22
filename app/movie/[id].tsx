import { getMovieByIdAction } from '@/core/actions/movie/get-movie-by-id.action'
import { useLocalSearchParams } from 'expo-router'
import { View, Text } from 'react-native'

const MovieScreen = () => {

    const { id } = useLocalSearchParams()

    getMovieByIdAction(+id)
  return (
    <View>
      <Text>MovieScreen</Text>
    </View>
  )
}

export default MovieScreen