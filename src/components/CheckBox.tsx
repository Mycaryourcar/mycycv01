import {
  Checkbox,
  CheckboxIndicator,
  CheckboxIcon,
  CheckboxLabel,
  Text,
} from "@gluestack-ui/themed";
import { CheckIcon } from "lucide-react-native";

export function CheckBoxInternal() {
  return (
    //   <Checkbox
    //   value="true"
    //   boxSize={"3.5"}
    //   defaultIsChecked
    //   onChange={handleCheck}
    //   marginTop={25}
    // >
    //   <Text
    //     style={{
    //       color: "#7C7C8A",

    //       fontWeight: "300",
    //     }}
    //   >
    //     <Text style={{ fontWeight: "bold" }}>Devolver </Text>
    //     no mesmo local de retirada
    //   </Text>
    // </Checkbox>

    <Checkbox
      size="md"
      isInvalid={false}
      isDisabled={false}
      value={"true"}
      defaultIsChecked
      marginTop={"$2"}
      accessibilityLabel="Devolver no mesmo local de retirada" // Adicionando a propriedade de acessibilidade
    >
      <CheckboxIndicator mr="$2">
        <CheckboxIcon as={CheckIcon} />
      </CheckboxIndicator>
      <CheckboxLabel>
        <Text style={{ color: "#7C7C8A", fontWeight: "300" }}>
          <Text style={{ fontWeight: "bold" }}>Devolver </Text>
          no mesmo local de retirada
        </Text>
      </CheckboxLabel>
    </Checkbox>
  );
}
