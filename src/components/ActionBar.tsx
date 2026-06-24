import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '@/styles/colors';

interface ActionBarProps {
  liked: boolean;
  likeCount: number;
  onLikePress: () => void;
  onCommentPress: () => void;
  onSharePress: () => void;
}

export function ActionBar({ liked, likeCount, onLikePress, onCommentPress, onSharePress }: ActionBarProps) {
  return (
    <View style={styles.container}>
      <View style={styles.actions}>
        <TouchableOpacity onPress={onLikePress} style={styles.actionButton}>
          <Ionicons
            name={liked ? 'heart' : 'heart-outline'}
            size={24}
            color={liked ? Colors.likeRed : Colors.textPrimary}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={onCommentPress} style={styles.actionButton}>
          <Ionicons name="chatbubble-outline" size={22} color={Colors.textPrimary} />
        </TouchableOpacity>
        <TouchableOpacity onPress={onSharePress} style={styles.actionButton}>
          <Ionicons name="paper-plane-outline" size={22} color={Colors.textPrimary} />
        </TouchableOpacity>
      </View>
      <Text style={styles.likes}>{likeCount.toLocaleString()} likes</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  actions: {
    flexDirection: 'row',
    gap: 16,
    marginBottom: 6,
  },
  actionButton: {
    padding: 4,
  },
  likes: {
    color: Colors.textPrimary,
    fontWeight: '700',
    fontSize: 14,
  },
});
