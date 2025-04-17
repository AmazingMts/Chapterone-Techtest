import { Text, View, Button, StyleSheet } from "react-native";
import Row from "../component/row";

export default function Table({ data, func, onAdd }) {
  return (
    <View style={styles.container}>
        <Text>Job Title</Text>
        <Text>Job Description</Text>
        <Text>Job Start Time</Text>
        <Text>Job Attribute</Text>
      {data.map((item) => (
        <Row
          key={item.id}
          id={item.id}
          title={item.title}
          description={item.description}
          starttime={item.starttime}
          func={func}
        />
      ))}

      {onAdd && (
        <View style={styles.addRow}>
          <Button title="+ Add New Job" onPress={onAdd} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 12,
    backgroundColor: "#fff",
    borderRadius: 10,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  addRow: {
    marginTop: 16,
    alignItems: "center",
  },
});
