import ElitQuestionView from "@/components/ElitQuestionView/ElitQuestionView";
import { StyleSheet, View } from "react-native";

export default function TabTwoScreen() {
  return (
    <View style={styles.backgroundContainer}>
      <ElitQuestionView />
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
});
