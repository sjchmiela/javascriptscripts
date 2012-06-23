/*
 * simple-retina.js
 * 
 * Copyright 2012
 * 	Stanisław Chmiela <sjchmiela@gmail.com>,
 * 	Bartosz Dziewoński <matma.rex@gmail.com>
 * 
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 2 of the License, or
 * (at your option) any later version.
 * 
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with this program; if not, write to the Free Software
 * Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston,
 * MA 02110-1301, USA.
 */
 
/*
 * SIMPLE-RETINA.JS
 * 
 * This script automatically replaces all your images with 'retina'
 * class with their double-resolution variants. Source of image:
 * http://example.com/lovelykittenofmine.jpg
 * becomes:
 * http://example.com/lovelykittenofmine@2x.jpg
 * 
 * There MUST be @2x equivalent in image's directory in order to work
 * properly.
 * 
 */

if(window.devicePixelRatio > 1)
{
	function LolLooksLikeYouveGotRetina()
	{
		var images = document.getElementsByClassName("retina");
		for(var i = 0; i<images.length; i++)
		{
			images[i].setAttribute('src',
			   images[i].src.replace(/\.[a-z]+$/,'@2x$&'));
		}
	}
	window.addEventListener('DOMContentLoaded', LolLooksLikeYouveGotRetina, false);
}
