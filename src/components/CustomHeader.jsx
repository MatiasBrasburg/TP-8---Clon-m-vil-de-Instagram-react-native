import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../styles/colors';

export function CustomHeader() {
  return (
    <View style={styles.container}>
      <View style={styles.logoSection}>
        <Ionicons name="logo-instagram" size={28} color={Colors.textPrimary} />
        <Text style={styles.logoText}>Instagram</Text>
      </View>

      <View style={styles.searchBox}>
        <Ionicons name="search" size={16} color={Colors.textSecondary} />
        <TextInput
          style={styles.searchInput}
          placeholder="Username, hashtag and story search"
          placeholderTextColor={Colors.textSecondary}
        />
      </View>

      <View style={styles.actions}>
        <TouchableOpacity style={styles.iconBtn}>
          <Ionicons name="cog-outline" size={22} color={Colors.textPrimary} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconBtn}>
          <Ionicons name="camera-outline" size={22} color={Colors.textPrimary} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconBtn}>
          <Ionicons name="paper-plane-outline" size={22} color={Colors.textPrimary} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.newPostBtn} activeOpacity={0.8}>
          <View style={styles.plusCircle}>
            <Text style={styles.plusText}>+</Text>
          </View>
          <Text style={styles.newPostText}>New Post</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.background,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
    gap: 12,
  },
  logoSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  logoText: {
    color: Colors.textPrimary,
    fontSize: 20,
    fontWeight: '700',
  },
  searchBox: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.surfaceLight,
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 6,
    gap: 6,
    maxWidth: 260,
  },
  searchInput: {
    flex: 1,
    color: Colors.textPrimary,
    fontSize: 13,
    padding: 0,
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  iconBtn: {
    padding: 4,
  },
  newPostBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.storyGradientStart,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 8,
    gap: 4,
  },
  plusCircle: {
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: 'rgba(255,255,255,0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  plusText: {
    color: Colors.white,
    fontSize: 14,
    fontWeight: 'bold',
    lineHeight: 16,
  },
  newPostText: {
    color: Colors.white,
    fontSize: 12,
    fontWeight: '600',
  },
});
