import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/core";

export default function Txt() {
	const nav: string | any = useNavigation();

	return (
		<View style={txt.wrap}>
			<Text style={txt.title}>Payments anywhere and anytime easily</Text>
			<Text style={txt.desc}>
				Welcome to our Banking App! We are delighted to have you as a valued customer. Our mission is to provide
				you with a seamless and secure banking experience.
			</Text>
			<View>
				<TouchableOpacity style={txt.btn} onPress={() => nav.navigate("Home")}>
					<Text style={txt.btntxt}>Get Started</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}

const txt = StyleSheet.create({
	wrap: { justifyContent: "center", alignItems: "center", padding: 12, paddingBottom: 100, marginTop: 40 },
	title: { color: "#FFF", fontSize: 25, fontWeight: "bold", textAlign: "center" },
	desc: { color: "#FFF", textAlign: "center", fontSize: 14, marginVertical: 30 },
	btn: { backgroundColor: "#FFF", paddingHorizontal: 30, paddingVertical: 12, borderRadius: 100 },
	btntxt: { fontSize: 16, fontWeight: "700" },
});
