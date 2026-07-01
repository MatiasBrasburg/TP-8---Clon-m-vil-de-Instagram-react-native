import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import mockUsers from '../data/mockUsers';
import colors from '../styles/colors';

const stories = [
  {
    id: 'you',
    username: 'Tu historia',
    avatar: 'https://i.pravatar.cc/150?img=1',
  },
];

mockUsers.forEach((user) => {
  stories.push({
    id: user.username,
    username: user.username,
    avatar: user.avatar,
  });
});

function StoryItem({ item }) {
  return (
    <View style={styles.story}>
      <View style={styles.ring}>
        <Image source={{ uri: item.avatar }} style={styles.avatar} />
      </View>
      <Text style={styles.username} numberOfLines={1}>
        {item.username}
      </Text>
    </View>
  );
}

export default function StoriesList() {
  return (
    <View style={styles.container}>
      <FlatList
        data={stories}
        horizontal
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <StoryItem item={item} />}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.content}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.borderDark,
    backgroundColor: colors.bgDark,
  },
  content: {
    paddingHorizontal: 14,
    paddingBottom: 14,
  },
  story: {
    width: 76,
    alignItems: 'center',
    marginRight: 4,
  },
  ring: {
    width: 66,
    height: 66,
    borderRadius: 33,
    borderWidth: 3,
    borderColor: colors.storyPurple,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    width: 58,
    height: 58,
    borderRadius: 29,
  },
  username: {
    marginTop: 5,
    color: colors.textSecondary,
    fontSize: 13,
    maxWidth: 70,
  },
});
