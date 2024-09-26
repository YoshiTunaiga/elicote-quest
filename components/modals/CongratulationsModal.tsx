import { View, Text, StyleSheet, Dimensions } from "react-native";

// Components
import { ThemedButton } from "../ThemedButton";

// Styles
import { APP_COLORS } from "@/constants/Colors";
import { ThemedModal } from "./ThemedModal";
import Confetti from "../Confetti";

type CongratulationsModalProps = {
  visible: boolean;
  onClose: () => void;
};

const { width, height } = Dimensions.get("window");

// Helper function to generate random confetti properties
const generateConfetti = (count = 30) => {
  return new Array(count).fill(100).map(() => ({
    x: Math.random() * width,
    y: Math.random() * height,
    size: Math.random() * 8 + 6,
    color: `hsl(${Math.random() * 360}, 100%, 50%)`,
    delay: Math.random() * 1000,
    duration: Math.random() * 3000 + 2000,
  }));
};

const getRandomColor = () => {
  const colors = ["red", "blue", "green", "yellow", "purple"];
  return colors[Math.floor(Math.random() * colors.length)];
};

export function CongratulationsModal({
  visible,
  onClose,
}: CongratulationsModalProps) {
  const confettiArray = generateConfetti();

  return (
    <ThemedModal visible={visible}>
      <View style={styles.modalWrapper}>
        <Confetti />
        <Text style={styles.title}>Congratulations!</Text>
        <Text style={styles.text}>You have earned an Expo badge!</Text>

        <ThemedButton
          title="Close"
          onPress={onClose}
          textStyle={{ color: APP_COLORS.darkPurple }}
          buttonStyle={{
            backgroundColor: APP_COLORS.semanticWhite,
            padding: 10,
            borderRadius: 10,
            borderWidth: 1,
            borderColor: APP_COLORS.darkPurple,
          }}
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
});
