import { useCallback, useEffect, useState } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import { ScrollView, View, useWindowDimensions } from "react-native";
import { questionsData } from "../../assets/mockData/questionsData";

// Components
import QuestionDisplay from "./QuestionDisplay";
import ProgressBar from "../ProgressBar";
import { CongratulationsModal } from "../modals/CongratulationsModal";
import { HintErrorResponseModal } from "../modals/HintErrorResponseModal";
import { CompletedQuestModal } from "../modals/CompletedQuestModal";

// Styles
import { APP_COLORS } from "@/constants/Colors";
import { componentStyles } from "./Stylesheet";
import { useRoute, RouteProp } from "@react-navigation/native";

type RouteParams = {
  params: {
    screen: string;
  };
};

export default function ElitQuestionView() {
  const route = useRoute<RouteProp<RouteParams>>();
  const [newScreen, setNewScreen] = useState(route?.params?.screen || false);
  const { height } = useWindowDimensions();
  const [questIndex, setQuestIndex] = useState(0);
  const data = questionsData[questIndex];
  const [response, setResponse] = useState("");
  const [selectedOptionStyle, setSelectedOptionStyle] = useState(false);
  const [isCongratsModalOpen, setIsCongratsModalOpen] = useState(false);
  const [isHintModalOpen, setIsHintModalOpen] = useState(false);
  const [isCompletedModalOpen, setIsCompletedModalOpen] = useState(false);
  const progressState = 320 / questionsData.length;
  const [initiateQuest, setInitiateQuest] = useState(true);
  const [progressInt, setProgressInt] = useState(0);

  useEffect(() => {
    if (initiateQuest) {
      setQuestIndex(0);
      setResponse("");
      setSelectedOptionStyle(false);
      setInitiateQuest(false);
      setProgressInt(0);
      setNewScreen(false);
    }
    return () => {
      setInitiateQuest(false);
    };
  }, [initiateQuest, newScreen]);

  const onOptionPress = (option: string) => {
    setResponse(option);
    setSelectedOptionStyle(true);
  };

  const onSubmit = () => {
    if (response === data.answer) {
      if (questIndex === questionsData.length - 1) {
        setProgressInt(progressInt + progressState);
        setIsCompletedModalOpen(!isCompletedModalOpen);
      } else {
        setIsCongratsModalOpen(!isHintModalOpen);
      }
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

  const onRestart = () => {
    setIsCompletedModalOpen(!isCompletedModalOpen);
    setInitiateQuest(true);
  };

  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <View style={componentStyles.backgroundContainer}>
        <View
          style={{
            ...componentStyles.wrapperContainer,
            height: height / 1.2,
            paddingTop: questIndex > 0 ? 10 : 40,
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
          <ProgressBar
            progressInt={progressInt}
            initiateQuest={initiateQuest}
          />

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
          <CompletedQuestModal
            visible={isCompletedModalOpen}
            onClose={onRestart}
          />
        </View>
      </View>
    </ScrollView>
  );
}
