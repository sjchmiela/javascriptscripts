Javascriptscripts
===
Just some stuff I put together and find useful.

## simple-retina.js

Just add it to your document and it will automatically replace images with 'retina' class with their double-resolution equivalents ('...@2x...'). **It won't check if they exist on server.** Also, add the `width` and `height` variables to `img` tag like this:

``<img src="harry-potter.jpg" width="320" height="120" class="retina" />``

to ensure the images will have proper size. Otherwise they will blow up.
