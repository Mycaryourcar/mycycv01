import { Center, Image, VStack, Text } from "@gluestack-ui/themed";

import BackgroundImg from "@assets/car_background.jpg";
import Logo from "@assets/logo.svg";

export function SignIn() {
  return (
    <VStack flex={1} bg="$gray700">
      <Image
        w="$full"
        h="$full"
        source={BackgroundImg}
        defaultSource={BackgroundImg}
        alt="Pessoas treinando"
        position="absolute"
      />

      <Center my="$24">
        <Logo />
        <Text color="$warmGray900" fontSize="$sm">
          Seu veiculo a disposição e com segurança
        </Text>
      </Center>
    </VStack>
  );
}
