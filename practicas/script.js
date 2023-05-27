function srcChange(url) { 
    var oldEmbed = document.getElementById('embed1');
    var newEmbed = oldEmbed.cloneNode(true);
    newEmbed.src = url;
    oldEmbed.parentNode.replaceChild(newEmbed, oldEmbed);
    //location.reload();
    //alert(document.getElementById('embed1').src);
} 

