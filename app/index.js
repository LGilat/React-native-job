import { useState } from "react";
import {View, Text , ScrollView, SafeAreaView} from "react-native";
import { Stack, useRouter } from "expo-router"

import { COLORS, icons, images, FONT, SIZES } from "../constants";
import { Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome } from "../components";


const Home = () => {
  const router = useRouter();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: COLORS.lightWhite,
          },
          headerShadowVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn
              iconUrl={icons.menu}
              dimension="60%"
            />
          ),
          headerRight: () => (
            <ScreenHeaderBtn
              iconUrl={images.profile}
              dimension="100%"
            />
          ),
          headerTitle: ""
        }}

      />

      <ScrollView showsHorizontalScrollIndicator={false}>
        <View style={{
          flex: 1,
          backgroundColor: COLORS.lightWhite,
          paddingVertical: SIZES.medium,
          paddingHorizontal: SIZES.medium
        }}>
          <Welcome />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;