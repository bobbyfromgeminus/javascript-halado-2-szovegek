'use strict';

// Írj egy olyan függvényt (tagged template) ami a paraméterként kapott texts, values értékeket úgy adja vissza egy strigben,
// hogy a text értékek dőltek, a value-k félkövérek legyenek, ha beillesztjük a html-be, tehát a megfelelő tagekkel kiegészített stinget adjon vissza!


const user = {
    firstName: 'Jean-Luc', 
    lastName: 'Picard', 
    titleName: 'Captain', 
    shipName: 'Enterprise D'
};

const taggedTemplate = (texts, ...values) => 
    document.body.innerHTML = texts.map((text, index) => 
        `${text ? `<i>${text}</i>` : ``}${values[index] ? `<strong>${values[index]}</strong>` : ``}`
    ).join('');

taggedTemplate`My name is ${user.firstName} ${user.lastName}, and I'm ${user.titleName} of ${user.shipName}.`;