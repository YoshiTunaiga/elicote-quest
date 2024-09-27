import { useState } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import { SafeAreaView, ScrollView, View, Dimensions } from "react-native";
import { questionsData } from "../../assets/mockData/questionsData";

// Components
import QuestionDisplay from "./QuestionDisplay";
import ProgressBar from "../ProgressBar";
import { CongratulationsModal } from "../modals/CongratulationsModal";
import { HintErrorResponseModal } from "../modals/HintErrorResponseModal";

// Styles
import { APP_COLORS } from "@/constants/Colors";

const { height } = Dimensions.get("window");

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
        <QuestionDisplay
          data={data}
          response={response}
          selectedOptionStyle={selectedOptionStyle}
          onOptionPress={onOptionPress}
          onSubmit={onSubmit}
        />

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
