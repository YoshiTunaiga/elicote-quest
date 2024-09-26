import { StyleSheet } from "react-native";
import { COLORS } from "@/constants/Colors";

export const componentStyles = StyleSheet.create({
  backgroundContainer: {
    backgroundColor: COLORS.lightPurple,
    flex: 1,
    paddingTop: 30,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
  },
  wrapperContainer: {
    backgroundColor: COLORS.semanticWhite,
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
    color: COLORS.darkPurple,
    fontWeight: "bold",
    fontSize: 20,
  },
  displayContainer: {
    marginLeft: 20,
    marginRight: 20,
    paddingTop: 20,
    paddingLeft: 10,
    paddingBottom: 20,
    backgroundColor: COLORS.yellowCodeBlock,
  },
  textStyle: {
    color: COLORS.semanticWhite,
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonStyle: {
    padding: 10,
    margin: 10,
    width: 150,
    borderRadius: 10,
    backgroundColor: COLORS.darkPurple,
  },
});

export const markdownStyles = StyleSheet.create({
  text: {
    color: "#5828D3",
    fontSize: 16,
  },
});
