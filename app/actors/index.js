import { View, Text, Image, ScrollView } from "react-native";
import { Link } from "expo-router";
import { globalStyles } from "../../styles/global.js";
import { actors } from "../../data/actors.js"; 

export default function ActorsPage() {
  return (
    <ScrollView style={globalStyles.container}>
      <Link style={globalStyles.showMore} href={"/"}>Home ..</Link>
      <View style={globalStyles.ulAuthorsInView}>
      {actors.map((actor, index) => (
          <View style={globalStyles.movie_block} key={actor.id}>
            <View style={globalStyles.movie_img}>
              <Link href={"actors/" + actor.id} style={globalStyles.movie_img_link}>
                <Image source={{ uri: `${actor.image}` }} style={globalStyles.image} />
              </Link>
              <Text style={globalStyles.h3a}>{actor.name}</Text>
            </View>
          </View>
        ))
      }
      </View>
    </ScrollView>

  );
}
