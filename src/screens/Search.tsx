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
import { SearchBox } from "@components/SearchBox";

const patrimony = "ABC123"; // Exemplo de valor, substitua conforme necessário
const description = "A nice car";

export function Search() {
  const [isLoading, setIsLoading] = useState(false);
  function handleSignOut() {
    // setIsLoading(true);
    // firestore()
    //   .collection("cars")
    //   .add({ patrimony, description })
    //   .then(() => Alert.alert("Chamado", "Feito!"))
    //   .catch((error) => console.log(error))
    //   .finally(() => setIsLoading(false));
    // auth().signOut();
  }
  function handleSearch() {
    // navigation.navigate("carList");
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#36CFC9"
        translucent={true}
      />
      <Box bg="$prodEmerald100" width="$full" height={"$40"}>
        <HStack justifyContent="center" mt={"$12"} px={"$3"}>
          <LogoSVG />

          <Text
            style={{
              color: "white",
              fontWeight: "bold",

              fontSize: 42,
            }}
          >
            MyCYC
          </Text>
        </HStack>
      </Box>
      <SearchBox />
      <Box mb={"$5"} px={"$3"}>
        <Button
          title="Pesquisar"
          textFontSize={"$lg"}
          onPress={handleSearch}
          rounded={"$full"}
        />
      </Box>
    </SafeAreaView>
  );
}
