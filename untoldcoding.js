var i = 0;
var txt1 =
  "It was September 16th....           <<  when you came into my life..                        >   The day we met I can't even say it enough                  << How happy that day was for me...                                      > And that's when,     < Everything re-started for me.               >     I used to be just     < so happy when  I see the < ' Fabiha ' < pop up on my broken phone...                                     >         As the days goes < you get closer to me....! <<                                    >And the fear of losing you                           < started becoming the biggest nightmare                     >                    I don't know the reason why <           your thoughts always resonates inside my mind...!                                 >          Fabiha,           <                       I am really sorry for being the 'Too soon' guy in those days. <      I wish I wasn't.          <<    I thought if I expressed my feelings for you at that time, < you would go away.< <                            And I would lose you forever.              <<<                    But in these past few months when you were away from me,<                     I realized how stupid I was....<<           And how much you meant for me <<          It felt like I am losing you anyway... <<<           I don't have th strength to hold back and stay away from you anymore. >       The journey to you has not been easy....<<      It is a trail marked by endless tears and immeasurable heatache.<<<       But each new step, every little thing I did...<      was preparing me for you.<    Even now I still am.....<<<<<     I see now, every time I tried to say goodbye...<<<      I took one step closer to you.<<<         And ready or not ....<<    Here you are.                  >      From the moment we met, I was sure that there was something different about the way I feel for you.    <<<     I will savor every moment, every piece, every part .... <      all of you ...>            I thought it mettered what I said, when or where I said it. <<     But then I realized that you can't just give up on some one just because the situation isn't ideal <     And<<               only thing that mattered ... <<<        Is you... >     You make me happier than I ever thought I could be.<      And if you let me, <<        I'll spend my best efforts trying to make you feel the same way.   ><<<         At the very beginning, <        I said to you a paragraph is waiting...><<             I tried to pen it down, <<<<             but unexpectedly grew with each passing day.<<<              Eventually I realized...<          There is no paragraph.<<<        These words fall too short<              to show the depth of what you mean to me.<<            Every spoken word had just one simple truth...<<<    > <<<<<<<<<<< I love you, Fabiha                                                                            ";

var speed = 70;

    typeWriter();

    function typeWriter() {
      if (i < txt1.length) {
        if (txt1.charAt(i) == "<") {
          document.getElementById("text1").innerHTML += "</br>";
        } else if (txt1.charAt(i) == ">") {
          document.getElementById("text1").innerHTML = "";
        } else if (txt1.charAt(i) == "|") {
          $(".bg_heart").css("background-image", "')");
        } else {
          document.getElementById("text1").innerHTML += txt1.charAt(i);
        }
        i++;
        setTimeout(typeWriter, speed);
      } else if (i === txt1.length) {
        // After the first text is done, start typing the second text
        i = 0; // Reset index
        setTimeout(typeWriter2, 1000); // Delay before starting the second text
      }
    }

    function typeWriter2() {
      if (i < txt2.length) {
        // Use a different div for the second text
        document.getElementById("text2").innerHTML += txt2.charAt(i);
        i++;
        setTimeout(typeWriter2, speed);
      }
    }

