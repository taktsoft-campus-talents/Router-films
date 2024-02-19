import { View, Text, ScrollView } from "react-native";
import { Link } from "expo-router";
import { globalStyles } from "../../styles/global";
import { movies } from "../../data/movies.js";
import { Image } from "expo-image";

export default function MoviePage() {
  return (
    <ScrollView style={globalStyles.container}>
      <Link style={globalStyles.showMore} href={"/"}>Home ..</Link>
      <View style={globalStyles.ulAuthorsInView}>
      {movies.map((movie, index) => (
          <View style={globalStyles.movie_block} key={movie.id}>
            <View style={globalStyles.movie_img}>
              <Link href={"/movies/" + movie.id} style={globalStyles.movie_img_link}>
                <Image source={{ uri: `${movie.thumbnail}` }} style={globalStyles.image} />
              </Link>
            </View>
            <View  style={globalStyles.movie_about}>
              <Link style={globalStyles.h3a} href={"/movies/" + movie.id}>{movie.title}</Link>
              <Text style={globalStyles.h4}>{movie.tagline}</Text>
              <Text style={globalStyles.bHa}>Actors:</Text>
              <View  style={globalStyles.ulAuthors}>
                {movie.cast.map((author, index_a) => {
                  if (index_a <= 2){
                    return (
                      <View key={author.id}>
                        <Text style={globalStyles.emAuthor}>{author.character}</Text>
                      </View>
                    )
                  }
                })}
              </View>
                <Link style={globalStyles.showMore} href={"/movies/" + movie.id}>More info ..</Link>
                
            </View>            
          </View>
        ))
      }
      </View>
    </ScrollView>

  );
}
