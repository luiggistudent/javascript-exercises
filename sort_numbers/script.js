function sortNumbers() {
    const i = parseInt(document.getElementById("numberI").value)
    const a = parseInt(document.getElementById("numberA").value)
    const b = parseInt(document.getElementById("numberB").value)
    const c = parseInt(document.getElementById("numberC").value)
    const numbers = [a,b,c];

    if (i === 1) {
        document.getElementById("order-title").innerHTML=`Crescent Order: ${numbers.sort().join(", ")}`;
    }
    else if (i === 2) {
        document.getElementById("order-title").innerHTML=`Decrescent Order: ${numbers.sort((a,b) => b-a).join(", ")}`;
    }
    else if (i === 3) {
        const major = Math.max(a,b,c);
        const minor = Math.min(a,b,c);
        const last = numbers.find(n => n < major && n > minor);
        document.getElementById("order-title").innerHTML=`Order: ${minor}, ${major}, ${last}`;
    }
}