
//strArray = ["baseball", "a,all,b,ball,bas,base,cat,code,d,e,quit,z"]

const ArrayChallenge = (strArray)=>{

        let firstElement = strArray[0];
        //console.log("firstElement");
        //console.log(firstElement);
        let dictionary = strArray[1];
    
        //console.log("dictionary");
        //console.log(dictionary);

        let word1 = "" , word2 = "";


        for(let i = 1 ; i<=firstElement.length; i++){
            
            word1 = firstElement.substring(0,i);
            console.log("word1: " + word1);
            
            word2 = firstElement.substring(i,firstElement.length);
            console.log("word2: " + word2);
        
            if(dictionary.includes(word1) && dictionary.includes(word2)){

                return `${word1} , ${word2}`;
            }
        }

        return "Not Possible";

};

window.onload = function (){

    document.getElementById("inputValue").value = "'baseball','a,all,b,ball,bas,base,cat,code,d,e,quit,z'";

    let strArray = document.getElementById("inputValue").value.split(","); 
    strArray = [strArray[0].replaceAll("'",""), strArray.slice(1).join(',').replaceAll("'","")];

    const isresult = ArrayChallenge (strArray);

    document.getElementById("result").innerHTML = isresult;

}

    
