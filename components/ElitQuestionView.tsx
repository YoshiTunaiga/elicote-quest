import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { ThemedButton } from "./ThemedButton";
import ProgressBar from "./ProgressBar";
import { questionsData } from "../assets/mockData/questionsData";
import { useState } from "react";
import Markdown from "react-native-markdown-display";
import AntDesign from "@expo/vector-icons/AntDesign";

export default function ElitQuestionView() {
  const [questObj, setQuestObj] = useState(0);
  const data = questionsData[questObj];
  const [response, setResponse] = useState("");
  const [selectedOptionStyle, setSelectedOptionStyle] = useState(false);

  const onOptionPress = (option: string) => {
    setResponse(option);
    setSelectedOptionStyle(true);
  };

  const onSubmit = () => {
    if (response === data.answer) {
      setQuestObj(questObj + 1);
      setResponse("");
      setSelectedOptionStyle(false);
    }
  };

  const onBackPress = () => {
    if (questObj > 0) {
      setQuestObj(questObj - 1);
      setResponse("");
      setSelectedOptionStyle(false);
    }
  };

  return (
    <SafeAreaView>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={{
          height: "100%",
          backgroundColor: "white",
          paddingTop: questObj > 0 ? 10 : 40,
          borderRadius: 16,
        }}>
        {questObj > 0 ? (
          <View style={{ paddingLeft: 20 }}>
            <AntDesign
              name="leftcircleo"
              size={30}
              color="#5828D3"
              onPress={() => onBackPress()}
            />
          </View>
        ) : null}
        <ProgressBar progressInt={50} />

        {/* ------- QUESTION DISPLAY --------- */}
        <View>
          <View
            style={{ paddingBottom: 10, paddingLeft: 20, paddingRight: 20 }}>
            <Text style={{ fontSize: 18 }}>{data.question}</Text>
          </View>

          {/* ------- MARKDOWN DISPLAY --------- */}
          {data.display ? (
            <View style={styles.displayContainer}>
              <Markdown style={markdownStyles}>{data.display}</Markdown>
            </View>
          ) : null}

          {/* ------- OPTIONS --------- */}
          <View style={styles.optionsContainer}>
            {data.options.map((option, index) => (
              <TouchableOpacity
                key={index}
                style={{
                  ...styles.optionsStyle,
                  backgroundColor:
                    selectedOptionStyle && option === response
                      ? "#967FF1"
                      : "#D8CEFF",
                }}
                onPress={() => onOptionPress(option)}>
                <Text style={styles.singleOption}>{option}</Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* ------- SUBMIT BUTTON --------- */}
          <View
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              paddingTop: 10,
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
              onPress={() => onSubmit()}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const markdownStyles = StyleSheet.create({
  text: {
    color: "#5828D3",
    fontSize: 16,
  },
});

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
    paddingTop: 10,
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
    // backgroundColor: "#D8CEFF",
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
