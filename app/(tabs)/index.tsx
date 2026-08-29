import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useState } from "react";

export default function HomeScreen() {
  const [texte, setTexte] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ma Todo List</Text>
      <Text style={styles.title1}>Champ de saisie</Text>
      <TextInput
        style={styles.input}
        placeholder="Ajouter une tâche"
        placeholderTextColor="#dbeb25"
        value={texte}
        onChangeText={setTexte}
      />
      <Text style={styles.title1}>{texte}</Text>

      <TouchableOpacity style={styles.button} onPress={() => setTexte("")}>
        <Text style={styles.buttonText}>Vider</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#2563eb",
  },
  title1: {
    fontSize: 20,
    fontWeight: "200",
    color: "#dbeb25",
  },
  input: {
    fontSize: 15,
    fontWeight: "200",
    color: "#e6ddff",
    borderWidth: 1,
    borderColor: "#dbeb25",
    borderRadius: 5,
    padding: 10,
    marginTop: 20,
    width: "80%",
  },
  button: {
    backgroundColor: "#dbeb25",
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: "#000000",
    fontSize: 16,
    fontWeight: "bold",
  },
});
