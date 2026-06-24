import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import axios from 'axios';
import { Colors } from '@/styles/colors';
import { currentUser } from '@/data/mockUsers';
import { ProfileGridItem } from '@/components/ProfileGridItem';

const SCREEN_WIDTH = Dimensions.get('window').width;

interface GridImage {
  id: string;
  url: string;
}

export default function ProfileScreen() {
  const [gridImages, setGridImages] = useState<GridImage[]>([]);

  useEffect(() => {
    axios
      .get('https://api.thecatapi.com/v1/images/search?limit=12')
      .then((response) => {
        const mapped: GridImage[] = response.data.map((cat: any) => ({
          id: cat.id,
          url: cat.url,
        }));
        setGridImages(mapped);
      })
      .catch((error) => console.error('Error loading grid:', error));
  }, []);

  const renderGridItem = ({ item }: { item: GridImage }) => (
    <ProfileGridItem
      imageUrl={item.url}
      onPress={() => router.push(`/post/${item.id}` as any)}
    />
  );

  const ListHeader = () => (
    <View style={styles.profileHeader}>
      <View style={styles.headerRow}>
        <View style={styles.avatarContainer}>
          <Image source={{ uri: currentUser.avatar }} style={styles.avatar} />
        </View>
        <View style={styles.statsRow}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>{currentUser.posts}</Text>
            <Text style={styles.statLabel}>Posts</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>{currentUser.followers}</Text>
            <Text style={styles.statLabel}>Followers</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>{currentUser.following}</Text>
            <Text style={styles.statLabel}>Following</Text>
          </View>
        </View>
      </View>

      <View style={styles.bioSection}>
        <Text style={styles.fullName}>{currentUser.fullName}</Text>
        <Text style={styles.bio}>{currentUser.bio}</Text>
      </View>

      <TouchableOpacity style={styles.editButton} activeOpacity={0.7}>
        <Text style={styles.editButtonText}>Edit Profile</Text>
      </TouchableOpacity>

      <View style={styles.divider} />
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea} edges={['bottom']}>
      <FlatList
        data={gridImages}
        keyExtractor={(item) => item.id}
        renderItem={renderGridItem}
        numColumns={3}
        ListHeaderComponent={ListHeader}
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={styles.row}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  profileHeader: {
    paddingBottom: 4,
  },
  headerRow: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 16,
    alignItems: 'center',
    gap: 24,
  },
  avatarContainer: {
    padding: 3,
    borderRadius: 50,
    backgroundColor: Colors.storyGradientStart,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 3,
    borderColor: Colors.background,
  },
  statsRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    color: Colors.textPrimary,
    fontWeight: '700',
    fontSize: 17,
  },
  statLabel: {
    color: Colors.textSecondary,
    fontSize: 13,
  },
  bioSection: {
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  fullName: {
    color: Colors.textPrimary,
    fontWeight: '600',
    fontSize: 14,
    marginBottom: 2,
  },
  bio: {
    color: Colors.textPrimary,
    fontSize: 13,
    lineHeight: 18,
  },
  editButton: {
    marginHorizontal: 16,
    marginBottom: 12,
    paddingVertical: 8,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: Colors.border,
    alignItems: 'center',
  },
  editButtonText: {
    color: Colors.textPrimary,
    fontWeight: '600',
    fontSize: 13,
  },
  divider: {
    height: 1,
    backgroundColor: Colors.border,
    marginTop: 4,
  },
  row: {
    flexDirection: 'row',
  },
});
