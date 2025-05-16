// app/_layout.jsx
import { Stack } from "expo-router";

const RootLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#222",
        },
        headerTintColor: "white",
        headerTitleStyle: {
          fontWeight: "bold",
          fontSize: 25,
        },
        headerTitleAlign: "center", 
        contentStyle: {
          paddingHorizontal: 20,
          paddingTop: 20,
          backgroundColor: "#222", // Background global
        },
      }}
    >
      <Stack.Screen name="index" options={{ title: "Home" }} />
      <Stack.Screen name="notes" options={{ title: "Notes" }} />
    </Stack>
  );
};

export default RootLayout;


