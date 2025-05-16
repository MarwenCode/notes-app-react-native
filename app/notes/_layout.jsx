// app/notes/_layout.jsx
import { Stack } from "expo-router";
import React from "react";

const NoteLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" options={{ title: "My Notes" }} />
    </Stack>
  );
};

export default NoteLayout;
