function attack (damage) {
    var hit = damage - 2;
    return hit;
}
  
  function damageCalculation (numberOfAttacks, damagePerAttack) {
    var result = numberOfAttacks * attack(damagePerAttack);

    return result;
  }
  
  // TEST CASE
  console.log(damageCalculation(9, 25)); // 207
  
  console.log(damageCalculation(10, 4)); // 20
  
  console.log(damageCalculation(5, 20)); // 90