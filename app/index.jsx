import { StyleSheet, Text, View, Image } from "react-native";
import PostImg from '../assets/images/post-it.png';

const HomeScreen = () =>  {
  return (
    <View style={styles.container}>
      <Image source={PostImg} style={styles.image} />
      <Text  style={styles.title}  >Welcome to Notes app</Text>
      <Text  style={styles.subtitle}> Tell us about your thoughts! </Text>
     
    </View>
  );
}


const styles = StyleSheet.create ({

  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: "contain",

  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
    marginTop: 20,
    },
    subtitle: {
      fontSize: 18,
      color: "#000",
      marginTop: 10,
      },

});

export default HomeScreen;
