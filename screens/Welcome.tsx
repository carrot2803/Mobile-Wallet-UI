import { StyleSheet, View, ImageBackground } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Cards, Txt } from "../components/Welcome";
import { img } from "../constants";

export default function Welcome() {
	const insets = useSafeAreaInsets();
	return (
		<ImageBackground source={img.bg} style={[styles.container, { paddingTop: insets.top }]}>
			<View>
				<Cards />
				<Txt />
			</View>
		</ImageBackground>
	);
}

const styles = StyleSheet.create({ container: { flex: 1, justifyContent: "center" } });
