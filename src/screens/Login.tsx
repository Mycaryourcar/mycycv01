import {
  Center,
  ScrollView,
  Text,
  HStack,
  Heading,
  Icon,
  VStack,
  Box,
  Link,
  LinkText,
  Pressable,
  ModalBackdrop,
  ButtonText,
  CloseIcon,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Modal,
} from "@gluestack-ui/themed";
import { Input } from "@components/Input";
import { Alert, StatusBar, TouchableOpacity } from "react-native";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "@components/Button";
import { useNavigation } from "@react-navigation/native";
import { AuthNavigatorRoutesProps } from "@routes/auth.routes";
import { SafeAreaView } from "react-native-safe-area-context";
import { useForm, Controller } from "react-hook-form";
import auth from "@react-native-firebase/auth";
import { useState } from "react";
import React from "react";
import { ForgotPasswordModal } from "@modal/ForgotPasswordModal";
type FormDataProps = {
  email: string;
  password: string;
};

const signUpSchema = yup.object({
  email: yup.string().required("Informe o e-mail").email("E-mail inválido"),
  password: yup.string().required("Informe senha"),
});

export function Login() {
  const navigation = useNavigation<AuthNavigatorRoutesProps>();
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<FormDataProps>({
    resolver: yupResolver(signUpSchema),
  });

  function handleGoBack() {
    navigation.goBack();
  }

  function handleAccount(data: FormDataProps) {
    setIsLoading(true);
    auth()
      .signInWithEmailAndPassword(data.email, data.password)
      .then(() => console.log("Logado com sucesso"))
      .catch((e) => console.log(e))
      .finally(() => setIsLoading(false));
  }

  function handleForgotPassword() {
    const email = getValues("email"); // Obtém o e-mail do formulário
    setShowModal(true);
  }

  function handleNewAccount() {
    navigation.navigate("signUp");
  }

  return (
    <SafeAreaView style={{ flex: 1, paddingTop: 60, paddingHorizontal: 20 }}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#269a90"
        translucent={true}
      />
      <Text mb={"$16"} color="$prodBlack600" fontSize={24} fontWeight={"$bold"}>
        Entre ou cadastre-se no Mycyc
      </Text>

      <VStack>
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
              borderColor={"$secondary200"}
              rounded={"$md"}
              mb={"$1"}
            />
          )}
        />

        <TouchableOpacity
          style={{ alignSelf: "flex-end" }}
          onPress={handleForgotPassword}
        >
          <Text color="$green500">Esqueci minha senha</Text>
        </TouchableOpacity>
        <Button
          title="Acessar"
          variant="outline"
          onPress={handleSubmit(handleAccount)}
          textFontSize="$lg"
          mb={"$2"}
          mt={"$16"}
          isLoading={isLoading}
        />
        <Button
          mb={"$2"}
          title="Cadastrar"
          variant="outline"
          onPress={handleNewAccount}
          textFontSize="$lg"
        />
        <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
          <ForgotPasswordModal email={getValues("email")} />
        </Modal>
      </VStack>
    </SafeAreaView>
  );
}
