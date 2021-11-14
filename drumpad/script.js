
const padBoxArray= document.querySelectorAll('.padbox');
let startTime,totalTime;
const soundArray = document.querySelectorAll('.sound')
var playlist=[]
var record=false
padBoxArray.forEach((pad,index)=>
{
    pad.addEventListener('mousedown', function() {
        
        
        playTrack(index)
       
        if(record)
    {
    totalTime= Date.now() - startTime;
    playlist.push({
        src:soundArray[index].src,
        timeOffset:totalTime,
        key:pad.getAttribute('data-key')
    })}
    });
    pad.addEventListener('mouseup',()=>
    {
        pad.classList.remove('padboxActive')
        pad.firstElementChild.classList.remove('active')
    })
    
})

document.getElementById('recordBtn').addEventListener('click',(e)=>
{   var innerBtn=document.querySelector('.recordBtnInner');
    innerBtn.classList.toggle('recordStart');


if(innerBtn.classList.contains('recordStart'))
{
    record = true;
    startTime=Date.now()
    document.querySelector('.recordState').innerHTML="Stop Recording"
 
    innerBtn.addEventListener('click',()=>
      {
        document.getElementById('playBtn').style.visibility="visible"
      })

}
else
{
    record=false;
  
    document.querySelector('.recordState').innerHTML="Start Recording"
    innerBtn.addEventListener('click',()=>
      {
        document.getElementById('playBtn').style.visibility="hidden"
      })

}


})

function playTrack(index)
{
    soundArray[index].currentTime = 0;
    soundArray[index].play();
    padBoxArray[index].firstElementChild.classList.add('active');
    padBoxArray[index].classList.add('padboxActive');
    setTimeout(() => {
    padBoxArray[index].firstElementChild.classList.remove('active');
    padBoxArray[index].classList.remove('padboxActive');
    }, 2000);
}


window.addEventListener('keydown',(e)=>
{

switch(e.key)
{
    case 'r': playTrack(0); break;
    case 't': playTrack(1); break;
    case 'y': playTrack(2); break;
    case 'u': playTrack(3); break;
    case 'f': playTrack(4); break;
    case 'g': playTrack(5); break;
    case 'h': playTrack(6); break;
    case 'j': playTrack(7); break;
    case 'c': playTrack(8); break;
    case 'v': playTrack(9); break;
    case 'b': playTrack(10); break;
    case 'n': playTrack(11); break;
    default: console.log('invalid key');
    
}

})
window.addEventListener('keyup',(e)=>
{
    document.querySelector(`[data-key="${e.key}"]`).classList.remove('padboxActive')
    document.querySelector(`[data-key="${e.key}"]`).firstElementChild.classList.remove('active')
    if(record)
    {
    totalTime= Date.now() - startTime;
    playlist.push({
        src:document.querySelector(`[data-key="${e.key}"] audio`).src,
        timeOffset:totalTime,
        key:e.key
    })}
})

  

document.getElementById('playBtn').onclick= ()=>{
 
    playRecording()
}


function playRecording()
{   console.log('playing')
    const audio = new Audio(playlist[0].src)

    for(let i = 0;i<playlist.length;i++)
    {
        setTimeout(() => {
            audio.src=playlist[i].src
            audio.preload=true;
            audio.currentTime=0;
            audio.play();
            document.querySelector(`[data-key="${playlist[i].key}"]`).classList.add('padboxActive')
            document.querySelector(`[data-key="${playlist[i].key}"]`).firstElementChild.classList.add('active')
            audio.addEventListener('ended',()=>
            {
                document.querySelector(`[data-key="${playlist[i].key}"]`).classList.remove('padboxActive')
            document.querySelector(`[data-key="${playlist[i].key}"]`).firstElementChild.classList.remove('active')
            })
        }, playlist[i].timeOffset);
        
    }
  
   

}

function removeActive()
{
    document.querySelectorAll('.padBox').forEach(pad => {
       
        pad.classList.remove('.padBoxActive')
     });
     document.querySelectorAll('.innerCircle').forEach(circle => {
         
      circle.classList.remove('.active')
   });
  
}