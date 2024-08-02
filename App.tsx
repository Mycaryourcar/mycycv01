import "expo-dev-client";

import { Alert, StatusBar } from "react-native";

import auth from "@react-native-firebase/auth";
import {
  Roboto_400Regular,
  Roboto_700Bold,
  useFonts,
} from "@expo-google-fonts/roboto";

import { config } from "@gluestack-ui/config";
import { GluestackUIProvider } from "@gluestack-ui/themed";
import { Loading } from "@components/Loading";
import { SignIn } from "@screens/SignIn";

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });
  function handleSignIn() {
    auth()
      .signInWithEmailAndPassword("pedro@gmail.com", "QWEqweqwe123!")
      .then((result) => {
        console.log(
          "User account created & signed in! " + JSON.stringify(result)
        );
        Alert.alert(
          "User account created & signed in! " + JSON.stringify(result)
        );
      })
      .catch((error) => {
        console.log("error" + +JSON.stringify(error));
        Alert.alert("error" + +JSON.stringify(error));
      });
  }

  return (
    <GluestackUIProvider config={config}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      {fontsLoaded ? <SignIn /> : <Loading />}
    </GluestackUIProvider>
  );
}
// <Center flex={1} bg="$green700">
//   <Text color="">Home</Text>
//   <Button title="Entrar com Google" onPress={handleSignIn} />
// </Center>
