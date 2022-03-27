const classificate = () => {
    const height = document.querySelector("#height").value; 
    const weight = document.querySelector("#weight").value;
    letter = "";

    if (height < 1.20 && weight <= 60) letter="A";
    else if (height < 1.20 && (weight >= 60 && weight <= 90)) letter="D";
    else if (height < 1.20 && weight > 90) letter="G";
    else if ((height >= 1.20 && height <= 1.70) && weight <= 60) letter="B"; 
    else if ((height >= 1.20 && height <= 1.70) && (weight >= 60 && weight <= 90)) letter="E";
    else if ((height >= 1.20 && height <= 1.70) && weight > 90) letter="H";
    else if (height > 1.70 && weight <= 60) letter="C";
    else if ((height > 1.70 && weight) >= 60 && weight <= 90) letter="F";
    else if (height > 1.70 && weight > 90) letter="I";
    document.getElementById("result").innerHTML=`Classification: ${letter}`;
}