import { Stack, router } from "expo-router";
import { COLORS } from "../../styles/constants";
import { Linking, View, Button } from "react-native";

export default function ActorsLayout(index) {
   console.log(index)
  return (
    <Stack
      screenOptions={{
        headerShadowVisible: false,
        headerStyle: {
          backgroundColor: COLORS.dark,
        },
        headerTitleStyle: {
          color: COLORS.grey,
        },
        headerBackTitleVisible: false,
        headerTintColor: COLORS.grey,
        headerRight: () => { 
          return (
            <View style={{ paddingRight: 12 }}>
              <Button
                onPress={() => {
                  router.push({ pathname: "login", params: { lastpage: 'actors' } });
                }}
                color={COLORS.accent}
                title="Login"
              />
            </View>
          );
        },
      }}
    >
      <Stack.Screen name="index" options={{ title: "Actors" }} />
      <Stack.Screen name="[id]" options={{ title: "Details" }} />
    </Stack>

  );
}