// Projects data.

const projects = [
	{
		id: 0,
		title: 'Songbird Domains',
		category: 'Utility',
		img: require('@/assets/images/projects/songbird-domains.jpg'),
		url: 'https://songbird.domains/?ref=songbird.info'
	},
	{
		id: 1,
		title: 'SGB Chat',
		category: 'Web3 Social',
		img: require('@/assets/images/projects/sgb-chat.png'),
		url: 'https://sgb.chat/?from=songbird.info'
	},
	{
		id: 2,
		title: 'The Sparktans',
		category: 'NFT',
		img: require('@/assets/images/projects/sparktans.jpeg'),
		url: 'https://sparklesnft.com/collection/sparktans/?ref=songbird.info'
	},
	{
		id: 3,
		title: 'Bifrost Wallet',
		category: 'Wallet',
		img: require('@/assets/images/projects/bifrost.png'),
		url: 'https://bifrostwallet.com/?ref=songbird.info'
	},
	{
		id: 4,
		title: 'Flare Oracle',
		category: 'FTSO',
		img: require('@/assets/images/projects/flare-oracle.jpg'),
		url: 'https://flareoracle.io/?ref=songbird.info'
	},
	{
		id: 5,
		title: 'The Satraps',
		category: 'NFT',
		img: require('@/assets/images/projects/satraps.png'),
		url: 'https://satraps.io/?ref=songbird.info'
	},
	{
		id: 6,
		title: 'Pangolin',
		category: 'DeFi',
		img: require('@/assets/images/projects/pangolin.svg'),
		url: 'https://www.pangolin.exchange/?ref=songbird.info'
	},
	{
		id: 7,
		title: 'Flarepedia',
		category: 'Info',
		img: require('@/assets/images/projects/flarepedia.png'),
		url: 'https://www.flarepedia.com/?ref=songbird.info'
	},
	{
		id: 8,
		title: 'Sparkles NFT Marketplace',
		category: 'NFT Marketplace',
		img: require('@/assets/images/projects/sparkles.jpg'),
		url: 'https://sparklesnft.com/?ref=songbird.info'
	},
	{
		id: 9,
		title: 'Evolve FTSO',
		category: 'FTSO',
		img: require('@/assets/images/projects/evolve.jpg'),
		url: 'https://www.evolveftso.com/?ref=songbird.info'
	},
	{
		id: 10,
		title: 'FLR Finance',
		category: 'DeFi',
		img: require('@/assets/images/projects/flr-finance.jpg'),
		url: 'https://flr.finance/?ref=songbird.info'
	},
	{
		id: 11,
		title: 'Flare Metrics',
		category: 'Info',
		img: require('@/assets/images/projects/flaremetrics.jpg'),
		url: 'https://flaremetrics.io/?ref=songbird.info'
	},
	{
		id: 12,
		title: 'Oracle Swap',
		category: 'DeFi & FTSO',
		img: require('@/assets/images/projects/oracleswap.jpg'),
		url: 'https://oracleswap.io/?ref=songbird.info'
	},
	{
		id: 13,
		title: 'Spark Coin',
		category: 'Utility',
		img: require('@/assets/images/projects/sparkcoin.jpg'),
		url: 'https://www.sparkcoin.io/?ref=songbird.info'
	},
	{
		id: 14,
		title: 'Nortso',
		category: 'FTSO',
		img: require('@/assets/images/projects/nortso.png'),
		url: 'https://nortso.xyz/?ref=songbird.info'
	},
	{
		id: 15,
		title: 'Fat Cats',
		category: 'NFT',
		img: require('@/assets/images/projects/fat-cats.jpeg'),
		url: 'https://sparklesnft.com/collection/thefatcatsgenesis/?ref=songbird.info'
	},
	{
		id: 16,
		title: 'A-FTSO',
		category: 'FTSO',
		img: require('@/assets/images/projects/aftso.png'),
		url: 'https://ftso.alexdupre.com/?ref=songbird.info'
	},
	{
		id: 17,
		title: 'MyCryptoPlayground',
		category: 'Info',
		img: require('@/assets/images/projects/mcp.jpg'),
		url: 'https://www.youtube.com/@mycryptoplayground/videos?ref=songbird.info'
	},
	{
		id: 18,
		title: 'sTOADZ',
		category: 'NFT & FTSO',
		img: require('@/assets/images/projects/stoadz.jpeg'),
		url: 'https://xtoadz.xyz/?ref=songbird.info'
	},
	{
		id: 19,
		title: 'The Cooties',
		category: 'NFT',
		img: require('@/assets/images/projects/cooties.jpg'),
		url: 'https://cootie.finance/?ref=songbird.info'
	},
	{
		id: 20,
		title: 'DeFiOracles',
		category: 'FTSO',
		img: require('@/assets/images/projects/defioracles.jpg'),
		url: 'https://defioracles.org/?ref=songbird.info'
	},
	{
		id: 21,
		title: 'The Grungies',
		category: 'NFT',
		img: require('@/assets/images/projects/grungies.png'),
		url: 'https://sparklesnft.com/collection/thegrungies/?ref=songbird.info'
	},
	{
		id: 22,
		title: 'AlphaOracle',
		category: 'FTSO',
		img: require('@/assets/images/projects/alpha.png'),
		url: 'https://www.alphaoracle.io/?ref=songbird.info'
	},
	{
		id: 23,
		title: 'Use Your Spark',
		category: 'FTSO',
		img: require('@/assets/images/projects/useyourspark.jpg'),
		url: 'https://www.useyourspark.com/?ref=songbird.info'
	},
	{
		id: 24,
		title: 'SolidiFi',
		category: 'Wallet & FTSO',
		img: require('@/assets/images/projects/solidifi.jpg'),
		url: 'https://solidifi.app/?ref=songbird.info'
	},
	{
		id: 25,
		title: 'FTSO AU',
		category: 'FTSO',
		img: require('@/assets/images/projects/ftsoau.png'),
		url: 'https://ftso.au/?ref=songbird.info'
	},
	{
		id: 26,
		title: 'Jeen Lolkema Analytics',
		category: 'Info',
		img: require('@/assets/images/projects/jeen.jpg'),
		url: 'https://sgb.jeenlolkema.nl/?ref=songbird.info'
	},
	{
		id: 27,
		title: 'FLRDrops',
		category: 'NFT Marketplace',
		img: require('@/assets/images/projects/flr-drops.jpg'),
		url: 'https://xfd.flr.finance/?ref=songbird.info'
	},
	{
		id: 28,
		title: 'Send2.name',
		category: 'Wallet',
		img: require('@/assets/images/projects/send2name.png'),
		url: 'https://send2.name/?ref=songbird.info'
	},
];

export default projects;
