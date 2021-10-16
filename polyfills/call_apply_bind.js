let result;
let boundFunction;

function completeMission() {
  return ++this.missions;
}

function logLastMovie(movie) {
  console.log(movie);
}

let agentOne = {
  name: "James Bond",
  missions: 10,
  //   completeMission: function () {
  //     return ++this.missions;
  //   },
  completeMission: completeMission,
};

let agentTwo = {
  name: "Ethan Hunt",
  missions: 7,
  //   completeMission: agentOne.completeMission,
  //   completeMission: completeMission,
};

//----------------------------- CALL
// result = completeMission.call(agentOne);
result = agentOne.completeMission.call(agentTwo);
// result = logLastMovie.call(agentOne, "No Time To Die");

//----------------------------- APPLY
// result = completeMission.apply(agentTwo);
// result = logLastMovie.apply(agentOne, ["No Time To Die"]);

//----------------------------- BIND
// boundFunction = completeMission.bind(agentOne);
// result = boundFunction();
console.log(result);
