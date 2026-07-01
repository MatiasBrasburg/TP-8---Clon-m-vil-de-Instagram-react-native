import { StyleSheet, View, Pressable } from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';
import colors from '../styles/colors';

export default function ActionBar({ liked, onLike, onComment, onShare }) {
  return (
    <View style={styles.container}>
      <View style={styles.leftActions}>
        <Pressable onPress={onLike} style={styles.button} hitSlop={8}>
          <Ionicons
            name={liked ? 'heart' : 'heart-outline'}
            size={28}
            color={liked ? colors.danger : colors.white}
          />
        </Pressable>
        <Pressable onPress={onComment} style={styles.button} hitSlop={8}>
          <Ionicons name="chatbubble-outline" size={26} color={colors.white} />
        </Pressable>
        <Pressable onPress={onShare} style={styles.button} hitSlop={8}>
          <Feather name="send" size={24} color={colors.white} />
        </Pressable>
      </View>
      <Pressable style={styles.button} hitSlop={8}>
        <Ionicons name="bookmark-outline" size={26} color={colors.white} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    paddingTop: 10,
  },
  leftActions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
  },
  button: {
    minHeight: 32,
    minWidth: 28,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
