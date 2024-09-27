import { StyleSheet, View } from "react-native";

import ElitQuestionView from "@/components/ElitQuestionView/ElitQuestionView";
import { APP_COLORS } from "@/constants/Colors";

export default function QuestComponent() {
  return (
    <View style={styles.backgroundContainer}>
      <ElitQuestionView />
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundContainer: {
    backgroundColor: APP_COLORS.lightPurple,
    flex: 1,
    paddingTop: 30,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
  },
});
