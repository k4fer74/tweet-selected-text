/*

	Popover Template:

	<div class="hl-sel-text">
		<div class='hl-sel-text__btn'>
			<a href='' class='hl-sel-text__btn--tt'></a>
		</div>
	</div>

*/

import Event from './event';

export default class Popover {

	constructor( selection_areas, socials ) {

		this.socials = socials;

		this.hlSelectedText();
		this.Event = new Event(selection_areas, 'data-hl-sel-text');

	}

	/* Mount Twitter Button */

	twitterButton() {

		let
			ttButton = document.createElement('A');
			ttButton.className = "hl-sel-text__btn--tt";
			ttButton.addEventListener("click", event => {
				this.Event.twitterEventClick(event);
			});

		return ttButton;

	}

	/* Popover template */

	hlSelectedText() {

		let
			wrap = document.createElement('DIV'),
			btns = document.createElement('DIV');

		wrap.className = "hl-sel-text";
		wrap.setAttribute("data-hl-sel-text", "");

		btns.className = "hl-sel-text__btn";

		let
			socials = this.socials;

		let
			funcs = socials.map(social => {
				return `this.${social.toLowerCase()}Button()`;
			});

		let
			i = 0;

		for ( i; i < funcs.length; i++ ) btns.appendChild(eval(funcs[i]));
		
		wrap.appendChild(btns);

		document.body.appendChild(wrap);

	}

}