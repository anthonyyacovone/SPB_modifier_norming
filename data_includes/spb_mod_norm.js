var shuffleSequence = seq("consent", "demo","instructions", "practice_instructions", sepWith("sep", "practice"), "getReady",
                          sepWith("sep", rshuffle(startsWith("spb"),startsWith("fill"))),
                          "debrief","exit"
                         );
var counterOverride = 2;
var practiceItemTypes = ["practice"];

var defaults = [
    "Separator", {
        transfer: 1000,
        normalMessage: "Please wait for the next sentence.",
        errorMessage: "Wrong. Please wait for the next sentence."
    },
    "DashedSentence", {
        mode: "self-paced reading"
    },
    "AcceptabilityJudgment", {
        as: ["1", "2", "3", "4", "5", "6", "7"],
        presentAsScale: true,
        instructions: "How plausible is this sentence in this toy game?",
        leftComment: "(Very implausible)", rightComment: "(Very plausible)"
    },
    "Question", {
        hasCorrect: true
    },
    "Message", {
        hideProgressBar: true
    },
    "Form", {
        hideProgressBar: true,
        continueOnReturn: true,
        saveReactionTime: true
    }
];

var items = [

    
    ["sep", Separator, {transfer:500}],
    ["consent", "Form", {consentRequired: true, continueMessage:"Click here to continue", html: {include: "harvard_consent_2018.html" }} ],
    ["demo", "Form", {consentRequired: true, continueMessage:"Click here to continue", html: {include: "harvard_demographics.html" }} ],
    ["debrief", "Form", {consentRequired: true, continueMessage:"Click here to continue", html: {include: "harvard_debrief.html" }} ],
    ["exit", "Form", {consentRequired: true, continueMessage:"Click here to continue", html: {include: "exit.html" }} ],
    ["instructions", "Form", {consentRequired: true, continueMessage:"Click here to continue", html: {include: "instructions1.html" }} ],
    ["practice_instructions", "Form", {consentRequired: true, continueMessage:"Click here to continue", html: {include: "instructions2.html" }} ],

    ["practice", "AcceptabilityJudgment", {s: "Sandra found the fish."}],
    ["practice", "AcceptabilityJudgment", {s: "Rachael ran to the goat that has a map."}],
    ["practice", "AcceptabilityJudgment", {s: "Molly kissed the rhino that has a laptop."}],
    ["practice", "AcceptabilityJudgment", {s: "Paul moved the hippo."}],

    ["getReady", "Message", {consentRequired: false,
                    html: ["div",
                            ["p", "That's it for practice!"],["br"],
                            ["p", "Make sure to put your computer in full screen mode."],
                            ["p", "You can press or click the number of your rating."],["br"],
                            ["p", "Thank you for your help!"],["br"],
                          ]}],                      
 

    // The stimuli for the SPB audio stimuli 
   
    [["spb-mod-a",1], "AcceptabilityJudgment", {s: "Alex found the zebra."}],
    [["spb-mod-b",1], "AcceptabilityJudgment", {s: "Alex found the zebra that has a sponge."}],
    [["spb-mod-c",1], "AcceptabilityJudgment", {s: "Alex found the zebra that has a magnifying glass."}],

    [["spb-mod-a",2], "AcceptabilityJudgment", {s: "Brian listened to the rooster."}],
    [["spb-mod-b",2], "AcceptabilityJudgment", {s: "Brian listened to the rooster that has a cereal box."}],
    [["spb-mod-c",2], "AcceptabilityJudgment", {s: "Brian listened to the rooster that has a stethoscope."}],
    
    [["spb-mod-a",3], "AcceptabilityJudgment", {s: "Cathy looked at the leopard."}],
    [["spb-mod-b",3], "AcceptabilityJudgment", {s: "Cathy looked at the leopard that has a ring."}],
    [["spb-mod-c",3], "AcceptabilityJudgment", {s: "Cathy looked at the leopard that has a binoculars. "}],

    [["spb-mod-a",4], "AcceptabilityJudgment", {s: "Dan sang to the duck."}],
    [["spb-mod-b",4], "AcceptabilityJudgment", {s: "Dan sang to the duck that has a string."}],
    [["spb-mod-c",4], "AcceptabilityJudgment", {s: "Dan sang to the duck that has a microphone."}],

    [["spb-mod-a",5], "AcceptabilityJudgment", {s: "Eric talked to the bunny."}],
    [["spb-mod-b",5], "AcceptabilityJudgment", {s: "Eric talked to the bunny that has a rake."}],
    [["spb-mod-c",5], "AcceptabilityJudgment", {s: "Eric talked to the bunny that has a headset."}],

    [["spb-mod-a",6], "AcceptabilityJudgment", {s: "Frankie yelled at the monkey."}],
    [["spb-mod-b",6], "AcceptabilityJudgment", {s: "Frankie yelled at the monkey that has an earring."}],
    [["spb-mod-c",6], "AcceptabilityJudgment", {s: "Frankie yelled at the monkey that has a funnel."}],

    [["spb-inst-a",7], "AcceptabilityJudgment", {s: "Anthony brushed the horse."}],
    [["spb-inst-b",7], "AcceptabilityJudgment", {s: "Anthony brushed the horse that has a cup."}],
    [["spb-inst-c",7], "AcceptabilityJudgment", {s: "Anthony brushed the horse that has a comb."}],

    [["spb-inst-a",8], "AcceptabilityJudgment", {s: "Briana cleaned the pig."}],
    [["spb-inst-b",8], "AcceptabilityJudgment", {s: "Briana cleaned the pig that has a chair."}],
    [["spb-inst-c",8], "AcceptabilityJudgment", {s: "Briana cleaned the pig that has a washcloth. "}],

    [["spb-inst-a",9], "AcceptabilityJudgment", {s: "Cameron covered the raccoon."}],
    [["spb-inst-b",9], "AcceptabilityJudgment", {s: "Cameron covered the raccoon that has a pen."}],
    [["spb-inst-c",9], "AcceptabilityJudgment", {s: "Cameron covered the raccoon that has a t-shirt. "}],

    [["spb-inst-a",10], "AcceptabilityJudgment", {s: "Diane fed the dog."}],
    [["spb-inst-b",10], "AcceptabilityJudgment", {s: "Diane fed the dog that has a painting."}],
    [["spb-inst-c",10], "AcceptabilityJudgment", {s: "Diane fed the dog that has a fork. "}],

    [["spb-inst-a",11], "AcceptabilityJudgment", {s: "Evelyn poked the tiger."}],
    [["spb-inst-b",11], "AcceptabilityJudgment", {s: "Evelyn poked the tiger that has a bathing suit."}],
    [["spb-inst-c",11], "AcceptabilityJudgment", {s: "Evelyn poked the tiger that has a stick. "}],

    [["spb-inst-a",12], "AcceptabilityJudgment", {s: "Fred tickled the bear."}],
    [["spb-inst-b",12], "AcceptabilityJudgment", {s: "Fred tickled the bear that has a mirror."}],
    [["spb-inst-c",12], "AcceptabilityJudgment", {s: "Fred tickled the bear that has a paintbrush. "}],

// Filler stimuli: To drive the use of the scale
    
    [["fill-bad",13], "AcceptabilityJudgment", {s: "Tina called the picture book."}],
    [["fill-bad",14], "AcceptabilityJudgment", {s: "Jeff watered the rat that has a marble."}],
    [["fill-bad",15], "AcceptabilityJudgment", {s: "Amy ate the tree that has a swing."}],
    [["fill-bad",16], "AcceptabilityJudgment", {s: "Michael twisted the rock."}],
    [["fill-good",17], "AcceptabilityJudgment", {s: "Katie pinched the shark that has a fin."}],
    [["fill-good",18], "AcceptabilityJudgment", {s: "Ethan selected the bird that has a worm."}],
    [["fill-good",19], "AcceptabilityJudgment", {s: "Greg pointed at the spider that has a web."}],
    [["fill-good",20], "AcceptabilityJudgment", {s: "Mary pet the elephant that has a trunk."}],
    
];
