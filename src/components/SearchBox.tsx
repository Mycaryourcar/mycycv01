import { Button } from "@components/Button";
import { Center, Text, HStack, Icon, Box } from "@gluestack-ui/themed";
import { StatusBar } from "react-native";
import firestore from "@react-native-firebase/firestore";
import { useState } from "react";
import { Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity } from "react-native";
import { ArrowLeft } from "lucide-react-native";
import LogoSVG from "@assets/logo.svg";

const patrimony = "ABC123"; // Exemplo de valor, substitua conforme necessário
const description = "A nice car";

export function SearchBox() {
  const [isLoading, setIsLoading] = useState(false);
  function handleCleanFilter() {
    // setLocation(null);
    // setEndLocation(null);
    // setStartLocation(null);
  }
  return (
    <Box
      style={{
        shadowColor: "red", // Cor da sombra
        shadowOffset: { width: 300, height: 800 }, // Deslocamento da sombra
        shadowOpacity: 0.5, // Opacidade da sombra
        shadowRadius: 10, // Raio de desfoque da sombra
        elevation: 5, // Elevation para Android
      }}
      bg="$amber100"
      height="$40"
      paddingHorizontal="$3"
      marginHorizontal="$3"
      paddingBottom="$5"
      position="relative"
      borderRadius="$md" // Bordas arredondadas (opcional)
      top="-$10"
    >
      <Box
        w="$20"
        h="$8"
        borderWidth="$2"
        borderTopWidth="$0"
        borderColor="$prodEmerald100"
        bg="$white"
        position="relative"
        marginLeft="auto"
      >
        <Center flex={1}>
          <TouchableOpacity onPress={handleCleanFilter}>
            <Text fontSize={12} fontWeight={"bold"} color={"gray.300"}>
              LIMPAR
            </Text>
          </TouchableOpacity>
        </Center>
      </Box>
    </Box>
  );
}
