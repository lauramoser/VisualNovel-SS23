namespace Dejavu {
    export async function goodEnding(): ƒS.SceneReturn {
      console.log("GoodEnding scene: starting");
  
      ƒS.Character.hideAll();
      ƒS.Speech.hide();
      await ƒS.Location.show(locations.livingroom);
      await ƒS.update(2);
     
    }
  }