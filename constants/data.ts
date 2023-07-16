import { img } from "./assets";

export type lData = { name: string; icon: any };
export type lTransc = { type: string; icon: any; date: string; payment: string };

export const listData: lData[] = [
	{ name: "Wallet", icon: img.wallet },
	{ name: "Transfer", icon: img.transfer },
	{ name: "Pay", icon: img.pay },
	{ name: "Top Up", icon: img.topUp },
];

export const listTransac: lTransc[] = [
	{ type: "Spotify", icon: img.spotify, date: "May 12, 12:30", payment: "+ $12" },
	{ type: "Paypal", icon: img.paypal, date: "May 12, 12:30", payment: "+ $12" },
	{ type: "Dribble", icon: img.dribble, date: "May 12, 12:30", payment: "+ $14" },
];
