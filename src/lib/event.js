export default class Event {

	constructor( selection_areas, selected_text_wrap ) {

		this.selection_areas = selection_areas;

		this.selected_text_wrap = {

			ref    : document.querySelector(`[${selected_text_wrap}]`),
			width  : document.querySelector(`[${selected_text_wrap}]`).offsetWidth,
			height : document.querySelector(`[${selected_text_wrap}]`).offsetHeight

		};

		this.currentSelection = "";

		this.init();

	}

	init() {

		document.addEventListener("mouseup", event => {

			let
				selection_parent_node = window.getSelection().getRangeAt(0).startContainer.parentNode,
				i = this.selection_areas.length;

			var can_show = false;

			while ( i-- ) {

				if ( selection_parent_node.id == this.selection_areas[i].substring(1) || selection_parent_node.classList.contains(this.selection_areas[i].substring(1)) || document.querySelector(this.selection_areas[i]).contains(selection_parent_node) ) {

					can_show = true;
					break;

				}

			}

			if ( can_show === true ) {

				this.setSelection(window.getSelection().toString());

				if ( this.getSelection() !== '' ) {

					/* Center the selected text wrap */
					this.selected_text_wrap.ref.style.left = (this.getSelectionDimensions().posx + (this.getSelectionDimensions().width / 2)) - (this.selected_text_wrap.width / 2) + "px";
					this.selected_text_wrap.ref.style.top  = ((this.getSelectionDimensions().posy - this.selected_text_wrap.height - 10) + "px")
					this.selected_text_wrap.ref.style.visibility = 'visible';
					this.selected_text_wrap.ref.classList.add("hl-sel-text--active");

				} else {

					this.selected_text_wrap.ref.classList.remove("hl-sel-text--active");
					this.selected_text_wrap.ref.style.visibility = 'hidden';

				}

			}

		});

		document.addEventListener("mousedown", event => {

			if ( event.target !== document.querySelector(".hl-sel-text__btn--tt") ) {

				this.selected_text_wrap.ref.classList.remove("hl-sel-text--active");
				this.selected_text_wrap.ref.style.visibility = 'hidden';

				if ( window.getSelection().empty ) {  // Chrome

					window.getSelection().empty();

				} else if ( window.getSelection().removeAllRanges ) {  // Firefox

					window.getSelection().removeAllRanges();
					
				}

			}

		});

	}

	setSelection( currentSelection ) {

		this.currentSelection = currentSelection;

	}

	getSelection() {

		var selection = this.currentSelection;

		if ( selection.length > 140 )
			selection = selection.substring(0, 137) + "...";

		return selection;
	}

	getSelectionDimensions() {

		/* http://jsfiddle.net/UFkjy/ */

	    let
	    	sel = document.selection,
	    	range;
	    let
	    	width  = 0,
	    	height = 0,
	    	posx = 0,
	    	posy = 0;

	    if ( sel ) {

	        if ( sel.type != "Control" ) {

	            range  = sel.createRange();
	            width  = range.boundingWidth;
	            height = range.boundingHeight;

	        }

	    } else if ( window.getSelection ) {

	        sel = window.getSelection();

	        if ( sel.rangeCount ) {

	            range = sel.getRangeAt(0).cloneRange();

	            if ( range.getBoundingClientRect ) {

	                let
	                	rect = range.getBoundingClientRect();
	                	
	                posx = rect.left;
	                posy = rect.top + window.scrollY;
	                width  = rect.right - rect.left;
	                height = rect.bottom - rect.top;

	            }
	        }
	    }

	    return { width: width, height: height, posx: posx, posy: posy };

	}

	/* Buttons events */

	// Mouseover
	twitterEventClick( event ) {

		event.preventDefault();

		let
			center_pos = ( window.innerWidth - 600 ) / 2; 

		this.selected_text_wrap.ref.classList.remove("hl-sel-text--active");
		this.selected_text_wrap.ref.style.visibility = 'hidden';

		window.open(`https://twitter.com/intent/tweet?text=${this.getSelection()}`, '_blank', `toolbar=no,scrollbars=yes,resizable=no,top=100,left=${center_pos},width=600,height=400`);

	}

}