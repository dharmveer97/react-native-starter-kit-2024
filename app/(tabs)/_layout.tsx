import { Tabs } from 'expo-router';
import React from 'react';
import { Platform, View, Text, StyleSheet } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <View style={styles.container}>
      <View style={styles.heroSection}>
        <Text style={styles.heroTitle}>Welcome to Our App!</Text>
        <Text style={styles.heroSubtitle}>Explore the best features</Text>
      </View>
      <View style={styles.additionalSection}>
        <Text style={styles.additionalTitle}>Discover More</Text>
        <Text style={styles.additionalContent}>
          Check out our latest updates and features!
        </Text>
      </View>

      <View style={styles.additionalSection}>
        <Text style={styles.additionalTitle}>Discover More</Text>
        <Text style={styles.additionalContent}>
          Check out our latest updates and features!
        </Text>
      </View>

      <View style={styles.additionalSection}>
        <Text style={styles.additionalTitle}>Hello world More</Text>
        <Text style={styles.additionalContent}>
          Check out our latest updates and features!
        </Text>
      </View>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
          headerShown: false,
          tabBarButton: HapticTab,
          tabBarBackground: TabBarBackground,
          tabBarStyle: Platform.select({
            ios: {
              // Use a transparent background on iOS to show the blur effect
              position: 'absolute',
            },
            default: {},
          }),
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: 'Home',
            tabBarIcon: ({ color }) => (
              <IconSymbol size={28} name="house.fill" color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="explore"
          options={{
            title: 'Explore',
            tabBarIcon: ({ color }) => (
              <IconSymbol size={28} name="paperplane.fill" color={color} />
            ),
          }}
        />
      </Tabs>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  heroSection: {
    backgroundColor: Colors.light.tint,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heroTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  heroSubtitle: {
    fontSize: 16,
    color: 'white',
  },
  additionalSection: {
    backgroundColor: Colors.light.background,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  additionalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.light.text,
  },
  additionalContent: {
    fontSize: 14,
    color: Colors.light.text,
  },
});
