import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  Button,
  ImageBackground,
  Dimensions,
} from "react-native";
import { useState, useRef } from "react";
import Table from "../component/table";
import Card from "../component/Card";

export default function Index() {
  const fixedTableWidth = 900;
  const amount = useRef(2);

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

  const [displayCard, setDisplayCard] = useState(false);

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

  function attributeChange(id) {
    const matched =
      onGoingJob.find((item) => item.id === id) ||
      FinishedJob.find((item) => item.id === id);

    if (!matched) return;

    const updatedItem = {
      ...matched,
      attribute: matched.attribute === "unfinished" ? "finished" : "unfinished",
    };

    if (updatedItem.attribute === "finished") {
      SetOnGoingJob(onGoingJob.filter((item) => item.id !== id));
      SetFinishedJob([...FinishedJob, updatedItem]);
    } else {
      SetFinishedJob(FinishedJob.filter((item) => item.id !== id));
      SetOnGoingJob([...onGoingJob, updatedItem]);
    }
  }

  return (
    <ImageBackground
      source={require("../assets/bg-chinese.png")}
      style={{ flex: 1 }}
      resizeMode="stretch"
    >
      <View style={styles.container}>
        <View style={styles.button}>
          <Button onPress={() => setDisplayCard(true)} title="Create New Job" />
        </View>

        {displayCard && (
          <View style={styles.overlay}>
            <Card close={() => setDisplayCard(false)} add={addNew} />
          </View>
        )}

        {/* Ongoing Jobs */}
        <Text style={styles.sectionTitleOngoing}>Ongoing Jobs</Text>
        <ScrollView style={[styles.scrollArea, styles.ongoingBox]}>
          <Table
            data={onGoingJob}
            func={attributeChange}
            rowWidth={fixedTableWidth}
          />
        </ScrollView>

        <View style={styles.sectionSpacer} />

        {/* Finished Jobs */}
        <Text style={styles.sectionTitleFinished}>Finished Jobs</Text>
        <ScrollView style={[styles.scrollArea, styles.finishedBox]}>
          <Table
            data={FinishedJob}
            func={attributeChange}
            rowWidth={fixedTableWidth}
          />
        </ScrollView>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  button: {
    marginBottom: 20,
    alignSelf: "center",
    width: "80%",
    borderRadius: 12,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 4,
    backgroundColor: "#fff5e5",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.35)",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 100,
    padding: 20,
  },
  sectionTitleOngoing: {
    fontSize: 20,
    fontWeight: "700",
    color: "#c2410c",
    marginTop: 16,
    marginBottom: 12,
    paddingLeft: 4,
  },
  sectionTitleFinished: {
    fontSize: 20,
    fontWeight: "700",
    color: "#065f46",
    marginTop: 16,
    marginBottom: 12,
    paddingLeft: 4,
  },
  scrollArea: {
    marginBottom: 24,
    borderRadius: 16,
    padding: 12,
    maxHeight: 320,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 3,
    elevation: 2,
  },
  ongoingBox: {
    backgroundColor: "rgba(255, 247, 230, 0.6)",
  },
  finishedBox: {
    backgroundColor: "rgba(236, 253, 245, 0.5)",
  },
  sectionSpacer: {
    height: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#e5e7eb",
    marginVertical: 12,
  },
});
