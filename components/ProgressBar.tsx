// React native progress bar component in tsx format
import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Animated } from "react-native";

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
    backgroundColor: "#dfc8c8",
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 20,
    marginRight: 20,
  },
  bar: {
    height: 20,
    backgroundColor: "#5828D3",
    borderRadius: 10,
  },
});

export default ProgressBar;
