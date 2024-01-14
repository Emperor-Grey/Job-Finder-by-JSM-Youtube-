import { Stack, useRouter } from 'expo-router';
import React from 'react';
import { SafeAreaView } from 'react-native';

import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import {
  NearbyJobCard,
  Popularjobs,
  ScreenHeaderBtn,
  Welcome,
} from '../components';
import { COLORS, SIZES, icons } from '../constants';

const Home = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />
          ),
          headerRight: () => (
            <ScreenHeaderBtn iconUrl={icons.profile} dimension="100%" />
          ),
          headerTitle: '',
        }}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ flex: 1, padding: SIZES.medium }}>
          <Welcome />
          <Popularjobs />
          <NearbyJobCard />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
