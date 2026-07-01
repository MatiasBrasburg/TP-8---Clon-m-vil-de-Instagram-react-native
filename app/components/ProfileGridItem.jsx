import { Image, Pressable, StyleSheet } from 'react-native';
import colors from '../styles/colors';

export default function ProfileGridItem({ post, size, onPress }) {
  return (
    <Pressable onPress={() => onPress(post)} style={[styles.container, { width: size, height: size }]}>
      <Image source={{ uri: post.imageUrl }} style={styles.image} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 1,
    backgroundColor: colors.bgDark,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    backgroundColor: colors.borderDark,
  },
});
