import { Text, TouchableOpacity, type TextProps } from "react-native";

type ThemedTextProps = TextProps & {
  title?: string;
  textStyle?: object;
  buttonStyle?: object;
};

export function ThemedButton({
  title,
  textStyle,
  buttonStyle,
  onPress,
}: ThemedTextProps) {
  return (
    <TouchableOpacity style={buttonStyle} onPress={onPress}>
      <Text style={textStyle}>{title}</Text>
    </TouchableOpacity>
  );
}
