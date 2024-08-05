import React, { useState } from "react";
import { StyleSheet, TextInput } from "react-native";
import { Text, View } from "@gluestack-ui/themed";
import MaskInput, { Masks } from "react-native-mask-input";
import { styles } from "./styles";

export function InputCPF() {
  const [value, setValue] = React.useState("");
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
            borderColor: isFocused ? "#269a90" : "#B0B0B0",
          },
        ]}
        value={value}
        onChangeText={setValue}
        keyboardType="numeric"
        placeholder="123.456.789.01"
        placeholderTextColor="#A3A3A3"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </View>
  );
}
