import { StyleSheet } from "react-native";
import Modal from "react-native-modal";

// Styles
import { APP_COLORS } from "@/constants/Colors";

type ThemedModalProps = {
  visible: boolean;
  children: React.ReactNode;
};

export function ThemedModal({ visible, children }: ThemedModalProps) {
  return (
    <Modal
      isVisible={visible}
      backdropColor={APP_COLORS.lightPurple}
      backdropOpacity={0.8}
      animationIn="zoomInDown"
      animationOut="zoomOutUp"
      animationInTiming={600}
      animationOutTiming={600}
      backdropTransitionInTiming={600}
      backdropTransitionOutTiming={600}
      style={styles.modalContainer}>
      {children}
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    alignSelf: "center",
    width: "80%",
  },
});
