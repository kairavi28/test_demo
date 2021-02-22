function hasFreeShipping(obj) {
    for (const [key, value] of Object.entries(obj)) {
        (`${value}` > 50) ? console.log(`${value}`, 'true'): console.log(`${value}`, 'false');
    }
}

hasFreeShipping({ "masks": 5.99, "HDMI": 52.88, "old": 166.21 });