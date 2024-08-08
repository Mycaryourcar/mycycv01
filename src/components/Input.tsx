import {
  Input as GluestackInput,
  InputField,
  Text,
  VStack,
  FormControl,
  FormControlError,
  FormControlErrorText,
} from "@gluestack-ui/themed";
import { ComponentProps, useState } from "react";

type Props = ComponentProps<typeof InputField> & {
  name: string;
  errorMessage?: string | null;
  isInvalid?: boolean;
};
export function Input({
  name,
  errorMessage = null,
  isInvalid = false,
  ...props
}: Props) {
  const [isFocused, setIsFocused] = useState(false);
  const invalid = !!errorMessage || isInvalid;

  return (
    <VStack mb={props.mb ? props.mb : "$8"}>
      <Text
        fontWeight={"$bold"}
        color={isFocused ? "$prodEmerald200" : "$prodBlack600"}
        fontSize={"$xs"}
      >
        {name}
      </Text>
      <FormControl
        isInvalid={invalid}
        mb={props.mb ? props.mb : "$4"}
        w="$full"
      >
        <GluestackInput
          isInvalid={isInvalid}
          h={props.h ? props.h : "$11"}
          p="$0"
          borderWidth="$0"
          rounded={"$none"}
          borderBottomWidth={"$2"}
          borderColor={"$secondary300"}
          $focus={{
            borderBottomWidth: 2,
            borderColor: invalid ? "$red500" : "$green500",
          }}
          $invalid={{
            borderBottomWidth: 2,
            borderColor: "$red500",
          }}
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

        <FormControlError>
          <FormControlErrorText color="$red500">
            {errorMessage}
          </FormControlErrorText>
        </FormControlError>
      </FormControl>
    </VStack>
  );
}
