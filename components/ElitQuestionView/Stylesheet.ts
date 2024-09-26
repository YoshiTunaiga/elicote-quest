import { StyleSheet } from "react-native";
import { APP_COLORS } from "@/constants/Colors";

export const componentStyles = StyleSheet.create({
  backgroundContainer: {
    backgroundColor: APP_COLORS.lightPurple,
    flex: 1,
    padding: 10,
  },
  wrapperContainer: {
    backgroundColor: APP_COLORS.semanticWhite,
    paddingTop: 40,
    borderRadius: 10,
    flex: 1,
  },
  optionsContainer: {
    paddingTop: 10,
    paddingRight: 20,
    paddingLeft: 20,
    display: "flex",
    gap: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  optionsStyle: {
    marginLeft: 20,
    marginRight: 20,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    padding: 20,
    height: 60,
    width: "70%",
  },
  singleOption: {
    color: APP_COLORS.darkPurple,
    fontWeight: "bold",
    fontSize: 20,
  },
  displayContainer: {
    marginLeft: 20,
    marginRight: 20,
    paddingTop: 20,
    paddingLeft: 10,
    paddingBottom: 20,
    backgroundColor: APP_COLORS.yellowCodeBlock,
  },
  textStyle: {
    color: APP_COLORS.semanticWhite,
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonStyle: {
    padding: 10,
    margin: 10,
    width: 150,
    borderRadius: 10,
    backgroundColor: APP_COLORS.darkPurple,
  },
});

export const markdownStyles = StyleSheet.create({
  text: {
    color: APP_COLORS.darkPurple,
    fontSize: 16,
  },
});
