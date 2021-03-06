
//	Dependencies
import { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';

// App
import { Image, Button } from 'ui/components';

// Styles
import styles from "./banner.module.scss";


//
//	TokenScript / UI / Components / Banner
//


export default function Banner({ className, theme, image, headline, text, code, fineprint, children, onClick, enabled, selectedTokens, authTokens}) {
	const [ claimed, setClaimed ] = useState( false );

	const handleOnClick = async () => {
		// TODO: Actually pass the tokens through component
		try {
			await window.negotiator.authenticate({
				issuer: authTokens[0],
				unsignedToken: {name:"some token", desc: "a really cool token"}
			});
			setClaimed( true );
		} catch (e){
			alert(e.message);
			return;
		}

		if ( onClick ) onClick();
	}

	return (
		<div className={ clsx( styles[ 'c-banner' ], className, { [ `-t-${ theme }` ]:theme } ) }>
			<div className={ styles[ 'c-banner_container' ] }>
				{ image && <Image className={ styles[ 'c-banner_image' ] } src={ image?.src } /> }
				{ children ? (
					children
				) : (
					<div className={ styles[ 'c-banner_content' ] }>
						{ headline && (
							typeof headline !== 'string' ? (
								headline
							) : (
								<h2 className="f5 -f-extra-bold">{ headline }</h2>
							)
						)}
						{ text && <p className="f7 -mt0">{ text }</p> }
						<div style={{visibility: enabled ? 'visible' : 'hidden' }} className={ styles[ 'c-banner_actions' ] }>
							<Button className={ claimed ? '-style-green' : '' } onClick={ handleOnClick }>{ claimed ? 'Success!' : 'Claim' }</Button>
							{/* code && <p className={ clsx( '-f-caps', styles[ 'c-banner_actions-code' ] ) }>Code: { code }</p> */}
						</div>
					</div>
				)}
			</div>
			{ fineprint && <p className={ clsx( '-color-text-light -f-light', styles[ 'c-banner_fineprint' ] ) }>{ fineprint }</p> }
		</div>
	);
}

Banner.propTypes = {
	className: PropTypes.string,
	theme: PropTypes.string,
	image: PropTypes.object,
	headline: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.node,
	]),
	text: PropTypes.string,
	code: PropTypes.string,
	children: PropTypes.node,
	onClick: PropTypes.func,
}
