import React, { useState, useEffect } from "react";
import {
  ScrollView,
  Text,
  HStack,
  Icon,
  VStack,
  Select,
  SelectBackdrop,
  SelectContent,
  SelectDragIndicator,
  SelectDragIndicatorWrapper,
  SelectIcon,
  SelectInput,
  SelectItem,
  SelectPortal,
  SelectTrigger,
  View,
  RadioGroup,
  RadioIndicator,
  RadioLabel,
  Radio,
  RadioIcon,
} from "@gluestack-ui/themed";
import { StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AuthNavigatorRoutesProps } from "@routes/auth.routes";
import { TouchableOpacity } from "react-native";
import { ArrowLeft, ChevronDownIcon, CircleIcon } from "lucide-react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Input } from "@components/Input";
import { useForm, Controller } from "react-hook-form";
import { months } from "@utils/localeCalendarConfig"; // Import the months data
import { InputCPF } from "@components/InputCPF";
import { InputBirth } from "@components/InputBirth";
import { InputPhone } from "@components/InputPhone";
import { InputCEP } from "@components/InputCEP";
import { GenderSelector } from "@components/GenderSelector";
import { Button } from "@components/Button";

// Define a range of years
const currentYear = new Date().getFullYear();
const yearRange = Array.from({ length: 101 }, (_, i) => currentYear - i); // 100 years back from the current year

export function SignUp() {
  const navigation = useNavigation<AuthNavigatorRoutesProps>();
  const [selectedMonth, setSelectedMonth] = useState<string | null>(null);
  const [selectedYear, setSelectedYear] = useState<string | null>(null);
  const [days, setDays] = useState<number[]>([]);

  const { control } = useForm();

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#f3f4f6"
        translucent={true}
      />
      <HStack
        alignContent="center"
        backgroundColor="$coolGray100"
        paddingVertical={"$6"}
      >
        <TouchableOpacity
          onPress={handleGoBack}
          style={{
            position: "absolute",
            zIndex: 2,
            alignSelf: "center",
            paddingLeft: 20,
          }}
        >
          <Icon as={ArrowLeft} color="$prodEmerald100" size="xl" />
        </TouchableOpacity>

        <Text
          flex={1}
          textAlign="center"
          fontSize="$sm"
          fontWeight="$semibold"
          color="$prodBlack600"
        >
          CRIAR ACESSO
        </Text>
      </HStack>
      <ScrollView contentContainerStyle={{ flexGrow: 1, padding: 15 }}>
        <VStack flex={1}>
          <Controller
            control={control}
            name="name"
            render={({ field: { onChange, value } }) => (
              <Input
                placeholder="Jhon"
                name="NOME"
                autoCapitalize="words"
                onChangeText={onChange}
                value={value}
              />
            )}
          />
          <Controller
            control={control}
            name="surname"
            render={({ field: { onChange, value } }) => (
              <Input
                placeholder="Doe"
                name="SOBRENOME"
                autoCapitalize="words"
                onChangeText={onChange}
                value={value}
              />
            )}
          />

          <GenderSelector />

          <HStack gap="$2">
            <InputBirth />

            <InputCPF />
          </HStack>

          <Controller
            control={control}
            name="email"
            render={({ field: { onChange, value } }) => (
              <Input
                placeholder="jhonDoe@example.com"
                name="E-MAIL"
                keyboardType="email-address"
                autoCapitalize="none"
                onChangeText={onChange}
                value={value}
              />
            )}
          />
          <InputPhone />
          <InputCEP />
          <Controller
            control={control}
            name="address"
            render={({ field: { onChange, value } }) => (
              <Input
                placeholder="R. Um"
                name="ENDEREÇO"
                autoCapitalize="words"
                onChangeText={onChange}
                value={value}
              />
            )}
          />
          <HStack gap={"$1"}>
            <Controller
              control={control}
              name="number"
              render={({ field: { onChange, value } }) => (
                <Input
                  w="$1/4"
                  placeholder="31"
                  name="NÚMERO"
                  secureTextEntry
                  onChangeText={onChange}
                  value={value}
                />
              )}
            />
            <Controller
              control={control}
              name="complement"
              render={({ field: { onChange, value } }) => (
                <Input
                  w="$3/4"
                  placeholder=""
                  name="COMPLEMENTO"
                  secureTextEntry
                  onChangeText={onChange}
                  value={value}
                />
              )}
            />
          </HStack>

          <Controller
            control={control}
            name="password"
            render={({ field: { onChange, value } }) => (
              <Input
                placeholder="Mínimo de 8 caracteres"
                name="SENHA"
                secureTextEntry
                onChangeText={onChange}
                value={value}
              />
            )}
          />
          <Controller
            control={control}
            name="password_confirm"
            render={({ field: { onChange, value } }) => (
              <Input
                placeholder=""
                name="CONFIRMAR SENHA"
                secureTextEntry
                onChangeText={onChange}
                value={value}
              />
            )}
          />
          <Button title="Criar" textFontSize="$lg" rounded={"$2xl"} />
        </VStack>
      </ScrollView>
    </SafeAreaView>
  );
}
