import Markdown from "react-native-markdown-display";
import { Text, TouchableOpacity, View, Dimensions } from "react-native";

// Components
import { ThemedButton } from "../ThemedComponents/ThemedButton";

// Styles
import { componentStyles, markdownStyles } from "./Stylesheet";
import { APP_COLORS } from "@/constants/Colors";

const { width } = Dimensions.get("window");

type QuestionDisplayProps = {
  data: any;
  response: string;
  selectedOptionStyle: boolean;
  onOptionPress: (option: string) => void;
  onSubmit: () => void;
};

export default function QuestionDisplay({
  data,
  response,
  selectedOptionStyle,
  onOptionPress,
  onSubmit,
}: QuestionDisplayProps) {
  return (
    <View>
      <View style={{ paddingBottom: 10, paddingLeft: 20, paddingRight: 20 }}>
        <Text style={{ fontSize: 18 }}>{data.question}</Text>
      </View>

      {/* ------- MARKDOWN DISPLAY --------- */}
      {data.display ? (
        <View style={componentStyles.displayContainer}>
          <Markdown style={markdownStyles}>{data.display}</Markdown>
        </View>
      ) : null}

      {/* ------- OPTIONS --------- */}
      <View style={componentStyles.optionsContainer}>
        {data.options.map((option: string, index: number) => (
          <TouchableOpacity
            key={index}
            style={{
              ...componentStyles.optionsStyle,
              width: width > 400 ? 300 : width / 2,
              backgroundColor:
                selectedOptionStyle && option === response
                  ? APP_COLORS.mediumPurple
                  : APP_COLORS.lighterPurple,
            }}
            onPress={() => onOptionPress(option)}>
            <Text
              style={{
                ...componentStyles.singleOption,
                color:
                  selectedOptionStyle && option === response
                    ? APP_COLORS.semanticWhite
                    : APP_COLORS.darkPurple,
              }}>
              {option}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* ------- SUBMIT BUTTON --------- */}
      <View
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingTop: 10,
        }}>
        <ThemedButton
          title="SUBMIT"
          textStyle={componentStyles.textStyle}
          buttonStyle={componentStyles.buttonStyle}
          onPress={onSubmit}
        />
      </View>
    </View>
  );
}
