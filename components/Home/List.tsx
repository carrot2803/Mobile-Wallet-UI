import { StyleSheet, Text, View } from "react-native";
import { listData } from "../../constants/data";
import { renderItem } from "./subcomp/RenderItem";

export default function List() {
	return (
		<View>
			<Text style={styles.title}>Service</Text>
			<View style={styles.list}>{listData.map(renderItem)}</View>
		</View>
	);
}

const styles = StyleSheet.create({
	title: { fontWeight: "bold", fontSize: 18 },
	list: { flexDirection: "row", justifyContent: "space-between", marginTop: 12 },
});
