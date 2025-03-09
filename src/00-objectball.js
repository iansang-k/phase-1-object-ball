function gameObject() {
  return {
    home: {
      teamName: "Brooklyn Nets",
      colors: ["Black", "White"],
      players: {
        alanAnderson: {
          number: "0",
          shoe: "16",
          points: 22,
          rebounds: 12,
          assists: 12,
          steals: 3,
          blocks: 1,
          slamDunks: 1,
        },
        reggieEvans: {
          number: "30",
          shoe: "14",
          points: 12,
          rebounds: 12,
          assists: 12,
          steals: 12,
          blocks: 12,
          slamDunks: 7,
        },
        brookLopez: {
          number: "11",
          shoe: "17",
          points: 17,
          rebounds: 19,
          assists: 10,
          steals: 3,
          blocks: 1,
          slamDunks: 15,
        },
        masonPlumlee: {
          number: "1",
          shoe: "19",
          points: 26,
          rebounds: 12,
          assists: 6,
          steals: 3,
          blocks: 8,
          slamDunks: 5,
        },
        jasonTerry: {
          number: "31",
          shoe: "15",
          points: 19,
          rebounds: 2,
          assists: 2,
          steals: 4,
          blocks: 11,
          slamDunks: 1,
        },
      },
    },
    away: {
      teamName: "Charlotte Hornets",
      colors: ["Turquoise", "Purple"],
      players: {
        jeffAdrien: {
          number: "4",
          shoe: "18",
          points: 10,
          rebounds: 1,
          assists: 1,
          steals: 2,
          blocks: 7,
          slamDunks: 2,
        },
        bismakBiyombo: {
          number: "0",
          shoe: "16",
          points: 12,
          rebounds: 4,
          assists: 7,
          steals: 7,
          blocks: 15,
          slamDunks: 10,
        },
        desagnaDiop: {
          number: "2",
          shoe: "14",
          points: 24,
          rebounds: 12,
          assists: 12,
          steals: 4,
          blocks: 5,
          slamDunks: 5,
        },
        benGordon: {
          number: "8",
          shoe: "15",
          points: 33,
          rebounds: 3,
          assists: 2,
          steals: 1,
          blocks: 1,
          slamDunks: 0,
        },
        brendanHaywood: {
          number: "33",
          shoe: "15",
          points: 6,
          rebounds: 12,
          assists: 12,
          steals: 22,
          blocks: 5,
          slamDunks: 12,
        },
      },
    },
  };
}
function numPointsScored(playerName) {
  const game = gameObject();
  for (const team in game) {
    const players = game[team].players;
    if (players[playerName]) {
      return players[playerName].points;
    }
  }
}
function shoeSize(playerName) {
  const game = gameObject();
  for (const team in game) {
    const players = game[team].players;
    if (players[playerName]) {
      return players[playerName].shoe;
    }
  }
}
function teamColors(teamName) {
  const game = gameObject();
  for (const team in game) {
    if (game[team].teamName === teamName) {
      return game[team].colors;
    }
  }
}
function teamName() {
  const game = gameObject();
  return [game.home.teamName, game.away.teamName];
}
function playerNumbers(teamName) {
  const game = gameObject();
  const numbers = [];
  for (const team in game) {
    if (game[team].teamName === teamName) {
      for (const player in game[team].players) {
        numbers.push(game[team].players[player].number);
      }
    }
  }
  return numbers;
}
function playerStats(playerName) {
  const game = gameObject();
  for (const team in game) {
    const players = game[team].players;
    if (players[playerName]) {
      return players[playerName];
    }
  }
}
function bigShoeRebounds() {
  const game = gameObject();
  let largestShoe = 0;
  let rebounds = 0;
  for (const team in game) {
    const players = game[team].players;
    for (const player in players) {
      if (players[player].shoe > largestShoe) {
        largestShoe = players[player].shoe;
        rebounds = players[player].rebounds;
      }
    }
  }
  return rebounds;
}
function mostPointsScored() {
  const game = gameObject();
  let mostPoints = 0;
  let topPlayer = "";
  for (const team in game) {
    const players = game[team].players;
    for (const player in players) {
      if (players[player].points > mostPoints) {
        mostPoints = players[player].points;
        topPlayer = player;
      }
    }
  }
  return topPlayer;
}
