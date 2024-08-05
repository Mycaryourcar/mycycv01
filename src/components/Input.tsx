import {
  Input as GluestackInput,
  InputField,
  Text,
  VStack,
} from "@gluestack-ui/themed";
import { ComponentProps, useState } from "react";
import { DimensionValue } from "react-native";

type Props = ComponentProps<typeof InputField> & {
  name: string;
  w?:
    | "$1"
    | "$2"
    | "$3"
    | "$4"
    | "$5"
    | "$px"
    | "$0"
    | "$0.5"
    | "$1.5"
    | "$2.5"
    | "$3.5"
    | "$4.5"
    | "$6"
    | "$7"
    | "$8"
    | "$9"
    | "$10"
    | "$11"
    | "$12"
    | "$14"
    | "$1/2"
    | "$1/3"
    | "$1/4"
    | "$2/4"
    | "$3/4"
    | "$1/5"
    | "$4/5"
    | "$full";
};
export function Input({ name, w, ...props }: Props) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <VStack w={w} mb={"$8"}>
      <Text
        fontWeight={"$bold"}
        color={isFocused ? "$prodEmerald200" : "$prodBlack600"}
        fontSize={"$xs"}
      >
        {name}
      </Text>
      <GluestackInput
        h="$11"
        p="$0"
        borderWidth="$0"
        borderBottomWidth={"$2"}
        borderColor={isFocused ? "$prodEmerald200" : "$secondary300"}
      >
        <InputField
          color={"$prodBlack600"}
          fontFamily="$body"
          placeholderTextColor="#A3A3A3"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          {...props}
        />
      </GluestackInput>
    </VStack>
  );
}
