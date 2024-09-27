import { useNavigation } from "@react-navigation/native";
import { StyleSheet, View, Text } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import { ThemedButton } from "@/components/ThemedComponents/ThemedButton";

import { APP_COLORS } from "@/constants/Colors";

type navigationProps = {
  navigate: any;
};

export default function HomeScreen() {
  const navigation = useNavigation<navigationProps>();

  const onStart = () => {
    navigation.navigate("explore");
  };

  return (
    <View style={styles.backgroundContainer}>
      <View style={styles.wrapperContainer}>
        <HelloWave />
        <Text style={styles.titleText}>Elite Quest</Text>
        <ThemedButton
          title="START"
          buttonStyle={styles.buttonStyle}
          textStyle={styles.buttonTextStyle}
          onPress={onStart}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundContainer: {
    backgroundColor: APP_COLORS.lightPurple,
    flex: 1,
    padding: 10,
  },
  wrapperContainer: {
    backgroundColor: APP_COLORS.lightPurple,
    borderWidth: 5,
    borderColor: APP_COLORS.semanticWhite,
    paddingTop: 40,
    borderRadius: 10,
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  titleText: {
    fontSize: 50,
    fontWeight: "bold",
    color: APP_COLORS.darkPurple,
  },
  buttonStyle: {
    padding: 10,
    margin: 10,
    width: 90,
    borderWidth: 1,
    borderColor: APP_COLORS.darkPurple,
    borderRadius: 10,
    backgroundColor: APP_COLORS.semanticWhite,
  },
  buttonTextStyle: {
    color: APP_COLORS.darkPurple,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
});
