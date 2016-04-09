import Popover from './lib/popover';

export default class SelectedText {

	/* @param {Array} selection_areas */

	constructor( selection_areas ) {

		/* Validate screen size */

		if ( !this.isSmallerScreen() ) this.init(selection_areas, ['twitter']);

	}

	init( selection_areas, social ) {

		if ( !Array.isArray(selection_areas) )
			throw new TypeError("The selection areas must be array");

		new Popover(selection_areas, social);

	}

	isSmallerScreen() {

		let
			screenWidth = window.innerWidth,
			isSmall = ( screenWidth < 420 ) ? true : false;

		return isSmall;

	}

}

window.SelectedText = SelectedText;

