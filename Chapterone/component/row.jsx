import React, { useState } from "react";
import {
  Text,
  Button,
  View,
  StyleSheet,
  Modal,
  TouchableOpacity,
} from "react-native";

export default function Row(props) {
  const [showModal, setShowModal] = useState(false);

  const rowWidth = props.rowWidth;

  const titleWidth = rowWidth * 0.15;
  const descWidth = rowWidth * 0.35;
  const timeWidth = rowWidth * 0.2;
  const statusWidth = rowWidth * 0.15;
  const buttonWidth = rowWidth * 0.15;

  return (
    <>
      <View style={[styles.row, { width: rowWidth }]}>
        <View style={[styles.cell, { width: titleWidth }]}>
          <Text>{props.title}</Text>
        </View>

        <TouchableOpacity
          onPress={() => setShowModal(true)}
          style={[styles.cell, { width: descWidth }]}
        >
          <Text numberOfLines={1} ellipsizeMode="tail" style={styles.descText}>
            Detailed Description: {props.description}
          </Text>
        </TouchableOpacity>

        <View style={[styles.cell, { width: timeWidth }]}>
          <Text>{props.starttime}</Text>
        </View>

        <View style={[styles.cell, { width: statusWidth }]}>
          <Text>{props.status === "unfinished" ? "Ongoing" : "Done"}</Text>
        </View>

        <View style={[styles.cell, { width: buttonWidth }]}>
          <Button
            title={props.status === "unfinished" ? "✔ Complete" : "↩ Undo"}
            onPress={() => props.func(props.id)}
            color={props.status === "unfinished" ? "#4CAF50" : "#f97316"}
          />
        </View>
      </View>

      <Modal
        visible={showModal}
        animationType="fade"
        transparent={true}
        onRequestClose={() => setShowModal(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Detailed Description</Text>
            <Text style={styles.modalText}>{props.description}</Text>
            <Button title="Close" onPress={() => setShowModal(false)} />
          </View>
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 8,
    marginBottom: 8,
    borderRadius: 12,
    backgroundColor: "#ffffff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 1,
  },
  cell: {
    paddingHorizontal: 4,
    justifyContent: "center",
  },
  descText: {
    fontWeight: "500",
    color: "#1e3a8a", // 深蓝色
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 12,
    width: "85%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#1f2937",
  },
  modalText: {
    fontSize: 14,
    color: "#374151",
    marginBottom: 12,
  },
});
