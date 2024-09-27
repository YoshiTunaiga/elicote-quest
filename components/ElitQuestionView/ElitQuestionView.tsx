import { useEffect, useState } from "react";
import Markdown from "react-native-markdown-display";
import AntDesign from "@expo/vector-icons/AntDesign";
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from "react-native";
import { questionsData } from "../../assets/mockData/questionsData";

// Components
import { ThemedButton } from "../ThemedButton";
import ProgressBar from "../ProgressBar";
import { CongratulationsModal } from "../modals/CongratulationsModal";

// Styles
import { componentStyles, markdownStyles } from "./Stylesheet";
import { APP_COLORS } from "@/constants/Colors";
import { HintErrorResponseModal } from "../modals/HintErrorResponseModal";

const { width, height } = Dimensions.get("window");

export default function ElitQuestionView() {
  const [questIndex, setQuestIndex] = useState(0);
  const data = questionsData[questIndex];
  const [response, setResponse] = useState("");
  const [selectedOptionStyle, setSelectedOptionStyle] = useState(false);
  const [isCongratsModalOpen, setIsCongratsModalOpen] = useState(false);
  const [isHintModalOpen, setIsHintModalOpen] = useState(false);
  const progressState = questionsData.length * 5;
  const [progressInt, setProgressInt] = useState(progressState);

  const onOptionPress = (option: string) => {
    setResponse(option);
    setSelectedOptionStyle(true);
  };

  const onSubmit = () => {
    if (response === data.answer) {
      setIsCongratsModalOpen(!isHintModalOpen);
    } else {
      setIsHintModalOpen(!isHintModalOpen);
    }
  };

  const onBackPress = () => {
    if (questIndex > 0) {
      setQuestIndex(questIndex - 1);
      setProgressInt(progressInt - progressState);
      setResponse("");
      setSelectedOptionStyle(false);
    }
  };

  const onCloseCongratsModal = () => {
    setIsCongratsModalOpen(!isCongratsModalOpen);
    setQuestIndex(questIndex + 1);
    setProgressInt(progressInt + progressState);
    setResponse("");
    setSelectedOptionStyle(false);
  };

  const onCloseHintsModal = () => {
    setIsHintModalOpen(!isHintModalOpen);
    setResponse("");
    setSelectedOptionStyle(false);
  };

  return (
    <SafeAreaView>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={{
          height: height - 90,
          backgroundColor: APP_COLORS.semanticWhite,
          paddingTop: questIndex > 0 ? 10 : 40,
          borderRadius: 16,
        }}>
        {/* ------- BACK BUTTON --------- */}
        {questIndex > 0 ? (
          <View style={{ paddingLeft: 20 }}>
            <AntDesign
              name="leftcircleo"
              size={30}
              color={APP_COLORS.darkPurple}
              onPress={onBackPress}
            />
          </View>
        ) : null}

        {/* ------- PROGRESS BAR --------- */}
        <ProgressBar progressInt={progressInt} />

        {/* ------- QUESTION DISPLAY --------- */}
        <View>
          <View
            style={{ paddingBottom: 10, paddingLeft: 20, paddingRight: 20 }}>
            <Text style={{ fontSize: 18 }}>{data.question}</Text>
          </View>

          {/* ------- MARKDOWN DISPLAY --------- */}
          {data.display ? (
            <View style={componentStyles.displayContainer}>
              <Markdown style={markdownStyles}>{data.display}</Markdown>
            </View>
          ) : null}

          {/* ------- OPTIONS --------- */}
          <View style={componentStyles.optionsContainer}>
            {data.options.map((option, index) => (
              <TouchableOpacity
                key={index}
                style={{
                  ...componentStyles.optionsStyle,
                  width: width > 400 ? 300 : width / 2,
                  backgroundColor:
                    selectedOptionStyle && option === response
                      ? APP_COLORS.mediumPurple
                      : APP_COLORS.lighterPurple,
                }}
                onPress={() => onOptionPress(option)}>
                <Text
                  style={{
                    ...componentStyles.singleOption,
                    color:
                      selectedOptionStyle && option === response
                        ? APP_COLORS.semanticWhite
                        : APP_COLORS.darkPurple,
                  }}>
                  {option}
                </Text>
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
              textStyle={componentStyles.textStyle}
              buttonStyle={componentStyles.buttonStyle}
              onPress={onSubmit}
            />
          </View>
        </View>

        {/* ------- MODALS --------- */}
        <CongratulationsModal
          visible={isCongratsModalOpen}
          onClose={onCloseCongratsModal}
          questIndex={questIndex}
        />
        <HintErrorResponseModal
          visible={isHintModalOpen}
          onClose={onCloseHintsModal}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
