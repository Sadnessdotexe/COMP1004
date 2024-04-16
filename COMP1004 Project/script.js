$(document).ready(function() {
    var intro_text = 0;
    var first_upgrade = 0;
    var first_upgrade2 = 0;
    var first_pickaxe = 0;
    var max_pickaxe = 0;
    var first_drill = 0;
    var first_mech = 0;
    var first_mining_ship = 0;
    var first_mining_fleet = 0;
    var maxed_mining_colony = 0;
    var maxed_mining_planet = 0;

    var totalMoneyEarned = 0;
    var playerLevel;
    var playerUsername;
    var timePlayed = 0;
    var money = 0;
    var moneyplus = 1;

    var clickerPrice = 10;
    var currentSpeed = 1000;

    var pickaxePrice = 100;
    var pickaxeDamage = 0;
    var pickaxeUpgrade = 0;
    var pickaxeUpgradePrice = 100;

    var drillPrice = 10000;
    var drillDamage = 0;
    var drillUpgrade = 0;
    var drillUpgradePrice = 10000;

    var laserPrice = 1000000;
    var laserDamage = 0;
    var laserUpgrade = 0;
    var laserUpgradePrice = 1000000;

    var mechPrice = 100000000;
    var mechDamage = 0;
    var mechUpgrade = 0;
    var mechUpgradePrice = 100000000;

    var miningshipPrice = 10000000000;
    var miningshipDamage = 0;
    var miningshipUpgrade = 0;
    var miningshipUpgradePrice = 10000000000;

    var miningfleetPrice = 1000000000000;
    var miningfleetDamage = 0;
    var miningfleetUpgrade = 0;
    var miningfleetUpgradePrice = 1000000000000;

    var miningcolonyPrice = 100000000000000;
    var miningcolonyDamage = 0;
    var miningcolonyUpgrade = 0;
    var miningcolonyUpgradePrice = 100000000000000;

    var miningplanetPrice = 10000000000000000;
    var miningplanetDamage = 0;
    var miningplanetUpgrade = 0;
    var miningplanetUpgradePrice = 10000000000000000;
    
    $(document).ready(function() {
        playerUsername = localStorage.getItem('playerUsername') ? localStorage.getItem('playerUsername') : "";

        if (!playerUsername) {
            while (!playerUsername || !/^[a-zA-Z]+$/.test(playerUsername) || playerUsername.length > 12) {
                playerUsername = prompt("Please enter your username. Only letters are allowed and the maximum length is 12.");
            }
            localStorage.setItem('playerUsername', playerUsername);
        }
          
        money = localStorage.getItem('money') ? parseInt(localStorage.getItem('money')) : 0;
        moneyplus = localStorage.getItem('moneyplus') ? parseInt(localStorage.getItem('moneyplus')) : 1;
        clickerPrice = localStorage.getItem('clickerPrice') ? parseInt(localStorage.getItem('clickerPrice')) : 10;
        currentSpeed = localStorage.getItem('currentSpeed') ? parseInt(localStorage.getItem('currentSpeed')) : 1000;
        pickaxePrice = localStorage.getItem('pickaxePrice') ? parseInt(localStorage.getItem('pickaxePrice')) : 100;
        pickaxeDamage = localStorage.getItem('pickaxeDamage') ? parseInt(localStorage.getItem('pickaxeDamage')) : 0;
        pickaxeUpgrade = localStorage.getItem('pickaxeUpgrade') ? parseInt(localStorage.getItem('pickaxeUpgrade')) : 0;
        pickaxeUpgradePrice = localStorage.getItem('pickaxeUpgradePrice') ? parseInt(localStorage.getItem('pickaxeUpgradePrice')) : 100;
        drillPrice = localStorage.getItem('drillPrice') ? parseInt(localStorage.getItem('drillPrice')) : 10000;
        drillDamage = localStorage.getItem('drillDamage') ? parseInt(localStorage.getItem('drillDamage')) : 0;
        drillUpgrade = localStorage.getItem('drillUpgrade') ? parseInt(localStorage.getItem('drillUpgrade')) : 0;
        drillUpgradePrice = localStorage.getItem('drillUpgradePrice') ? parseInt(localStorage.getItem('drillUpgradePrice')) : 10000;
        laserPrice = localStorage.getItem('laserPrice') ? parseInt(localStorage.getItem('laserPrice')) : 1000000;
        laserDamage = localStorage.getItem('laserDamage') ? parseInt(localStorage.getItem('laserDamage')) : 0;
        laserUpgrade = localStorage.getItem('laserUpgrade') ? parseInt(localStorage.getItem('laserUpgrade')) : 0;
        laserUpgradePrice = localStorage.getItem('laserUpgradePrice') ? parseInt(localStorage.getItem('laserUpgradePrice')) : 1000000;
        mechPrice = localStorage.getItem('mechPrice') ? parseInt(localStorage.getItem('mechPrice')) : 100000000;
        mechDamage = localStorage.getItem('mechDamage') ? parseInt(localStorage.getItem('mechDamage')) : 0;
        mechUpgrade = localStorage.getItem('mechUpgrade') ? parseInt(localStorage.getItem('mechUpgrade')) : 0;
        mechUpgradePrice = localStorage.getItem('mechUpgradePrice') ? parseInt(localStorage.getItem('mechUpgradePrice')) : 100000000;
        miningshipPrice = localStorage.getItem('miningshipPrice') ? parseInt(localStorage.getItem('miningshipPrice')) : 10000000000;
        miningshipDamage = localStorage.getItem('miningshipDamage') ? parseInt(localStorage.getItem('miningshipDamage')) : 0;
        miningshipUpgrade = localStorage.getItem('miningshipUpgrade') ? parseInt(localStorage.getItem('miningshipUpgrade')) : 0;
        miningshipUpgradePrice = localStorage.getItem('miningshipUpgradePrice') ? parseInt(localStorage.getItem('miningshipUpgradePrice')) : 10000000000;
        miningfleetPrice = localStorage.getItem('miningfleetPrice') ? parseInt(localStorage.getItem('miningfleetPrice')) : 1000000000000;
        miningfleetDamage = localStorage.getItem('miningfleetDamage') ? parseInt(localStorage.getItem('miningfleetDamage')) : 0;
        miningfleetUpgrade = localStorage.getItem('miningfleetUpgrade') ? parseInt(localStorage.getItem('miningfleetUpgrade')) : 0;
        miningfleetUpgradePrice = localStorage.getItem('miningfleetUpgradePrice') ? parseInt(localStorage.getItem('miningfleetUpgradePrice')) : 1000000000000;
        miningcolonyPrice = localStorage.getItem('miningcolonyPrice') ? parseInt(localStorage.getItem('miningcolonyPrice')) : 100000000000000;
        miningcolonyDamage = localStorage.getItem('miningcolonyDamage') ? parseInt(localStorage.getItem('miningcolonyDamage')) : 0;
        miningcolonyUpgrade = localStorage.getItem('miningcolonyUpgrade') ? parseInt(localStorage.getItem('miningcolonyUpgrade')) : 0;
        miningcolonyUpgradePrice = localStorage.getItem('miningcolonyUpgradePrice') ? parseInt(localStorage.getItem('miningcolonyUpgradePrice')) : 100000000000000;
        miningplanetPrice = localStorage.getItem('miningplanetPrice') ? parseInt(localStorage.getItem('miningplanetPrice')) : 10000000000000000;
        miningplanetDamage = localStorage.getItem('miningplanetDamage') ? parseInt(localStorage.getItem('miningplanetDamage')) : 0;
        miningplanetUpgrade = localStorage.getItem('miningplanetUpgrade') ? parseInt(localStorage.getItem('miningplanetUpgrade')) : 0;
        miningplanetUpgradePrice = localStorage.getItem('miningplanetUpgradePrice') ? parseInt(localStorage.getItem('miningplanetUpgradePrice')) : 10000000000000000;
        totalMoneyEarned = localStorage.getItem('totalMoneyEarned') ? parseInt(localStorage.getItem('totalMoneyEarned')) : 0;
        playerLevel = localStorage.getItem('playerLevel') ? parseInt(localStorage.getItem('playerLevel')) : 0;
        playerUsername = localStorage.getItem('playerUsername') ? localStorage.getItem('playerUsername') : "";
        timePlayed = localStorage.getItem('timePlayed') ? parseInt(localStorage.getItem('timePlayed')) : 0;
        intro_text = localStorage.getItem('introText') ? parseInt(localStorage.getItem('introText')) : 0;
        first_upgrade = localStorage.getItem('firstUpgrade') ? parseInt(localStorage.getItem('firstUpgrade')) : 0;
        first_upgrade2 = localStorage.getItem('firstUpgrade2') ? parseInt(localStorage.getItem('firstUpgrade2')) : 0;
        first_pickaxe = localStorage.getItem('firstPickaxe') ? parseInt(localStorage.getItem('firstPickaxe')) : 0;
        max_pickaxe = localStorage.getItem('maxPickaxe') ? parseInt(localStorage.getItem('maxPickaxe')) : 0;
        first_drill = localStorage.getItem('firstDrill') ? parseInt(localStorage.getItem('firstDrill')) : 0;
        first_mech = localStorage.getItem('firstMech') ? parseInt(localStorage.getItem('firstMech')) : 0;
        first_mining_ship = localStorage.getItem('firstMiningShip') ? parseInt(localStorage.getItem('firstMiningShip')) : 0;
        first_mining_fleet = localStorage.getItem('firstMiningFleet') ? parseInt(localStorage.getItem('firstMiningFleet')) : 0;
        maxed_mining_colony = localStorage.getItem('maxedMiningColony') ? parseInt(localStorage.getItem('maxedMiningColony')) : 0;
        maxed_mining_planet = localStorage.getItem('maxedMiningPlanet') ? parseInt(localStorage.getItem('maxedMiningPlanet')) : 0;
        if(pickaxeUpgrade > 0){
            $("#pickaxe").html("Pickaxe Upgrade<br /> $" + pickaxeUpgradePrice);
        }
        if(drillUpgrade > 0){
            $("#drill").html("Drill Upgrade<br /> $" + drillUpgradePrice);
        }
        if(laserUpgrade > 0){
            $("#laser").html("Laser Upgrade<br /> $" + formatMoney(laserUpgradePrice));
        }
        if(mechUpgrade > 0){
            $("#mech").html("Mech Upgrade<br /> $" + formatMoney(mechUpgradePrice));
        }
        if(miningshipUpgrade > 0){
            $("#mining_ship").html("Mining Ship Upgrade<br /> $" + formatMoney(miningshipUpgradePrice));
        }
        if(miningfleetUpgrade > 0){
            $("#mining_fleet").html("Mining Fleet Upgrade<br /> $" + formatMoney(miningfleetUpgradePrice));
        }
        if(miningcolonyUpgrade > 0){
            $("#mining_colony").html("Mining Colony Upgrade<br /> $" + formatMoney(miningcolonyUpgradePrice));
        }
        if(miningplanetUpgrade > 0){
            $("#mining_planet").html("Mining Planet Upgrade<br /> $" + formatMoney(miningplanetUpgradePrice));
        }
        if(moneyplus > 1){
            $("#clicker_upgrade").html("2x Clicker Effectiveness<br /> $" + formatMoney(clickerPrice));
        }
        if (totalMoneyEarned == 0) {
            $("#intro_text").css("display", "block");
            intro_text = 1;
        }
    });

    function saveGame() {
        localStorage.setItem('money', money);
        localStorage.setItem('moneyplus', moneyplus);
        localStorage.setItem('clickerPrice', clickerPrice);
        localStorage.setItem('currentSpeed', currentSpeed);
        localStorage.setItem('pickaxePrice', pickaxePrice);
        localStorage.setItem('pickaxeDamage', pickaxeDamage);
        localStorage.setItem('pickaxeUpgrade', pickaxeUpgrade);
        localStorage.setItem('pickaxeUpgradePrice', pickaxeUpgradePrice);
        localStorage.setItem('drillPrice', drillPrice);
        localStorage.setItem('drillDamage', drillDamage);
        localStorage.setItem('drillUpgrade', drillUpgrade);
        localStorage.setItem('drillUpgradePrice', drillUpgradePrice);
        localStorage.setItem('laserPrice', laserPrice);
        localStorage.setItem('laserDamage', laserDamage);
        localStorage.setItem('laserUpgrade', laserUpgrade);
        localStorage.setItem('laserUpgradePrice', laserUpgradePrice);
        localStorage.setItem('mechPrice', mechPrice);
        localStorage.setItem('mechDamage', mechDamage);
        localStorage.setItem('mechUpgrade', mechUpgrade);
        localStorage.setItem('mechUpgradePrice', mechUpgradePrice);
        localStorage.setItem('miningshipPrice', miningshipPrice);
        localStorage.setItem('miningshipDamage', miningshipDamage);
        localStorage.setItem('miningshipUpgrade', miningshipUpgrade);
        localStorage.setItem('miningshipUpgradePrice', miningshipUpgradePrice);
        localStorage.setItem('miningfleetPrice', miningfleetPrice);
        localStorage.setItem('miningfleetDamage', miningfleetDamage);
        localStorage.setItem('miningfleetUpgrade', miningfleetUpgrade);
        localStorage.setItem('miningfleetUpgradePrice', miningfleetUpgradePrice);
        localStorage.setItem('miningcolonyPrice', miningcolonyPrice);
        localStorage.setItem('miningcolonyDamage', miningcolonyDamage);
        localStorage.setItem('miningcolonyUpgrade', miningcolonyUpgrade);
        localStorage.setItem('miningcolonyUpgradePrice', miningcolonyUpgradePrice);
        localStorage.setItem('miningplanetPrice', miningplanetPrice);
        localStorage.setItem('miningplanetDamage', miningplanetDamage);
        localStorage.setItem('miningplanetUpgrade', miningplanetUpgrade);
        localStorage.setItem('miningplanetUpgradePrice', miningplanetUpgradePrice);
        localStorage.setItem('totalMoneyEarned', totalMoneyEarned);
        localStorage.setItem('playerLevel', playerLevel);
        localStorage.setItem('playerUsername', playerUsername);
        localStorage.setItem('timePlayed', timePlayed);
        localStorage.setItem('introText', intro_text);
        localStorage.setItem('firstUpgrade', first_upgrade);
        localStorage.setItem('firstUpgrade2', first_upgrade2);
        localStorage.setItem('firstPickaxe', first_pickaxe);
        localStorage.setItem('maxPickaxe', max_pickaxe);
        localStorage.setItem('firstDrill', first_drill);
        localStorage.setItem('firstMech', first_mech);
        localStorage.setItem('firstMiningShip', first_mining_ship);
        localStorage.setItem('firstMiningFleet', first_mining_fleet);
        localStorage.setItem('maxedMiningColony', maxed_mining_colony);
        localStorage.setItem('maxedMiningPlanet', maxed_mining_planet);
    }

    setInterval(function() {
        var moneyEarned = pickaxeDamage + drillDamage + laserDamage + mechDamage + miningshipDamage + miningfleetDamage + miningcolonyDamage + miningplanetDamage;
        money += moneyEarned;
        totalMoneyEarned += moneyEarned;
        playerLevel = Math.floor(totalMoneyEarned / 100000);
        changeInventory();
        changeUpgrade();
        saveGame();
        story_text();
    }, currentSpeed);

    setInterval(function() {
        timePlayed++;
        localStorage.setItem('timePlayed', timePlayed);
    }, 60000);

    function formatMoney(amount) {
        if (amount >= 1e15) {
            return (amount / 1e15).toFixed(2) + 'Q';
        } else if (amount >= 1e12) {
            return (amount / 1e12).toFixed(2) + 'T';
        } else if (amount >= 1e9) {
            return (amount / 1e9).toFixed(2) + 'B';
        } else if (amount >= 1e6) {
            return (amount / 1e6).toFixed(2) + 'M';    
        } else {
            return amount.toString();
        }
    }
    
    // Show the settings menu when the #setting button is clicked
    $('#setting').click(function() {
        $('.settings').css("display", "block");
        $('.settings button').css("display", "block");
    });
    
    // Hide the settings menu when the #resume button is clicked
    $('#resume').click(function() {
        $('.settings').css("display", "none");
        $('.settings button').css("display", "none");
    });

    $("#save").click(function() {
        saveGame();
        $(".settings_text").text("Game Saved").fadeIn().delay(2000).fadeOut();
    
        var confirmExport = confirm("Do you want to export the save file?");
        if (confirmExport) {
            // Create a JSON string of the game variables
            var gameData = JSON.stringify({
                username: playerUsername,
                score: totalMoneyEarned,
                timePlayed: timePlayed,
                level: playerLevel,
            });
    
            // Create a downloadable file
            var blob = new Blob([gameData], {type: "application/json"});
            var url = URL.createObjectURL(blob);
            var a = document.createElement('a');
            a.href = url;
            a.download = 'save.json';
            a.click();
        }
    });

    $("#reset").click(function() {
        var confirmReset = confirm("Are you sure you want to reset the game? All your progress will be lost.");
        if (confirmReset) {
            // Reset all game variables to their initial values
            money = 0;
            moneyplus = 1;
            clickerPrice = 10;
            currentSpeed = 1000;
            pickaxePrice = 100;
            pickaxeDamage = 0;
            pickaxeUpgrade = 0;
            pickaxeUpgradePrice = 100;
            drillPrice = 10000;
            drillDamage = 0;
            drillUpgrade = 0;
            drillUpgradePrice = 10000;
            laserPrice = 1000000;
            laserDamage = 0;
            laserUpgrade = 0;
            laserUpgradePrice = 1000000;
            mechPrice = 100000000;
            mechDamage = 0;
            mechUpgrade = 0;
            mechUpgradePrice = 100000000;
            miningshipPrice = 10000000000;
            miningshipDamage = 0;
            miningshipUpgrade = 0;
            miningshipUpgradePrice = 10000000000;
            miningfleetPrice = 1000000000000;
            miningfleetDamage = 0;
            miningfleetUpgrade = 0;
            miningfleetUpgradePrice = 1000000000000;
            miningcolonyPrice = 100000000000000;
            miningcolonyDamage = 0;
            miningcolonyUpgrade = 0;
            miningcolonyUpgradePrice = 100000000000000;
            miningplanetPrice = 10000000000000000;
            miningplanetDamage = 0;
            miningplanetUpgrade = 0;
            miningplanetUpgradePrice = 10000000000000000;
            totalMoneyEarned = 0;
            playerLevel = 0;
            playerUsername = "";
            timePlayed = 0;
            intro_text = 0;
            first_upgrade = 0;
            first_upgrade2 = 0;
            first_pickaxe = 0;
            max_pickaxe = 0;
            first_drill = 0;
            first_mech = 0;
            first_mining_ship = 0;
            first_mining_fleet = 0;
            maxed_mining_colony = 0;
            maxed_mining_planet = 0;
    
            // Update localStorage
            localStorage.setItem('money', money);
            localStorage.setItem('moneyplus', moneyplus);
            localStorage.setItem('clickerPrice', clickerPrice);
            localStorage.setItem('currentSpeed', currentSpeed);
            localStorage.setItem('pickaxePrice', pickaxePrice);
            localStorage.setItem('pickaxeDamage', pickaxeDamage);
            localStorage.setItem('pickaxeUpgrade', pickaxeUpgrade);
            localStorage.setItem('pickaxeUpgradePrice', pickaxeUpgradePrice);
            localStorage.setItem('drillPrice', drillPrice);
            localStorage.setItem('drillDamage', drillDamage);
            localStorage.setItem('drillUpgrade', drillUpgrade);
            localStorage.setItem('drillUpgradePrice', drillUpgradePrice);
            localStorage.setItem('laserPrice', laserPrice);
            localStorage.setItem('laserDamage', laserDamage);
            localStorage.setItem('laserUpgrade', laserUpgrade);
            localStorage.setItem('laserUpgradePrice', laserUpgradePrice);
            localStorage.setItem('mechPrice', mechPrice);
            localStorage.setItem('mechDamage', mechDamage);
            localStorage.setItem('mechUpgrade', mechUpgrade);
            localStorage.setItem('mechUpgradePrice', mechUpgradePrice);
            localStorage.setItem('miningshipPrice', miningshipPrice);
            localStorage.setItem('miningshipDamage', miningshipDamage);
            localStorage.setItem('miningshipUpgrade', miningshipUpgrade);
            localStorage.setItem('miningshipUpgradePrice', miningshipUpgradePrice);
            localStorage.setItem('miningfleetPrice', miningfleetPrice);
            localStorage.setItem('miningfleetDamage', miningfleetDamage);
            localStorage.setItem('miningfleetUpgrade', miningfleetUpgrade);
            localStorage.setItem('miningfleetUpgradePrice', miningfleetUpgradePrice);
            localStorage.setItem('miningcolonyPrice', miningcolonyPrice);
            localStorage.setItem('miningcolonyDamage', miningcolonyDamage);
            localStorage.setItem('miningcolonyUpgrade', miningcolonyUpgrade);
            localStorage.setItem('miningcolonyUpgradePrice', miningcolonyUpgradePrice);
            localStorage.setItem('miningplanetPrice', miningplanetPrice);
            localStorage.setItem('miningplanetDamage', miningplanetDamage);
            localStorage.setItem('miningplanetUpgrade', miningplanetUpgrade);
            localStorage.setItem('miningplanetUpgradePrice', miningplanetUpgradePrice);
            localStorage.setItem('totalMoneyEarned', totalMoneyEarned);
            localStorage.setItem('playerLevel', playerLevel);
            localStorage.setItem('playerUsername', playerUsername);
            localStorage.setItem('timePlayed', timePlayed);
            localStorage.setItem('introText', intro_text);
            localStorage.setItem('firstUpgrade', first_upgrade);
            localStorage.setItem('firstUpgrade2', first_upgrade2);
            localStorage.setItem('firstPickaxe', first_pickaxe);
            localStorage.setItem('maxPickaxe', max_pickaxe);
            localStorage.setItem('firstDrill', first_drill);
            localStorage.setItem('firstMech', first_mech);
            localStorage.setItem('firstMiningShip', first_mining_ship);
            localStorage.setItem('firstMiningFleet', first_mining_fleet);
            localStorage.setItem('maxedMiningColony', maxed_mining_colony);
            localStorage.setItem('maxedMiningPlanet', maxed_mining_planet);
    
            // Update the game display
            $("#money").text("Money: $" + money);
            $("#pickaxe").text("Pickaxe\n$" + pickaxePrice);
            $("#drill").text("Drill\n$" + drillPrice);
            $("#laser").text("Laser\n$" + formatMoney(laserPrice));
            $("#mech").text("Mech\n$" + formatMoney(mechPrice));
            $("#mining_ship").text("Mining Ship\n$" + formatMoney(miningshipPrice));
            $("#mining_fleet").text("Mining Fleet\n$" + formatMoney(miningfleetPrice));
            $("#mining_colony").text("Mining Colony\n$" + formatMoney(miningcolonyPrice));
            $("#mining_planet").text("Mining Planet\n$" + formatMoney(miningplanetPrice));
            $("#clicker_upgrade").text("2x Clicker Effectiveness\n$" + clickerPrice);
            $("#total_money_earned").text("Score: " + totalMoneyEarned);
            $("#player_level").text("Level: " + playerLevel);
            $(".settings_text").text("Game Reset").fadeIn().delay(2000).fadeOut();
        }

        $('.settings').css("display", "none");
        $('.settings button').css("display", "none");

        if (!playerUsername) {
            while (!playerUsername || !/^[a-zA-Z]+$/.test(playerUsername) || playerUsername.length > 12) {
                playerUsername = prompt("Please enter your username. Only letters are allowed and the maximum length is 12.");
            }
            localStorage.setItem('playerUsername', playerUsername);
        }

        if (totalMoneyEarned == 0 && intro_text == 0) {
            $("#intro_text").css("display", "block");
            intro_text = 1;
        }
    });

    $("#mine").click(function() {
        if(intro_text == 1){
            $("#intro_text").css("display", "none");
            intro_text = 1;
        }
        money += moneyplus;
        totalMoneyEarned += moneyplus;
        playerLevel = Math.floor(totalMoneyEarned / 100000);
        changeInventory();
        changeUpgrade();
        saveGame();
        story_text();
    });

    $("#pickaxe").click(function() {
        
        if(pickaxeUpgrade >= 1){
            money = money - pickaxeUpgradePrice;
            pickaxeDamage = pickaxeDamage + 10;
            pickaxeUpgrade = pickaxeUpgrade + 1;
            pickaxeUpgradePrice = pickaxeUpgradePrice + 100;
            $("#pickaxe").html("Pickaxe Upgrade<br /> $" + pickaxeUpgradePrice);
            changeInventory();
            changeUpgrade();
            saveGame();
            story_text();
        }
        if(pickaxeUpgrade < 1){
            money -= pickaxePrice;
            pickaxeUpgrade = pickaxeUpgrade + 1;
            pickaxeDamage = 10;
            $("#pickaxe").html("Pickaxe Upgrade<br /> $" + pickaxeUpgradePrice);
            if(first_pickaxe == 0){
                $("#first_pickaxe").css("display", "none");
                first_pickaxe = 1;
            }
            changeInventory();
            changeUpgrade();
            saveGame();
            story_text();
        }
    });

    $("#drill").click(function() {
        if(drillUpgrade >= 1){
            money = money - drillUpgradePrice;
            drillDamage = drillDamage + 1000;
            drillUpgrade = drillUpgrade + 1;
            drillUpgradePrice = drillUpgradePrice + 10000;
            $("#drill").html("Drill Upgrade<br /> $" + drillUpgradePrice);
            changeInventory();
            changeUpgrade();
            saveGame();
            story_text();
        }
        if(drillUpgrade < 1){
            money -= drillPrice;
            drillUpgrade = drillUpgrade + 1;
            drillDamage = 1000;
            $("#drill").html("Drill Upgrade<br /> $" + drillUpgradePrice);
            if(first_drill == 0){
                $("#first_drill").css("display", "none");
                first_drill = 1;
            }
            changeInventory();
            changeUpgrade();
            saveGame();
            story_text();
        }
    });

    $("#laser").click(function() {
        if(laserUpgrade >= 1){
            money = money - laserUpgradePrice;
            laserDamage = laserDamage + 100000;
            laserUpgrade = laserUpgrade + 1;
            laserUpgradePrice = laserUpgradePrice + 1000000;
            $("#laser").html("Laser Upgrade<br /> $" + formatMoney(laserUpgradePrice));
            changeInventory();
            changeUpgrade();
            saveGame();
            story_text();
        }
        if(laserUpgrade < 1){
            money -= laserPrice;
            laserUpgrade = laserUpgrade + 1;
            laserDamage = 100000;
            $("#laser").html("Laser Upgrade<br /> $" + formatMoney(laserUpgradePrice));
            changeInventory();
            changeUpgrade();
            saveGame();
            story_text();
        }
    });

    $("#mech").click(function() {
        if(mechUpgrade >= 1){
            money = money - mechUpgradePrice;
            mechDamage = mechDamage + 10000000;
            mechUpgrade = mechUpgrade + 1;
            mechUpgradePrice = mechUpgradePrice + 100000000;
            $("#mech").html("Mech Upgrade<br /> $" + formatMoney(mechUpgradePrice));
            changeInventory();
            changeUpgrade();
            saveGame();
            story_text();
        }
        if(mechUpgrade < 1){
            money -= mechPrice;
            mechUpgrade = mechUpgrade + 1;
            mechDamage = 10000000;
            $("#mech").html("Mech Upgrade Upgrade<br /> $" + formatMoney(mechUpgradePrice));
            if(first_mech == 0){
                $("#first_mech").css("display", "none");
                first_mech = 1;
            }
            changeInventory();
            changeUpgrade();
            saveGame();
            story_text();
        }
    });

    $("#mining_ship").click(function() {
        if(miningshipUpgrade >= 1){
            money = money - miningshipUpgradePrice;
            miningshipDamage = miningshipDamage + 150000000;
            miningshipUpgrade = miningshipUpgrade + 1;
            miningshipUpgradePrice = miningshipUpgradePrice + 1500000000;
            $("#mining_ship").html("Mining Ship Upgrade<br /> $" + formatMoney(miningshipUpgradePrice));
            changeInventory();
            changeUpgrade();
            saveGame();
            story_text();
        }
        if(miningshipUpgrade < 1){
            money -= miningshipPrice;
            miningshipUpgrade = miningshipUpgrade + 1;
            miningshipDamage = 15000000;
            $("#mining_shipe").html("Mining Ship Upgrade<br /> $" + formatMoney(miningshipUpgradePrice));
            if(first_mining_ship == 0){
                $("#first_mining_ship").css("display", "none");
                first_mining_ship = 1;
            }
            changeInventory();
            changeUpgrade();
            saveGame();
            story_text();
        }
    });

    $("#mining_fleet").click(function() {
        if(miningfleetUpgrade >= 1){
            money = money - miningfleetUpgradePrice;
            miningfleetDamage = miningfleetDamage + 15000000000;
            miningfleetUpgrade = miningfleetUpgrade + 1;
            miningfleetUpgradePrice = miningfleetUpgradePrice + 150000000000;
            $("#mining_fleet").html("Mining Fleet Upgrade<br /> $" + formatMoney(miningfleetUpgradePrice));
            changeInventory();
            changeUpgrade();
            saveGame();
            story_text();
        }
        if(miningfleetUpgrade < 1){
            money -= miningfleetPrice;
            miningfleetUpgrade = miningfleetUpgrade + 1;
            miningfleetDamage = 1500000000;
            $("#mining_fleet").html("Mining Fleet Upgrade<br /> $" + formatMoney(miningfleetUpgradePrice));
            if(first_mining_fleet == 0){
                $("#first_mining_fleet").css("display", "none");
                first_mining_fleet = 1;
            }
            changeInventory();
            changeUpgrade();
            saveGame();
            story_text();
        }
    });

    $("#mining_colony").click(function() {
        if(miningcolonyUpgrade >= 1){
            money = money - miningcolonyUpgradePrice;
            miningcolonyDamage = miningcolonyDamage + 1500000000000;
            miningcolonyUpgrade = miningcolonyUpgrade + 1;
            miningcolonyUpgradePrice = miningcolonyUpgradePrice + 15000000000000;
            $("#mining_colony").html("Mining Colony Upgrade<br /> $" + formatMoney(miningcolonyUpgradePrice));
            changeInventory();
            changeUpgrade();
            saveGame();
            story_text();
        }
        if(miningcolonyUpgrade < 1){
            money -= miningcolonyPrice;
            miningcolonyUpgrade = miningcolonyUpgrade + 1;
            miningcolonyDamage = 150000000000;
            $("#mining_colony").html("Mining Colony Upgrade<br /> $" + formatMoney(miningcolonyUpgradePrice));
            changeInventory();
            changeUpgrade();
            saveGame();
            story_text();
        }
    });

    $("#mining_planet").click(function() {
        if(miningplanetUpgrade >= 1){
            money = money - miningplanetUpgradePrice;
            miningplanetDamage = miningplanetDamage + 150000000000000;
            miningplanetUpgrade = miningplanetUpgrade + 1;
            miningplanetUpgradePrice = miningplanetUpgradePrice + 1500000000000000;
            $("#mining_planet").html("Mining Planet Upgrade<br /> $" + formatMoney(miningplanetUpgradePrice));
            changeInventory();
            changeUpgrade();
            saveGame();
            story_text();
        }
        if(miningplanetUpgrade < 1){
            money -= miningplanetPrice;
            miningplanetUpgrade = miningplanetUpgrade + 1;
            miningplanetDamage = 15000000000000;
            $("#mining_planet").html("Mining Planet Upgrade<br /> $" + formatMoney(miningplanetUpgradePrice));
            changeInventory();
            changeUpgrade();
            saveGame();
            story_text();
        }
    });
    
    $("#clicker_upgrade").click(function() {
        money = money - clickerPrice;
        moneyplus = moneyplus * 2;
        clickerPrice = clickerPrice * 2;
        $("#clicker_upgrade").html("2x Clicker Effectiveness<br /> $" + formatMoney(clickerPrice));
        if(first_upgrade2 == 0){
            $("#first_upgrade2").css("display", "none");
            first_upgrade2 = 1;
        }
        changeInventory();
        changeUpgrade();
        saveGame();
        story_text();
    });

    $("#intro_text").click(function() {
        $("#intro_text").css("display", "none");
        intro_text = 1;
    });

    $("#first_upgrade").click(function() {
        $("#first_upgrade").css("display", "none");
        first_upgrade = 1;
    });

    $("#first_upgrade2").click(function() {
        $("#first_upgrade2").css("display", "none");
        first_upgrade2 = 1;
    });

    $("#first_pickaxe").click(function() {
        $("#first_pickaxe").css("display", "none");
        first_pickaxe = 1;
    });

    $("#max_pickaxe").click(function() {
        $("#max_pickaxe").css("display", "none");
        max_pickaxe = 1;
    });

    $("#first_drill").click(function() {
        $("#first_drill").css("display", "none");
        first_drill = 1;
    });

    $("#first_mech").click(function() {
        $("#first_mech").css("display", "none");
        first_mech = 1;
    });

    $("#first_mining_ship").click(function() {
        $("#first_mining_ship").css("display", "none");
        first_mining_ship = 1;
    });

    $("#first_mining_fleet").click(function() {
        $("#first_mining_fleet").css("display", "none");
        first_mining_fleet = 1;
    });

    $("#maxed_mining_colony").click(function() {
        $("#maxed_mining_colony").css("display", "none");
        maxed_mining_colony = 1;
    });

    $("#maxed_mining_planet").click(function() {
        $("#maxed_mining_planet").css("display", "none");
        maxed_mining_planet = 1;
    });

    function changeInventory() {
        $("#money").html("Money: $" + formatMoney(money));
        $("#total_money_earned").text("Score: " + formatMoney(totalMoneyEarned));
        $("#player_level").text("Level: " + formatMoney(playerLevel));
        changeUpgrade();
    }

    function changeUpgrade() {
        if(money <= pickaxePrice){
            $("#pickaxe").addClass("disabled");
        }
        if(money >= pickaxePrice){
            $("#pickaxe").removeClass("disabled");
        }
        if(money <= drillPrice){
            $("#drill").addClass("disabled");
        }
        if(money >= drillPrice){
            $("#drill").removeClass("disabled");
        }
        if(money <= laserPrice){
            $("#laser").addClass("disabled");
        }
        if(money >= laserPrice){
            $("#laser").removeClass("disabled");
        }
        if(money <= mechPrice){
            $("#mech").addClass("disabled");
        }
        if(money >= mechPrice){
            $("#mech").removeClass("disabled");
        }
        if(money <= pickaxeUpgradePrice){
            $("#pickaxe").addClass("disabled");
        }
        if(money >= pickaxeUpgradePrice){
            $("#pickaxe").removeClass("disabled");
        }
        if(money <= drillUpgradePrice){
            $("#drill").addClass("disabled");
        }
        if(money >= drillUpgradePrice){
            $("#drill").removeClass("disabled");
        }
        if(money <= laserUpgradePrice){
            $("#laser").addClass("disabled");
        }
        if(money >= laserUpgradePrice){
            $("#laser").removeClass("disabled");
        }
        if(money <= mechUpgradePrice){
            $("#mech").addClass("disabled");
        }
        if(money >= mechUpgradePrice){
            $("#mech").removeClass("disabled");
        }
        if(money <= miningshipPrice){
            $("#mining_ship").addClass("disabled");
        }
        if(money >= miningshipPrice){
            $("#mining_ship").removeClass("disabled");
        }
        if(money <= miningfleetPrice){
            $("#mining_fleet").addClass("disabled");
        }
        if(money >= miningfleetPrice){
            $("#mining_fleet").removeClass("disabled");
        }
        if(money <= miningcolonyPrice){
            $("#mining_colony").addClass("disabled");
        }
        if(money >= miningcolonyPrice){
            $("#mining_colony").removeClass("disabled");
        }
        if(money <= miningplanetPrice){
            $("#mining_planet").addClass("disabled");
        }
        if(money >= miningplanetPrice){
            $("#mining_planet").removeClass("disabled");
        }
        if(money <= miningshipUpgradePrice){
            $("#mining_ship").addClass("disabled");
        }
        if(money >= miningshipUpgradePrice){
            $("#mining_ship").removeClass("disabled");
        }
        if(money <= miningfleetUpgradePrice){
            $("#mining_fleet").addClass("disabled");
        }
        if(money >= miningfleetUpgradePrice){
            $("#mining_fleet").removeClass("disabled");
        }
        if(money <= miningcolonyUpgradePrice){
            $("#mining_colony").addClass("disabled");
        }
        if(money >= miningcolonyUpgradePrice){
            $("#mining_colony").removeClass("disabled");
        }
        if(money <= miningplanetUpgradePrice){
            $("#mining_planet").addClass("disabled");
        }
        if(money >= miningplanetUpgradePrice){
            $("#mining_planet").removeClass("disabled");
        }

        if(money <= clickerPrice){
            $("#clicker_upgrade").addClass("disabled");
        }
        if(money >= clickerPrice){
            $("#clicker_upgrade").removeClass("disabled");
        }

        if(pickaxeUpgrade > 10){
            $("#pickaxe").html("Pickaxe Upgrade<br /> MAXED");
            $("#pickaxe").addClass("disabled");
        }
        if(drillUpgrade > 25){
            $("#drill").html("Drill Upgrade<br /> MAXED");
            $("#drill").addClass("disabled");
        }
        if(laserUpgrade > 50){
            $("#laser").html("Laser Upgrade<br /> MAXED");
            $("#laser").addClass("disabled");
        }
        if(mechUpgrade > 100){
            $("#mech").html("Mech Upgrade<br /> MAXED");
            $("#mech").addClass("disabled");
        }
        if(miningshipUpgrade > 10){
            $("#mining_ship").html("Mining Ship Upgrade<br /> MAXED");
            $("#mining_ship").addClass("disabled");
        }
        if(miningfleetUpgrade > 10){
            $("#mining_fleet").html("Mining Fleet Upgrade<br /> MAXED");
            $("#mining_fleet").addClass("disabled");
        }
        if(miningcolonyUpgrade > 10){
            $("#mining_colony").html("Mining Colony Upgrade<br /> MAXED");
            $("#mining_colony").addClass("disabled");
        }
        if(miningplanetUpgrade > 10){
            $("#mining_planet").html("Mining Planet Upgrade<br /> MAXED");
            $("#mining_planet").addClass("disabled");
        }
    };

    $("#upgrade").click(function() {
        $(".upgrades").css("left", "0px");
        $(".upgrades button").css("display", "block");
        $("#first_upgrade").css("display", "none");
        first_upgrade = 1;
        changeUpgrade();
        if(first_upgrade == 1 && first_upgrade2 == 0){
            $("#first_upgrade2").css("display", "block");
        }
    });
    $("#upgrade2").click(function() {
        $(".upgrades").css("left", "-550px");
        $(".upgrades button").css("display", "none");
        changeUpgrade();
    });

    function story_text(){
        if (totalMoneyEarned == 10 && first_upgrade == 0){
            $("#first_upgrade").css("display", "block");
        }
        if (money >= 100 && first_pickaxe == 0){
            $("#first_pickaxe").css("display", "block");
        }
        if (pickaxeUpgrade > 10 && max_pickaxe == 0){
            $("#max_pickaxe").css("display", "block");
        }
        if (money >= 10000 && first_drill == 0){
            $("#first_drill").css("display", "block");
        }
        if (money >= 100000000 && first_mech == 0){
            $("#first_mech").css("display", "block");
        }
        if (money >= 10000000000 && first_mining_ship == 0){
            $("#first_mining_ship").css("display", "block");
        }
        if (money >= 1000000000000 && first_mining_fleet == 0){
            $("#first_mining_fleet").css("display", "block");
        }
        if (miningcolonyUpgrade > 10 && maxed_mining_colony == 0){
            $("#maxed_mining_colony").css("display", "block");
        }
        if (miningplanetUpgrade > 10 && maxed_mining_planet == 0){
            $("#maxed_mining_planet").css("display", "block");
        }
    };
});