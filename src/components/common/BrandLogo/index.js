import Link from 'next/link';
import { Search } from '~/src/components/icons';

const BrandLogo = () => {
	return (
		<div className="mobile_header_view_wrap">
			<button className="hamburger hamburger--elastic" type="button">
				<span className="hamburger-box">
					<span className="hamburger-inner"></span>
				</span>
			</button>
			<Link href="/">
				<a className="fastsole-brand-logo">
					<img src="https://fastsole.co.uk/wp-content/themes/fs/img/logo.png" alt="fastsole"></img>
				</a>
			</Link>

			<button className="search__button_mobile">
				<Search />
			</button>
		</div>
	);
};

export default BrandLogo;
