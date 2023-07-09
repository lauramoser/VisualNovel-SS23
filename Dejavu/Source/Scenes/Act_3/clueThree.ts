namespace Dejavu {
    export async function clueThree(): ƒS.SceneReturn {
      console.log("clueThree scene: starting");
  
      // SPEECH
      let text = {
        Narrator: {
            A3_S13_13: "DU rufst gleich anch dem Gespräch PIC an um dich mit ihm im Blumengarten zu verabreden.",
        },
        Rosi: {
            A3_S13_01: "Guten Morgen Mama",
            A3_S13_03: "Oh ich hab geschrien?... Naja ich hatte mal wieder einen Alptraum, also nichts neues.",
            A3_S13_04: "Du Mom, weißt du etwas über das Verschwinden von Urgroßmutter Rosalia?",
            A3_S13_11: "Wow, das hab ich ja garnicht gewusst, das hört sich eigentlich nach einer schönen Liebesgeschichte an... Wenn es doch nicht so ein tragisches Ende gegeben hätte.",
            A3_S13_13: "ja auf jeden Fall, danke Mama!!",
        },
        Mom: {
            A3_S13_02: "Guten Morgen mein Schatz, geht es dir gut? Ich habe dich vorhin schreien hören",
            A3_S13_05: "Phu, da wirbelst du aber was auf",
            A3_S13_06: " weißt du mein Schatz, ich glaube mein Opa, also dein Urgroßvater, hat oft nicht gedacht, dass ich vieles nicht verstehe als ich noch klein war.",
            A3_S13_07: "Aber ich habe schon schnell verstanden, dass mein Opa und Rosalia sich für die Liebe und gegen die Familie entschieden haben.",
            A3_S13_08: "Soweit ich das weiß kam Rosalia aus gutem Hause und Opa war nur ein normaler Arbeiter, das hat zu der Zeit nicht wirklich zusammen gepasst.",
            A3_S13_09: "Ihre Mutter hat nach der Hochzeit nie wieder mehr ein Wort mit ihr gesprochen und wenn dann nur um sie zu überzeugen doch noch so einen komischen Kerl zu heiraten den die Familie irgendwie kannte.",
            A3_S13_10: "Wie hieß dieser Kerl nochmal?... Opa hat diesen Namen immer so mit Verachtung ausgesprochen.... Josua... nein Jak... nein Julius! Er hieß Julius genau!",
            A3_S13_12: "Ja, das ist wohl richtig... Ich hoffe ich konnte dir etwas helfen."
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
      await ƒS.Speech.tell(characters.Mom, text.Mom.A3_S13_06);
      await ƒS.Speech.tell(characters.Mom, text.Mom.A3_S13_07);
      await ƒS.Speech.tell(characters.Mom, text.Mom.A3_S13_08);
      await ƒS.Speech.tell(characters.Mom, text.Mom.A3_S13_09);
      await ƒS.Speech.tell(characters.Mom, text.Mom.A3_S13_10);
      await ƒS.Speech.tell("Rosi", text.Rosi.A3_S13_11);
      await ƒS.Speech.tell(characters.Mom, text.Mom.A3_S13_12);
      await ƒS.Speech.tell("Rosi", text.Rosi.A3_S13_13)
      await ƒS.Character.hide(characters.Mom);
      await ƒS.update(2);
      await ƒS.Speech.tell(characters.Narrator, text.Narrator.A3_S13_13);
      return "MakingPlan";
    }
  }
  