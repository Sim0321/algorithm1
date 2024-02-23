// 문제 설명

// 어떤 게임에는 붕대 감기라는 기술이 있습니다.

// 붕대 감기는 t초 동안 붕대를 감으면서 1초마다 x만큼의 체력을 회복합니다. t초 연속으로 붕대를 감는 데 성공한다면 y만큼의 체력을 추가로 회복합니다. 게임 캐릭터에는 최대 체력이 존재해 현재 체력이 최대 체력보다 커지는 것은 불가능합니다.

// 기술을 쓰는 도중 몬스터에게 공격을 당하면 기술이 취소되고, 공격을 당하는 순간에는 체력을 회복할 수 없습니다. 몬스터에게 공격당해 기술이 취소당하거나 기술이 끝나면 그 즉시 붕대 감기를 다시 사용하며, 연속 성공 시간이 0으로 초기화됩니다.

// 몬스터의 공격을 받으면 정해진 피해량만큼 현재 체력이 줄어듭니다. 이때, 현재 체력이 0 이하가 되면 캐릭터가 죽으며 더 이상 체력을 회복할 수 없습니다.

// 당신은 붕대감기 기술의 정보, 캐릭터가 가진 최대 체력과 몬스터의 공격 패턴이 주어질 때 캐릭터가 끝까지 생존할 수 있는지 궁금합니다.

// 붕대 감기 기술의 시전 시간, 1초당 회복량, 추가 회복량을 담은 1차원 정수 배열 bandage와 최대 체력을 의미하는 정수 health, 몬스터의 공격 시간과 피해량을 담은 2차원 정수 배열 attacks가 매개변수로 주어집니다. 모든 공격이 끝난 직후 남은 체력을 return 하도록 solution 함수를 완성해 주세요. 만약 몬스터의 공격을 받고 캐릭터의 체력이 0 이하가 되어 죽는다면 -1을 return 해주세요.

const solution = (bandage, health, attacks) => {
  // 1. t초 동안 1초마다 회복하고, 성공하면 추가체력 회복. 최대 체력 이상 X
  // 2. 회복중 몬스터의 공격을 받으면 취소되고 다시 붕대 감기 시작
  // 3. 피해를 받으면 피해량 만큼 체력 줄어듬 죽으면 -1 return
  // bandage : [시전시간, 초당회복량, 추가 회복량]
  // attack : [공격시간, 피해량]

  let lastTime = attacks[attacks.length - 1][0]; // 마지막공격까지의 총 시간
  let attackTime = attacks.map((att) => att[0]); // 공격하는 시간 array
  let nowHealth = health; // 현재체력
  let bandageTime = 0; // 기술시전횟수

  for (let time = 0; time <= lastTime; time++) {
    console.log("\n", time, "초");

    let attackedInfo = attacks.find((attack) => attack[0] === time); // 이번 시간(초)의 공격정보
    console.log("info ::", attackedInfo);
    const doBandage = function () {
      // 회복기술 함수
      if (attackTime.some((attTime) => attTime === time)) {
        bandageTime = 0;
      } else {
        bandageTime++;

        nowHealth = nowHealth + bandage[1];
        if (nowHealth > health) {
          nowHealth = health;
        }
        console.log(
          `기술시전 ${bandageTime}회째, ${bandage[1]} 만큼 회복했다! 현재 체력은 ${nowHealth}.`
        );

        if (bandageTime === bandage[0]) {
          nowHealth = nowHealth + bandage[2];
          bandageTime = 0;
          if (nowHealth > health) {
            nowHealth = health;
          }
          console.log(
            `연속 붕대감기 성공, ${bandage[2]} 만큼 추가 회복했다! 현재 체력은 ${nowHealth}.`
          );
        }
      }
    };
    doBandage();
    // 공격
    if (attackedInfo !== undefined) {
      if (time === attackedInfo[0]) {
        nowHealth = nowHealth - attackedInfo[1];
        console.log(
          `${attackedInfo[1]} 만큼 공격받았다! 현재 체력은 ${nowHealth}.`
        );
        if (nowHealth <= 0) {
          console.log(`플레이어가 사망했습니다.`);
          return -1;
        }
      }
    }
  }

  if (nowHealth <= 0) {
    return -1;
  }
  return nowHealth;
};

console.log(
  solution([1, 1, 1], 5, [
    [1, 2],
    [3, 2],
  ])
);

// [5,1,5], 30, [[2,10],[9,15], [10,5], [11,5]]
// [3, 2, 7],20,[[1, 15],[5, 16],[8, 6]];

// [4, 2, 7],20,[[1, 15],[5, 16],[8, 6]];

// [1, 1, 1], 5,[ [1, 2],[3, 2]];
// 해설 및 다른 사람 풀이
