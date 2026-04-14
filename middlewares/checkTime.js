function checkTime(req, res, next) {
    //data e ora specifica di user
    const currentTime = new Date();
    
    const time = currentTime.toLocaleString();

    //check
    console.log("Sei passato dal middleware checkTime all'ora:", time);

    // procediamo con risoluzione richiesta
    next();

}


module.exports = checkTime;