const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')

let state = {}

function startGame() {
  state = {}
  showTextNode(1)
}

function showTextNode(textNodeIndex) {
  const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
  textElement.innerText = textNode.text
  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild)
  }

  textNode.options.forEach(option => {
    if (showOption(option)) {
      const button = document.createElement('button')
      button.innerText = option.text
      button.classList.add('btn')
      button.addEventListener('click', () => selectOption(option))
      optionButtonsElement.appendChild(button)
    }
  })
}

function showOption(option) {
  return option.requiredState == null || option.requiredState(state)
}

function selectOption(option) {
  const nextTextNodeId = option.nextText
  if (nextTextNodeId <= 0) {
    return startGame()
  }
  state = Object.assign(state, option.setState)
  showTextNode(nextTextNodeId)
}


const textNodes = [
    {
        id: 1,
        text: "You wake up in a small, dark, cushy-floored room with no memory of who you are.",
        options: [
            {
              text: "Search rucksack for personal belongings.",
              setState: {ID: true, Rusty: true},
              nextText: 2    
            },
            {
              text: "Search for a way out of the room.",
              nextText: 3
            }
        ]
    },
    {
        id: 2,
        text: "Your rucksack doesn't hold much. Just a hand-drawn ID for Flat-Earth Fitness. The name on it says SIR MANGOTROT BUNGLEDUNCE. You also find a small grey mouse that you feel strongly is your pet, RUSTY. You feel very faint from hunger.",
        options: [
            {
                text: "Eat Rusty.",
                setState: {Rusty: false},
                nextText: 4
            },
            {
                text: "Search for a way out of the room.",
                nextText: 3
            }
        ]
    },
    {
        id: 3,
        text: "You grope along the dark walls and find no door or window. You realize you're in some kind of prison, or turret, or...something cylindrical. You begin to panic.",
        options: [
            {
                text: "Eat Rusty.",
                setState: {Rusty: false},
                nextText: 4
            },
            {
            text: "Shout for help.",
            nextText: 5
            }
        ]

    },
    {
        id: 4,
        text: "In an agitated furor, you stuff RUSTY, your wiggly mouse companion in your mouth. As soon as you do so, a few memories burst into your mind and RUSTY kills you with his mutant powers.",
        options: [
        {
          text: "Game Over",
          nextText: 1  
        }
    ]
    },
    {
        id: 5,
        text: "You decide to shout for help. You hear someone coming! A light shines on you as a panel slides open and a disgruntled OLD WITCH regards you with contempt. 'Aw, kibbles! Have you been eating our grain again, MANGOTROT?'",
        options: [
        {
          text: "Attempt to engage her in conversation",
          nextText: 6  
        },
        {
            text: "Demand that she let you out at once!",
            nextText: 7  
        }
    ]
    },
    {
        id: 6,
        text: "'Wait!' you plead. 'Help me understand. Who am I? How did I get here? Do I ever use my gym membership?' She sighs with sympathy, waves her arms with a magical whooshy motion, and the silo opens up without spilling any grain.",
        options: [
        {
          text: "Run like the wind from the OLD WITCH'S farm to the nearest VILLAGE.",
          nextText: 8  
        },
        {
            text: "Listen to what the OLD WITCH will tell you before leaving.",
            nextText: 9  
        }
    ]
    },
    {
        id: 7,
        text: "'Ha!' she says. 'You lousy old drunk! You can leave the way you came!' She closes the panel, and you eventually die in the freezing cold.",
        options: [
        {
          text: "Game Over",
          nextText: 1  
        },
    ]
    },
    {
        id: 8,
        text: "You bolt as fast as you can. Crazy OLD WITCH! You don't know how you ended up in her grain silo but you're sure glad to be rid of her!",
        options: [
        {
          text: "Take the HIGHWAY to the nearest VILLAGE.",
          nextText: 10  
        },
        {
            text: "Take the FOREST SHORTCUT to the nearest VILLAGE.",
            nextText: 11  
        }
    ]
    },
    {
        id: 9,
        text: "You decide to listen to the OLD WITCH, even though she scares you a bit. 'You used to be a bad man,' she explained. 'You DUNGEONEERED for the powers of EVIL and not GOOD. So you were sentenced to death! You don't remember but I am well-known for my MAGICAL EXPERIMENTS.'",
        options: [
        {
          text: "'Tell me more.'",
          nextText: 12 
        },
        {
            text: "Attack her.",
            nextText: 13 
        }
    ]
    },
    {
        id: 10,
        text: "You opt for the HIGHWAY as it is turning to DUSK. You are getting a prickly feeling on the back of your neck. You turn around and see half a dozen HIGHWAYMEN coming to rob and attack you!",
        options: [
        {
          text: "Run for your life!",
          nextText: 14  
        },
        {
            text: "Deploy Rusty",
            nextText: 15  
        },
        {
            text:"Tell them who you are",
            nextText: 16
        }
    ]
},
{
    id: 11,
    text: "You arrive in the FOREST by NIGHTFALL which is spooky. You sit down and cry a little at some point when a FAIRY comes to greet you.",
    options: [
    {
      text: "Try to find out whether she's one of those creepy trickster fairies or one of the Disney-like fairies.",
      nextText: 17 
    },
    {
        text: "Attack her.",
        nextText: 18 
    }
]
},
{
    id: 12,
    text: "The OLD WITCH continued her tale. 'There was a time that the name MANGOTROT BUNGLEDUNCE struck fear into the hearts of the mightiest gladiators. You pleaded with the JUDGE to change your sentence and he and I pitied you. I stripped you of your strength and removed your name and status from everyone's memory with the promise that you would only DUNGEONEER FOR GOOD.'",
    options: [
    {
      text: "Ask the OLD WITCH for SUPPLIES and VITTLES.",
      nextText: 19 
    },
    {
        text: "Attack her.",
        nextText: 13 
    }
]
},
{
    id: 13,
    text: "You slug the OLD WITCH as hard as you can in the nose, then again in her stomach. A bit startled, she takes a step back, conjures up a fireball and screams 'BIPPITY-BOPPITY-BOO!' while launching it straight at you. 'Humans,' she mutters as you lie on the ground dying.",
    options: [
    {
      text: "Game Over",
      nextText: 1 
    },
]
},
{
    id: 14,
    text: "You run as fast as you can but you are outnumbered 6 to 1 and there was some important information you should've heard from the OLD WITCH. You totally get killed, but the HIGHWAYMEN don't rob you. You have nothing of value.",
    options: [
    {
      text: "Game over",
      nextText: 1
    }
]
},
{
    id: 15,
    text: "For whatever reason, you feel the desire to chuck RUSTY out of your rucksack. He begins running...at lightning speed...biting every HIGHWAYMAN! They're all collapsing. Wow! You have a MAGICAL MUTANT MOUSE!",
    options: [
    {
      text: "Search the Highwaymen",
      nextText: 20
    },
    {
        text: "Head for the Forest Shortcut",
        nextText: 11
    }
]
},
{
    id: 16,
    text: "'Wait!!!' you say in your scariest voice. 'I am SIR MANGO BUNGLEDUNCE. You don't want to cross me!' The HIGHWAYMEN look at each other in confusion 'Sir who?' they ask each other before killing you. Should've listened to what the OLD WITCH had to say...",
    options: [
    {
      text: "Game Over",
      nextText: 1
    }
]
},
{
    id: 17,
    text: "You observe the FAIRY closely. She doesn't seem harmful...it was almost as if she were looking for you. 'MANGO,' she says, 'At last, our paths have crossed in the FOREST OF PATH-CROSSING. I must tell you your QUEST.'",
    options: [
    {
      text: "Throw a rock at her and walk away.",
      nextText: 21
    },
    {
        text: "Prepare to hear your QUEST.",
        nextText: 22
    },
    { 
        text:  "Attack her.",
        nextText: 18
    }
]
},
{
    id: 18,
    text: "Are you the same guy who tried to kill the witch, too? Boy, oh, boy. The FAIRY looks very hurt and makes a slashing motion in the air, basically piercing all your vital internal organs. Ya dead.",
    options: [
    {
      text: "Game Over",
      nextText: 1
    }
]
},
{
    id: 19,
    text: "The OLD WITCH kindly agrees, packing you delicious MEATY SANDWICHES and COOKIES, bits of CHEESE for RUSTY, and even a SWORD. 'I urge you to go to the FOREST OF PATHS-CROSSING where you may find a FAIRY named MELANIA. She will guide you on your QUEST.'",
    setState: {Sword: true, Vittles: true},
    options: [
    {
      text: "Leave for the FOREST OF PATHS-CROSSING",
      nextText: 11
    },
    {
    text: "Travel on the HIGHWAY to the VILLAGE to trade",
    nextText: 10
    }
]
},
{
    id: 20,
    text: "The most the HIGHWAYMEN have on them is a day's worth of VITTLES. Maybe this is why they became HIGHWAYMEN. It is almost NIGHTFALL and you are not close to the VILLAGE.",
    setState: {Vittles: true},
    options: [
    {
      text: "Camp in the nearby FOREST.",
      nextText: 11
    },
    {
    text: "Continue to walk down the HIGHWAY.",
    nextText: 23
    }
]
},
{
    id: 21,
    text: "You throw a ROCK at the FAIRY. 'Get used to disappointment, you freakish BUG!' you scream and walk away. You have no quest.",
    setState: {Sword: true, Vittles: true},
    options: [
    {
      text: "Game over",
      nextText: 1
    },
]
},
{
    id: 22,
    text: "'Because you used to be such a BAD DUNGEONEER, you must do one ACT OF REDEMPTION,' the FAIRY tells you. 'In the VILLAGE nearby lives one person who still remembers you because they LOVE you. But you do not remember them because your EVIL DUNGEONEERING pushed them away. Find them, reconcile, and you will be FREE.'",
    setState: {Sword: true, Vittles: true},
    options: [
    {
      text: "Continue your walk to the VILLAGE.",
      nextText: 24
    },
    {
    text: "'What do you mean, that I will be free?'",
    nextText: 25
    }
]
},
{
    id: 23,
    text: "You continue walking down the HIGHWAY when suddenly an OGRE clubs you over the head.",
    setState: {Sword: true, Vittles: true},
    options: [
    {
      text: "Game over",
      nextText: 1
    }
]
},
{
    id: 24,
    text: "You sleep a little and then continue your walk to the VILLAGE. By NOON the next day, you have arrived.",
    setState: {Sword: true, Vittles: true},
    options: [
    {
      text: "Go into the TAVERN and ask if anyone recognizes you.",
      nextText: 26
    },
    {
    text: "Look up in the local church records anyone with the surname BUNGLEDUNCE.",
    nextText: 27
    }
]
},
{
    id: 25,
    text: "'You will REMEMBER your life, gain back your strength, and your family and loved ones will remember you,' explained the FAIRY.",
    setState: {Sword: true, Vittles: true},
    options: [
    {
      text: "Continue your walk to the VILLAGE.",
      nextText: 24
    },
    {
    text: "Attack the Fairy",
    nextText: 18
    }
]
},
{
    id: 26,
    text: "'Hello!' you shout upon entering THE ROTTEN GOURD. 'My name is SIR MANGOTROT BUNGLEDUNCE. I have reason to believe that someone I know lives here! Does anyone recognize me?' The crowd is quiet for a few moments. 'You look like a different BUNGLEDUNCE,' says an OLD MAN. 'GARTH. He passed away, oh...20 years ago.",
    setState: {Sword: true, Vittles: true},
    options: [
    {
      text: "Talk in private to the OLD MAN.",
      nextText: 28
    },
    {
    text: "Leave to check the church records for GARTH BUNGLEDUNCE.",
    nextText: 27
    }
]
},
{
    id: 27,
    text: "You go into the VILLAGE CHURCH where you are greeted by a PRIEST. 'Please give me information on any BUNGLEDUNCES!' you ask. The PRIEST searches through the church records. 'I read only of GARTH BUNGLEDUNCE who died 20 years ago and lived with his wife SUSAN BUNGLEDUNCE, and their child--oh, this is smudged. I can't read the name. They lived on the EAST side of town.",
    setState: {Sword: true, Vittles: true},
    options: [
    {
      text: "Search the EAST side of town for clues.",
      nextText: 29
    },
    {
    text: "Attack the Fairy",
    nextText: 18
    }
]
},
{
    id: 28,
    text: "'Ah, yes, GARTH BUNGLEDUNCE was a master of DUNGEONEERING. He lived on the EAST side of town with his wife, SUSAN, and their son...or was it a daughter?' the OLD MAN becomes disinterested and confused and wanders off.",
    setState: {Sword: true, Vittles: true},
    options: [
    {
      text: "Search the EAST side of town for clues.",
      nextText: 29
    },
    {
    text: "Go to the VILLAGE CHURCH to look up records.",
    nextText: 27
    }
]
},
{
    id: 29,
    text: "You arrive at the EAST side of town where there lay several nice homes. You stop a WEIRD LADY. 'Hello, I believe I am a relative of the deceased GARTH BUNGLEDUNCE. Do you know if his wife, SUSAN, is here?' The WEIRD LADY slaps you across the face. 'HOW DARE YOU!' she begins to sob.",
    setState: {Sword: true, Vittles: true},
    options: [
    {
      text: "'You'll regret that, Wench!'",
      nextText: 30
    },
    {
    text: "'Clearly, you remember me. Please tell me how I hurt you.'",
    nextText: 31
    }
]
},
{
    id: 30,
    text: "Dude, remember, the OLD WITCH took away all your strength? You can't fight anyone. Not even some WEIRD LADY.",
    setState: {Sword: true, Vittles: true},
    options: [
    {
      text: "Game Over",
      nextText: 1
    }
]
},
{
    id: 31,
    text: "'Oh, MANGO,' she sobs. 'I never thought I'd see you again! Everyone thought I was insane, talking about someone who doesn't exist! But the spell--is it broken? Do people know who you are again?'",
    setState: {Sword: true, Vittles: true},
    options: [
    {
      text: "'No. Who are you?",
      nextText: 32
    },
    {
    text: "'No. Who are Garth and Susan?'",
    nextText: 33
    }
]
},
{
    id: 32,
    text: "'My name is PAPAYA. Well, I was everything to you. Your personal trainer at Flat-Earth Fitness, your kitchen wench, your wingman, your squire...but when you needed me most, I abandoned you. I just couldn't stand watching you dabble in DARK MAGICK.'",
    setState: {Sword: true, Vittles: true},
    options: [
    {
      text: "'DARK MAGICK? Me? No...'",
      nextText: 34
    },
    {
    text: "'Were we also an item?'",
    nextText: 35
    }
]
},
{
    id: 33,
    text: "The WEIRD LADY looks at you sadly. 'I suppose I had hoped you'd remembered everything...they were your parents.'",
    setState: {Sword: true, Vittles: true},
    options: [
    {
      text: "'Who are you?'",
      nextText: 32
    },
    {
    text: "'Why are you so sad?'",
    nextText: 34
    }
]
},
{
    id: 34,
    text: "'The last time I saw you, MANGO, you were about to be killed for all of your DARK and EVIL MAGICK. But MELANIA the FAIRY knew of a QUEST to set your heart right again. You had to find the person you loved most of all and give her TRUE LOVE'S KISS. But I can't think of who that would be.'",
    setState: {Sword: true, Vittles: true},
    options: [
    {
      text: "Give PAPAYA a smooch.",
      nextText: 36
    },
    {
    text: "'Yeah, wonder who she is.'",
    nextText: 37
    }
]
},
{
    id: 35,
    text: "PAPAYA laughs heartily. 'No!' she says. 'Just really, really great friends. Besides, you always said I was too ugly for anyone!' She laughs uneasily while sharpening her KNIFE.",
    setState: {Sword: true, Vittles: true},
    options: [
    {
      text: "'I wonder what my QUEST is all about.'",
      nextText: 34
    },
    {
    text: "Offer PAPAYA some VITTLES.",
    nextText: 38
    }
]
},
{
    id: 36,
    text: "You lean towards PAPAYA and as your memories slightly return, you realize you have always loved her. You give PAPAYA a gentle SMOOCH. The surrounding crowd says 'Aww' as you tell her you love her and EVIL DUNGEONEERING is for dummies. You ask her to marry you, and she's all, 'okay!' Then all the townsfolk remember you. MELANIA THE FAIRY reappears and congratulates you on choosing love over evil.",
    setState: {Sword: true, Vittles: true},
    options: [
    {
      text: "You won! Click to play again.",
      nextText: 1
    }
]
},
{
    id: 37,
    text: "PAPAYA shrugs, looks slightly hurt and walks away.",
    setState: {Sword: true, Vittles: true},
    options: [
    {
      text: "Go back to THE ROTTEN GOURD.",
      nextText: 26
    },
    {
    text: "Go back to the church",
    nextText: 27
    }
]
},
{
    id: 38,
    text: "You hand PAPAYA some VITTLES. 'Thank you,' she smiles, and your stomach flutters. She is so pretty.",
    setState: {Sword: true, Vittles: true},
    options: [
    {
      text: "Give PAPAYA a SMOOCH.",
      nextText: 36
    },
    {
    text: "Run away",
    nextText: 39
    }
]
},
{
    id: 39,
    text: "Wow, girls are scary! But you escaped. What now?",
    setState: {Sword: true, Vittles: true},
    options: [
    {
      text: "Go back to THE ROTTEN GOURD.",
      nextText: 26
    },
    {
    text: "Go back to the church",
    nextText: 27
    }
]
},
]

startGame();