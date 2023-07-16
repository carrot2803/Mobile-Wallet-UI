import { View, Text, Image, StyleSheet } from "react-native";
import { img } from "../../../constants";

export const Cfooter = () => {
	return (
		<View style={card.footer}>
			<View>
				<Text style={card.holder}>Card holder</Text>
				<Text style={card.name}>Bob A Ross</Text>
			</View>
			<Image source={img.card.visaTxt} />
		</View>
	);
};

const card = StyleSheet.create({
	footer: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
	holder: { color: "rgba(255,255,255,0.4)" },
	name: { color: "white", fontSize: 14 },
});
