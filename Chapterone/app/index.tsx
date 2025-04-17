import { Text, View, ScrollView, StyleSheet, Button } from "react-native";
import { useState, useRef } from "react";
import Table from "../component/table";
import Card from "../component/Card";

export default function Index() {
  const amount = useRef(2); // Counter for generating unique task IDs

  const [FinishedJob, SetFinishedJob] = useState([]);
  const [onGoingJob, SetOnGoingJob] = useState([
    {
      id: 1,
      title: "furniture",
      description: "119ST",
      starttime: "2025-10-06",
      attribute: "unfinished",
    },
  ]);

  const [displayCard, setDisplayCard] = useState(false); // Controls visibility of the input card

  // Add a new task to the ongoing job list
  function addNew(title: string, description: string) {
    const now = new Date();
    const timeString = `${now.getFullYear()}-${
      now.getMonth() + 1
    }-${now.getDate()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;

    const newTask = {
      id: amount.current,
      title,
      description,
      starttime: timeString,
      attribute: "unfinished",
    };

    SetOnGoingJob([...onGoingJob, newTask]);
    amount.current += 1;
    setDisplayCard(false);
  }

  // Move a task from ongoing to finished list
  function attributeChange(id: number) {
    const completed = onGoingJob.filter((item) => item.id === id);
    const remaining = onGoingJob.filter((item) => item.id !== id);
    SetFinishedJob([...FinishedJob, ...completed]);
    SetOnGoingJob(remaining);
  }

  // Show / hide the card
  function showCard() {
    setDisplayCard(true);
  }

  function hideCard() {
    setDisplayCard(false);
  }

  return (
    <View style={styles.container}>
      {/* Add New Job Button */}
      <View style={styles.button}>
        <Button onPress={showCard} title="Create New Job" />
      </View>

      {/* Overlay for Card (popup input form) */}
      {displayCard && (
        <View style={styles.overlay}>
          <Card close={hideCard} add={addNew} />
        </View>
      )}

      {/* Ongoing Jobs Section */}
      <Text style={styles.sectionTitle}> Ongoing Jobs</Text>
      <ScrollView style={styles.scrollArea}>
        <Table data={onGoingJob} func={attributeChange} />
      </ScrollView>

      <Text style={styles.divider}>──────────────</Text>

      {/* Finished Jobs Section */}
      <Text style={styles.sectionTitle}> Finished Jobs</Text>
      <ScrollView style={styles.scrollArea}>
        <Table data={FinishedJob} func={attributeChange} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f9f9f9",
  },
  button: {
    marginBottom: 16,
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 100,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 16,
    marginBottom: 8,
  },
  scrollArea: {
    maxHeight: 200,
    marginBottom: 20,
  },
  divider: {
    textAlign: "center",
    color: "#aaa",
    marginVertical: 8,
  },
});
