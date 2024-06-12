import * as React from "react";
import { View } from "react-native";

import { Header } from "react-native-elements";
import { useFonts } from "expo-font";
import { Divider } from "@rneui/themed";

function AppHeader() {
  const [fontsLoaded] = useFonts({
    Hostania: require("../assets/fonts/Hostania.ttf"),
  });
  // React.useEffect(() => {
  //     const originalConsoleError = console.error;

  //     console.error = (...args: any[]) => {
  //       if (typeof args[0] === "string" && /defaultProps/.test(args[0])) {
  //         return;
  //       }

  //       originalConsoleError(...args);
  //     };

  //     return () => {
  //       console.error = originalConsoleError;
  //     };
  //   }, []);

  return (
    <View>
      <Header
        backgroundColor="#FFF"
        leftComponent={{
          icon: "user",
          type: "feather",
          color: "#000",
          size: 25,
        }}
        rightComponent={{
          text: "perch",
          style: { color: "#000", fontFamily: "Hostania", fontSize: 20 },
        }}
        barStyle={{ borderColor: "#000", borderWidth: 10 }}
      />
      <Divider width="2" color="#000" />
    </View>
  );
}

export default AppHeader;
