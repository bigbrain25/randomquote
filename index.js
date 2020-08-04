let quotes = ["Goals point to where you want to end up, not where you are today. Catherine Pulsifer", "To sit on an idea or fail to act on a goal is not really goal-setting, but wishful thinking. Les Brown",
"A birthday is a time to reflect on the year gone by, but to also set your goals for the upcoming year. Catherine Pulsifer", "Glory lies in the attempt to reach one's goal and not in reaching it.", "Theres nothing wrong with setting goals that seem too far for you to reach, as long as theyre still within the realms of your reality.", 
"A goal is not always meant to be reached, it often serves simply as something to aim at", "When life is getting you down, and you need a little hope.Look deep down inside yourself, and you find the way to cope.",
"When life is getting you down, take time to pray Don't allow yourself to frown God will help you see the blessings of the day.", 
"If you wish success in life, make perseverance your bosom friend, experience your wise counselor, caution your elder brother and hope your guardian genius.",
"We all have genius within us, never doubt that fact.", "Genius I met the other day He looked at me and walked away What did he see, thought I with frown, Fellow genius or happy clown?", "When defining genius, it's also important to realize this is a status that is never fully reached. Instead, it is something to aspire to.", 
"Although genius always commands admiration, character most secures respect. The former is more the product of brain-power, the latter of heart-power; and in the long run it is the heart that rules in life.", "I don't want to be a genius-I have enough problems just trying to be a man.", "You might not need to be a money genius to raise one, but there's no need to rub your bad money habits in your kid's face.",
"That is the true genius of America, a faith in the simple dreams of its people; the insistence on small miracles.", "An average person with average talents and ambition and average education, can outstrip the most brilliant genius in our society, if that person has clear, focused goals.", "Geniuses have dramatic moments of insight where great things and thoughts are born whole. Poems are written in dreams. Symphonies are composed complete. Science is accomplished with eureka shrieks. Businesses are built by magic touch. Something is not, then is.",
"I believe that genius is a path that we can all take and derive much benefit, happiness, fulfillment, and success from not a genetic windfall or divine gift.", "Genius at first is little more than a great capacity for receiving discipline.", "When you follow the path of your TrueSelf, your inner genius and your power are released, and you begin to live and experience your existence at a higher level. Success and happiness are the natural outgrowth of being more in your TrueSelf. From TrueSelf everything else flows", "You are all geniuses, and you are all beautiful. You don't need anyone to tell you who you are. You are what you are. Get out there and get peace, think peace, live peace, and breathe peace, and you'll get it as soon as you like.",
"In school, children learn that there is only one answer for each question and are requested to conform to conventional social wisdoms The difference between geniuses and most of us is that they managed to not lose their childhood creativity."];
let generateQuote = document.querySelector('button');
let displayQuote = document.querySelector('.quote');




generateQuote.addEventListener('keyDown', () => {
    let randomNew = Math.floor((Math.random() * quotes.length));
    let result = quotes[randomNew];
        displayQuote.innerHTML = `"${result}......."`;
});






