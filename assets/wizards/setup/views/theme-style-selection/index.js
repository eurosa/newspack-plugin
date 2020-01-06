/**
 * Theme Style Selection Screen.
 */

/**
 * WordPress dependencies
 */
import { Component } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import { Button, ButtonGroup, withWizardScreen } from '../../../../components/src';
import './style.scss';
import ScreenshotStyle2 from './images/screenshot-style-2.png';

/**
 * Theme Style Selection Screen.
 */
class ThemeStyleSelection extends Component {
	/**
	 * Render.
	 */
	render() {
		const { updateThemeStyle, themeStyle } = this.props;
		return (
			<ButtonGroup>
				<Button
					onClick={ () => updateThemeStyle( 'default' ) }
					isPrimary={ themeStyle === 'default' }
				>
					<img
						alt={ __( 'Default', 'newspack-plugin' ) }
						src="https://i0.wp.com/themes.svn.wordpress.org/twentytwenty/1.1/screenshot.png"
					/>
				</Button>
				<Button
					onClick={ () => updateThemeStyle( 'style-1' ) }
					isPrimary={ themeStyle === 'style-1' }
				>
					<img
						alt={ __( 'Style 1', 'newspack-plugin' ) }
						src="https://i0.wp.com/themes.svn.wordpress.org/twentynineteen/1.4/screenshot.png"
					/>
				</Button>
				<Button
					onClick={ () => updateThemeStyle( 'style-2' ) }
					isPrimary={ themeStyle === 'style-2' }
				>
					<img
						alt={ __( 'Style 2', 'newspack-plugin' ) }
						src={ ScreenshotStyle2 }
					/>
				</Button>
				<Button
					onClick={ () => updateThemeStyle( 'style-3' ) }
					isPrimary={ themeStyle === 'style-3' }
				>
					<img
						alt={ __( 'Style 3', 'newspack-plugin' ) }
						src="https://i0.wp.com/themes.svn.wordpress.org/twentyseventeen/2.2/screenshot.png"
					/>
				</Button>
				<Button
					onClick={ () => updateThemeStyle( 'style-4' ) }
					isPrimary={ themeStyle === 'style-4' }
				>
					<img
						alt={ __( 'Style 4', 'newspack-plugin' ) }
						src="https://i0.wp.com/themes.svn.wordpress.org/twentysixteen/2.0/screenshot.png"
					/>
				</Button>
				<Button
					onClick={ () => updateThemeStyle( 'style-5' ) }
					isPrimary={ themeStyle === 'style-5' }
				>
					<img
						alt={ __( 'Style 5', 'newspack-plugin' ) }
						src="https://i0.wp.com/themes.svn.wordpress.org/twentyfifteen/2.5/screenshot.png"
					/>
				</Button>
			</ButtonGroup>
		);
	}
}

export default withWizardScreen( ThemeStyleSelection );