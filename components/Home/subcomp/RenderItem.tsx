import { View, Text, Image, StyleSheet } from "react-native";
import { lData } from "../../../constants";

export const renderItem = (item: lData) => {
	return (
		<View key={item.name} style={s.cont}>
			<View style={[s.icon, s.align, s.shadow]}>
				<Image source={item.icon} />
			</View>
			<Text style={s.txt}>{item.name}</Text>
		</View>
	);
};

const s = StyleSheet.create({
	shadow: { shadowColor: "#000", shadowOffset: { height: 10, width: 2 }, shadowOpacity: 0.7, shadowRadius: 80 },
	icon: { padding: 10, backgroundColor: "white", width: 60, height: 60, borderRadius: 10 },
	align: { justifyContent: "center", alignItems: "center" },
	cont: { justifyContent: "center", alignItems: "center" },
	txt: { marginTop: 10 },
});
