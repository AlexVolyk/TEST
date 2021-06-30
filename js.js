let reactionControlSystem = false;
function toggleRCS(maxFuel, fuel) {
    if (maxFuel < fuel) {
        reactionControlSystem = false
        return reactionControlSystem;
        console.log('shit')

    } else {
        let currentFuel = maxFuel - fuel;  
    let result = 100 - (currentFuel / 100); // 100% - (the percentage we received)
    console.log(result)
    if (result > 40) {
        return reactionControlSystem = true;
      } else {
        return reactionControlSystem = false;
      }
    }

}
toggleRCS(1000, 2000)