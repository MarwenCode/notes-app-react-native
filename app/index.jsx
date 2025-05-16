// app/index.jsx
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import PostImg from '../assets/images/post-it.png';
import { useRouter } from "expo-router";

const HomeScreen = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Image source={PostImg} style={styles.image} />
      <Text style={styles.title}>Welcome to Notes app</Text>
      <Text style={styles.subtitle}>Tell us about your thoughts!</Text>
      <TouchableOpacity style={styles.button} onPress={() => router.push('/notes')}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#222", // Fond noir global
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff", // Texte blanc
    marginTop: 20,
  },
  subtitle: {
    fontSize: 18,
    color: "#ddd", // Texte gris clair
    marginTop: 10,
  },
  button: {
    marginTop: 20,
    paddingVertical: 12,
    paddingHorizontal: 18,
    backgroundColor: "black",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    transitionDuration: "300ms", 
  },
  buttonText: {
    fontWeight: "bold",
    color: "#fff",
  },
});

export default HomeScreen;
