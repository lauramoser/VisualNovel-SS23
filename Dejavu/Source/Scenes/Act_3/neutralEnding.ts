namespace Dejavu {
    export async function neutralEnding(): ƒS.SceneReturn {
      console.log("neutralEnding scene: starting");
  
      ƒS.Character.hideAll();
      ƒS.Speech.hide();
      await ƒS.Location.show(locations.livingroom);
      await ƒS.update(2);
      ƒS.Text.addClass("novelpage");
      await ƒS.Text.print("Hi");
     
    }
  }