import React, { useState } from "react";
import { Text, View } from "@gluestack-ui/themed";
import MaskInput, { Masks } from "react-native-mask-input";

interface Props {
  onChange: (...event: any[]) => void;
  value: any;
  errorMessage: string | undefined;
}

export function InputCPF({ onChange, value, errorMessage }: Props) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View flex={1}>
      <Text
        fontWeight={"$bold"}
        color={isFocused ? "$prodEmerald200" : "$prodBlack600"}
        fontSize={"$xs"}
      >
        CPF
      </Text>
      <MaskInput
        mask={Masks.BRL_CPF}
        style={[
          {
            borderBottomWidth: 2,
            fontFamily: "Roboto_400Regular",
            fontSize: 16,
            paddingVertical: 7,
            paddingLeft: 10,
            color: "#525252",
            borderColor: isFocused
              ? "#269a90"
              : errorMessage
              ? "#f43f5e"
              : "#B0B0B0",
          },
        ]}
        value={value}
        onChangeText={onChange}
        keyboardType="numeric"
        placeholder="123.456.789.01"
        placeholderTextColor="#A3A3A3"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      <Text color="$red500">{errorMessage}</Text>
    </View>
  );
}
