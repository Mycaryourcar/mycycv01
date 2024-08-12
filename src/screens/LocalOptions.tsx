import { Button } from "@components/Button";
import {
  Center,
  Text,
  HStack,
  Icon,
  Box,
  VStack,
  Checkbox,
  CheckboxIndicator,
  CheckboxIcon,
  CheckboxLabel,
  View,
  ScrollView,
} from "@gluestack-ui/themed";
import { MapPin } from "lucide-react-native";
import { Navigation } from "lucide-react-native";

import { StatusBar } from "react-native";
import firestore from "@react-native-firebase/firestore";
import { useState } from "react";
import { Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity } from "react-native";
import { ArrowLeft } from "lucide-react-native";
import LogoSVG from "@assets/logo.svg";
import { AppNavigatorRoutesProps } from "@routes/app.routes";
import { useNavigation } from "@react-navigation/native";
import { CheckIcon } from "lucide-react-native";

import { Input } from "../components/Input";
import { useLocalOption } from "@hooks/useLocalOption";
import {
  LocationAccuracy,
  LocationSubscription,
  useForegroundPermissions,
  watchPositionAsync,
} from "expo-location";
import { getAddressLocation } from "@utils/getAddressLocation";
import { Loading } from "../components/Loading";
import { BigInput } from "@components/BigInput";

export function LocalOptions() {
  const [isLoading, setIsLoading] = useState(false);
  const {
    location,
    setEndLocation,
    setStartLocation,
    startLocation,
    sameReturn,
  } = useLocalOption();
  const [isLoadingLocation, setIsLoadingLocation] = useState(false);
  const navigation = useNavigation<AppNavigatorRoutesProps>();
  const [locationForegroundPermission, requestLocationForegroundPermission] =
    useForegroundPermissions();

  function handleGoBackMinha() {
    requestLocationForegroundPermission().then(() => {
      if (!locationForegroundPermission?.granted) {
        return;
      }
      let subscription: LocationSubscription;
      watchPositionAsync(
        {
          accuracy: LocationAccuracy.High,
          timeInterval: 1000,
        },
        (gotLocation) => {
          getAddressLocation(gotLocation.coords).then((address) => {
            location == "start"
              ? setStartLocation(address as string)
              : setEndLocation(address as string);
            console.log(address);
          });
        }
      ).then((response) => (subscription = response));

      navigation.goBack();
    });
  }
  function handleGoBackHugo() {
    location == "start"
      ? setStartLocation("Hugo Lange, Curitiba, PR, Brasil")
      : setEndLocation("Hugo Lange, Curitiba, PR, Brasil");
    if (sameReturn) {
      setEndLocation("Hugo Lange, Curitiba, PR, Brasil");
    }
    navigation.goBack();
  }
  function handleGoBackCristo() {
    location == "start"
      ? setStartLocation("Cristo Rei, Curitiba, PR, Brasil")
      : setEndLocation("Cristo Rei, Curitiba, PR, Brasil");
    if (sameReturn) {
      setEndLocation("Cristo Rei, Curitiba, PR, Brasil");
    }
    navigation.goBack();
  }

  return (
    <ScrollView backgroundColor={"white"}>
      <HStack
        alignContent="center"
        backgroundColor="$coolGray100"
        paddingVertical={"$6"}
      >
        <Text
          flex={1}
          textAlign="center"
          fontSize="$sm"
          fontWeight="$semibold"
          color="$prodBlack600"
        >
          BUSCA DE LOCAIS
        </Text>
      </HStack>

      <VStack p={3}>
        <VStack marginTop={8} backgroundColor={"white"}>
          <Box>
            <BigInput name="location" placeholder="Cidade, Bairro, Estato " />
          </Box>
        </VStack>

        <Text
          style={{
            width: "100%",

            color: "#323238",
            fontWeight: "bold",
            fontSize: 12,
          }}
        >
          Perto de você
        </Text>

        <Box mt={2}>
          <TouchableOpacity onPress={handleGoBackMinha}>
            <HStack alignContent={"center"}>
              <Icon as={Navigation} color="$prodEmerald100" size="xl" />

              <Text marginLeft={"$3"} color="#7C7C8A" fontFamily="body">
                Utilizar a minha localização
              </Text>
            </HStack>
          </TouchableOpacity>
        </Box>

        <Text
          style={{
            width: "100%",
            marginTop: 25,
            color: "#323238",
            fontWeight: "bold",
            fontSize: 12,
          }}
        >
          Buscas recentes
        </Text>

        <Box mt={2}>
          <TouchableOpacity onPress={handleGoBackHugo}>
            <HStack>
              <Icon
                as={MapPin}
                color="$prodEmerald100"
                size="xl"
                ml={1}
                marginTop={2}
                alignContent={"center"}
                justifyContent={"center"}
              />

              <VStack>
                <Text marginLeft={"$3"} color="#7C7C8A" fontFamily="body">
                  Hugo Lange, Curitiba, PR, Brasil
                </Text>
                <Text marginLeft={"$3"} color="#269a90" fontFamily="body">
                  DISTÂNCIA: 2,5 KM
                </Text>
              </VStack>
            </HStack>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleGoBackCristo}
            style={{ marginTop: 12 }}
          >
            <HStack>
              <Icon
                as={MapPin}
                color="$prodEmerald100"
                size="xl"
                ml={1}
                marginTop={2}
                alignContent={"center"}
                justifyContent={"center"}
              />
              <VStack>
                <Text marginLeft={"$3"} color="#7C7C8A" fontFamily="body">
                  Cristo Rei, Curitiba, PR, Brasil{" "}
                </Text>
                <Text marginLeft={"$3"} color="#269a90" fontFamily="body">
                  DISTÂNCIA: 1,2 KM
                </Text>
              </VStack>
            </HStack>
          </TouchableOpacity>
        </Box>
      </VStack>
    </ScrollView>
  );
}
