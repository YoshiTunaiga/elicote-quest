import { View, Text, StyleSheet } from "react-native";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";

// Components
import { ThemedButton } from "../ThemedComponents/ThemedButton";
import { ThemedModal } from "./ThemedModal";
import Confetti from "../animations/Confetti";

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
  const isTimeForBadge = questIndex === 2 || questIndex === 7;
  return (
    <ThemedModal visible={visible}>
      {isTimeForBadge && (
        <SimpleLineIcons
          name="badge"
          size={150}
          color="black"
          style={styles.badgeIcon}
        />
      )}

      <View style={styles.modalWrapper}>
        <Confetti />
        <Text style={styles.title}>Congratulations!</Text>
        {isTimeForBadge ? (
          <Text style={styles.text}>You have earned an Expo badge!</Text>
        ) : (
          <Text style={styles.text}>Your answer was correct!</Text>
        )}

        <ThemedButton
          title="Close"
          onPress={onClose}
          textStyle={styles.buttonTextStyle}
          buttonStyle={{
            ...styles.buttonStyle,
            marginTop: isTimeForBadge ? 60 : 0,
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
  badgeIcon: {
    color: APP_COLORS.darkPurple,
    opacity: 0.3,
    textAlign: "center",
    position: "absolute",
    alignSelf: "center",
    zIndex: 1,
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
