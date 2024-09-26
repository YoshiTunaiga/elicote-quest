import { StyleSheet, View, Text } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.backgroundContainer}>
      <View style={styles.wrapperContainer}>
        <Text style={{ fontSize: 50, fontWeight: "bold", color: "#5828D3" }}>
          Elite Quest
        </Text>
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
