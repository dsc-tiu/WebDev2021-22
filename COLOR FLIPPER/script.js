// const hexArr=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];

const generateRandom=()=>
{
   var random =Math.random()*256
   return Math.floor(random)
}
const generateRandomAlpha=()=>
{
    return (Math.random()*1).toFixed(3)
}

const generateColor=()=>
{
    var color="rgba(";
    for(let i=0;i<3;i++)
    {
        color+=generateRandom()+","
    }
    color+=generateRandomAlpha()+")"

    return color;
}

const setColor=()=>
{
    const color=generateColor()
    document.querySelector('.container').style.background=color
    document.getElementById('color').innerHTML=color;

}

const automate=()=>
{
    setInterval(setColor, 900);
}