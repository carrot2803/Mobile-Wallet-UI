import { StyleSheet, Text, View } from "react-native";
import { listTransac } from "../../constants/data";
import { TransItem } from "./subcomp/TransItem";

export default function Transaction() {
	return (
		<View style={trans.container}>
			<Text style={trans.title}>Recent Transaction</Text>
			<View>{listTransac.map(TransItem)}</View>
		</View>
	);
}

const trans = StyleSheet.create({ title: { fontWeight: "bold", fontSize: 18 }, container: { marginTop: 12 } });
