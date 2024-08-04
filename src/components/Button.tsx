import {
  ButtonSpinner,
  Button as GluestackButton,
  Text,
} from "@gluestack-ui/themed";
import { ComponentProps } from "react";

type Props = ComponentProps<typeof GluestackButton> & {
  title: string;
  isLoading?: boolean;
  textFontSize:
    | "$xs"
    | "$sm"
    | "$md"
    | "$lg"
    | "$xl"
    | "$2xl"
    | "$3xl"
    | "$2xs"
    | "$4xl"
    | "$5xl"
    | "$6xl"
    | "$7xl"
    | "$8xl"
    | "$9xl"
    | undefined;
};

export function Button({
  title,
  variant = "solid",
  isLoading = false,
  textFontSize,
  ...props
}: Props) {
  return (
    <GluestackButton
      w="$full"
      h="$16"
      bg={variant === "outline" ? "transparent" : "$prodEmerald100"}
      borderWidth={variant === "outline" ? "$1" : "$0"}
      borderColor="$green500"
      rounded="$sm"
      $active-bg={variant === "outline" ? "$gray500" : "$prodEmerald200"}
      disabled={isLoading}
      {...props}
    >
      {isLoading ? (
        <ButtonSpinner color="$white" />
      ) : (
        <Text
          color={variant === "outline" ? "$green500" : "$white"}
          fontFamily="$heading"
          fontSize={textFontSize}
        >
          {title}
        </Text>
      )}
    </GluestackButton>
  );
}
