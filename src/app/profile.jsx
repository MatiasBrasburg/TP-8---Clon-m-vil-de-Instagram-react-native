import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import axios from 'axios';
import { Colors } from '../styles/colors';
import { currentUser } from '../data/mockUsers';
import { ProfileGridItem } from '../components/ProfileGridItem';

export default function ProfileScreen() {
  const [gridImages, setGridImages] = useState([]);

  useEffect(() => {
    axios
      .get('https://api.thecatapi.com/v1/images/search?limit=12')
      .then((response) => {
        const mapped = response.data.map((cat) => ({
          id: cat.id,
          url: cat.url,
        }));
        setGridImages(mapped);
      })
      .catch((error) => console.error('Error loading grid:', error));
  }, []);

  const renderGridItem = ({ item }) => (
    <ProfileGridItem
      imageUrl={item.url}
      onPress={() => router.push(`/post/${item.id}`)}
    />
  );

  const ListHeader = () => (
    <View style={styles.profileSection}>
      <View style={styles.profileHeader}>
        <View style={styles.imgContainer}>
          <Image source={{ uri: currentUser.avatar }} style={styles.avatar} />
        </View>

        <View style={styles.profileInfo}>
          <Text style={styles.name}>
            {currentUser.fullName}
          </Text>
          <Text style={styles.handle}>{currentUser.username}</Text>

          <View style={styles.stats}>
            <View style={styles.statBox}>
              <Text style={styles.statNumber}>{currentUser.followers}</Text>
              <Text style={styles.statLabel}>Followers</Text>
            </View>
            <View style={styles.statBox}>
              <Text style={styles.statNumber}>{currentUser.following}</Text>
              <Text style={styles.statLabel}>Following</Text>
            </View>
          </View>

          <Text style={styles.bio}>{currentUser.bio}</Text>

          <TouchableOpacity style={styles.editBtn} activeOpacity={0.7}>
            <Text style={styles.editBtnText}>Edit Profile</Text>
          </TouchableOpacity>
        </View>
      </View>

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
  profileSection: {
    paddingVertical: 24,
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 24,
    paddingHorizontal: 20,
  },
  imgContainer: {
    padding: 4,
    borderRadius: 50,
    backgroundColor: Colors.storyGradientStart,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 4,
    borderColor: Colors.background,
  },
  profileInfo: {
    flex: 1,
    gap: 8,
  },
  name: {
    color: Colors.textPrimary,
    fontSize: 20,
    fontWeight: '700',
  },
  handle: {
    color: Colors.textSecondary,
    fontSize: 14,
    marginTop: -4,
  },
  stats: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 4,
  },
  statBox: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: Colors.surface,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
  },
  statNumber: {
    color: Colors.textPrimary,
    fontWeight: '700',
    fontSize: 14,
  },
  statLabel: {
    color: Colors.textSecondary,
    fontSize: 13,
  },
  bio: {
    color: Colors.textPrimary,
    fontSize: 14,
    lineHeight: 20,
    marginTop: 2,
  },
  editBtn: {
    backgroundColor: Colors.surface,
    borderWidth: 1,
    borderColor: Colors.border,
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignSelf: 'flex-start',
    marginTop: 4,
  },
  editBtnText: {
    color: Colors.textPrimary,
    fontWeight: '600',
    fontSize: 13,
  },
  divider: {
    height: 1,
    backgroundColor: Colors.border,
    marginTop: 20,
  },
  row: {
    flexDirection: 'row',
  },
});
