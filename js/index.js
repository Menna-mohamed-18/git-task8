function randomQuotes(){

    var text = ["“Be the change that you wish to see in the world.”" , "“To live is the rarest thing in the world. Most people exist, that is all.”" , "“Be not afraid of greatness. Some are born great, some achieve greatness, and others have greatness thrust upon them.”" ,   
"“I would die for you. But I won't live for you.”"];
var userNames = ["― Mahatma Gandhi" , "― Oscar Wilde","― William Shakespeare, Twelfth Night" , "― Stephen Chbosky, The Perks of Being a Wallflower"];

var num = Math.floor(Math.random() * userNames.length)


document.getElementById("quotes").innerHTML= text[num];

document.getElementById("quotes-name").innerHTML=userNames[num] ;

}
