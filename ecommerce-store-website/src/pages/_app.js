
//	Dependencies
import PropTypes from 'prop-types';
import Head from 'next/head';

//	App
import { useStore } from 'base/state';
import { Layout as DefaultLayout } from 'ui/app';
import Menu from 'ui/app/menu';
import { useEffect }  from "react";

//	Styles
import 'styles/index.scss';

import "@tokenscript/token-negotiator/dist/theme/style.css"

export default function App({ Component, pageProps }) {

	const Layout = Component.Layout ?? DefaultLayout;
	const api = useStore( s => s.api );

	useEffect(()=> {

		const init = async () => {

			const { Client } = (await import("@tokenscript/token-negotiator"));

			window.negotiator = new Client({
				type: 'active',
				issuers: [
					/*{
						collectionID: 'rinkeby-punk',
						onChain: true,
						contract: '0x6d3495B5d83f6479Ab3023784f52B11AC3794e2F',
						chain: 'rinkeby',
						openSeaSlug: 'stl-expansion-punks-nfts-v2'
					},*/
					/*{
						collectionID: 'stl-bayc',
						onChain: true,
						contract: '0x3d8a0fB32b0F586FdC10447c22F477979dc526ec',
						chain: 'rinkeby',
						openSeaSlug: 'stl-bayc'
					},
					{
						collectionID: 'stl-mayc',
						onChain: true,
						contract: '0x70F6aCb098d57917CD46e8c647fa9c45800D29f2',
						chain: 'rinkeby',
						openSeaSlug: 'stl-mayc'
					},
					{
						collectionID: 'stl-nifty',
						onChain: true,
						contract: '0x60E04A774aD2Eca9e4093445dA67e649bb267879',
						chain: 'rinkeby',
						openSeaSlug: 'stl-nifty'
					},
					{
						collectionID: 'women-tribe',
						onChain: true,
						contract: '0xDbaCB1C25d849321727534C1BB2bbd962272eB13',
						chain: 'rinkeby',
						openSeaSlug: 'stl-woman-tribe-nfts-v2'
					},*/
					/*{
						collectionID: 'zed',
						onChain: true,
						contract: '0x8E3De6062c7041d483Cc1BE2654728f6956F7965',
						chain: 'rinkeby',
						openSeaSlug: 'stl-zed-run-nfts-v2'
					},
					{
						collectionID: 'stl-rnd-bayc-derivatives',
						onChain: true,
						contract: '0x80A679106f24684BB4c92828ACce5e92d2AfFcad',
						chain: 'rinkeby',
						openSeaSlug: 'stl-bayc-nfts-v2'
					},*/
					/*{
						collectionID: 'stl-rnd-riot-racers',
						onChain: true,
						contract: '0x399653F4212bf3EA3AF9bCE45a294AB462f22436',
						chain: 'rinkeby',
						openSeaSlug: 'stl-riot-racers-nfts-v3'
					}*/
				],
				uiOptions: {
					openingHeading: "Open a new world of discounts available with your tokens.",
					issuerHeading: "Get discounts with tokens",
					repeatAction: "try again",
					theme: "light",
					position: "bottom-right"
				},
				safeConnectOptions: {
					url: "https://safeconnect.tokenscript.org",
					initialProof: false
				}
			});

			//window.negotiator.negotiate();

			window.negotiator.on("tokens-selected", (data) => {
				api.setSelectedTokens({...data.selectedTokens});
			});
		};

		if (document.getElementsByClassName("overlay-tn")[0].childElementCount === 0)
			init();
	});

	return (
		<>
			<Layout pageProps={ pageProps }>
				<Head>
					<link rel="preconnect" href="https://fonts.googleapis.com" />
					<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
					<link href="https://fonts.googleapis.com/css2?family=Inter:wght@500;700;800&family=Rubik:wght@300;400;500;700&display=swap" rel="stylesheet" />
				</Head>
				<Component { ...pageProps } />
			</Layout>
			<Menu.Region onClose={ () => api.closeMenuView() } />
			<div className="overlay-tn"/>
		</>
	);
};

App.propTypes = {
	Component: PropTypes.func,
	pageProps: PropTypes.object,
};