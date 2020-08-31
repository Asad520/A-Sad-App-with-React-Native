import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  const [emoji, setEmoji] = useState("YOU SEEM SAD!");
  const [buttonTxt, setButton] = useState("BECOME HAPPY! :')");

  const handleChange = () => {
    if (emoji === "YOU SEEM SAD!") {
      setEmoji("YOU WILL ALWAYS STAY SAD!!!");
      setButton("STAY SAD :'(");
    } else {
      setEmoji("YOU SEEM SAD!");
      setButton("BECOME HAPPY! :')");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.bold}>A SAD APP!</Text>
      <Text style={styles.bold}>HELLO! THIS APP DOES NOTHING!</Text>
      <Text style={styles.sad}> :'(</Text>
      <Text style={styles.sadTxt}>{emoji}</Text>
      <Text style={styles.sad}> :'(</Text>
      <Button title={buttonTxt} onPress={handleChange} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#280280",
    alignItems: "center",
    justifyContent: "center",
  },
  bold: {
    fontWeight: "bold",
    color: "white",
  },
  sad: {
    transform: [{ rotate: "90deg" }],
    fontWeight: "bold",
    color: "white",
  },
  sadTxt: {
    paddingTop: 40,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
});
