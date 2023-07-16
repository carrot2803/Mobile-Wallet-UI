import { View, Text, Dimensions, Image, ImageBackground, StyleSheet } from "react-native";
import { Cfooter } from "./subcomp/Cfooter";
import { img } from "../../constants";

const item = Dimensions.get("window").width - 24 * 2;
const size = { width: 325, height: 196 };

export const Card = () => {
	return (
		<View style={card.cont}>
			<ImageBackground source={img.card.visaBg} style={card.img}>
				<View>
					<Image source={img.card.icon} />
				</View>
				<View style={card.num}>
					<Text style={card.txt}>{`4324 5678 1234 5678`}</Text>
				</View>
				<Cfooter />
			</ImageBackground>
		</View>
	);
};

const card = StyleSheet.create({
	cont: { paddingVertical: 14 },
	img: { width: item, height: (item * size.height) / size.width, padding: 24 },
	num: { flex: 1, justifyContent: "center" },
	txt: { color: "white", fontSize: 22, fontWeight: "600" },
});
