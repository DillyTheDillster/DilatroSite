let jokers = [
  {
    name: "Single",
    text: [
      "{X:mult,C:white} X#1# {} Mult",
      "If played hand contains a {C:attention}High Card{},",
      "Retriggers all played {C:attention}Aces{}."
    ],
    image_url: "img/placeholder.png",
    rarity: "Rare"
  },
  {
    name: "Connect Four",
    text: [
      "If a {C:attention}Four of a Kind{} is played",
      "And all cards share the same suit,",
      "Gain {X:mult,C:white}x#1#{} Mult!"
    ],
    image_url: "img/placeholder.png",
    rarity: "Uncommon"
  },
  {
    name: "Bootleg",
    text: [
      "{C:attention}Kings{} and {C:attention}Queens{} played this hand",
      "Adds {X:mult,C:white}X0.2{} to {C:attention}Joker{}",
      "{C:inactive}(Current Mult: {X:mult,C:white}X#1#{}){}"
    ],
    image_url: "img/placeholder.png",
    rarity: "Common"
  },
  {
    name: "Secret Service",
    text: [
      "Debuff all cards except {C:attention}King{} and {C:attention}Queen{} in play, and retrigger Kings and Queens {C:attention}3 times{} for scoring.",
      "Duplicates itself {C:attention}once per King or Queen{} destroyed by {C:attention}The Hanged Man{} (max 2),",
      "and once per shattered {C:attention}Glass King/Queen{} (max 5), but only if space is available.",
      "After selling {C:attention}#1#{} Secret Service cards, summon a {C:negative}Negative President{}."
    ],
    image_url: "img/placeholder.png",
    rarity: "Legendary"
  },
  {
    name: "Negative President",
    text: [
      "Each round, {C:green}1 in 10{} chance to {C:red}destroy itself{}. ",
      "{C:green}1 in 2{} chance to grant a {C:attention}random edition{} to a Joker. ",
      "{C:red}If destroyed, removes all Secret Service Jokers{} and its own Joker slot."
    ],
    image_url: "img/placeholder.png",
    rarity: "Legendary"
  },
  {
    name: "Reckless Gambler",
    text: [
        "If {C:attention}destroyed{} or {C:attention}disabled{},",
        "{C:red}destroys 2 unique consumable cards{}."
    ],
    image_url: "img/placeholder.png",
    rarity: "Rare"
  },
  {
    name: "Six Fingers",
    text: [
      "Allows you to select {C:attention}+#1#{} extra card and adds +1 hand size."
    ],
    image_url: "img/placeholder.png",
    rarity: "Uncommon"
  },
  {
    name: "Seven Fingers",
    text: [
      "Allows you to select {C:attention}+#1#{} extra cards and adds +1 hand size."
    ],
    image_url: "img/placeholder.png",
    rarity: "Uncommon"
  },
  {
    name: "Black Cat",
    text: [
      "Halves all probabilities in the game while this card is in your deck."
    ],
    image_url: "img/placeholder.png",
    rarity: "Uncommon"
  },
  {
    name: "Copier",
    text: [
      'Copies ability of a random',
      'compatible {C:attention}Joker{} each {C:attention}round{}',
      '{C:inactive}(Currently copying {X:attention,C:white}#1#{C:inactive}){}'    ],
    image_url: "img/placeholder.png",
    rarity: "Rare"
  },
  {
    name: "Sold Soul",
    text: [
      "Prevents death once.",
      "Destroys all jokers and replaces them",
      "with 2 random rare jokers."    ],
    image_url: "img/placeholder.png",
    rarity: "Rare"
  },
  {
    name: "Duplicator",
    text: [
      "If hand scores more than",
      "blind's Chips, {C:attention}duplicate{}",
      "played cards"
    ],
    image_url: "img/placeholder.png",
    rarity: "Uncommon"
  },
  {
    name: "Fast Food",
    text: [
      "If your {C:blue}first hand{} overscores,",
      "gain {C:money}$10{} when cashing out."
    ],
    image_url: "img/placeholder.png",
    rarity: "Uncommon"
  },
  {
    name: "Blackjack",
    text: [
      'If the {C:attention}ranks{} of all cards',
      'played sum up to {C:attention}#1#{},',
      'this Joker gives {X:mult,C:white}X#2#{} Mult'
    ],
    image_url: "img/placeholder.png",
    rarity: "Rare"
  },
  {
    name: "Reverse Joker",
    text: [
      'Reverses the rank values of all played cards:',
      'Aces become {C:attention}2{}, Kings become {C:attention}3{}, etc.',
      '{C:inactive}(Currently active){}'
    ],
    image_url: "img/placeholder.png",
    rarity: "Rare"
  },  
  {
    name: "Suitor",
    text: [
      "{X:mult,C:white}x#1#{} Mult for each",
      "unique flush suit played this round ",
      "{C:inactive}(Played suits: #3# ){}",
      "{C:inactive}(Currently {X:mult,C:white}x#2#{} Mult){}"
    ],
    image_url: "img/placeholder.png",
    rarity: "Common"
  },
  {
    name: "Geode",
    text: [
      '{C:green}#1# in #2#{} chance to create a random',
      '{C:attention}modified playing card{} each Stone Card played',
      'Card always has an {C:attention}enhancement{}',
      '{C:green}#1# in #3#{} for card to have an {C:attention}edition{}',
      '{C:green}#1# in #4#{} for card to have a {C:attention}seal{}'
    ],
    image_url: "img/placeholder.png",
    rarity: "Rare"
  },  
  {
    name: "Blind Modulator",
    text: [
      'Modifies the chip requirement for the blind by a random',
      'percentage each round, between -25% to +25%.',
      '{C:inactive}(Currently modifying by {X:attention,C:white}#1#{C:inactive}){}',
    ],
    image_url: "img/placeholder.png",
    rarity: "Uncommon"
  }, 
  {
    name: "Squibidi",
    text: [
      "Playing a hand containing an",
      "{C:attention}Aces Three of a Kind{}",
      "disables the {C:attention}Boss Blind{}"
    ],
    image_url: "img/placeholder.png",
    rarity: "Common"
  }, 
  {
    name: "Golden Fiddle",
    text: [
      "Uses your money to save you from death.",
      "Converts money to chips and takes only",
      "the required amount to continue.",
      "Has a {C:red}#1# in #2#{} chance to break on use."
    ],
    image_url: "img/placeholder.png",
    rarity: "Common"
  }, 
  {
    name: "Debt Collector",
    text: [
      'For every {C:red}$5{} below {C:money}$0{},',
      'gain {X:mult,C:white}x#1#{} Mult.',
      '{C:inactive}(Current Debt Mult: {X:mult,C:white}x#2#{}){}'
    ],
    image_url: "img/placeholder.png",
    rarity: "Uncommon"
  }, 
  {
    name: "Game Show Host",
    text: [
          "For every failed Wheel of Fortune,",
          "{C:red}+5 dollars"
    ],
    image_url: "img/placeholder.png",
    rarity: "Common"
  }, 
  {
    name: "The Knight",
    text: [
      "The Chariot always adds a Steel card to the deck when used."
    ],
    image_url: "img/placeholder.png",
    rarity: "Uncommon"
  }, 
  {
    name: "Doppelganger",
    text: [
      "When {C:attention}Blind{} is selected,",
      "destroy Joker to the left",
      "and permanently double the sell value{} of the destroyed Joker",
      "{C:inactive}(Currently {C:mult}#1#{C:inactive} Sell Price)"
    ],
    image_url: "img/placeholder.png",
    rarity: "Uncommon"
  }, 
  {
    name: "Planet Buster",
    text: [
      "When the {C:attention}Planet{} card is consumed,",
      "upgrade a random {C:attention}Poker Hand{}"
    ],
    image_url: "img/placeholder.png",
    rarity: "Rare"
  }, 
  {
    name: "Blunder",
    text: [
      "Each scored hand gives a random amount of {C:chips}chips{} between {C:chips}#1#{} and {C:chips}#2#{}."
    ],
    image_url: "img/placeholder.png",
    rarity: "Uncommon"
  }, 
  {
    name: "Random Crit",
    text: [
      'Has a {C:green}1 in #1#{C:green} chance to decrease the blind by 75%',
      'Each successful activation decreases the chance by 10, down to 1 in 50.',
      'After reaching 1 in 50, the chance resets to 1 in 100.',
      '{C:inactive}(Currently 1 in #1#{C:inactive}){}'
    ],
    image_url: "img/placeholder.png",
    rarity: "Rare"
  }, 
  {
    name: "Tamagotchi",
    text: [
      "At the end of the round, lose {C:money}$#1#{}. ",
      "Gains {X:mult,C:white}X0.1{} Mult per round.",
      "{C:inactive}(Current Mult: {X:mult,C:white}X#2#{}){}",
      "Becomes {C:attention}Neglected{} if wallet reaches {C:attention}$0{}, permanently debuffed.",
      "{C:inactive}(Sell Price: {C:money}$#3#{}){}"
    ],
    image_url: "img/placeholder.png",
    rarity: "Rare"
  }, 
  {
    name: "Spinel Tonic",
    text: [
      "Gains {C:mult}x1{} Mult when a {C:attention}Joker{} is sold.",
      "{C:attention}1 in 4{} chance per hand played to become {C:red}negative{}.",
      "If negative, resets to {C:green}positive{} after scoring.",
      "{C:inactive}(Currently {C:mult}#1#{C:inactive})"
    ],
    image_url: "img/placeholder.png",
    rarity: "Rare"
  }, 
  {
    name: "Lootbox",
    text: [
      "{C:mult}+#1# {} Mult each hand.",
      "{C:green}1 in 5{} chance to add {C:mult}+10{} Mult.",
      "{C:green}1 in 25{} chance to multiply Mult by {C:attention}X1.5{}.",
      "{C:inactive}(Current Mult: {C:mult}+#2#{})",
      "{C:inactive}(Last Trigger: {C:mult}+#3#{})"
    ],
    image_url: "img/placeholder.png",
    rarity: "Uncommon"
  }, 
  {
    name: "Revealer",
    text: [
      "Adds {C:attention}+#1#{} {C:dark_edition}Joker Slot{} per hidden hand revealed."
    ],
    image_url: "img/placeholder.png",
    rarity: "Uncommon"
  }, 
  {
    name: "Mountain Climber",
    text: [
      "Every played {C:attention}card{}",
      "permanently gains {C:mult}+#1#{} Mult",
      "when scored."
    ],
    image_url: "img/placeholder.png",
    rarity: "Uncommon"
  }, 
  {
    name: "Handbag",
    text: [
      "You carry surplus {C:blue}hands{} over rounds.",
    ],
    image_url: "img/placeholder.png",
    rarity: "Uncommon"
  }, 
  {
    name: "Garbage Collector",
    text: [
      "You carry surplus {C:red}discards{} over rounds.",
    ],
    image_url: "img/placeholder.png",
    rarity: "Rare"
  }, 
  {
    name: "Shopkeeper",
    text: [
      "Skipping a {C:attention}blind{} immediately",
      "opens the {C:money}shop{}, even after {C:booster}booster packs{}."
    ],
    image_url: "img/placeholder.png",
    rarity: "Uncommon"
  }, 
  {
    name: "Gold Card",
    text: [
      "Increases bankruptcy limit by {C:green}50{}."
    ],
    image_url: "img/placeholder.png",
    rarity: "Uncommon"
  }, 
  {
    name: "Platinum Card",
    text: [
      "Increases bankruptcy limit by {C:green}100{}."
    ],
    image_url: "img/placeholder.png",
    rarity: "Rare"
  }, 
  {
    name: "Black Card",
    text: [
      "Increases bankruptcy limit by {C:green}150{}.",
      "Replaces {C:attention}Credit Card, Gold Card, and Platinum Card{}."
    ],
    image_url: "img/placeholder.png",
    rarity: "Legendary"
  }, 
  {
    name: "Exorcist",
    text: [
      "When {C:attention}Blind{} is selected, remove",
      "{C:attention}#1#{} random card#2# from your",
      "{C:attention}graveyard{} and this Joker gains",
      "{X:mult,C:white}X#3#{} Mult for each removed",
      "{C:inactive}(Currently {X:mult,C:white}X#4#{C:inactive} Mult)"
    ],
    image_url: "img/placeholder.png",
    rarity: "Rare"
  }, 
  {
    name: "Jokermancer",
    text: [
      "Each scored card gives",
      "{C:mult}+#1#{} Mult for each card",
      "in your {C:attention}graveyard{} that",
      "shares a {C:attention}suit{} or {C:attention}rank{} with it"
    ],
    image_url: "img/placeholder.png",
    rarity: "Rare"
  }, 
  {
    name: "Twisted Mind",
    text: [
      "Cards in your {C:attention}graveyard",
      "are scored as if they",
      "were held in your hand",
    ],
    image_url: "img/placeholder.png",
    rarity: "Rare"
  }, 
  {
    name: "Haunted Joker",
    text: [
      "When {C:attention}Blind{} is selected, add",
      "{C:attention}a random card{} from your",
      "{C:attention}graveyard{} to your hand."
    ],
    image_url: "img/placeholder.png",
    rarity: "Rare"
  }, 
  {
    name: "Resurreciton Joker",
    text: [
      "When {C:attention}sold{}, return {C:attention}half{}",
      "the cards from the {C:attention}graveyard{} to your hand."
    ],
    image_url: "img/placeholder.png",
    rarity: "Rare"
  }, 
  {
    name: "Grave Legion",
    text: [
      "{C:green}#1# in #2#{} chance to create",
      "{C:attention}#3# cop#4#{} of each played card",
      "and put #5# into your",
      "{C:attention}graveyard{} when scored",
    ],
    image_url: "img/placeholder.png",
    rarity: "Uncommon"
  }, 
  {
    name: "Triplicate Soul",
    text: [
      "Create {C:attention}#1#{} extra cop#2#",
      "of each card put",
      "into your {C:attention}graveyard{}",
      "{C:inactive}(Copies are created",
      "{C:inactive}in your graveyard)"
    ],
    image_url: "img/placeholder.png",
    rarity: "Rare"
  }, 
  {
    name: "Joke Book of the Dead",
    text: [
      "When {C:attention}Blind{} is selected, gain",
      "{C:red}+#1#{} Discard#2# for every {C:attention}#3#{} cards",
      "in your {C:attention}graveyard{}",
      "{C:inactive}(Currently: {C:red}+#4#{C:inactive} Discards)",
    ],
    image_url: "img/placeholder.png",
    rarity: "Rare"
  }, 
  {
    name: "Gravedigger",
    text: [
      "Earn {C:money}$#1#{} when a",
      "card is put into",
      "your {C:attention}graveyard{}."
    ],
    image_url: "img/placeholder.png",
    rarity: "Common"
  }, 
  {
    name: "Glasser",
    text: [
      "Has a {C:attention}#1# in #2#{} chance to",
      "turn played cards into {C:attention}Glass Cards{}."
    ],
    image_url: "img/placeholder.png",
    rarity: "Common"
  }, 
  {
    name: "Jeweler",
    text: [
      "Has a {C:attention}#1# in #2#{} chance to upgrade",
      "the played hand and its {C:attention}cards{}."
    ],
    image_url: "img/placeholder.png",
    rarity: "Uncommon"
  }, 
  {
    name: "Last Resort",
    text: [
      "If you run out of {C:blue}hands{} and would lose, convert any remaining {C:red}discards{} into hands instead."
    ],
    image_url: "img/placeholder.png",
    rarity: "Uncommon"
  }, 
  {
    name: "Medusa",
    text: [
      "Turn played cards into",
      "{C:attention}Stone Cards{}"
    ],
    image_url: "img/placeholder.png",
    rarity: "Uncommon"
  }
]


// works the same. 
let consumables = [
  // {
  //   name: "Joker",
  //   text: [
  //     "{C:mult}+4{} Mult"
  //   ],
  //   image_url: "img/j_joker.png",
  //   rarity: "Tarot"
  // },
  // {
  //   name: "Joker",
  //   text: [
  //     "{C:mult}+4{} Mult"
  //   ],
  //   image_url: "img/j_joker.png",
  //   rarity: "Planet"
  // },
  // {
  //   name: "Joker",
  //   text: [
  //     "{C:mult}+4{} Mult"
  //   ],
  //   image_url: "img/j_joker.png",
  //   rarity: "Spectral"
  // },
]

let card_modifications = [
  // {
  //   name: "Joker",
  //   text: [
  //     "{C:mult}+4{} Mult"
  //   ],
  //   image_url: "img/j_joker.png",
  //   rarity: "Enhancement"
  // },
  // {
  //   name: "Joker",
  //   text: [
  //     "{C:mult}+4{} Mult"
  //   ],
  //   image_url: "img/j_joker.png",
  //   rarity: "Edition"
  // },
  // {
  //   name: "Joker",
  //   text: [
  //     "{C:mult}+4{} Mult"
  //   ],
  //   image_url: "img/sticker_example.png",
  //   rarity: "Seal"
  // },
]

let decks = [
  // {
  //   name: "Joker",
  //   text: [
  //     "{C:mult}+4{} Mult"
  //   ],
  //   image_url: "img/j_joker.png",
  //   rarity: "Deck"
  // },
]

let stickers = [
  // {
  //   name: "Joker",
  //   text: [
  //     "{C:mult}+4{} Mult"
  //   ],
  //   image_url: "img/sticker_example.png",
  //   rarity: "Sticker"
  // },
]

let blinds = [
  // {
  //   name: "The Wall",
  //   text: [
  //     "Extra large blind",
  //     "{C:inactive}({C:red}4x{C:inactive} Base for {C:attention}$$$$${C:inactive})",
  //     "{C:inactive}(Appears from Ante 2)"
  //   ],
  //   image_url: "img/the_wall.png",
  //   rarity: "Boss Blind"
  // },
  // {
  //   name: "Violet Vessel",
  //   text: [
  //     "Very large blind",
  //     "{C:inactive}({C:red}6x{C:inactive} Base for {C:attention}$$$$$$$${C:inactive})",
  //     "{C:inactive}(Appears from Ante 8)"
  //   ],
  //   image_url: "img/violet_vessel.png",
  //   rarity: "Showdown"
  // },
]

let shop_items = [
 // {
  //  name: "Joker",
  //  text: [
 //     "{C:mult}+4{} Mult"
 //   ],
 //   image_url: "img/j_joker.png",
 //   rarity: "Voucher"
//  },
 // {
 //   name: "Joker",
 //   text: [
 //     "{C:mult}+4{} Mult"
 //   ],
 //   image_url: "img/j_joker.png",
  //  rarity: "Pack"
 // },
]

let cols = {
  
  MULT: "#FE5F55",
  CHIPS: "#009dff",
  MONEY: "#f3b958",
  XMULT: "#FE5F55",
  FILTER: "#ff9a00",
  ATTENTION: "#ff9a00",
  BLUE: "#009dff",
  RED: "#FE5F55",
  GREEN: "#4BC292",
  PALE_GREEN: "#56a887",
  ORANGE: "#fda200",
  IMPORTANT: "#ff9a00",
  GOLD: "#eac058",
  YELLOW: "#ffff00",
  CLEAR: "#00000000", 
  WHITE: "#ffffff",
  PURPLE: "#8867a5",
  BLACK: "#374244",
  L_BLACK: "#4f6367",
  GREY: "#5f7377",
  CHANCE: "#4BC292",
  JOKER_GREY: "#bfc7d5",
  VOUCHER: "#cb724c",
  BOOSTER: "#646eb7",
  EDITION: "#ffffff",
  DARK_EDITION: "#5d5dff",
  ETERNAL: "#c75985",
  INACTIVE: "#ffffff99",
  HEARTS: "#f03464",
  DIAMONDS: "#f06b3f",
  SPADES: "#403995",
  CLUBS: "#235955",
  ENHANCED: "#8389DD",
  JOKER: "#708b91",
  TAROT: "#a782d1",
  PLANET: "#13afce",
  SPECTRAL: "#4584fa",
  VOUCHER: "#fd682b",
  EDITION: "#4ca893",
}

let rarities = {
  "Common": "#009dff", 
  "Uncommon": "#4BC292",
  "Rare": "#fe5f55",
  "Legendary": "#b26cbb",
  "Joker": "#708b91",
  "Tarot": "#a782d1",
  "Planet": "#13afce",
  "Spectral": "#4584fa",
  "Voucher": "#fd682b",
  "Pack": "#9bb6bd",
  "Enhancement": "#8389DD",
  "Edition": "#4ca893",
  "Seal": "#4584fa",
  "Deck": "#9bb6bd",
  "Sticker": "#5d5dff",
  "Boss Blind": "#5d5dff",
  "Showdown": "#4584fa",
}

regex = /{([^}]+)}/g;

let add_cards_to_div = (jokers, jokers_div) => {
  for (let joker of jokers) {
    console.log("adding joker", joker.name);
  
    joker.text = joker.text.map((line) => { return line + "{}"});
  
    joker.text = joker.text.join("<br/>");
    joker.text = joker.text.replaceAll("{}", "</span>");
    joker.text = joker.text.replace(regex, function replacer(match, p1, offset, string, groups) {
      let classes = p1.split(",");
  
      let css_styling = "";
  
      for (let i = 0; i < classes.length; i++) {
        let parts = classes[i].split(":");
        if (parts[0] === "C") {
          css_styling += `color: ${cols[parts[1].toUpperCase()]};`;
        } else if (parts[0] === "X") {
          css_styling += `background-color: ${cols[parts[1].toUpperCase()]}; border-radius: 5px; padding: 0 5px;`;
        }
      }
  
      return `</span><span style='${css_styling}'>`;
    });
  
    let joker_div = document.createElement("div");
    joker_div.classList.add("joker");
    if (joker.rarity === "Sticker" || joker.rarity == "Seal") {
      joker_div.innerHTML = `
        <h3>${joker.name}</h3>
        <img src="${joker.image_url}" alt="${joker.name}" class="hasback" />
        <h4 class="rarity" style="background-color: ${rarities[joker.rarity]}">${joker.rarity}</h4>
        <div class="text">${joker.text}</div>
      `;
    } else if (joker.soul) {
      joker_div.innerHTML = `
        <h3>${joker.name}</h3>
        <span class="soulholder">
          <img src="${joker.image_url}" alt="${joker.name}" class="soul-bg" />
          <img src="${joker.image_url}" alt="${joker.name}" class="soul-top" />
        </span>
        <h4 class="rarity" style="background-color: ${rarities[joker.rarity]}">${joker.rarity}</h4>
        <div class="text">${joker.text}</div>
      `;
    } else {
      joker_div.innerHTML = `
        <h3>${joker.name}</h3>
        <img src="${joker.image_url}" alt="${joker.name}" />
        <h4 class="rarity" style="background-color: ${rarities[joker.rarity]}">${joker.rarity}</h4>
        <div class="text">${joker.text}</div>
      `;
    }
  
    jokers_div.appendChild(joker_div);
  }
}

if (jokers.length === 0) {
  document.querySelector(".jokersfull").style.display = "none"
} else {
  let jokers_div = document.querySelector(".jokers");
  add_cards_to_div(jokers, jokers_div);
}

if (consumables.length === 0) {
  document.querySelector(".consumablesfull").style.display = "none"
} else {
  let consumables_div = document.querySelector(".consumables");
  add_cards_to_div(consumables, consumables_div);
}

if (card_modifications.length === 0) {
  document.querySelector(".cardmodsfull").style.display = "none"
} else {
  let cardmods_div = document.querySelector(".cardmods");
  add_cards_to_div(card_modifications, cardmods_div);
}

if (decks.length === 0) {
  document.querySelector(".decksfull").style.display = "none"
} else {
  let decks_div = document.querySelector(".decks");
  add_cards_to_div(decks, decks_div);
}

if (stickers.length === 0) {
  document.querySelector(".stickersfull").style.display = "none"
} else {
  let stickers_div = document.querySelector(".stickers");
  add_cards_to_div(stickers, stickers_div);
}

if (blinds.length === 0) {
  document.querySelector(".blindsfull").style.display = "none"
} else {
  let blinds_div = document.querySelector(".blinds");
  add_cards_to_div(blinds, blinds_div);
}

if (shop_items.length === 0) {
  document.querySelector(".shopitemsfull").style.display = "none"
} else {
  let shopitems_div = document.querySelector(".shopitems");
  add_cards_to_div(shop_items, shopitems_div);
}
