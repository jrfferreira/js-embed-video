function EmbedVideo(){
    "use strict";

    this.name = "embedvideo";
    this.url = arguments[0];
    this.width = 380;
    this.height = 224;

    EmbedVideo.prototype.analyzeURL = function(){
         var url = arguments[0]||this.url,
             youtube = RegExp(/(youtu\.be\/|youtube\.com\/(watch\?(.*&)?v=|(embed|v)\/))([^\?&"'>]+)/),
             facebook = RegExp(/(facebook\.com\/(.*?)v(=|\/))([^\?&"'>]+)\b/),
             vimeo = RegExp(/(vimeo\.com\/)([^\?&"'>]+)\b/),
             dailymotion = RegExp(/(dailymotion\.com\/video\/)([^\?&"'>_]+)/),
             coub = RegExp(/(coub\.com\/view\/)([^\?&"'>]+)\b/);

         if(youtube.test(url)){
             return ['youtube',youtube.exec(url).pop()];
         } else if (facebook.test(url)){
             return ['facebook',facebook.exec(url).pop()];
         } else if (vimeo.test(url)){
             return ['vimeo',vimeo.exec(url).pop()];
         } else if (dailymotion.test(url)){
             return ['dailymotion',dailymotion.exec(url).pop()];
         } else if (coub.test(url)){
             return ['coub',coub.exec(url).pop()];
         } else {
             return false;
         }
    };

    EmbedVideo.prototype.customSize = function(width,height){
	if(width){
	    this.width = width;
        }
        if(height){
	    this.height = height;
        }

    };

    EmbedVideo.prototype.toString = function(type,id){
        var embed = '<p> No embed code</p>';
        switch(type){
            case "facebook":
                embed = '<iframe src="https://www.facebook.com/video/embed?video_id='+id+'" width="'+this.width+'" height="'+this.height+'" frameborder="0"></iframe>';
                break;
            case "youtube":
                embed = '<iframe width="'+this.width+'" height="'+this.height+'" src="//www.youtube.com/embed/'+id+'" frameborder="0" allowfullscreen></iframe>';
                break;
            case "vimeo":
                embed = '<iframe src="//player.vimeo.com/video/'+id+'?title=0&amp;byline=0&amp;portrait=0" width="'+this.width+'" height="'+this.height+'" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';
                break;
            case "dailymotion":
                embed = '<iframe frameborder="0" width="'+this.width+'" height="'+this.height+'" src="http://www.dailymotion.com/embed/video/'+id+'"></iframe>';
                break;
            case "coub":
                embed = '<iframe src="http://coub.com/embed/'+id+'?muted=false&amp;autostart=false&originalSize=false&hideTopBar=false&noSiteButtons=false&startWithHD=false" allowfullscreen="true" frameborder="0" width="'+this.width+'" height="'+this.height+'"></iframe>';
                break;

        }
        return embed;
    };

    EmbedVideo.prototype.render = function(){
        return this.toString.apply(this,this.analyzeURL());
    };

    return this;
}
