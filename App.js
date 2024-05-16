import { NavigationContainer } from "@react-navigation/native";
import Routes from "./src/routes";
import AppProvidor from "./src/context";

export default function App() {
    return (
        <NavigationContainer>
            <AppProvidor>
            <Routes />
            </AppProvidor>
        </NavigationContainer>
    );
}