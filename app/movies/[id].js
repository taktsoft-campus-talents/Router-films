import { View, Text, Image, ScrollView } from "react-native";
import { Link } from "expo-router";
import { globalStyles } from "../../styles/global";
import { useLocalSearchParams } from "expo-router";
import { actors } from "../../data/actors.js";
import { movies } from "../../data/movies.js"; 

export default function MovieDetailPage() {

  const { id } = useLocalSearchParams();

  //let id = 238;
  
  let movieArr = movies.find((movie) => {
    return movie.id == id;
  });

  let actorsArr = actors.filter((actor) => {
    const findet_Author = movieArr.cast.filter((actor_m) => {
      return actor_m.character == actor.character
    })[0]
    if(findet_Author!=undefined){
      return actor.id == findet_Author.id;
    }
  });

  return (

    <View style={globalStyles.container}>

      <View style={globalStyles.Movie_one}>

        <Text style={globalStyles.h1}>{movieArr.title}</Text>
        <Text style={globalStyles.h4}>{movieArr.tagline}</Text>
        <Link style={globalStyles.showMore} href={"/movies/"}>Back to list..</Link>
        
        <View style={globalStyles.movie_blockIn}>
          <Image source={{ uri: `${movieArr.image}` }} style={globalStyles.imageBig} />
        </View>

        <View style={globalStyles.movie_actors}>

          <Text style={globalStyles.bHa}>Actors:</Text>

          <ScrollView style={globalStyles.ulAuthorsIn}>

            <View style={globalStyles.ulAuthorsInView}>
                {actorsArr.map((actor, index_a) => {
                    return (
                      <Link href={'actors/'+actor.id+'?movie_last='+id} key={actor.id}>
                        <View style={globalStyles.img_of_actor}>
                          <Text style={globalStyles.emAuthor}>{actor.name}</Text>
                          <Image source={{ uri: `${actor.image}` }} style={globalStyles.actorMovieImage} />
                          <Text style={globalStyles.emAuthor}>as {actor.character}</Text>
                        </View>
                      </Link>
                    )
                })}
            </View>

          </ScrollView>

        </View>

      </View>

    </View>
    
  );
}
