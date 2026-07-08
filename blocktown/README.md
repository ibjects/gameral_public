# Blocktown

Blocktown is a free browser game about driving, running, surviving, buying places, and following a never-ending city story.

It is built as one main file:

```text
index.html
```

That one file contains the page, the art, the controls, the game rules, the save system, and the AI Director.

---

## Quick Start

### Play It

Open this file in a browser:

```text
blocktown/index.html
```

You can also run a tiny local server if your browser is strict about local files:

```sh
cd blocktown
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

### Pick A Mode

When the menu opens, you can choose:

| Mode            | What It Means                                            |
| --------------- | -------------------------------------------------------- |
| `NEW SAGA (AI)` | Uses a Google AI Studio Gemini API key to make missions. |
| `OFFLINE`       | Uses the built-in local Director. No internet needed.    |
| `RESUME`        | Continues your saved city and story.                     |

If the AI call fails, the game can keep going with the local Director.

---

## Controls

### Keyboard

| Key                  | Action              |
| -------------------- | ------------------- |
| `W` or `Arrow Up`    | Move forward        |
| `S` or `Arrow Down`  | Move backward       |
| `A` or `Arrow Left`  | Turn left           |
| `D` or `Arrow Right` | Turn right          |
| `Space`              | Handbrake drift     |
| `E`                  | Enter or exit a car |
| `F`                  | Fire                |

### Touch

| Control                | Action                                       |
| ---------------------- | -------------------------------------------- |
| Left joystick          | Move or drive                                |
| `JACK` / `EXIT` button | Enter or leave a car                         |
| `FIRE` button          | Shoot                                        |
| `HUD` button           | Show or hide the side panel on small screens |

---

## How To Play

1. Start a saga.
2. Follow the mission card and the arrow.
3. Steal cars, drive to goals, meet people, fight enemies, or escape trouble.
4. Earn cash from missions.
5. Buy properties when the city offers them.
6. Survive as long as you can.

The stars are your wanted level. More stars means more police pressure.

If you die, the story does not have to end. If you have enough money, you can pay the hospital fee and continue.

---

## The Simple Explanation

Imagine Blocktown is a toy city on a glass table.

The browser does this many times every second:

1. It checks what keys or touch buttons you are pressing.
2. It moves the player, cars, police, people, bullets, and pickups.
3. It checks if a mission step is finished.
4. It draws the whole city again on the canvas.

That fast repeat is called the game loop.

The city is not a giant picture. It is made from math. Roads, blocks, parks, lots, cars, and people are created as you play.

---

# Developers Info

## How `index.html` Is Built

`index.html` has four big parts.

### 1. Page Info

At the top of the file, the game sets browser and search info:

- Page title
- Description
- Icon
- Social preview image
- VideoGame structured data
- Mobile viewport settings

This helps the game look right in browsers and when shared online.

### 2. Styles

The `<style>` block controls how the game looks:

- The canvas fills the screen.
- HUD boxes sit on top of the game.
- Buttons are fixed to the screen.
- Mobile layouts use media queries.
- Touch devices get a virtual joystick.
- Small screens get a `HUD` toggle.

### 3. HTML Body

The body is small. It mostly creates places for the game to draw and show UI:

```html
<canvas></canvas>
<div id="ui">...</div>
<div id="modal"></div>
```

The canvas is where the city is drawn.

The UI is where the cash, hearts, wanted stars, mission cards, buttons, and messages appear.

The modal is used for the start menu and game over screen.

### 4. JavaScript Game Engine

Most of the file is JavaScript. This is the actual game.

Here is the main map of the script:

| Section        | What It Does                                                                           |
| -------------- | -------------------------------------------------------------------------------------- |
| Canvas setup   | Makes the canvas fit the screen.                                                       |
| World helpers  | Builds roads, blocks, parks, lots, and solid areas.                                    |
| Game state     | Stores cash, health, heat, player position, cars, NPCs, missions, and weather.         |
| Save system    | Uses `localStorage` when the browser allows it.                                        |
| UI kit         | Creates HUD text, buttons, panels, bars, messages, and mission cards.                  |
| Real estate    | Lets the Director add landmarks and properties to the city.                            |
| Scene engine   | Runs scripted story scenes with NPCs, zones, timers, and rules.                        |
| Mission engine | Starts, updates, completes, and fails missions.                                        |
| World ops      | Lets the Director change weather, spawn enemies, add cars, create buildings, and more. |
| Local Director | Builds missions without AI, so the game can work offline.                              |
| AI Director    | Calls Gemini when an API key is provided.                                              |
| Game flow      | Handles new game, resume, continue after death, and game over.                         |
| Input          | Handles keyboard, mouse, touch, joystick, fire, and carjacking.                        |
| Update loop    | Moves everything and checks game rules.                                                |
| Draw loop      | Paints the city, cars, people, effects, HUD markers, and minimap.                      |
| Debug hook     | Exposes `window.__bt` for testing in the browser console.                              |

---

## The Game Loop

The loop is the heartbeat of Blocktown.

```text
requestAnimationFrame(loop)
```

Every frame, the game does this:

```text
read input
update the world
save sometimes
update property UI
draw the world
refresh HUD text
ask the browser for the next frame
```

That is why the game feels alive.

---

## The City System

Blocktown is made from square blocks.

Important numbers:

| Name | Meaning                |
| ---- | ---------------------- |
| `T`  | Size of one city tile. |
| `RW` | Road width.            |
| `BS` | Inner block size.      |

The city uses a small math function called `hsh()` to decide what each block is.

A block can become:

- A building
- A park
- A parking lot
- A custom AI-made landmark
- A buyable property

This means the map can feel endless without saving a giant map file.

---

## The Director

The Director is the system that makes the city feel like it has a story.

There are two Directors:

| Director       | Where It Runs      | What It Does                                                            |
| -------------- | ------------------ | ----------------------------------------------------------------------- |
| Local Director | Inside the browser | Makes missions with built-in procedural code.                           |
| AI Director    | Google Gemini API  | Makes JSON plans for missions, scenes, buildings, NPCs, and story arcs. |

The game expects the Director to return a JSON plan with things like:

```json
{
  "memory": "what happened in the saga",
  "banner": "short story message",
  "mission": {},
  "scene": {},
  "world": [],
  "shop": [],
  "ui": []
}
```

The game then reads that JSON and turns it into real gameplay.

Simple idea:

```text
Director writes the plan.
Game engine performs the plan.
Player changes what happens next.
```

---

## AI Key Safety

If you use `NEW SAGA (AI)`, the menu asks for a Google AI Studio API key.

Rules for safety:

- Do not hard-code your API key into `index.html`.
- Do not commit real keys to GitHub.
- Use the remember checkbox only on your own device.
- If a key is ever posted publicly, rotate it.

The game sends the key only to the Gemini API request.

---

## Saving

Blocktown saves progress in the browser.

It saves:

- Cash
- Ammo
- Hearts
- Weather
- Chapter number
- Director memory
- Properties
- Landmarks
- Recent events

The save key is stored in browser storage. If the browser blocks storage, the game falls back to memory for that session.

Important: browser saves are local to that browser and device.

---

## Responsive Design

Blocktown is built to work on desktop and mobile.

It does this with:

- A full-screen canvas.
- `visualViewport` support for phone browsers.
- Device pixel ratio scaling for sharper drawing.
- Touch-friendly buttons.
- A virtual joystick on touch devices.
- Smaller HUD panels on narrow screens.
- A `HUD` toggle when space is tight.
- Safe-area spacing for phones with notches.

The game is not a separate mobile app. It is the same `index.html`, adapting to the screen.

---

## Folder Guide

```text
blocktown/
  index.html                    main game
  icon.png                      game icon
  park-showcase.html            park visual experiment
  building-showcase.html        building visual experiment
  special-building-showcase.html special building visual experiment
  archive/                      older saved versions
  ReadME.md                     this guide
```

Usually, edit `index.html`.

Use `archive/` when you want to compare old versions or keep a release snapshot.

---

## Developer Tutorial

### Change Menu Text

Look for:

```js
function bootMenu()
```

That section creates the start menu, buttons, intro text, and API key field.

### Change Controls

Look for:

```js
/* ================= INPUT ================= */
```

That section handles:

- Keyboard
- Pointer input
- Touch joystick
- Fire button
- Jack and exit button
- HUD button

### Change The City

Look for:

```js
/* ---------------- world ---------------- */
```

Good places to study:

- `blockType()`
- `solidAt()`
- `clearAt()`
- `findFree()`
- `snapRoad()`

These functions decide where roads, buildings, parks, cars, and safe positions are.

### Change Missions

Look for:

```js
/* ================= MISSIONS ================= */
```

The mission engine is named `M`.

It controls:

- Current mission
- Mission progress
- Navigation target
- Mission start
- Mission success
- Mission failure

### Change Scripted Scenes

Look for:

```js
/* ================= SCENE ENGINE ================= */
```

The scene engine is named `S`.

It controls:

- NPCs
- Zones
- Timers
- Dialogue bubbles
- Rules like `enter_zone`, `npc_dead`, and `timer`

### Change AI Behavior

Look for:

```js
const Director = {
```

Important methods:

| Method         | Meaning                           |
| -------------- | --------------------------------- |
| `go()`         | Asks for the next plan.           |
| `offline()`    | Uses the local Director.          |
| `callGemini()` | Calls the Gemini API.             |
| `prompt()`     | Tells the AI what JSON to create. |
| `apply()`      | Turns the plan into game objects. |

### Change Offline Story Generation

Look for:

```js
const LG = {
```

`LG` is the local Director. It makes missions without internet.

This is where offline names, arcs, shops, custom buildings, and scene templates are created.

### Change Drawing

Look for:

```js
/* ================= DRAW ================= */
```

That section paints:

- Roads
- Buildings
- Parks
- Properties
- Cars
- People
- NPCs
- Bullets
- Explosions
- Weather
- Minimap
- Mission arrow

---

## Debugging

Open the browser console and use:

```js
window.__bt.s;
```

That shows the current game state.

Useful examples:

```js
window.__bt.set({ cash: 1000 });
window.__bt.goDirector();
window.__bt.wipeSave();
window.__bt.pauseDirector(true);
window.__bt.pauseDirector(false);
```

Use these for testing only.

---

## Troubleshooting

### The AI says `HTTP 404`

The model name or API endpoint may be wrong or retired. Check the model string inside `callGemini()`.

### The AI says `HTTP 403`

The API key may be invalid, blocked, or missing permission.

### Save Does Not Work

Your browser may be blocking `localStorage`.

Try opening the game in a normal browser tab or through a local server.

### The HUD Is In The Way

On small screens, tap `HUD` to show or hide the right-side panel.

### I Reached The Marker But Nothing Happened

The scene engine has safety checks for this. If it still happens, inspect the current mission with:

```js
window.__bt.s.mission;
```

---

## Open Source Notes

Blocktown is easy to study because it is mostly one file.

Good contribution rules:

- Keep the game playable offline.
- Keep mobile controls working.
- Do not commit real API keys.
- Test with keyboard and touch if you changed input.
- Keep old versions in `archive/` when making a big release.
- Add comments only when they explain something hard.

This folder does not currently include a license file. If the project is meant to be open source for others to reuse, add a clear license file to the repository.

---

## Tiny Mental Model

If you remember only one thing, remember this:

```text
Canvas draws the city.
JavaScript moves the city.
Director writes the story.
The player makes it messy.
```
