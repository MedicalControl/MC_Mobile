import {
  DrawerActions,
  NavigationProp,
  useNavigation,
} from "@react-navigation/native";
import React, { useEffect } from "react";
import {
  Pressable,
  View,
  StyleSheet,
  Image
} from "react-native";
import { IonIcon } from "./Ionicon";
import { globalColors } from "../../theme/theme";
import { RootStack } from "../../routes/StackNavigator";
export const Header = () => {
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (

        <View>
          <Pressable
            style={{ marginLeft: 20 }}
            onPress={() => navigation.dispatch(DrawerActions.toggleDrawer)}
          >
            <IonIcon name="menu-outline" color={globalColors.dark} size={30} />
          </Pressable>
          <HeaderLeftOptions />
        </View>
      ),
    });
  }, []);
  return <></>;
};


export const HeaderLeftOptions = () => {
  const navigation = useNavigation<NavigationProp<RootStack>>();
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <View style={styles.header}>
          <Image
            source={require('../../assets/Medical_Control.png')}
            style={styles.logo}
          />
          <View style={styles.iconsContainer}>
            <Pressable style={styles.headerOption} onPress={() => navigation.navigate("Notification")}>
              <IonIcon
                name={"notifications-outline"}
                color={globalColors.dark}
                size={25}

              />
            </Pressable>
          </View>
          <View style={styles.iconsContainer}>
            <Pressable style={styles.headerOption} onPress={() => navigation.navigate("Message")}>
              <IonIcon
                name={"chatbubble-outline"}
                color={globalColors.dark}
                size={25}
              />
            </Pressable>
          </View>

        </View>
      ),
    });
  }, []);
  return <></>;
};

const styles = StyleSheet.create({
  headerOption: {
    position: "relative",
  },
  header: {
    display: "flex",
    flexDirection: "row",
    paddingHorizontal: 30,
    gap: 5,
  },
  logo: {
    width: 100,
    height: 60,
  },
  iconsContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  }
});