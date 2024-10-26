import chalk, { Chalk } from "chalk";
import commando from "./commando.js";

const chalkCTX = new Chalk({ level: 3 });

/**
 * Output a message in color.
 *
 * @param {string} message
 * @param {array} color
 */
export const colorLog = function (message, color = [120, 81, 169]) {
  console.log(chalkCTX.rgb(...color)(chalk.bold(message)));
};

/**
 * Retrieve the appropriate `git` command from the alias that was passed.
 * If it doesn't exist, return the alias itself. Enables backward compatibility.
 *
 * @param {string} alias
 */
export const getCommandByAlias = function (alias) {
  for (let command in commando) {
    let commandHasAlias = commando[command].find((a) => alias === a);

    if (commandHasAlias) {
      return command;
    }
  }

  return alias;
};
