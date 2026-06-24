import React from 'react';
import { TouchableOpacity, Image, StyleSheet, Dimensions } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const ITEM_SIZE = SCREEN_WIDTH / 3;

interface ProfileGridItemProps {
  imageUrl: string;
  onPress: () => void;
}

export function ProfileGridItem({ imageUrl, onPress }: ProfileGridItemProps) {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
      <Image source={{ uri: imageUrl }} style={styles.image} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  image: {
    width: ITEM_SIZE,
    height: ITEM_SIZE,
    borderWidth: 0.5,
    borderColor: '#000',
  },
});
