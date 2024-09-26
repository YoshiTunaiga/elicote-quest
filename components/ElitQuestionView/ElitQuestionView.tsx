import { useState } from "react";
import Markdown from "react-native-markdown-display";
import AntDesign from "@expo/vector-icons/AntDesign";
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
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

export default function ElitQuestionView() {
  const [questObj, setQuestObj] = useState(0);
  const data = questionsData[questObj];
  const [response, setResponse] = useState("");
  const [selectedOptionStyle, setSelectedOptionStyle] = useState(false);
  const [isCongratsModalOpen, setIsCongratsModalOpen] = useState(false);
  const [isHintModalOpen, setIsHintModalOpen] = useState(false);
  const [progressInt, setProgressInt] = useState(50);

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
    if (questObj > 0) {
      setQuestObj(questObj - 1);
      setProgressInt(progressInt - 50);
      setResponse("");
      setSelectedOptionStyle(false);
    }
  };

  const onCloseCongratsModal = () => {
    setIsCongratsModalOpen(!isCongratsModalOpen);
    setQuestObj(questObj + 1);
    setProgressInt(progressInt + 50);
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
          height: "100%",
          backgroundColor: APP_COLORS.semanticWhite,
          paddingTop: questObj > 0 ? 10 : 40,
          borderRadius: 16,
        }}>
        {questObj > 0 ? (
          <View style={{ paddingLeft: 20 }}>
            <AntDesign
              name="leftcircleo"
              size={30}
              color={APP_COLORS.darkPurple}
              onPress={onBackPress}
            />
          </View>
        ) : null}
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
                  backgroundColor:
                    selectedOptionStyle && option === response
                      ? APP_COLORS.mediumPurple
                      : APP_COLORS.lightPurple,
                }}
                onPress={() => onOptionPress(option)}>
                <Text style={componentStyles.singleOption}>{option}</Text>
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
        />
        <HintErrorResponseModal
          visible={isHintModalOpen}
          onClose={onCloseHintsModal}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
