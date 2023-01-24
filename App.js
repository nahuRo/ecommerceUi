import { StatusBar } from "expo-status-bar";
import { SafeAreaView, Switch, Text, View } from "react-native";
import { useColorScheme } from "nativewind";

import ProductsList from "./components/ProductsList";

export default function App() {
	const { colorScheme, toggleColorScheme } = useColorScheme();

	return (
		<SafeAreaView className="flex-1 items-center justify-center bg-slate-200 dark:bg-black">
			<View className="flex-row w-full g-5">
				<Text className="dark:text-white text-xl font-bold">New collection</Text>
				<Switch value={colorScheme === "dark"} onChange={toggleColorScheme} />
			</View>
			<ProductsList />
			<StatusBar style={colorScheme === "dark" ? "light" : "dark"} />
		</SafeAreaView>
	);
}
