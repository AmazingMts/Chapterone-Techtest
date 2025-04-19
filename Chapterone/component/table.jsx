import {
  Text,
  View,
  Button,
  StyleSheet,
  ScrollView,
  Dimensions,
} from "react-native";
import Row from "../component/row";

export default function Table({ data, func, onAdd, rowWidth }) {
  return (
    <ScrollView horizontal>
      <View style={[styles.container, { width: rowWidth * 1.05 }]}>
        <View style={[styles.headerRow, { width: rowWidth }]}>
          <Text style={[styles.headerText, { width: rowWidth * 0.15 }]}>
            Title
          </Text>
          <Text style={[styles.headerText, { width: rowWidth * 0.35 }]}>
            Description
          </Text>
          <Text style={[styles.headerText, { width: rowWidth * 0.2 }]}>
            Start Time
          </Text>
          <Text style={[styles.headerText, { width: rowWidth * 0.15 }]}>
            Status
          </Text>
          <Text style={[styles.headerText, { width: rowWidth * 0.15 }]}>
            Status Change
          </Text>
        </View>
        {data.map((item) => (
          <Row
            key={item.id}
            id={item.id}
            title={item.title}
            description={item.description}
            starttime={item.starttime}
            status={item.attribute}
            func={func}
            rowWidth={rowWidth}
          />
        ))}

        {onAdd && (
          <View style={styles.addRow}>
            <Button title="+ Add New Job" onPress={onAdd} />
          </View>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "95%",
    alignSelf: "center",
    padding: 16,
    backgroundColor: "#ffffff",
    borderRadius: 16,
    marginBottom: 24,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 6,
    elevation: 2,
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#e5e7eb",
    paddingBottom: 8,
  },
  headerText: {
    fontWeight: "600",
    fontSize: 14,
    color: "#4b5563",
    textAlign: "left",
    paddingHorizontal: 4,
  },
  addRow: {
    marginTop: 20,
    alignItems: "center",
  },
});
