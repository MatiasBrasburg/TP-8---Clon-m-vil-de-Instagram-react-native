import { StyleSheet, Text, View } from 'react-native';
import colors from '../styles/colors';

export default function CommentItem({ comment }) {
  return (
    <View style={styles.container}>
      <Text style={styles.username}>{comment.username}</Text>
      <Text style={styles.text}>{comment.text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 6,
    paddingVertical: 7,
  },
  username: {
    color: colors.textPrimary,
    fontSize: 14,
    fontWeight: '700',
  },
  text: {
    flex: 1,
    color: colors.textSecondary,
    fontSize: 14,
    lineHeight: 19,
  },
});
