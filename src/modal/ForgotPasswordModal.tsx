import React, { useState } from "react";
import {
  Text,
  ModalBackdrop,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Heading,
  Icon,
  CloseIcon,
  ModalCloseButton,
  Center,
} from "@gluestack-ui/themed";
import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import auth from "@react-native-firebase/auth";
import { MailCheck } from "lucide-react-native";
import EmailSent from "@assets/email_sent.svg";

type ModalProps = {
  email?: string;
};

type FormDataProps = {
  email: string;
};

const forgotPasswordSchema = yup.object({
  email: yup.string().required("Informe o e-mail").email("E-mail inválido"),
});

export function ForgotPasswordModal({ email }: ModalProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [emailSend, setEmailSend] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataProps>({
    defaultValues: { email: email || "" },
    resolver: yupResolver(forgotPasswordSchema),
  });

  function handleForgotPasswordEmail({ email }: FormDataProps) {
    setIsLoading(true);
    auth()
      .sendPasswordResetEmail(email)
      .then(() => console.log("Enviamos um e-mail"))
      .catch((e) => {
        console.log(e);
      })
      .finally(() => {
        setIsLoading(false);
        setEmailSend(true);
      });
  }

  const emailSendModal = () => {
    return (
      <Center>
        <EmailSent width={65} height={66} />

        <Text lineHeight={"$md"}>Encaminhado com sucesso!</Text>
      </Center>
    );
  };
  const defaultModal = () => {
    return (
      <>
        <Text lineHeight={"$md"}>
          Confirme seu e-mail para receber o código de verificação para
          redefinir sua senha
        </Text>
        <Controller
          control={control}
          name="email"
          render={({ field: { onChange, value } }) => (
            <Input
              name="E-MAIL"
              keyboardType="email-address"
              autoCapitalize="none"
              onChangeText={onChange}
              value={value}
              errorMessage={errors.email?.message}
            />
          )}
        />
      </>
    );
  };
  return (
    <>
      <ModalBackdrop />
      <ModalContent>
        <ModalHeader>
          <Heading size="lg">Esqueci minha senha</Heading>
          <ModalCloseButton>
            <Icon as={CloseIcon} />
          </ModalCloseButton>
        </ModalHeader>
        <ModalBody>{emailSend ? emailSendModal() : defaultModal()}</ModalBody>
        <ModalFooter>
          {emailSend ? (
            <></>
          ) : (
            <Button
              mb={"$2"}
              title="Enviar"
              variant="outline"
              textFontSize="$lg"
              isLoading={isLoading}
              onPress={handleSubmit(handleForgotPasswordEmail)}
            />
          )}

          {/* <Button
            mb={"$2"}
            title="SMS"
            textFontSize="$lg"
            onPress={handleSubmit(handleForgotPasswordEmail)}
          /> */}
        </ModalFooter>
      </ModalContent>
    </>
  );
}
