import React, { useState, useEffect } from 'react';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';
import axios from 'axios';
import { Colors } from '@/styles/colors';

interface Story {
  id: string;
  url: string;
  username: string;
}

export function StoriesList() {
  const [stories, setStories] = useState<Story[]>([]);

  useEffect(() => {
    axios
      .get('https://api.thecatapi.com/v1/images/search?limit=8')
      .then((response) => {
        const mapped: Story[] = response.data.map((cat: any, index: number) => ({
          id: cat.id,
          url: cat.url,
          username: `@gato_fan_${index + 1}`,
        }));
        setStories(mapped);
      })
      .catch((error) => console.error('Error loading stories:', error));
  }, []);

  const yourStory: Story = {
    id: 'your-story',
    url: 'https://placedog.net/200/200',
    username: 'Your Story',
  };

  const allStories = [yourStory, ...stories];

  const renderStory = ({ item }: { item: Story }) => (
    <View style={styles.storyItem}>
      <View style={[styles.storyRing, item.id === 'your-story' && styles.myStoryRing]}>
        <Image source={{ uri: item.url }} style={styles.storyImage} />
        {item.id === 'your-story' && (
          <View style={styles.addBadge}>
            <Text style={styles.addBadgeText}>+</Text>
          </View>
        )}
      </View>
      <Text style={styles.storyUsername} numberOfLines={1}>
        {item.username}
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={allStories}
        renderItem={renderStory}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },
  listContent: {
    paddingHorizontal: 12,
    gap: 16,
  },
  storyItem: {
    alignItems: 'center',
    width: 72,
  },
  storyRing: {
    width: 68,
    height: 68,
    borderRadius: 34,
    padding: 2.5,
    backgroundColor: Colors.storyGradientStart,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 6,
  },
  myStoryRing: {
    backgroundColor: Colors.border,
  },
  storyImage: {
    width: 63,
    height: 63,
    borderRadius: 31.5,
    borderWidth: 2,
    borderColor: Colors.background,
  },
  addBadge: {
    position: 'absolute',
    bottom: 2,
    right: 2,
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: Colors.linkBlue,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: Colors.background,
  },
  addBadgeText: {
    color: Colors.white,
    fontSize: 14,
    fontWeight: 'bold',
    lineHeight: 16,
  },
  storyUsername: {
    color: Colors.textSecondary,
    fontSize: 11,
    textAlign: 'center',
    width: '100%',
  },
});
