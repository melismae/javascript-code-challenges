
// take an object, do a for in loop to print only the ones that have a string prop
var languages = {
    english: "Hello!",
    french: "Bonjour!",
    notALanguage: 4,
    spanish: "Hola!"
};

// print hello in the 3 different languages
for (var l in languages) {
    if (typeof languages[l] == "string") {
        console.log(languages[l])
    }
}
