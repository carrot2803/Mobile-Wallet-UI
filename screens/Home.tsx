import { Card, Header, List, Transaction } from "../components/Home";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, ScrollView } from "react-native";

export default function Home() {
	return (
		<SafeAreaView style={{ flex: 1 }}>
			<ScrollView style={home.container}>
				<Header />
				<Card />
				<List />
				<Transaction />
			</ScrollView>
		</SafeAreaView>
	);
}

const home = StyleSheet.create({ container: { flex: 1, backgroundColor: "white", padding: 24 } });
