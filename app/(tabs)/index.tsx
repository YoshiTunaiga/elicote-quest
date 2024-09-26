import { ThemedButton } from "@/components/ThemedButton";
import { COLORS } from "@/constants/Colors";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, View, Text } from "react-native";

type navigationProps = {
  navigate: any;
};

export default function HomeScreen() {
  const navigation = useNavigation<navigationProps>();

  return (
    <View style={styles.backgroundContainer}>
      <View style={styles.wrapperContainer}>
        <Text style={{ fontSize: 50, fontWeight: "bold", color: "#5828D3" }}>
          Elite Quest
        </Text>
        <ThemedButton
          title="Start"
          buttonStyle={{
            padding: 10,
            margin: 10,
            width: 85,
            borderWidth: 1,
            borderColor: COLORS.darkPurple,
            borderRadius: 10,
            backgroundColor: COLORS.semanticWhite,
          }}
          textStyle={{
            color: COLORS.darkPurple,
            fontSize: 20,
            fontWeight: "bold",
            textAlign: "center",
          }}
          onPress={() => navigation.navigate("explore")}
        />
      </View>
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
  wrapperContainer: {
    backgroundColor: "white",
    paddingTop: 40,
    borderRadius: 10,
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
