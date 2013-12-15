js-embed-video
==============

A simplified DOM object to embed videos.

Just insert in your code and use:

 ```
 myVideo = new EmbedVideo('http://www.youtube.com/watch?v=qT90jZP58jM');
 myVideo.customSize(480,320); // Optional
 document.body.appendChild(myVideo);
 ```

 
 Supported sources:
 
 * YouTube
 * Facebook
 * Vimeo
 * DailyMotion
 * Coub
 * 
 
Available mehods:

 * analyzeURL([url]): Check if your URL is supported
 * toString(): Get a embed code for your video
