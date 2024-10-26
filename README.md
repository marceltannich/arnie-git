# Arnie Git

Get to the chopper! 'arnie' is the Git wrapper that pumps up your version control with his iconic one-liners. Don't just commit—crush your workflow and say 'Hasta la vista' to boring commands!

## What is hell is this?

Install this package and you'll have a collection of his Git commands and aliases at your fingertips—no more weak commands! Using the `arnie` command, you can completely eliminate the need to call `git` on your machine. If one of his pumped-up commands doesn't exist, it'll fall back to the regular Git command. Get ready to crush your version control workflow!

For example, running `arnie crush-your-enemies` calls `git merge`, and `arnie consider-that-a-divorce your-branch` calls `git branch -D your-branch`.

Each of these commandos will respect any flags you include, passing them straight through to the underlying Git command. So don't hesitate—add your options, and let 'arnie' do the heavy lifting! No problemo!

## Commando(s)

commandos that override core Git command.

| Real Command | Redeemed Command                      | Explanation                                                                  |
| ------------ | ------------------------------------- | ---------------------------------------------------------------------------- |
| add          | no-problemo                           | Your changes are added effortlessly, as Arnold would say, "No problemo."     |
| blame        | you-did-not-make-it-did-you           | Point out who made changes, with Arnold's way of questioning responsibility. |
| branch       | you-son-of-a-                         | Manage branches with intensity, as Arnold might express frustration.         |
| checkout     | get-your-ass-to-mars                  | Switch branches or restore files, urging you to move quickly.                |
| clone        | get-to-the-chopper                    | Clone repositories swiftly, as if escaping to safety.                        |
| commit       | ill-be-back                           | Commit changes with the promise that "I'll be back."                         |
| diff         | whats-the-matter-changed-your-mind    | Compare changes with Arnold's questioning tone.                              |
| fetch        | come-on-do-it-do-it-now               | Fetch updates urgently, as Arnold insists, "Do it now!"                      |
| help         | im-here-to-help                       | Get help with Arnold reassuring you.                                         |
| init         | who-is-your-daddy-and-what-does-he-do | Initialize a repo by asking the fundamental questions.                       |
| log          | youre-funny-ill-kill-you-last         | View commit logs with a touch of humor.                                      |
| merge        | crush-your-enemies                    | Merge branches aggressively, as Arnold would: "Crush your enemies!"          |
| pull         | come-with-me-if-you-want-to-live      | Pull changes, inviting you to join in.                                       |
| push         | hasta-la-vista-baby                   | Push changes, saying goodbye to your local commits.                          |
| rebase       | get-ready-for-a-surprise              | Reapply commits on top of another base tip, preparing for changes.           |
| reset        | youve-been-erased                     | Reset changes, effectively erasing them.                                     |
| revert       | erase-the-mistake                     | Revert commits to correct errors.                                            |
| stash        | ill-keep-it-safe                      | Stash your changes securely.                                                 |
| status       | its-not-a-tumor                       | Check status to confirm there are no major issues.                           |
| tag          | youre-mine-now                        | Tag commits, marking them as yours.                                          |
| bisect       | im-looking-for-sarah-connor           | Search for the commit that introduced a bug, as if searching for someone.    |

## Alias

Need to run more complex commandos with extra firepower? Use these aliases—they're your tactical shortcuts! They provide shorthand ways to execute advanced commands (basically anything that requires extra flags). So gear up, and let nothing stand in your way!

## Aliases

| Real Command | Redeemed Alias | Explanation                                      |
| ------------ | -------------- | ------------------------------------------------ |
| branch -D    | no-problemo    | Delete a branch decisively.                      |
| push --force | trust-me       | Force push changes, asking others to "Trust me." |

## Installation

`npm install arnie-git -g`

or

`yarn global add arnie-git`

## Usage

Whenever you'd normally use `git`, use `arnie` instead, followed by whatever [command](#commando) or [alias](#aliases) and any flags you'd like to pass.

## Feedback

Like this tool? Star it & [tweet me](https://www.X.com/marceltannich)!
