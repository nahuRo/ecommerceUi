import { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useColorScheme } from "nativewind";

const ProductCard = ({ image, category, title, price, description }) => {
	// console.log(image);
	const { colorScheme } = useColorScheme();
	const [count, setCount] = useState(1);
	return (
		<View className="w-full bg-white dark:bg-gray-50/10 rounded-3xl p-5 my-5">
			<View className="bg-white rounded-xl">
				<Image
					source={{ uri: image }}
					className="w-full h-72"
					style={{ resizeMode: "contain" }}
				/>
			</View>
			<View className="mt-5">
				<Text className="text-sm text-black/60 dark:text-white/60">{category}</Text>
				<Text className="text-lg font-semibold dark:text-white">{title}</Text>
				<View className="flex-row justify-between my-3">
					<View className="flex-row items-center gap-3">
						<AntDesign
							name="minuscircle"
							size={24}
							color={colorScheme === "light" ? "dark" : "white"}
							onPress={() => setCount(count - 1)}
						/>
						<Text className="text-xl dark:text-white">{count}</Text>
						<AntDesign
							name="pluscircle"
							size={24}
							color={colorScheme === "light" ? "dark" : "white"}
							onPress={() => setCount(count + 1)}
						/>
					</View>
					<Text className="text-2xl font-extrabold dark:text-white">
						${count * price}
					</Text>
				</View>
				<Text className="text-sm text-black/60 dark:text-white/70" numberOfLines={2}>
					{description}
				</Text>
				<TouchableOpacity className="flex-row justify-center w-10/12 self-center bg-black dark:bg-white p-3 mt-5 rounded-full">
					<Text className="text-white dark:text-black font-bold">Add to Cart</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default ProductCard;
