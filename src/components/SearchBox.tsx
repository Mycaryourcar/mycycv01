import { Button } from "@components/Button";
import { Center, Text, HStack, Icon, Box, VStack } from "@gluestack-ui/themed";
import { StatusBar } from "react-native";
import firestore from "@react-native-firebase/firestore";
import { useState } from "react";
import { Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity } from "react-native";
import { ArrowLeft } from "lucide-react-native";
import LogoSVG from "@assets/logo.svg";
import { useLocalOption } from "@hooks/useLocalOption";
import { AppNavigatorRoutesProps } from "@routes/app.routes";
import { useNavigation } from "@react-navigation/native";
import { CheckBoxInternal } from "@components/CheckBox";
const patrimony = "ABC123"; // Exemplo de valor, substitua conforme necessário
const description = "A nice car";

export function SearchBox() {
  const [isLoading, setIsLoading] = useState(false);
  const {
    setLocation,
    setEndLocation,
    setStartLocation,
    endLocation,
    startLocation,
    sameReturn,
    setSameReturn,
  } = useLocalOption();
  const navigation = useNavigation<AppNavigatorRoutesProps>();

  function handleCleanFilter() {
    setLocation(null);
    setEndLocation(null);
    setStartLocation(null);
  }
  function handleStartLocation() {
    setLocation("start");
    // navigation.navigate("tabs", { screen: "LOCATION" });
  }
  function handleEndLocation() {
    setLocation("end");
    // navigation.navigate("tabs", { screen: "LOCATION" });
  }

  function handleCheck() {
    setSameReturn(!sameReturn);
  }

  return (
    <Box
      style={{
        shadowColor: "#000", // Cor da sombra
        shadowOffset: { width: 0, height: 10 }, // Deslocamento da sombra
        shadowOpacity: 0.3, // Opacidade da sombra
        shadowRadius: 10, // Raio de desfoque da sombra
        elevation: 5, // Elevation para Android
      }}
      bg="$white" // Cor de fundo
      height="$40" // Altura
      paddingHorizontal="$3" // Padding horizontal
      marginHorizontal="$3" // Margin horizontal
      paddingBottom="$5" // Padding inferior
      position="relative" // Posição
      borderRadius="$2xl" // Bordas arredondadas (opcional)
      top="-$10" // Deslocamento superior
    >
      <Box
        w="$20" // Largura
        h="$8" // Altura
        borderWidth="$2" // Largura da borda
        borderTopWidth="$0" // Largura da borda superior
        borderColor="$prodEmerald100" // Cor da borda
        bg="$white" // Cor de fundo
        position="relative" // Posição
        marginLeft="auto" // Margin esquerda automática
        borderRadius="$xl" // Bordas arredondadas (opcional)
        top="-$3" // Deslocamento superior
      >
        <Center flex={1}>
          <TouchableOpacity onPress={handleCleanFilter}>
            <Text fontSize={12} fontWeight={"bold"} color={"$prodGray300"}>
              LIMPAR
            </Text>
          </TouchableOpacity>
        </Center>
      </Box>
      <VStack>
        <Box>
          {startLocation ? (
            <Text
              style={{
                width: "100%",
                borderBottomColor: "#7C7C8A",
                borderBottomWidth: 1,
                color: "#7C7C8A",
                fontWeight: "300",
                paddingBottom: 10,
                paddingLeft: 10,
                letterSpacing: 1.25,

                fontSize: 16,
              }}
              onPress={handleStartLocation}
            >
              {startLocation}
            </Text>
          ) : (
            <Text
              style={{
                width: "100%",
                borderBottomColor: "#7C7C8A",
                borderBottomWidth: 1,
                color: "#7C7C8A",
                fontWeight: "300",
                paddingBottom: 10,
                paddingLeft: 10,
                letterSpacing: 1.25,

                fontSize: 16,
              }}
              onPress={handleStartLocation}
            >
              Onde você deseja
              <Text style={{ fontWeight: "bold" }}> retirar </Text>o carro?
            </Text>
          )}
        </Box>

        {/* <Box display={sameReturn ? "none" : "inherit"} mt={8}> */}
        <Box display={sameReturn ? "none" : "flex"} mt={8}>
          {endLocation ? (
            <Text
              style={{
                width: "100%",
                borderBottomColor: "#7C7C8A",
                borderBottomWidth: 1,
                color: "#7C7C8A",
                fontWeight: "300",
                paddingBottom: 10,
                paddingLeft: 10,
                letterSpacing: 1.25,

                fontSize: 16,
              }}
              onPress={handleEndLocation}
            >
              {endLocation}
            </Text>
          ) : (
            <Text
              style={{
                width: "100%",
                borderBottomColor: "#7C7C8A",
                borderBottomWidth: 1,
                color: "#7C7C8A",
                fontWeight: "300",
                paddingBottom: 10,
                paddingLeft: 10,
                letterSpacing: 1.25,

                fontSize: 16,
              }}
              onPress={handleEndLocation}
            >
              Onde você deseja
              <Text style={{ fontWeight: "bold" }}> devolver </Text>o carro?
            </Text>
          )}
        </Box>

        {(!!startLocation && !!endLocation) || (startLocation && sameReturn) ? (
          // <DateTimeShow />
          <Box />
        ) : (
          <Box />
        )}

        <CheckBoxInternal />
      </VStack>
    </Box>
  );
}
