import figlet from "figlet";

async function doStuff() {
  const text = await figlet.text("Tarun");
  console.log(text);
}

doStuff();