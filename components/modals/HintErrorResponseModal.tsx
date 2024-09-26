import { View, Text, StyleSheet } from "react-native";

// Components
import { ThemedButton } from "../ThemedButton";

// Styles
import { APP_COLORS } from "@/constants/Colors";
import { ThemedModal } from "./ThemedModal";

type HintErrorResponseModalProps = {
  visible: boolean;
  onClose: () => void;
};

export function HintErrorResponseModal({
  visible,
  onClose,
}: HintErrorResponseModalProps) {
  return (
    <ThemedModal visible={visible}>
      <View style={styles.modalWrapper}>
        <Text style={styles.title}>HINT</Text>
        <Text style={styles.text}>
          Think about how JavaScript handles different data types
        </Text>
        <ThemedButton
          title="RETRY"
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
    padding: 25,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: APP_COLORS.semanticWhite,
  },
  title: {
    fontSize: 30,
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
