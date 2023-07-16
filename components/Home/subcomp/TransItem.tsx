import { View, Image, Text, StyleSheet } from "react-native";
import { lTransc } from "../../../constants";

export const TransItem = (item: lTransc) => (
	<View key={item.type} style={s.items}>
		<View style={[s.icon, s.align, s.shadow]}>
			<Image source={item.icon} />
		</View>
		<View style={s.itemBody}>
			<Text style={s.type}>{item.type}</Text>
			<Text style={s.date}>{item.date}</Text>
		</View>
		<View>
			<Text style={s.payment}>{item.payment}</Text>
		</View>
	</View>
);

const s = StyleSheet.create({
	items: { flexDirection: "row", alignItems: "center", marginTop: 22 },
	icon: { padding: 10, backgroundColor: "white", width: 60, height: 60, borderRadius: 10 },
	align: { justifyContent: "center", alignItems: "center" },
	shadow: { shadowColor: "#000", shadowOffset: { height: 10, width: 2 }, shadowOpacity: 0.7, shadowRadius: 80 },
	itemBody: { flex: 1, paddingLeft: 14 },
	type: { fontWeight: "500", fontSize: 16 },
	date: { marginTop: 5 },
	payment: { fontWeight: "bold", fontSize: 16 },
});
