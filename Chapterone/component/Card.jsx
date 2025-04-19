import {
  StyleSheet,
  TextInput,
  View,
  Text,
  TouchableOpacity,
  Alert,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { useState } from "react";
export default function Card(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function clickHandler() {
    if (title.trim().length === 0) {
      Alert.alert("Missing Info", "Job title is required.");
      return;
    }
    props.add(title, description);
    setTitle("");
    setDescription("");
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.card}>
        <TouchableOpacity
          style={styles.closeBtn}
          onPress={() => {
            setTitle("");
            setDescription("");
            props.close();
          }}
        >
          <Text style={styles.closeText}>✕</Text>
        </TouchableOpacity>

        <Text style={styles.label}>Job Title</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter job title"
          value={title}
          onChangeText={setTitle}
          placeholderTextColor="#9ca3af"
        />

        <Text style={styles.label}>Job Description</Text>
        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="Enter job description"
          value={description}
          onChangeText={setDescription}
          placeholderTextColor="#9ca3af"
          multiline
          numberOfLines={4}
        />

        <TouchableOpacity style={styles.submitBtn} onPress={clickHandler}>
          <Text style={styles.submitText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  textArea: {
    height: 100,
    textAlignVertical: "top",
  },

  card: {
    width: "80%",
    maxWidth: 360,
    backgroundColor: "#ffffff",
    padding: 24,
    borderRadius: 20,
    elevation: 6,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    position: "relative",
    alignSelf: "center",
  },

  closeBtn: {
    position: "absolute",
    right: 12,
    top: 12,
    padding: 4,
  },
  closeText: {
    fontSize: 18,
    color: "#ef4444",
    fontWeight: "bold",
  },
  label: {
    fontSize: 14,
    fontWeight: "500",
    color: "#374151",
    marginBottom: 6,
    marginTop: 12,
  },
  input: {
    borderWidth: 1,
    borderColor: "#d1d5db",
    borderRadius: 10,
    padding: 12,
    fontSize: 16,
    color: "#111827",
    marginBottom: 8,
  },
  submitBtn: {
    backgroundColor: "#3b82f6",
    marginTop: 16,
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
  },
  submitText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
