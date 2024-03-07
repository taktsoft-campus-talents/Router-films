import { Tabs, router } from "expo-router";
import { COLORS } from "../styles/constants";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useState } from "react";
import { Linking, View, Button } from "react-native";

export default function RootLayout(index) {

    const [link_page, setMovieLast] = useState(index);
    const [activeIndex, setActiveIndex] = useState(0);
 
  return (
    <Tabs
      onIndexChange={index => setMovieLast( link_page )}

        selectedIndex={activeIndex} 
        onSelect={index => setActiveIndex(link_page)}

      screenOptions={{
        headerShadowVisible: false,
        headerStyle: {
          backgroundColor: COLORS.dark,
        },
        headerTitleStyle: {
          color: COLORS.grey,
        },
        tabBarStyle: {
          backgroundColor: COLORS.dark,
        },
        tabBarActiveTintColor: COLORS.accent,
        headerRight: () => {
            return (
              <View style={{ paddingRight: 12 }}>
                <Button
                  onPress={() => {
                    router.push({ pathname: "login", params: { lastpage: '' } });
                  }}
                  color={COLORS.accent}
                  title="Login"
                />
              </View>
            );
          },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarShowLabel: false,
          tabBarIcon: ({ color }) => {
            return <Ionicons name="home-outline" size={24} color={color} />;
          },
        }}
      />
      <Tabs.Screen
        name="movies"
        options={{
          title: "Movies",
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({ color }) => {
            return (
              <MaterialCommunityIcons
                name="movie-open-outline"
                size={24}
                color={color}
              />
            );
          },
        }}
      />
      <Tabs.Screen
        name="actors"
        options={{
            tabBarShowLabel: false,
          title: "Actors",
          headerShown: false,
          tabBarIcon: ({ color }) => {
            return (
              <MaterialCommunityIcons
                name="human-handsup"
                size={24}
                color={color}
              />
            );
          },
        }}
      />
        <Tabs.Screen
        name="login"
        options={{
            presentation: "modal",
            title: "Login",
            tabBarShowLabel: false,
            tabBarIcon: ({ color }) => {
            return <Ionicons name="accessibility" size={24} color={color} />;
            },
        }}
        />
    </Tabs>

  );
}