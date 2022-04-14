
// App
import { Page } from 'ui/app';
import { Link, ProductItem, Banner } from 'ui/components';


//
//	TokenScript / Pages / Demo / Music & Events
//


export default function MusicEvents() {
	const meta = {
		title: 'Music & Events Store Demo | TokenScript',
		ogTitle: 'Music & Events Store Demo | TokenScript',
	};

	const products = [
		{ title: 'Ed Sheran Concert Live in Glasgow Music Centre', price: 69.90, image: { src: '/images/music-product-1.jpg', alt: '' } },
		{ title: 'Metallica live in Amsterdam Live Concert', price: 69.90, image: { src: '/images/music-product-2.jpg', alt: '' } },
		{ title: 'The Dip and myth of her Live in Sydney', price: 69.90, image: { src: '/images/music-product-3.jpg', alt: '' } },
		{ title: 'Ed Sheran Concert Live in Glasgow Music Centre', price: 69.90, image: { src: '/images/music-product-1.jpg', alt: '' } },
		{ title: 'Metallica live in Amsterdam Live Concert', price: 69.90, image: { src: '/images/music-product-2.jpg', alt: '' } },
		{ title: 'The Dip and myth of her Live in Sydney', price: 69.90, image: { src: '/images/music-product-3.jpg', alt: '' } },
	];

	return (
		<Page meta={ meta }>
			<section className="section">
				<div className="grid -g-cols-1 -a-center">
					<h1>Music & Events Store</h1>
					<p className="-mt0 -mb6">Use “STL RnD Zed” or ”STL RnD BAYC Derivates” tokens. Don’t have them? <Link href="/request-tokens">Request</Link></p>
				</div>
				<div className="grid -g-cols-1">
					<Banner
						className="-mb3"
						theme="beige"
						image={{ src: '/images/vip-badge.png' }}
						headline={ <h2 className="f4 -f-medium">20% Off for your next VIP experience</h2> }
						text="With supporting text below as a natural lead-in to additional content."
						fineprint="Available for exclusive to BAYC Derivative holders"
						buttonText="Claim"
						code="XYZ15"
						onClick={ () => {} }
					/>
				</div>
				<div className="grid -g-cols-3">
					{ products.map( ( p, i ) => <ProductItem key={ i } product={ p } /> ) }
				</div>
			</section>
		</Page>
	);
};