import { View, Text, Image, ScrollView } from "react-native";
import { Link } from "expo-router";
import { globalStyles } from "../../styles/global.js";
import { useLocalSearchParams } from "expo-router";
import { actors } from "../../data/actors.js";
import { movies } from "../../data/movies.js"; 

export default function ActorDetailPage() {

  const { id, movie_last } = useLocalSearchParams();
//  console.log(movie_last)

  let actor = actors.filter((actor_m) => {
    return actor_m.id == id;
  })[0];

  let MoviesArr = movies.filter((movie) => {
    const findet_films = movie.cast.filter((actor_m) => {
      return actor_m.id == actor.id
    })[0]
    //console.log(movie.id)
    
    if(findet_films!=undefined){
      return movie.id;
    }
  });

  return (
    <View style={globalStyles.container}>

      <View style={globalStyles.Movie_one}>
      <View style={globalStyles.Actor}>
        <Text style={globalStyles.h1}>{actor.name}</Text>
        <View style={globalStyles.actor_block}>
          <View style={globalStyles.actor_img}>
            <Image source={{ uri: `${actor.image}` }} style={globalStyles.imageBigAuthor} />
          </View>
          <Text style={globalStyles.actor_about}>
            Popularity: {actor.popularity}
          </Text>
        </View>        
        <Text style={globalStyles.h3a}>Films:</Text>
        <ScrollView style={globalStyles.ulAuthorsIn}>
           {MoviesArr.map((movie, index) => (
                <Link style={globalStyles.movie_link} href={"/movies/" + movie.id} key={movie.id}>
                  <View style={globalStyles.movie_img}>
                    <Text style={globalStyles.h4}>{movie.title}</Text>
                    <Image source={{ uri: `${movie.thumbnail}` }} style={globalStyles.actorMovieImage} />
                  </View>
                </Link>     
              ))
            }
        </ScrollView>
          {!movie_last || movie_last===undefined?
            '':
            <Link style={globalStyles.showMore} href={"movies/" + movie_last}>Back to film..</Link>
          }
          <Link style={globalStyles.showMore} href={"actors/"}>Go to actors..</Link>
      </View>
      </View>

    </View>
  );

}
