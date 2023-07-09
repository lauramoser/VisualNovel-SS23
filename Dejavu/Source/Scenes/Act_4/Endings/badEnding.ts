namespace Dejavu {
  export async function badEnding(): ƒS.SceneReturn {
    console.log("BadEnding scene: starting");

    ƒS.Character.hideAll();
    ƒS.Speech.hide();
    await ƒS.Location.show(locations.livingroom);
    await ƒS.update(2);
    await ƒS.Text.print("<div class='newspaper'><h1>THEFT AT IRIS HILL MANOR</h1>At yesterday's auction, a very expensive and luxurious red diamond necklace disappeared!<br><br>It all happened during a blackout. Although the doors automatically closed with the electricity shortage and the thief technically still had to be in the building, the police were not able to find the criminal.</div>");
  }
}
