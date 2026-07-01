import { useState } from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import ActionBar from './ActionBar';
import colors from '../styles/colors';

export default function FeedPost({ post, onOpenPost }) {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(post.likes);

  function handleLike() {
    setLiked((current) => !current);
    setLikes((current) => current + (liked ? -1 : 1));
  }

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
        <Ionicons name="ellipsis-horizontal" size={22} color={colors.white} />
      </View>

      <Pressable onPress={() => onOpenPost(post)}>
        <Image source={{ uri: post.imageUrl }} style={styles.postImage} />
      </Pressable>

      <ActionBar
        liked={liked}
        onLike={handleLike}
        onComment={() => onOpenPost(post)}
        onShare={() => {}}
      />

      <View style={styles.body}>
        <View style={styles.footerMeta}>
          <Image source={{ uri: post.avatar }} style={styles.footerAvatar} />
          <View style={styles.footerUser}>
            <Text style={styles.username}>{post.username}</Text>
            <Text style={styles.location}>{post.location}</Text>
          </View>
          <Text style={styles.likes}>{likes.toLocaleString('es-AR')} Me gusta</Text>
        </View>
        <Text style={styles.caption}>
          <Text style={styles.username}>{post.username}</Text> {post.caption}
        </Text>
        <Pressable onPress={() => onOpenPost(post)}>
          <Text style={styles.comments}>Ver los {post.comments.length} comentarios</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.bgCard,
    borderRadius: 15,
    overflow: 'hidden',
    marginHorizontal: 12,
    marginBottom: 18,
    paddingBottom: 12,
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
    width: 36,
    height: 36,
    borderRadius: 18,
  },
  username: {
    color: colors.textPrimary,
    fontSize: 14,
    fontWeight: '700',
  },
  location: {
    color: colors.textSecondary,
    fontSize: 12,
    marginTop: 1,
  },
  postImage: {
    width: '100%',
    aspectRatio: 1,
    resizeMode: 'cover',
    backgroundColor: colors.borderDark,
  },
  body: {
    paddingHorizontal: 12,
    paddingTop: 8,
  },
  footerMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  footerAvatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 9,
  },
  footerUser: {
    flex: 1,
  },
  likes: {
    color: colors.textSecondary,
    fontSize: 13,
    fontWeight: '700',
  },
  caption: {
    color: colors.textPrimary,
    fontSize: 14,
    lineHeight: 19,
  },
  comments: {
    color: colors.textSecondary,
    fontSize: 14,
    marginTop: 6,
  },
});
