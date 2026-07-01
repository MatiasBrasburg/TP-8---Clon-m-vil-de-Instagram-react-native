import { useState } from 'react';
import { FlatList, Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import ActionBar from '../components/ActionBar';
import CommentItem from '../components/CommentItem';
import colors from '../styles/colors';
import globalStyles from '../styles/globalStyles';

export default function PostDetailScreen({ route }) {
  const { post } = route.params;
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(post.likes);

  function handleLike() {
    setLiked((current) => !current);
    setLikes((current) => current + (liked ? -1 : 1));
  }

  return (
    <SafeAreaView style={globalStyles.safeArea}>
      <StatusBar style="light" />
      <FlatList
        data={post.comments}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={
          <View>
            <View style={styles.header}>
              <Image source={{ uri: post.avatar }} style={styles.avatar} />
              <View>
                <Text style={styles.username}>{post.username}</Text>
                <Text style={styles.location}>{post.location}</Text>
              </View>
            </View>
            <Image source={{ uri: post.imageUrl }} style={styles.image} />
            <ActionBar liked={liked} onLike={handleLike} onComment={() => {}} onShare={() => {}} />
            <View style={styles.body}>
              <Text style={styles.likes}>{likes.toLocaleString('es-AR')} Me gusta</Text>
              <Text style={styles.caption}>
                <Text style={styles.username}>{post.username}</Text> {post.caption}
              </Text>
              <Text style={styles.sectionTitle}>Comentarios</Text>
            </View>
          </View>
        }
        renderItem={({ item }) => (
          <View style={styles.commentWrapper}>
            <CommentItem comment={item} />
          </View>
        )}
        contentContainerStyle={styles.content}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  content: {
    backgroundColor: colors.bgDark,
    paddingBottom: 24,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.borderDark,
    backgroundColor: colors.bgCard,
  },
  avatar: {
    width: 38,
    height: 38,
    borderRadius: 19,
  },
  username: {
    color: colors.textPrimary,
    fontSize: 14,
    fontWeight: '700',
  },
  location: {
    color: colors.textSecondary,
    fontSize: 12,
    marginTop: 2,
  },
  image: {
    width: '100%',
    aspectRatio: 1,
    resizeMode: 'cover',
    backgroundColor: colors.borderDark,
  },
  body: {
    paddingHorizontal: 12,
    paddingTop: 8,
    backgroundColor: colors.bgCard,
    paddingBottom: 12,
  },
  likes: {
    color: colors.textPrimary,
    fontSize: 14,
    fontWeight: '700',
    marginBottom: 6,
  },
  caption: {
    color: colors.textPrimary,
    fontSize: 14,
    lineHeight: 19,
  },
  sectionTitle: {
    color: colors.textPrimary,
    fontSize: 16,
    fontWeight: '700',
    marginTop: 18,
    marginBottom: 4,
  },
  commentWrapper: {
    paddingHorizontal: 12,
    backgroundColor: colors.bgDark,
  },
});
