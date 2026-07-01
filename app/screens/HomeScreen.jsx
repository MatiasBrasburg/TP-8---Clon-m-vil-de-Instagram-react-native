import { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import FeedPost from '../components/FeedPost';
import StoriesList from '../components/StoriesList';
import { fetchCatPosts } from '../services/catApi';
import colors from '../styles/colors';
import globalStyles from '../styles/globalStyles';

export default function HomeScreen({ navigation }) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadPosts() {
      const catPosts = await fetchCatPosts(12);
      setPosts(catPosts);
      setLoading(false);
    }

    loadPosts();
  }, []);

  function openPost(post) {
    navigation.navigate('PostDetail', { post });
  }

  if (loading) {
    return (
      <SafeAreaView style={globalStyles.safeArea}>
        <StatusBar style="light" />
        <View style={globalStyles.centered}>
          <ActivityIndicator size="large" color={colors.accentPink} />
          <Text style={styles.loadingText}>Cargando feed...</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={globalStyles.safeArea}>
      <StatusBar style="light" />
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <FeedPost post={item} onOpenPost={openPost} />}
        ListHeaderComponent={
          <View>
            <Text style={styles.sectionTitle}>STORIES</Text>
            <StoriesList />
            <Text style={styles.sectionTitle}>TRENDING</Text>
          </View>
        }
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  listContent: {
    backgroundColor: colors.bgDark,
    paddingBottom: 18,
  },
  sectionTitle: {
    color: colors.textPrimary,
    fontSize: 20,
    fontWeight: '700',
    paddingHorizontal: 16,
    paddingTop: 18,
    paddingBottom: 10,
  },
  loadingText: {
    marginTop: 12,
    color: colors.textPrimary,
    fontSize: 15,
  },
});
