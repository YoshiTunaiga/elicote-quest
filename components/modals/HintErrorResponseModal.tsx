import { View, Text, StyleSheet } from "react-native";

// Components
import { ThemedButton } from "../ThemedButton";

// Styles
import { COLORS } from "@/constants/Colors";
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
          textStyle={{ color: COLORS.darkPurple }}
          buttonStyle={{
            backgroundColor: COLORS.semanticWhite,
            padding: 10,
            borderRadius: 10,
            borderWidth: 1,
            borderColor: COLORS.darkPurple,
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
    backgroundColor: COLORS.semanticWhite,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
    color: COLORS.darkPurple,
    textAlign: "center",
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
    color: COLORS.darkPurple,
    textAlign: "center",
  },
});
