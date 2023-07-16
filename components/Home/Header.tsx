import { View, Text, Image, StyleSheet } from "react-native";
import { img } from "../../constants";

export const Header = () => {
	return (
		<View style={header.container}>
			<View>
				<Text>Hello</Text>
				<Text style={header.userName}>Friend</Text>
			</View>
			<Image source={img.notifs} />
		</View>
	);
};

const header = StyleSheet.create({
	container: { flexDirection: "row", justifyContent: "space-between" },
	userName: { fontWeight: "bold", fontSize: 16 },
});
