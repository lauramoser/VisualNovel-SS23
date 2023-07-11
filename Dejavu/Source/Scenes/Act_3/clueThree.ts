namespace Dejavu {
    export async function clueThree(): ƒS.SceneReturn {
      console.log("clueThree scene: starting");
  
      // SPEECH
      let text = {
        Narrator: {
            A3_S13_17: "Du rufst gleich ",
        },
        Rosi: {
            A3_S13_01: "Guten Morgen Mama",
            A3_S13_03: "Oh ich hab geschrien?... Naja ich hatte mal wieder einen Alptraum, also nichts neues.",
            A3_S13_04: "Du Mom, weißt du etwas über das Verschwinden von Urgroßmutter Rosalia?",
            A3_S13_06: "Ja ich weiß, aber seit dem Tod von Opa würde ich es einfach gerne für ihn herausfinden... verstehst du?",
            A3_S13_08: "Doch ich glaube das weiß jemand.... und nämlich der Mörder von Rosalia.",
            A3_S13_10: "Doch ich bin mir sicher, dass Rosalia nciht einfach verschwunden ist, sondern umgebracht wurde... ich weiß nur nicht ganz warum.",
            A3_S13_13: "Du wirst bereuen was du mir angetan hast! Mein Ruf ist ruiniert!",
            A3_S13_14: "das klingt eindeutig nach einer Drohung!" ,
            A3_S13_16: "ja auf jeden Fall, danke Mama!!!",
        },
        Mom: {
            A3_S13_02: "Guten Morgen mein Schatz, geht es dir gut? Ich habe dich vorhin schreien hören",
            A3_S13_05: "Phu, da wirbelst du aber was auf",
            A3_S13_07: " Ja mein Schatz... aber ich weiß selbst nichts darüber.... das weiß wohl niemand.",
           
            A3_S13_09: "so etwas kannst du doch nicht einfach so sagen!",
            A3_S13_11: "..... weißt du was Rosi?...... ich glaube du hast recht.... ich.. ich.. hab das nie zusammen in Verbindung gebracht und dachte das ging an deinen Urgroßvater.",
            A3_S13_12: "Da hast du vollkommen recht... behalte ihn... Ich hoffe ich konnte dir etwas helfen.",
            A3_S13_15: "Ich hab da einen alten Brief."
        },
      };
     
      //Third Act
      ƒS.Speech.hide();
      await ƒS.Location.show(locations.Kitchen);
      await ƒS.update(2);
      await ƒS.Speech.tell("Rosi", text.Rosi.A3_S13_01);
      await ƒS.Character.show(
        characters.Mom,
        characters.Mom.pose.smiling,
        ƒS.positionPercent(50, 90)
      );
      await ƒS.update(1);
      await ƒS.Speech.tell(characters.Mom, text.Mom.A3_S13_02);
      await ƒS.Speech.tell("Rosi", text.Rosi.A3_S13_03);
      await ƒS.Speech.tell("Rosi", text.Rosi.A3_S13_04)
      await ƒS.Speech.tell(characters.Mom, text.Mom.A3_S13_05);
      await ƒS.Speech.tell("Rosi", text.Rosi.A3_S13_06)
      await ƒS.Speech.tell(characters.Mom, text.Mom.A3_S13_07);
      await ƒS.Speech.tell("Rosi", text.Rosi.A3_S13_08)
      await ƒS.Speech.tell(characters.Mom, text.Mom.A3_S13_09);
      await ƒS.Speech.tell("Rosi", text.Rosi.A3_S13_10)
      await ƒS.Speech.tell(characters.Mom, text.Mom.A3_S13_11);
      await ƒS.Speech.tell(characters.Mom, text.Mom.A3_S13_15);
      await ƒS.Character.animate(
        characters.Mom,
        characters.Mom.pose.smiling,
        slideToSide(50, 70)
      );
      await ƒS.Location.show(locations.KitchenClue3);
      await ƒS.update(0);
      await ƒS.Speech.tell("Rosi lesend", text.Rosi.A3_S13_13)
      await ƒS.Speech.tell("Rosi", text.Rosi.A3_S13_14)
      await ƒS.Speech.tell(characters.Mom, text.Mom.A3_S13_12);
      await ƒS.Speech.tell("Rosi", text.Rosi.A3_S13_16)
      await ƒS.Character.hide(characters.Mom);
      await ƒS.update(2);
      await ƒS.Speech.tell(characters.Narrator, text.Narrator.A3_S13_17 + dataForSave.partnerInCrimeName + " an um dich mit ihm im Blumengarten zu verabreden.");
      return "MakingPlan";
    }
  }
  