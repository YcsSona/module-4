var names = ["Yaakov", "james", "Nick", "John", "Tony","Oliver","Joseph","Luke"];

for (var i = 0; i < names.length; i++) {

    var firstName = names[i].charAt(0);
    if (firstName === 'j' || firstName === 'J') {
        console.log("Goodbye " + names[i]);
    } else {
        console.log("Hello " + names[i]);
    }
}