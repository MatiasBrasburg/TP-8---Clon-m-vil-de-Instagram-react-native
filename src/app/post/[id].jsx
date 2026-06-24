import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useLocalSearchParams } from 'expo-router';
import { Colors } from '../../styles/colors';
import { mockComments } from '../../data/mockComments';
import { ActionBar } from '../../components/ActionBar';
import { CommentItem } from '../../components/CommentItem';

const SCREEN_WIDTH = Dimensions.get('window').width;

export default function PostDetailScreen() {
  const { id } = useLocalSearchParams();
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(1240);

  const handleLike = () => {
    if (liked) {
      setLikeCount((prev) => prev - 1);
    } else {
      setLikeCount((prev) => prev + 1);
    }
    setLiked(!liked);
  };

  return (
    <SafeAreaView style={styles.safeArea} edges={['bottom']}>
      <ScrollView style={styles.scroll}>
        <Image
          source={{ uri: `https://cdn2.thecatapi.com/images/${id}.jpg` }}
          style={styles.image}
          resizeMode="contain"
        />

        <View style={styles.info}>
          <View style={styles.userRow}>
            <Image
              source={{ uri: 'https://placedog.net/200/200' }}
              style={styles.avatar}
            />
            <Text style={styles.username}>@gato_lover</Text>
          </View>

          <ActionBar
            liked={liked}
            likeCount={likeCount}
            onLikePress={handleLike}
            onCommentPress={() => {}}
            onSharePress={() => {}}
          />

          <View style={styles.captionSection}>
            <Text style={styles.caption}>
              <Text style={styles.captionUser}>@gato_lover </Text>
              ¡Miren qué lindo este gatito! 🐱 #CatAPI #ReactNative
            </Text>
          </View>

          <View style={styles.commentsSection}>
            {mockComments.map((comment) => (
              <CommentItem
                key={comment.id}
                username={comment.username}
                text={comment.text}
              />
            ))}
          </View>

          <Text style={styles.date}>Publicado hace 2 días</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  scroll: {
    flex: 1,
  },
  image: {
    width: SCREEN_WIDTH,
    height: SCREEN_WIDTH,
    backgroundColor: Colors.black,
  },
  info: {
    paddingTop: 8,
  },
  userRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    borderWidth: 1.5,
    borderColor: Colors.accent,
  },
  username: {
    color: Colors.textPrimary,
    fontWeight: '600',
    fontSize: 14,
  },
  captionSection: {
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  caption: {
    color: Colors.textPrimary,
    fontSize: 13,
    lineHeight: 18,
  },
  captionUser: {
    fontWeight: '600',
  },
  commentsSection: {
    paddingVertical: 8,
  },
  date: {
    color: Colors.textSecondary,
    fontSize: 10,
    textTransform: 'uppercase',
    paddingHorizontal: 12,
    paddingBottom: 16,
    letterSpacing: 0.5,
  },
});
