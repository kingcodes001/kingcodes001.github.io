var keyCode = CharacterData;
document.onkeydown = function(e)
{
    if(event.keyCode == 123)
    {
        return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)){
        return false
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)){
        return false
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'K'.charCodeAt(0)){
        return false
    }
    if(e.ctrlKey && e.keyCode == 'C'.charCodeAt(0)){
        return false
    }
   if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)){
        return false
    }   
   if(e.ctrlKey && e.keyCode == 'F'.charCodeAt(0)){
    return false
    }
    if(e.ctrlKey && e.keyCode == 'G'.charCodeAt(0)){
    return false
    }
    if(e.ctrlKey && e.keyCode == 'W'.charCodeAt(0)){
    return false
    }
}