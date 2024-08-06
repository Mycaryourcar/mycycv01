import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import {
  RadioGroup,
  Radio,
  RadioLabel,
  RadioIndicator,
  RadioIcon,
  HStack,
  CircleIcon,
  Text,
} from "@gluestack-ui/themed";

interface Props {
  onChange: (...event: any[]) => void;
  value: any;
  errorMessage: string | undefined;
}
export function GenderSelector({ onChange, value, errorMessage }: Props) {
  return (
    <View>
      <Text
        fontWeight={"$bold"}
        color={"$prodBlack600"}
        fontSize={"$xs"}
        marginBottom={"$4"}
      >
        SEXO
      </Text>
      <RadioGroup onChange={onChange} mb={"$8"}>
        <HStack space="2xl">
          <Radio value="Homem">
            <RadioIndicator
              mr="$2"
              style={
                value === "Homem"
                  ? styles.radioIndicatorSelected
                  : styles.radioIndicator
              }
            >
              <RadioIcon
                as={CircleIcon}
                color={value === "Homem" ? "$prodEmerald200" : "transparent"} // Muda a cor com base na seleção
                style={styles.radioIcon}
              />
            </RadioIndicator>
            <RadioLabel>Homem</RadioLabel>
          </Radio>
          <Radio value="Mulher">
            <RadioIndicator
              mr="$2"
              style={
                value === "Mulher"
                  ? styles.radioIndicatorSelected
                  : styles.radioIndicator
              }
            >
              <RadioIcon
                as={CircleIcon}
                color={value === "Mulher" ? "$prodEmerald200" : "transparent"} // Muda a cor com base na seleção
                style={styles.radioIcon}
              />
            </RadioIndicator>
            <RadioLabel>Mulher</RadioLabel>
          </Radio>
        </HStack>
        <Text color="$red500">{errorMessage}</Text>
      </RadioGroup>
    </View>
  );
}

const styles = StyleSheet.create({
  radioIndicator: {
    borderWidth: 1,
    borderColor: "black", // Define a cor da borda padrão como preto
    borderRadius: 50, // Ajusta o formato para um círculo
  },
  radioIndicatorSelected: {
    borderWidth: 1,
    borderColor: "black", // Define a cor da borda quando selecionado como preto
    borderRadius: 50, // Ajusta o formato para um círculo
  },
  radioIcon: {
    width: 16,
    height: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "black", // Define a cor da borda do ícone como preto
  },
});
