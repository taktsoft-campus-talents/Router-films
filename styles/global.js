import { StyleSheet } from "react-native";
import { COLORS } from "./constants";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: COLORS.dark,
  },
  p: {
    color: COLORS.light,
    marginBottom: 8,
  },
  h1: {
    fontSize: 42,
    color: COLORS.accent,
    marginBottom: 12,
  },
  h3a: {
    fontSize: 18,
    color: COLORS.accent,
    marginBottom: 3,
  },
  h4: {
    fontSize: 11,
    color: COLORS.light,
    marginBottom: 5,
  },
  ulAuthors: {
    fontSize: 10,
    color: COLORS.accent,
    marginBottom: 5,
  },
  bHa: {
    fontSize: 9,
    color: COLORS.light,
    marginBottom: 1,
  },
  emAuthor: {
    fontSize: 8,
    color: COLORS.grey,
    marginBottom: 1,
  },
  link: {
    fontSize: 18,
    color: COLORS.accent,
  },
  image: {
    width:150,
    height:200,
    marginBottom: 40,
    marginTop: 25,
  },
  movie_img_link: {
    width:150,
    height:210,  
  },
  imageBig: {
    width:'100%',
    height:150,
    marginBottom: 20,
    marginTop: 5,  
  },
  imageBigAuthor: {
    width:'100%',
    height:300,
    marginBottom: 5,
    marginTop: 5,    
  },
  ulAuthors: {
    width:'100%',
    marginBottom: 5,
    marginTop: 4, 
  },
  ulAuthorsIn: {
    padding: 20,
    width:'100%',
    height:  '26%',
    marginBottom: 10,
    marginTop: 0, 
  },
  ulAuthorsInView: {
    flex:1,
    width:'100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: "stretch"
  },
  actorMovieImage: {
    width:90,
    height:90,
    marginBottom: 5,
    marginTop: 5, 
    marginLeft: 0,  
  },
  showMore: {
    fontSize: 10,
    color: COLORS.accent,
    marginBottom: 10,
  },
  movie_block: {
    width: "50%",
    marginBottom: 15,
  },
  movie_blockIn: {
    width: "100%",
  },
  img_of_actor: {
    width: 100,
  },
  actor_about:{
    color: COLORS.light,
  }
});
