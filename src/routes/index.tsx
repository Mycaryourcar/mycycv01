import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { AuthRoutes } from "./auth.routes";
import { gluestackUIConfig } from "../../config/gluestack-ui.config";
import { Box } from "@gluestack-ui/themed";
import { AppRoutes } from "./app.routes";
import { AuthContext } from "@contexts/AuthContext";
import { useContext, useEffect, useState } from "react";
import auth, { FirebaseAuthTypes } from "@react-native-firebase/auth";
import { useAuth } from "@hooks/useAuth";
export function Routes() {
  const theme = DefaultTheme;
  theme.colors.background = gluestackUIConfig.tokens.colors.white;

  const { user } = useAuth();
  console.log("USUÁRIO LOGADO =>", user);
  const [loggedUser, setLoggedUser] = useState<FirebaseAuthTypes.User | null>(
    null
  );
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(setLoggedUser);
    return subscriber;
  }, []);
  return (
    <Box flex={1} bg="$gray700">
      <NavigationContainer theme={theme}>
        {loggedUser ? <AppRoutes /> : <AuthRoutes />}
      </NavigationContainer>
    </Box>
  );
}
