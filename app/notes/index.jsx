// app/notes/index.jsx
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  Modal,
  TextInput,
} from "react-native";
import PostImg from "../../assets/images/post-it.png";
import { useRouter } from "expo-router";

const Notes = () => {
  const router = useRouter();
  const [notes, setNotes] = useState([
    { id: "1", text: "This is the first note" },
    { id: "2", text: "This is the second note" },
    { id: "3", text: "This is the third note" },
  ]);

  const [modalVisible, setModalVisible] = useState(false);
  const [newNote, setNewNote] = useState("");


  const addNote = () => {
    if (newNote.trim() === "") {
      alert("Please enter a note");
      return;
    }

    const newNoteItem = {
      id: (notes.length + 1).toString(),
      text: newNote,
    };

    setNotes((prevNotes) => [...prevNotes, newNoteItem]);
    setNewNote("");
    setModalVisible(false);
  }

  return (
    <View style={styles.container}>
      <Image source={PostImg} style={styles.image} />
      <Text style={styles.title}>Your Notes</Text>
      <Text style={styles.subtitle}>Here are your saved thoughts!</Text>

      <FlatList
        data={notes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.noteItem}>
            <Text style={styles.noteText}>{item.text}</Text>
          </View>
        )}
        style={{ width: "90%" }}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => setModalVisible(true)}
        >
        <Text style={styles.buttonText}>Add Note</Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Add a New Note</Text>
            <TextInput
              style={styles.modalInput}
              placeholder="Type your note here"
              value={newNote}
              onChangeText={(text) => setNewNote(text)} />

            <View>
              <TouchableOpacity>
                <Text style={styles.modalButtonSave} onPress={addNote}   >Save Note</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <Text style={styles.modalButtonCancel}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#222",
    padding: 16,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: "contain",
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: "#ddd",
    marginBottom: 20,
  },
  noteItem: {
    backgroundColor: "#333",
    padding: 15,
    marginVertical: 8,
    borderRadius: 10,
    width: "100%",
  },
  noteText: {
    fontSize: 16,
    color: "#fff",
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
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: "80%",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  modalInput: {
    width: "100%",
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  modalButtonSave: {
    backgroundColor: "#28a745",
    color: "#fff",
    padding: 10,
    borderRadius: 5,
    textAlign: "center",
    marginBottom: 10,
  },
  modalButtonCancel: {
    backgroundColor: "#dc3545",
    color: "#fff",
    padding: 10,
    borderRadius: 5,
    textAlign: "center",
  },

  
 
});

export default Notes;
