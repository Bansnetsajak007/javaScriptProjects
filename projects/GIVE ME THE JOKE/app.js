const Jokes = [
    "Why do programmers prefer dark mode? Because light attracts bugs!",
    "Why did the programmer quit his job? Because he didn't get arrays!",
    "Why do programmers always mix up Christmas and Halloween? Because Oct 31 == Dec 25!",
    "Why did the programmer go broke? Because he lost his domain in a bet!",
    "Why did the programmer get stuck in the shower? The instructions said: Lather, Rinse, Repeat.",
    "Why don't programmers like nature? It has too many bugs!",
    "Why don't programmers like to go outside? The open world is full of null pointers.",
    "What's the most used language in programming? Profanity.",
    "Why did the programmer drown in the sea? He didn't know how to swim but he knew Java!",
    "Why do programmers prefer dark chocolate? Because it's semisweet.",
    "Why was the JavaScript developer sad? Because he didn't Node how to Express himself.",
    "Why do programmers prefer iOS development? Because the Apple doesn't fall far from the tree!",
    "Why do programmers prefer Git-based relationships? Because they can always branch out.",
    "Why don't programmers like to play hide and seek? Because good players are hard to find.",
    "Why did the programmer get kicked out of school? He was caught hacking the vending machine to get free snacks!",
    "Why did the programmer's coffee taste like SQL? Because he forgot to add the Java!",
    "Why don't programmers like to exercise? They prefer to stay in their comfort zone!",
    "Why was the programming language cold? It left all its Windows open!",
    "Why don't programmers like to play cards in the jungle? Too many cheetahs!",
    "Why did the developer go broke? Because he couldn't C#!",
    "Why do programmers prefer dark chocolate? It's an exception in their diet!",
    "Why do programmers always mix up Christmas and Halloween? Because Oct 31 == Dec 25!",
    "Why did the programmer go broke? Because he lost his domain in a bet!",
    "Why did the programmer get stuck in the shower? The instructions said: Lather, Rinse, Repeat.",
    "What's the most used language in programming? Profanity.",
    "Why did the programmer drown in the sea? He didn't know how to swim but he knew Java!",
    "Why was the JavaScript developer sad? Because he didn't Node how to Express himself.",
    "Why do programmers prefer iOS development? Because the Apple doesn't fall far from the tree!",
    "Why do programmers prefer Git-based relationships? Because they can always branch out.",
    "Why don't programmers like to play hide and seek? Because good players are hard to find.",
    "Why did the programmer get kicked out of school? He was caught hacking the vending machine to get free snacks!",
    "Why did the programmer's coffee taste like SQL? Because he forgot to add the Java!",
    "Why don't programmers like to exercise? They prefer to stay in their comfort zone!",
    "Why was the programming language cold? It left all its Windows open!",
    "Why don't programmers like to play cards in the jungle? Too many cheetahs!",
    "Why did the developer go broke? Because he couldn't C#!",
    "Why do programmers prefer dark chocolate? It's an exception in their diet!",
    "Why did the programmer get stuck in the shower? The instructions said: Lather, Rinse, Repeat.",
    "What's the most used language in programming? Profanity.",
    "Why did the programmer drown in the sea? He didn't know how to swim but he knew Java!",
    "Why was the JavaScript developer sad? Because he didn't Node how to Express himself.",
    "Why do programmers prefer iOS development? Because the Apple doesn't fall far from the tree!",
    "Why do programmers prefer Git-based relationships? Because they can always branch out.",
    "Why don't programmers like to play hide and seek? Because good players are hard to find.",
    "Why did the programmer get kicked out of school? He was caught hacking the vending machine to get free snacks!",
    "Why did the programmer's coffee taste like SQL? Because he forgot to add the Java!",
    "Why don't programmers like to exercise? They prefer to stay in their comfort zone!",
    "Why was the programming language cold? It left all its Windows open!",
    "Why don't programmers like to play cards in the jungle? Too many cheetahs!"
  ];
  

const button = document.getElementById('btn');

const generate_joke = () => {
    let number = Math.floor(Math.random() *50)
    
    let element = document.getElementById('display_jokes');
    
    element.innerText = Jokes[number];
    
}

button.addEventListener('click', generate_joke);

