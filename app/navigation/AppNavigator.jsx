import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { Feather, Ionicons } from '@expo/vector-icons';
import HomeScreen from '../screens/HomeScreen';
import PostDetailScreen from '../screens/PostDetailScreen';
import ProfileScreen from '../screens/ProfileScreen';
import colors from '../styles/colors';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function InstagramHeader() {
  return (
    <View style={styles.header}>
      <Text style={styles.logo}>Catstagram</Text>
      <View style={styles.headerActions}>
        <Pressable style={styles.newPostButton} hitSlop={8}>
          <Text style={styles.newPostText}>New Post</Text>
        </Pressable>
        <Pressable hitSlop={8}>
          <Ionicons name="heart-outline" size={25} color={colors.white} />
        </Pressable>
        <Pressable hitSlop={8}>
          <Feather name="send" size={23} color={colors.white} />
        </Pressable>
      </View>
    </View>
  );
}

function ProfileHeader() {
  return (
    <View style={styles.profileHeader}>
      <Text style={styles.profileTitle}>michi.studio</Text>
      <Ionicons name="menu-outline" size={28} color={colors.white} />
    </View>
  );
}

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        tabBarActiveTintColor: colors.accentPink,
        tabBarInactiveTintColor: colors.textSecondary,
        tabBarStyle: styles.tabBar,
        headerShadowVisible: true,
        headerStyle: styles.nativeHeader,
        tabBarIcon: ({ color, focused }) => {
          if (route.name === 'Home') {
            return <Ionicons name={focused ? 'home' : 'home-outline'} size={25} color={color} />;
          }

          return (
            <Image
              source={{ uri: 'https://i.pravatar.cc/150?img=5' }}
              style={[styles.tabAvatar, focused && styles.tabAvatarActive]}
            />
          );
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerTitle: () => <InstagramHeader />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerTitle: () => <ProfileHeader />,
        }}
      />
    </Tab.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerBackTitle: 'Volver',
          headerTintColor: colors.textPrimary,
          headerStyle: styles.nativeHeader,
          headerTitleStyle: styles.stackTitle,
        }}
      >
        <Stack.Screen name="MainTabs" component={MainTabs} options={{ headerShown: false }} />
        <Stack.Screen
          name="PostDetail"
          component={PostDetailScreen}
          options={{ title: 'Publicacion' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  nativeHeader: {
    backgroundColor: colors.bgDark,
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logo: {
    color: colors.white,
    fontSize: 27,
    fontWeight: '700',
    letterSpacing: 0,
  },
  headerActions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 18,
    paddingRight: 6,
  },
  newPostButton: {
    backgroundColor: colors.accentPink,
    borderRadius: 16,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  newPostText: {
    color: colors.white,
    fontSize: 12,
    fontWeight: '700',
  },
  profileHeader: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  profileTitle: {
    color: colors.textPrimary,
    fontSize: 20,
    fontWeight: '700',
  },
  tabBar: {
    backgroundColor: colors.bgDark,
    borderTopColor: colors.borderDark,
    height: 58,
    paddingTop: 6,
  },
  tabAvatar: {
    width: 28,
    height: 28,
    borderRadius: 14,
  },
  tabAvatarActive: {
    borderWidth: 2,
    borderColor: colors.accentPink,
  },
  stackTitle: {
    color: colors.textPrimary,
    fontSize: 17,
    fontWeight: '700',
  },
});
