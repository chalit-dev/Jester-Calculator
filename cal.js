function calculateUnits(watts, quantity, hours) {
    return (watts * quantity / 1000) * hours;
}

function calculatePrice() {
    const watts = Number(document.getElementById("watts").value);
    const quantity = Number(document.getElementById("quantity").value);
    const hours = Number(document.getElementById("hours").value);

    const units = calculateUnits(watts, quantity, hours);

    let price = 0;
    
    if (quantity === 0) {
        price = 0;
    } else if (units <= 150) {
        price = units * 3.2484;
    } else if (units <= 250) {
        price = units * 4.2218;
    } else {
        price = units * 4.4217;
    }

    document.getElementById("result").innerText = 
        `หน่วยไฟ: ${units.toFixed(2)} ยูนิต | ราคา: ${price.toFixed(2)} บาท`;
}