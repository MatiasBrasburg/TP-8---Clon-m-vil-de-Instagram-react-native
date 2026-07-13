import { useEffect, useState } from 'react';
import { Dimensions, FlatList, Image, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import ProfileGridItem from '../components/ProfileGridItem';
import mockUsers from '../data/mockUsers';
import { fetchCatPosts } from '../services/catApi';
import colors from '../styles/colors';
import globalStyles from '../styles/globalStyles';

const screenWidth = Dimensions.get('window').width;
const gridSize = screenWidth / 3;
const profile = mockUsers[5];

export default function ProfileScreen({ navigation }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function loadProfilePosts() {
      const catPosts = await fetchCatPosts(15);
      setPosts(catPosts);
    }

    loadProfilePosts();
  }, []);

  function openPost(post) {
    navigation.navigate('PostDetail', { post });
  }

  return (
    <SafeAreaView style={globalStyles.safeArea}>
      <StatusBar style="light" />
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        numColumns={3}
        renderItem={({ item }) => (
          <ProfileGridItem post={item} size={gridSize} onPress={openPost} />
        )}
        ListHeaderComponent={
          <View>
            <View style={styles.profileHeader}>
              <Image source={{ uri: profile.avatar }} style={styles.avatar} />
              <View style={styles.statsRow}>
                <View style={styles.stat}>
                  <Text style={styles.statNumber}>{posts.length}</Text>
                  <Text style={styles.statLabel}>publicaciones</Text>
                </View>
                <View style={styles.stat}>
                  <Text style={styles.statNumber}>2.4K</Text>
                  <Text style={styles.statLabel}>seguidores</Text>
                </View>
                <View style={styles.stat}>
                  <Text style={styles.statNumber}>318</Text>
                  <Text style={styles.statLabel}>seguidos</Text>
                </View>
              </View>
            </View>

            <View style={styles.bioBlock}>
              <Text style={styles.displayName}>{profile.name}</Text>
              <Text style={styles.bio}>{profile.bio}</Text>
              <Pressable style={styles.editButton}>
                <Text style={styles.editButtonText}>Editar perfil</Text>
              </Pressable>
            </View>

            <View style={styles.gridTabs}>
              <Text style={styles.gridTabText}>Publicaciones</Text>
            </View>
          </View>
        }
        showsVerticalScrollIndicator={false}
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
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 12,
  },
  avatar: {
    width: 88,
    height: 88,
    borderRadius: 44,
    borderWidth: 3,
    borderColor: colors.accentPink,
  },
  statsRow: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginLeft: 18,
  },
  stat: {
    alignItems: 'center',
  },
  statNumber: {
    color: colors.textPrimary,
    fontSize: 17,
    fontWeight: '700',
  },
  statLabel: {
    color: colors.textSecondary,
    fontSize: 12,
    marginTop: 2,
  },
  bioBlock: {
    paddingHorizontal: 16,
    paddingBottom: 14,
  },
  displayName: {
    color: colors.textPrimary,
    fontSize: 15,
    fontWeight: '700',
    marginBottom: 3,
  },
  bio: {
    color: colors.textSecondary,
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 12,
  },
  editButton: {
    borderWidth: 1,
    borderColor: colors.borderDark,
    borderRadius: 8,
    paddingVertical: 8,
    alignItems: 'center',
    backgroundColor: colors.bgCard,
  },
  editButtonText: {
    color: colors.textPrimary,
    fontSize: 14,
    fontWeight: '700',
  },
  gridTabs: {
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: colors.borderDark,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.borderDark,
    paddingVertical: 11,
    alignItems: 'center',
  },
  gridTabText: {
    color: colors.textPrimary,
    fontSize: 13,
    fontWeight: '700',
    textTransform: 'uppercase',
  },
});
