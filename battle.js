var numberOfOrcs = 100;
var numberOfHumans = 100;
var humanAttackPower = 2;
var orcAttackPower = 3;
var humanBattlecry = 'For the alliance!';
var orcBattlecry = 'For the horde';
function makeAttack(quantity, power, battlecry) {
    return function () {
        console.log(battlecry);
        quantity = quantity - power;
    };
}
var orcAttack = makeAttack(numberOfHumans, orcAttackPower, orcBattlecry);
var humanAttack = makeAttack(numberOfOrcs, humanAttackPower, humanBattlecry);
orcAttack();
humanAttack();
