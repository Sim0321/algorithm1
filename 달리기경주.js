// 문제 설명
// 얀에서는 매년 달리기 경주가 열립니다. 해설진들은 선수들이 자기 바로 앞의 선수를 추월할 때 추월한 선수의 이름을 부릅니다. 예를 들어 1등부터 3등까지 "mumu", "soe", "poe" 선수들이 순서대로 달리고 있을 때, 해설진이 "soe"선수를 불렀다면 2등인 "soe" 선수가 1등인 "mumu" 선수를 추월했다는 것입니다. 즉 "soe" 선수가 1등, "mumu" 선수가 2등으로 바뀝니다.

// 선수들의 이름이 1등부터 현재 등수 순서대로 담긴 문자열 배열 players와 해설진이 부른 이름을 담은 문자열 배열 callings가 매개변수로 주어질 때, 경주가 끝났을 때 선수들의 이름을 1등부터 등수 순서대로 배열에 담아 return 하는 solution 함수를 완성해주세요.

const solution = (players, callings) => {
  let obj = {};

  for (let i = 0; i < players.length; i++) {
    obj[players[i]] = i;
  }

  callings.forEach((v) => {
    let cur = obj[v];
    let prev = players[cur - 1];
    players[cur - 1] = v;
    players[cur] = prev;
    obj[v]--;
    obj[players[cur]]++;
  });
  return Object.entries(obj)
    .sort((a, b) => a[1] - b[1])
    .map((v) => v[0]);
};

console.log(
  solution(
    ["mumu", "soe", "poe", "kai", "mine"],
    ["kai", "kai", "mine", "mine"]
  )
);

// 해설 및 다른 사람 풀이
// 첫 풀이는 시간초과가 났다. 이유는 indexOf는 앞에서부터 순차적으로 탐색하기 때문.
// 첫 풀이
// for (let i = 0; i < callings.length; i++) {
//   const currentPlayer = callings[i];
//   const currentIndex = players.indexOf(currentPlayer);
//   const previousPlayer = players[currentIndex - 1];
//   players[currentIndex - 1] = currentPlayer;
//   players[currentIndex] = previousPlayer;
// }
// return players;

// 호출이 되는 사람의 value를 1줄이고, 호출되는 전사람의 value를 1늘리고 기존의 풀이 방식과 동일하지만 객체로 만들어서
// sort로 정렬을 한 후에 key값(사람 이름)만 따로 return 하는 것이 시간을 줄일 수 있는 방법이다.
