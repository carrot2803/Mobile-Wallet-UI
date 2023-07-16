import { View, StyleSheet, Image } from "react-native";
import { img } from "../../constants";
import React from "react";

export default function Cards() {
	const [layouts, setLayout]: React.SetStateAction<any> = React.useState(null);

	return (
		<View style={card.view}>
			<View onLayout={({ nativeEvent }) => setLayout(nativeEvent?.layout)}>
				{layouts && (
					<Image
						source={img.card.welcome1}
						style={[card.img, { width: layouts.width, height: layouts.height }]}
						resizeMode="contain"
					/>
				)}
				<Image source={img.card.welcome2} />
			</View>
		</View>
	);
}

const card = StyleSheet.create({
	img: { position: "absolute", zIndex: 2, bottom: 30 },
	view: { justifyContent: "center", alignItems: "center", marginTop: 15 },
});
