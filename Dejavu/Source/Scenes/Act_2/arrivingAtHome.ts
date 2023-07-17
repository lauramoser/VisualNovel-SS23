namespace Dejavu {
  export async function arrivingAtHome(): ƒS.SceneReturn {
    console.log("arrivingAtHome scene: starting");

    // SPEECH
    let text = {
      Narrator: {
        A2_S9_04:
          "Du entscheidest dich dafür heute wieder etwas früher ins Bett zu gehen, der Tag hat dich doch mehr geschlaucht als du dachtest",
      },
      Rosi: {
        A2_S9_01: "Hallo Mama, ich bin wieder Zuhause.",
        A2_S9_03: "Ja, ich liebe diesen Blumengarten wirklich sehr",
        A2_S9_05: "Phu was für ein Tag, jetzt bin ich bereit fürs schlafen.",

        R3: "Warte mal... du bist mir nicht sauer, obwohl du immer sagst, dass du die Geschichten von Opa nie gut fandest?",
        R6: "Meinst du? Ich glaube für Opa waren seine Geschichten echt.",
        R14: "Wow, das hab ich ja garnicht gewusst, das hört sich eigentlich nach einer schönen Liebesgeschichte an... Wenn es doch nicht so ein tragisches Ende gegeben hätte.",
        R16: "Gute Nacht Mama",
      },
      Mom: {
        A2_S9_02: "Ah, Hallo mein Schatz, hattest du einen schönen Tag?",

        M1: "Ich hab mich schon gewundert, das hätte ja beim aufräumen auftauchen sollen",
        M2: "Hast du denn schon etwas über deine Urgroßmutter herausfinden können?",
        M4: "Ach quatsch, das ist das Tagebuch deines Ugroßvaters, da sind wahre Gefühle und Begebenheiten drin.",
        M5: "Dein Opa hatte nur wilde Geschichten, die wenig mit der Wahrheit zu tun hatten.",
        M7: "ja das stimmt natürlich mein Schatz, aber weißt du was wirklich echt war?",
        M8: "Ich glaube mein Opa, also dein Urgroßvater, hat oft gedacht, dass ich vieles nicht verstehe als ich noch klein war.",
        M9: "Aber ich habe schon schnell verstanden, dass mein Opa und Rosalia sich für die Liebe und gegen die Familie entschieden haben.",
        M10: "Soweit ich das weiß kam Rosalia aus gutem Hause und Opa war nur ein normaler Arbeiter, das hat zu der Zeit nicht wirklich zusammen gepasst.",
        M11: "Ihre Mutter hat nach der Hochzeit nie wieder mehr ein Wort mit ihr gesprochen und wenn dann nur um sie zu überzeugen doch noch so einen komischen Kerl zu heiraten den die Familie irgendwie kannte.",
        M12: "Wie hieß dieser Kerl nochmal?... Opa hat diesen Namen immer so mit Verachtung ausgesprochen.... Josua... nein Jak... nein Julius! Er hieß Julius genau!",
        M13: "Wie manche Männer nun mal sind, hatten die beiden sogar einen Kampf um Rosalia... aber dieser Julius hat wohl nicht mit fairen Karten gespielt....",
        M15: "Ja da hast du Recht, aber jetzt ab ins Bett mit dir",
      },
    };

    // CHOICES
    let choicesTellDiary = {
      tellMom: "Mama vom Tagebuch erzählen",
      dontTellMom: "lieber nicht vom Tagebuch erzählen",
    };

    //Seconde Act
    ƒS.Speech.hide();
    await ƒS.Location.show(locations.livingroom);
    await ƒS.update(2);
    await ƒS.Character.show(
      characters.Mom,
      characters.Mom.pose.smiling,
      ƒS.positionPercent(50, 90)
    );
    await ƒS.update(1);
    await ƒS.Speech.tell("Rosi", text.Rosi.A2_S9_01);
    await ƒS.Speech.tell(characters.Mom, text.Mom.A2_S9_02);
    await ƒS.Speech.tell("Rosi", text.Rosi.A2_S9_03);
    let choiceTellDiary = await ƒS.Menu.getInput(choicesTellDiary, "choices");
    switch (choiceTellDiary) {
      case choicesTellDiary.tellMom:
        dataForSave.lifepoints += 10;
        handleFlower();
        await ƒS.Speech.tell(characters.Mom, text.Mom.M1);
        await ƒS.Speech.tell(characters.Mom, text.Mom.M2);
        await ƒS.Speech.tell("Rosi", text.Rosi.R3);
        await ƒS.Speech.tell(characters.Mom, text.Mom.M4);
        await ƒS.Speech.tell(characters.Mom, text.Mom.M5);
        await ƒS.Speech.tell("Rosi", text.Rosi.R6);
        await ƒS.Speech.tell(characters.Mom, text.Mom.M7);
        await ƒS.Speech.tell(characters.Mom, text.Mom.M8);
        await ƒS.Speech.tell(characters.Mom, text.Mom.M9);
        await ƒS.Speech.tell(characters.Mom, text.Mom.M10);
        await ƒS.Speech.tell(characters.Mom, text.Mom.M11);
        await ƒS.Speech.tell(characters.Mom, text.Mom.M12);
        await ƒS.Speech.tell(characters.Mom, text.Mom.M13);
        await ƒS.Speech.tell("Rosi", text.Rosi.R14);
        await ƒS.Speech.tell(characters.Mom, text.Mom.M15);
        await ƒS.Speech.tell("Rosi", text.Rosi.R16);
        break;
      case choicesTellDiary.dontTellMom:
        dataForSave.lifepoints -= 10;
        handleFlower();
        break;
    }
    await ƒS.Speech.tell(characters.Narrator, text.Narrator.A2_S9_04);
    await ƒS.Character.hide(characters.Mom);
    await ƒS.update(1);
    await ƒS.Location.show(locations.Bedroom);
    await ƒS.update(2);
    await ƒS.Speech.tell("Rosi", text.Rosi.A2_S9_05);
    ƒS.Speech.hide();
    await ƒS.Location.show(locations.Black);
    await ƒS.update(
      transitions.blinkClose.duration,
      transitions.blinkClose.alpha,
      transitions.blinkClose.edge
    );
    return "DecisiveDream"
  }
}
