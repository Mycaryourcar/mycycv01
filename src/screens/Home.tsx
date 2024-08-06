import { VStack, Image, Center, Text, HStack, Box } from "@gluestack-ui/themed";
import React from "react";
import { Button } from "@components/Button";
import BackgroundImg from "@assets/car_background.jpg";
import LogoSVG from "@assets/logo.svg";
import { useNavigation } from "@react-navigation/native";
import { AuthNavigatorRoutesProps } from "@routes/auth.routes";

export function Home() {
  const navigation = useNavigation<AuthNavigatorRoutesProps>();

  function handleStart() {
    navigation.navigate("signUp");
  }
  return (
    <VStack flex={1}>
      <Image
        defaultSource={BackgroundImg}
        source={BackgroundImg}
        alt="Carro na estrada"
        resizeMode="cover"
        position="absolute"
        w="$full"
        h="$full"
      />

      <VStack flex={1} justifyContent="space-around" mx={"$12"} pb={"$12"}>
        <Center flexDirection="row">
          <LogoSVG />
          <Text fontSize={"$6xl"} color="$prodBlack700">
            Mycyc
          </Text>
        </Center>

        <Button
          title="Iniciar"
          textFontSize="$lg"
          rounded={"$full"}
          onPress={handleStart}
        />
      </VStack>
    </VStack>
  );
}
