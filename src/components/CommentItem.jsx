import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '../styles/colors';

export function CommentItem({ username, text }) {
  return (
    <View style={styles.container}>
      <Text style={styles.username}>{username}</Text>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 4,
    paddingHorizontal: 12,
    gap: 6,
  },
  username: {
    color: Colors.textPrimary,
    fontWeight: '600',
    fontSize: 13,
  },
  text: {
    color: Colors.textPrimary,
    fontSize: 13,
    flexShrink: 1,
  },
});
