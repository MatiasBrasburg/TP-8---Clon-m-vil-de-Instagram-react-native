import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '@/styles/colors';
import { ActionBar } from './ActionBar';
import type { Post } from '@/services/catApi';

interface FeedPostProps {
  post: Post;
  onPostPress: () => void;
}

export function FeedPost({ post, onPostPress }: FeedPostProps) {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(post.likes);

  const handleLike = () => {
    if (liked) {
      setLikeCount((prev) => prev - 1);
    } else {
      setLikeCount((prev) => prev + 1);
    }
    setLiked(!liked);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.userInfo}>
          <Image source={{ uri: post.avatar }} style={styles.avatar} />
          <View>
            <Text style={styles.username}>{post.username}</Text>
            <Text style={styles.location}>{post.location}</Text>
          </View>
        </View>
        <TouchableOpacity>
          <Ionicons name="ellipsis-horizontal" size={20} color={Colors.textPrimary} />
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={onPostPress} activeOpacity={0.95}>
        <Image source={{ uri: post.imageUrl }} style={styles.image} />
      </TouchableOpacity>

      <ActionBar
        liked={liked}
        likeCount={likeCount}
        onLikePress={handleLike}
        onCommentPress={onPostPress}
        onSharePress={() => {}}
      />

      <View style={styles.captionContainer}>
        <Text style={styles.caption}>
          <Text style={styles.captionUsername}>{post.username} </Text>
          {post.caption}
        </Text>
      </View>

      <TouchableOpacity onPress={onPostPress}>
        <Text style={styles.commentsLink}>View all {post.comments} comments</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background,
    marginBottom: 0,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  avatar: {
    width: 34,
    height: 34,
    borderRadius: 17,
    borderWidth: 2,
    borderColor: Colors.accent,
  },
  username: {
    color: Colors.textPrimary,
    fontWeight: '600',
    fontSize: 13,
  },
  location: {
    color: Colors.textSecondary,
    fontSize: 11,
  },
  image: {
    width: '100%',
    aspectRatio: 1,
  },
  captionContainer: {
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  caption: {
    color: Colors.textPrimary,
    fontSize: 13,
    lineHeight: 18,
  },
  captionUsername: {
    fontWeight: '600',
  },
  commentsLink: {
    color: Colors.textSecondary,
    fontSize: 13,
    paddingHorizontal: 12,
    paddingBottom: 8,
  },
});
