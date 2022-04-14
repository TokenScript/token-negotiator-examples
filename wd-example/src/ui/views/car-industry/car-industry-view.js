
//	Dependencies
import clsx from 'clsx';

// App
import { Page } from 'ui/app';
import { Link, Slider, Button } from 'ui/components';

//	Styles
import styles from "./car-industry-view.module.scss";


//
//	TokenScript / UI / Views / Car Industry
//


export default function CarIndustryView() {
	const meta = {
		title: 'Car Industry Demo | TokenScript',
		ogTitle: 'Car Industry Demo | TokenScript',
	};

	return (
		<Page className={ styles[ 'v-car-industry'] } meta={ meta }>
			<section className="section">
				<div className="grid -g-cols-1 -a-center">
					<h1>Car Industry</h1>
					<p className="-mt0 -mb6">Use “STL RnD Riot Racers” tokens. Don’t have them? <Link href="/request-tokens">Request</Link></p>
				</div>
				<div className="grid -g-cols-1">
					<Slider opacityTo={ 0.25 } restMargin={ 48 }>
						<div className={ styles[ 'v-car-industry_slide'] } style={{ backgroundImage: 'url("/images/car-industry-2.jpg")' }}>
							<div className={ clsx( '-a-center', styles[ 'v-car-industry_slider-overlay' ] ) }>
								<h2 className="-f-family-rubik -f-regular">
									<span className="f5 -f-light -va-center -a-center -my0">Test Drive:</span>
									Test Drive The New BMW
								</h2>
								<p className="f5 -f-light -color-white">Coming Soon...</p>
							</div>
						</div>
						<div className={ styles[ 'v-car-industry_slide'] } style={{ backgroundImage: 'url("/images/car-industry-1.jpg")' }}>
							<div className={ clsx( '-a-center', styles[ 'v-car-industry_slider-overlay' ] ) }>
								<h2 className="-f-family-rubik -f-regular">
									<span className="f5 -f-light -va-center -a-center -my0">Hire:</span>
									Hire Audi A8 Now
								</h2>
								<Button>Hire Today</Button>
							</div>
						</div>
					</Slider>
				</div>
			</section>
		</Page>
	);
}