import { Button } from "@components/Button";
import { Center, Text } from "@gluestack-ui/themed";
import auth from "@react-native-firebase/auth";
export function Search() {
  function handleSignOut() {
    auth().signOut();
  }
  return (
    <Center flex={1}>
      <Text color="white">Search</Text>
      <Button onPress={handleSignOut} title="Sair" textFontSize={"$sm"} />
    </Center>
  );
}
