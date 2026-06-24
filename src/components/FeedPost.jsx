import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../styles/colors';

export function FeedPost({ post, onPostPress }) {
  const [liked, setLiked] = useState(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPostPress} activeOpacity={0.95}>
        <Image source={{ uri: post.imageUrl }} style={styles.image} />
      </TouchableOpacity>

      <View style={styles.footer}>
        <View style={styles.userInfo}>
          <Image source={{ uri: post.avatar }} style={styles.avatarMini} />
          <Text style={styles.username}>{post.username}</Text>
        </View>

        <View style={styles.actions}>
          <TouchableOpacity
            onPress={() => setLiked(!liked)}
            style={styles.actionBtn}
          >
            <Ionicons
              name={liked ? 'heart' : 'heart-outline'}
              size={20}
              color={liked ? Colors.likeRed : Colors.textPrimary}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={onPostPress} style={styles.actionBtn}>
            <Ionicons name="chatbubble-outline" size={18} color={Colors.textPrimary} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionBtn}>
            <Ionicons name="paper-plane-outline" size={18} color={Colors.textPrimary} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.card,
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 16,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  image: {
    width: '100%',
    aspectRatio: 4 / 5,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  avatarMini: {
    width: 28,
    height: 28,
    borderRadius: 14,
    borderWidth: 1.5,
    borderColor: Colors.accent,
  },
  username: {
    color: Colors.textPrimary,
    fontSize: 13,
    fontWeight: '500',
  },
  actions: {
    flexDirection: 'row',
    gap: 12,
  },
  actionBtn: {
    padding: 2,
  },
});
