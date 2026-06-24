import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '@/styles/colors';

export default function TabLayout() {
  return (
    <>
      <StatusBar style="light" />
      <Tabs
        screenOptions={{
          headerStyle: { backgroundColor: Colors.background },
          headerTintColor: Colors.textPrimary,
          tabBarStyle: {
            backgroundColor: Colors.background,
            borderTopColor: Colors.border,
            borderTopWidth: 1,
          },
          tabBarActiveTintColor: Colors.textPrimary,
          tabBarInactiveTintColor: Colors.textSecondary,
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: 'Instagram',
            headerTitleStyle: { fontFamily: 'System', fontWeight: '600', fontSize: 20 },
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: 'Profile',
            headerTitleStyle: { fontWeight: '600' },
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="person" size={size} color={color} />
            ),
          }}
        />
      </Tabs>
    </>
  );
}
