namespace Dejavu {
    export async function makingPlan(): ƒS.SceneReturn {
      console.log("MakingPlan scene: starting");
  
      // SPEECH
      let text = {
        PIC: {
            A3_S13_01: "Hallo Rosi",
            A3_S13_03: "Wo sollen wir anfangen? Hast du schon eine Idee wie wir das Geheimnis lüften können?",
            A3_S13_06: "hmm komisch, war sie Tänzerin?",
            A3_S13_09: "Los dann ruf sie gleich an",
            A3_S13_16: "Schau mal da steht der Name vom Zirkus",
            A3_S13_17: "Irgendwie kommt mir der bekannt vor....",
            A3_S13_18: "AHHH ich weiß, die sind noch bis heute in der Stadt",
        },
        Rosi: {
            A3_S13_02: "Hallo ",
            A3_S13_04: "In meinem Traum ist sie von etwas runtergestürzt...",
            A3_S13_05: "Und sie meinte sie übt die letzte Drehung nochmal",
            A3_S13_07: "Opa hat mir mal was erzählt, dass sich Rosalia oben in der Luft am wohlsten gefühlt hat",
            A3_S13_11: "Nein, alles gut Mama... aber ich hab da eine Frage. Weißt du ob Urgroßmutter Rosalia getanzt hat?",
            A3_S13_14: "Danke Mama, du bist die BESTE!",
            A3_S13_15: "Wow, das ging aber schnell, das ist also das Bild.",
            A3_S13_19: "Wirklich? Das ist ja perfekt.... Lass uns gleich hingehen"
        },
        Mom: {
            A3_S13_10: "Hallo, Rosi, ist etwas passiert?",
            A3_S13_12: "Hmm da muss ich nachdenken. Ich glaube Rosalia hat früher in einem Zirkus gearbeitet.",
            A3_S13_13: "Ich habe noch einen alten Zeitungsartikel von ihr, als sie einen Auftritt als Seiltänzerin hatte. Ich schick dir das Bild, wenn ich es gefunden habe."
        },
      };
     
      //Third Act
      ƒS.Speech.hide();
      await ƒS.Location.show(locations.Flowergarden);
      await ƒS.update(
        transitions.hearts.duration,
        transitions.hearts.alpha,
        transitions.hearts.edge
      );
      await ƒS.Character.show(
        characters.PIC,
        characters.PIC.pose.normal,
        ƒS.positionPercent(50, 90)
      );
      await ƒS.update(2);
      await ƒS.Speech.tell(characters.PIC, text.PIC.A3_S13_01);
      await ƒS.Speech.tell("Rosi", text.Rosi.A3_S13_02 + dataForSave.partnerInCrimeName);
      await ƒS.Speech.tell(characters.PIC, text.PIC.A3_S13_03);
      await ƒS.Speech.tell("Rosi", text.Rosi.A3_S13_04);
      await ƒS.Speech.tell("Rosi", text.Rosi.A3_S13_05);
      await ƒS.Speech.tell(characters.PIC, text.PIC.A3_S13_06);
      await ƒS.Speech.tell("Rosi", text.Rosi.A3_S13_07);
      await ƒS.Speech.tell(characters.PIC, text.PIC.A3_S13_09);
      ƒS.Sound.play(sounds.phoneCalling, 0.5,);
      ƒS.Sound.fade(sounds.phoneCalling, 0, 1);
      await ƒS.Speech.tell(characters.Mom, text.Mom.A3_S13_10);
      await ƒS.Speech.tell("Rosi", text.Rosi.A3_S13_11);
      await ƒS.Speech.tell(characters.Mom, text.Mom.A3_S13_12);
      await ƒS.Speech.tell(characters.Mom, text.Mom.A3_S13_13);
      await ƒS.Speech.tell("Rosi", text.Rosi.A3_S13_14);
      ƒS.Sound.play(sounds.phoneMessage, 0.5,);
      await ƒS.Speech.tell("Rosi", text.Rosi.A3_S13_15);
      await ƒS.Character.animate(
        characters.PIC,
        characters.PIC.pose.normal,
        slideToSide(50, 70)
      );
      await ƒS.Location.show(locations.FlowergardenHandy);
      await ƒS.update(0);
      await ƒS.Speech.tell(characters.PIC, text.PIC.A3_S13_16);
      await ƒS.Character.hide(characters.PIC);
      await ƒS.update(0);
      await ƒS.Character.show(
        characters.PIC,
        characters.PIC.pose.unsure,
        ƒS.positionPercent(70, 90)
      );
      await ƒS.update(0);
      await ƒS.Speech.tell(characters.PIC, text.PIC.A3_S13_17);
      await ƒS.Character.hide(characters.PIC);
      await ƒS.update(0);
      await ƒS.Character.show(
        characters.PIC,
        characters.PIC.pose.havingAnIdea,
        ƒS.positionPercent(80, 80)
      );
      await ƒS.update(0);
      await ƒS.Speech.tell(characters.PIC, text.PIC.A3_S13_18);
      await ƒS.Speech.tell("Rosi", text.Rosi.A3_S13_19);
      await ƒS.Character.hide(characters.PIC);
      await ƒS.update(1);
      ƒS.Speech.hide();
      return "ArrivingCircus";
    }
  }
  