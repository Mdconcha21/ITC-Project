function discount(purchase){
    if (purchase>=1500){
        purchase*=0.85;
    }
    console.log(purchase);
}

discount(1900);//discount
discount(1200);//no discount