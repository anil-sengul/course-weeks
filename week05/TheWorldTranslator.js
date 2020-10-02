function helloWorld(lang) {
  switch (lang) {
    case "es":
      console.log("Hola Mundo!");
      break;
    case "fr":
      console.log("Bonjour le monde!");
      break;
    case "tr":
      console.log("Merhaba Dünya!");
      break;

    default:
      console.log("Hello World!");
      break;
  }
}

helloWorld("es");
helloWorld("tr");
helloWorld("fr");
helloWorld();
