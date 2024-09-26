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
}: ThemedTextProps) {
  return (
    <TouchableOpacity style={buttonStyle}>
      <Text style={textStyle}>{title}</Text>
    </TouchableOpacity>
  );
}
