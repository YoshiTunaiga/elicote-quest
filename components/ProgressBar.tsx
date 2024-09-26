// React native progress bar component in tsx format
import { APP_COLORS } from "@/constants/Colors";
import React, { useState, useEffect } from "react";
import { View, StyleSheet, Animated } from "react-native";

export type ThemedProgressBarProps = {
  progressInt: number;
};

const ProgressBar = ({ progressInt }: ThemedProgressBarProps) => {
  const [progress, setProgress] = useState(new Animated.Value(progressInt));

  useEffect(() => {
    if (progressInt) {
      setProgress(new Animated.Value(progressInt));
    }
  }, [progressInt]);

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.bar, { width: progress }]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 20,
    backgroundColor: APP_COLORS.barColor,
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 20,
    marginRight: 20,
  },
  bar: {
    height: 20,
    backgroundColor: APP_COLORS.darkPurple,
    borderRadius: 10,
  },
});

export default ProgressBar;
