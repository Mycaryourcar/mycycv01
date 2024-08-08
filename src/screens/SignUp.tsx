import React, { useState } from "react";
import {
  ScrollView,
  Text,
  HStack,
  Icon,
  VStack,
  Box,
} from "@gluestack-ui/themed";
import { StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AuthNavigatorRoutesProps } from "@routes/auth.routes";
import { TouchableOpacity } from "react-native";
import { ArrowLeft } from "lucide-react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Input } from "@components/Input";
import { useForm, Controller } from "react-hook-form";
import { InputCPF } from "@components/InputCPF";
import { InputBirth } from "@components/InputBirth";
import { InputPhone } from "@components/InputPhone";
import { InputCEP } from "@components/InputCEP";
import { GenderSelector } from "@components/GenderSelector";
import { Button } from "@components/Button";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import auth from "@react-native-firebase/auth";
type FormDataProps = {
  name: string;
  surname: string;
  gender: string;
  birth: string;
  cpf: string;
  email: string;
  phone: string;
  cep: string;
  address: string;
  number: string;
  complement: string;
  password: string;
  password_confirm: string;
};
const signUpSchema = yup.object({
  name: yup.string().required("Informe o nome"),
  email: yup.string().required("Informe o e-mail").email("E-mail inválido"),
  phone: yup.string().required("Informe número e celular"),
  cep: yup.string().required("Informe CEP"),
  surname: yup.string().required("Informe sobrenome"),
  gender: yup.string().required("Informe sexo"),
  birth: yup.string().required("Informe nascimento"),
  cpf: yup.string().required("Informe CPF"),
  address: yup.string().required("Informe endereço"),
  number: yup.string().required("Informe número"),
  complement: yup.string().required("Informe complemento"),
  password: yup.string().required("Informe senha"),
  password_confirm: yup
    .string()
    .required("Confirme a senha")
    .oneOf([yup.ref("password"), ""], "A confirmação da senha não confere."),
});

export function SignUp() {
  const navigation = useNavigation<AuthNavigatorRoutesProps>();
  const [isLoading, setIsLoading] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataProps>({
    resolver: yupResolver(signUpSchema),
  });
  function handleGoBack() {
    navigation.goBack();
  }
  function handleSignUp(data: FormDataProps) {
    setIsLoading(true);
    auth()
      .createUserWithEmailAndPassword(data.email, data.password)
      .catch((e) => console.log(e))
      .finally(() => {
        setIsLoading(false);
      });
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
                errorMessage={errors.name?.message}
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
                errorMessage={errors.surname?.message}
              />
            )}
          />

          <Controller
            control={control}
            name="gender"
            render={({ field: { onChange, value } }) => (
              <GenderSelector
                onChange={onChange}
                value={value}
                errorMessage={errors.gender?.message}
              />
            )}
          />

          <HStack gap="$2">
            <Controller
              control={control}
              name="birth"
              render={({ field: { onChange, value } }) => (
                <InputBirth
                  onChange={onChange}
                  value={value}
                  errorMessage={errors.birth?.message}
                />
              )}
            />
            <Controller
              control={control}
              name="cpf"
              render={({ field: { onChange, value } }) => (
                <InputCPF
                  onChange={onChange}
                  value={value}
                  errorMessage={errors.cpf?.message}
                />
              )}
            />
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
                errorMessage={errors.email?.message}
              />
            )}
          />

          <HStack gap={"$2"}>
            <Controller
              control={control}
              name="phone"
              render={({ field: { onChange, value } }) => (
                <Box width={"$1/2"}>
                  <InputPhone
                    onChange={onChange}
                    value={value}
                    errorMessage={errors.phone?.message}
                  />
                </Box>
              )}
            />
            <Controller
              control={control}
              name="cep"
              render={({ field: { onChange, value } }) => (
                <InputCEP
                  onChange={onChange}
                  value={value}
                  errorMessage={errors.cep?.message}
                />
              )}
            />
          </HStack>

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
                errorMessage={errors.address?.message}
              />
            )}
          />
          <HStack gap={"$2"}>
            <Controller
              control={control}
              name="number"
              render={({ field: { onChange, value } }) => (
                <Box width={"$20"}>
                  <Input
                    placeholder="31"
                    name="NÚMERO"
                    secureTextEntry
                    onChangeText={onChange}
                    value={value}
                    errorMessage={errors.number?.message}
                  />
                </Box>
              )}
            />
            <Controller
              control={control}
              name="complement"
              render={({ field: { onChange, value } }) => (
                <Input
                  placeholder=""
                  name="COMPLEMENTO"
                  secureTextEntry
                  onChangeText={onChange}
                  value={value}
                  errorMessage={errors.complement?.message}
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
                errorMessage={errors.password?.message}
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
                onSubmitEditing={handleSubmit(handleSignUp)}
                returnKeyType="send"
                errorMessage={errors.password_confirm?.message}
              />
            )}
          />
          <Button
            title="Criar"
            textFontSize="$lg"
            rounded={"$2xl"}
            onPress={handleSubmit(handleSignUp)}
            isLoading={isLoading}
          />
        </VStack>
      </ScrollView>
    </SafeAreaView>
  );
}
