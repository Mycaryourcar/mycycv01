import {
  Center,
  Image,
  VStack,
  Text,
  Heading,
  ScrollView,
} from "@gluestack-ui/themed";

import BackgroundImg from "@assets/car_background.jpg";
import Logo from "@assets/logo.svg";
import { Input } from "@components/Input";
import auth from "@react-native-firebase/auth";
import { Alert } from "react-native";
import { Button } from "@components/Button";
import { AuthNavigatorRoutesProps } from "@routes/auth.routes";
import { useNavigation } from "@react-navigation/native";

export function SignIn() {
  const navigation = useNavigation<AuthNavigatorRoutesProps>();

  function handleNewAccount() {
    navigation.navigate("signUp");
  }
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
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <VStack flex={1} bg="$gray700">
        <Image
          w="$full"
          h="$full"
          source={BackgroundImg}
          defaultSource={BackgroundImg}
          alt="Pessoas treinando"
          position="absolute"
        />

        <VStack flex={1} px="$10" pb="$16">
          <Center my="$24">
            <Logo />
            <Text color="$gray100" fontSize="$sm">
              Treine sua mente e seu corpo
            </Text>
          </Center>

          <Center gap="$2">
            <Heading color="$gray100">Acesse sua conta</Heading>
            <Input
              placeholder="E-mail"
              keyboardType="email-address"
              autoCapitalize="none"
            />
            <Input placeholder="Senha" secureTextEntry autoCapitalize="none" />
            <Button title="Entrar com Google" textFontSize="$sm" />
          </Center>

          <Center flex={1} justifyContent="flex-end" marginTop="$4">
            <Text color="$gray100" fontSize="$sm" mb="$3" fontFamily="$body">
              Ainda não tem acesso?
            </Text>

            <Button
              title="Criar conta"
              variant="outline"
              textFontSize="$sm"
              onPress={handleNewAccount}
            />
          </Center>
        </VStack>
      </VStack>
    </ScrollView>
  );
}
