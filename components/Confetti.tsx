import React, { useEffect } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import Svg, { Rect } from "react-native-svg";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withRepeat,
  withDelay,
  Easing,
  withSequence,
} from "react-native-reanimated";

const { width, height } = Dimensions.get("window");

interface ConfettiProps {
  xAxis: number;
  yAxis: number;
  size: number;
  color: string;
  delay: number;
  duration: number;
}

// Helper function to generate random confetti properties
const generateConfetti = (count: number = 30): ConfettiProps[] => {
  return new Array(count).fill(0).map(() => ({
    xAxis: Math.random() * width,
    yAxis: Math.random() * height,
    size: Math.random() * 8 + 6,
    color: `hsl(${Math.random() * 360}, 100%, 50%)`,
    delay: Math.random() * 1000,
    duration: Math.random() * 3000 + 2000,
  }));
};

const Confetti: React.FC = () => {
  const confettiArray = generateConfetti();

  return (
    <View style={styles.container}>
      {confettiArray.map((confetti, index) => (
        <ConfettiPiece key={index} {...confetti} />
      ))}
    </View>
  );
};

interface ConfettiPieceProps extends ConfettiProps {}

const ConfettiPiece: React.FC<ConfettiPieceProps> = ({
  xAxis,
  size,
  color,
  delay,
  duration,
}) => {
  const translateY = useSharedValue(-size);

  useEffect(() => {
    translateY.value = withDelay(
      delay,
      withRepeat(
        withSequence(
          withTiming(height + size, { duration, easing: Easing.bounce }),
          withTiming(-size, { duration: 0 })
        ),
        -1
      )
    );
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
  }));

  return (
    <Animated.View
      style={[styles.confettiPiece, animatedStyle, { left: xAxis }]}>
      <Svg height={size} width={size}>
        <Rect width={size} height={size} fill={color} />
      </Svg>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
  },
  confettiPiece: {
    position: "absolute",
  },
});

export default Confetti;
