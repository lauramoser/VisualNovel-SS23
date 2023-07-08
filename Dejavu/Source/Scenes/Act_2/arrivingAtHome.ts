namespace Dejavu {
    export async function arrivingAtHome(): ƒS.SceneReturn {
      console.log("arrivingAtHome scene: starting");
  
      // SPEECH
      let text = {
        Narrator: {
          A2_S1_01: "Du ziehst dich an um runter zu deiner Familie zu gehen",
        },
        Rosi: {
          A2_S1_03: "Ehm ja ich denke",
        },
        Mom: {
          A2_S1_02: "Guten Morgen Rosi, hast du gut geschlafen?",
          A2_S1_04: "Soll ich dir etwas zum Frühstück vorbereiten?",
        },
      };
  
      // CHOICES
      let choicesbreakfast = {
        nobreakfast: "Nein danke, ich habe gerade keinen großen Hunger",
        apple: "nur einen Apfel bitte",
        egg: "Ja gerne, würdest du mir ein Spiegelei zubereiten?",
      };
  
      //Zweiter Akt
      ƒS.Speech.hide();
      await ƒS.Location.show(locations.Kitchen);
      await ƒS.update(2);
      await ƒS.Speech.tell(characters.Narrator, text.Narrator.A2_S1_01);
      await ƒS.Speech.tell(characters.Mom, text.Mom.A2_S1_02);
      await ƒS.Speech.tell("Rosi", text.Rosi.A2_S1_03);
      await ƒS.Speech.tell(characters.Mom, text.Mom.A2_S1_04);
      let choicebreakfast = await ƒS.Menu.getInput(choicesbreakfast, "choices");
      switch (choicebreakfast) {
        case choicesbreakfast.egg:
          dataForSave.lifepoints -= 10;
  
          return ""
        case choicesbreakfast.apple:
          dataForSave.lifepoints += 10;
          break
        case choicesbreakfast.nobreakfast:
  
      }
    }
  }
  