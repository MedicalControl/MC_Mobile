import {
    DrawerActions,
    StackActions,
    useNavigation,
  } from "@react-navigation/native";
  import React, { useEffect } from "react";
  import {
    Pressable,
    StyleProp,
    View,
    ViewStyle,
    StyleSheet,
  } from "react-native";
  import { IonIcon } from "./Ionicon";
  import { globalColors } from "../../theme/theme";
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
            <HeaderLeftOptions/>
          </View>
        ),
      });
    }, []);
    return <></>;
  };
  interface Props {
    name: string;
    size: number;
    onPress: () => void;
    style: StyleProp<ViewStyle>;
  }
  export const HeaderLeftOptions = () => {
    const navigation = useNavigation();
    useEffect(() => {
      navigation.setOptions({
        headerRight: () => (
          <View style={styles.header}>
            <Pressable style={styles.headerOption} onPress={() => navigation.navigate("Notification")}>
              <IonIcon
                name={"notifications-outline"}
                color={globalColors.dark}
                size={25}
              />
            </Pressable>
            <Pressable style={styles.headerOption} onPress={() => navigation.navigate("Notification")}>
              <IonIcon
                name={"chatbubble-outline"}
                color={globalColors.dark}
                size={25}
              />
            </Pressable>
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
  });