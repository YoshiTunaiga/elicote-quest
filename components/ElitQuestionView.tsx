import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ThemedButton } from "./ThemedButton";
import ProgressBar from "./ProgressBar";
import { questionsData } from "../assets/mockData/questionsData";
import { useState } from "react";

export default function ElitQuestionView() {
  const [questObj, setQuestObj] = useState(0);
  const data = questionsData[questObj];
  const [response, setResponse] = useState("");

  const onOptionPress = (option: string) => {
    setResponse(option);
  };

  return (
    <View style={styles.wrapperContainer}>
      <ProgressBar progressInt={50} />
      <View>
        <View style={{ paddingBottom: 10, paddingLeft: 20, paddingRight: 20 }}>
          <Text style={{ fontSize: 18 }}>{data.question}</Text>
        </View>
        {data.display ? (
          <View style={styles.displayContainer}>
            <Text style={{ fontSize: 18 }}>{data.display}</Text>
          </View>
        ) : null}
        <View style={styles.optionsContainer}>
          {data.options.map((option, index) => (
            <TouchableOpacity
              key={index}
              style={styles.optionsStyle}
              onPress={() => setResponse(option)}>
              <Text style={styles.singleOption}>{option}</Text>
            </TouchableOpacity>
          ))}
        </View>
        {response ? <Text>{response}</Text> : null}
        <View
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}>
          <ThemedButton
            title="SUBMIT"
            textStyle={{
              color: "white",
              fontSize: 16,
              fontWeight: "bold",
              textAlign: "center",
            }}
            buttonStyle={{
              padding: 10,
              margin: 10,
              width: 150,
              borderRadius: 10,
              backgroundColor: "#9586D1",
            }}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundContainer: {
    backgroundColor: "#A799E0",
    flex: 1,
    paddingTop: 30,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
  },
  wrapperContainer: {
    backgroundColor: "white",
    paddingTop: 40,
    borderRadius: 10,
    flex: 1,
  },
  optionsContainer: {
    paddingTop: 20,
    paddingRight: 20,
    paddingLeft: 20,
    display: "flex",
    gap: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  optionsStyle: {
    marginLeft: 20,
    marginRight: 20,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    backgroundColor: "#D8CEFF",
    padding: 20,
    height: 60,
    width: "70%",
  },
  singleOption: {
    color: "#5828D3",
    fontWeight: "bold",
    fontSize: 20,
  },
  displayContainer: {
    marginLeft: 20,
    marginRight: 20,
    paddingTop: 20,
    paddingLeft: 10,
    paddingBottom: 20,
    backgroundColor: "#F9F3D8",
  },
});
