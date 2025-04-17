import { Button, StyleSheet, TextInput, View } from "react-native";
import { useState } from "react";

export default function Card(props) {
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");

  const styles = StyleSheet.create({
    card: {
        width: "90%",
        backgroundColor: "#fff",
        padding: 20,
        borderRadius: 12,
        elevation: 6,
        shadowColor: "#000",
        shadowOpacity: 0.2,
        shadowRadius: 10,
      },
    input: {
      borderWidth: 1,
      borderColor: "#ccc",
      borderRadius: 6,
      padding: 10,
      marginBottom: 12,
    },
    buttonGroup: {
      flexDirection: "row",
      justifyContent: "space-between",
    },
    closeBtn: {
      marginBottom: 12,
    },
  });

  return (
    <View style={styles.card}>
      <Button
        title="X"
        color="red"
        onPress={() => {
          settitle("");
          setdescription("");
          props.close();
        }}
        style={styles.closeBtn}
      />

      <TextInput
        style={styles.input}
        placeholder="Job title"
        value={title}
        onChangeText={(item) => settitle(item)}
      />
      <TextInput
        style={styles.input}
        placeholder="Job description"
        value={description}
        onChangeText={(item) => setdescription(item)}
      />

      <Button
        title="Submit"
        onPress={() => {
          props.add(title, description);
          settitle("");
          setdescription("");
        }}
      />
    </View>
  );
}
