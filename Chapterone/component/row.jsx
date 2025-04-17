import { Text, Button, View, StyleSheet } from "react-native";

export default function Row(props) {
  return (
    <View style={styles.row}>
      <View style={styles.textGroup}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.description}>{props.description}</Text>
        <Text style={styles.time}>{props.starttime}</Text>
        <Text style={styles.status}>Ongoing</Text>
      </View>
      <Button
        title="✔ Finished"
        onPress={() => props.func(props.id)}
        color="#4CAF50"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    backgroundColor: "#f4f4f4",
    padding: 12,
    marginVertical: 6,
    borderRadius: 10,
    borderColor: "#ccc",
    borderWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textGroup: {
    flex: 1,
    marginRight: 10,
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    color: "#333",
    marginBottom: 2,
  },
  time: {
    fontSize: 12,
    fontStyle: "italic",
    color: "#888",
  },
  status: {
    fontSize: 12,
    color: "#0066cc",
    fontWeight: "600",
  }
});
