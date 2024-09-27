import { Text, Pressable, type TextProps } from "react-native";

type ThemedTextProps = TextProps & {
  title?: string;
  textStyle?: object;
  buttonStyle?: object;
};

export function ThemedButton({
  title = "",
  textStyle = {},
  buttonStyle = {},
  onPress,
}: ThemedTextProps) {
  return (
    <Pressable style={buttonStyle} onPress={onPress}>
      <Text style={textStyle}>{title}</Text>
    </Pressable>
  );
}
