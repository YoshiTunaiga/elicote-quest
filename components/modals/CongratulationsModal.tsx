import { View, Text, StyleSheet } from "react-native";

// Components
import { ThemedButton } from "../ThemedComponents/ThemedButton";
import { ThemedModal } from "./ThemedModal";
import Confetti from "../Confetti";

// Styles
import { APP_COLORS } from "@/constants/Colors";

type CongratulationsModalProps = {
  visible: boolean;
  onClose: () => void;
  questIndex: number;
};

export function CongratulationsModal({
  visible,
  onClose,
  questIndex,
}: CongratulationsModalProps) {
  return (
    <ThemedModal visible={visible}>
      <View style={styles.modalWrapper}>
        <Confetti />
        <Text style={styles.title}>Congratulations!</Text>
        {questIndex > 1 ? (
          <Text style={styles.text}>You have earned an Expo badge!</Text>
        ) : (
          <Text style={styles.text}>Your answer was correct!</Text>
        )}

        <ThemedButton
          title="Close"
          onPress={onClose}
          textStyle={styles.buttonTextStyle}
          buttonStyle={styles.buttonStyle}
        />
      </View>
    </ThemedModal>
  );
}

const styles = StyleSheet.create({
  modalWrapper: {
    padding: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: APP_COLORS.semanticWhite,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    color: APP_COLORS.darkPurple,
    textAlign: "center",
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
    color: APP_COLORS.darkPurple,
    textAlign: "center",
  },
  buttonStyle: {
    backgroundColor: APP_COLORS.semanticWhite,
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: APP_COLORS.darkPurple,
  },
  buttonTextStyle: { color: APP_COLORS.darkPurple },
});
