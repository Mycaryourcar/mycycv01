import { VStack, Image, Center, Text, HStack, Box } from "@gluestack-ui/themed";
import React from "react";
import { Button } from "@components/Button";
import BackgroundImg from "@assets/car_background.jpg";
import LogoSVG from "@assets/logo.svg";

export function Start() {
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
            MyCYC
          </Text>
        </Center>

        <Button title="Iniciar" textFontSize="$lg" rounded={"$full"} />
      </VStack>
    </VStack>
  );
}
