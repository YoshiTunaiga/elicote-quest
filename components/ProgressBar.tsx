import React, { useState, useEffect } from "react";
import { View, StyleSheet, Animated } from "react-native";
import { APP_COLORS } from "@/constants/Colors";

export type ThemedProgressBarProps = {
  progressInt: number;
  initiateQuest: boolean;
};

const ProgressBar = ({
  progressInt = 0,
  initiateQuest,
}: ThemedProgressBarProps) => {
  const [progress, setProgress] = useState(new Animated.Value(progressInt));

  useEffect(() => {
    if (progressInt) {
      setProgress(new Animated.Value(initiateQuest ? 0 : progressInt));
    }
  }, [progressInt, initiateQuest]);

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.bar, { width: progress }]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
    width: 320,
    height: 20,
    backgroundColor: APP_COLORS.barColor,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 20,
    marginRight: 20,
  },
  bar: {
    height: 20,
    backgroundColor: APP_COLORS.darkPurple,
  },
});

export default ProgressBar;
