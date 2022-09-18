document.body.style="user-select: none;background-color:#34475C";
document.getElementById("img").style="box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);";
  function getQuote()
  {
    // array includes Author : Name , Quote , image
    var quotes = [
    {
      autor:"Oscar Wilde",
      quote:"”Be yourself; everyone else is already taken.”",
      img:"assets/images/OscarWilde.jpg"
    },
    {
      autor:"Marilyn Monroe",
      quote:"“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”",
      img:"assets/images/MarilynMonroe.jpg"
    },
    {
      autor:"Albert Einstein",
      quote:"“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
      img:"assets/images/AlbertEinstein.jpg"
    },
    {
      autor:"Frank Zappa",
      quote:"“So many books, so little time.”",
      img:"assets/images/FrankZappa.jpg"
    },
    {
      autor:"Bernard M. Baruch",
      quote:"“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
      img:"assets/images/BernardBaruch.jpg"
    },
    {
      autor:"William W. Purkey",
      quote:"“You've gotta dance like there's nobody watching,Love like you'll never be hurt,Sing like there's nobody listening,And live like it's heaven on earth.”",
      img:"assets/images/WilliamW.Purkey.jpg"
    },
    {
      autor:"Dr. Seuss",
      quote:"“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”",
      img:"assets/images/DrSeuss.jpg"
    },
    {
      autor:"Maya Angelou",
      quote:"“I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.”",
      img:"assets/images/MayaAngelou.jpg"
    },
    {
      autor:"Mahatma Gandhi",
      quote:"“Live as if you were to die tomorrow. Learn as if you were to live forever.”",
      img:"assets/images/MahatmaGandhi.jpg"
    },
    {
      autor:"Albert Camus",
      quote:"“Don’t walk in front of me… I may not follow Don’t walk behind me… I may not lead Walk beside me… just be my friend”",
      img:"assets/images/AlbertCamus.jpg"
    }
    ]
  
    //Declaring All variables needed
    var random = Math.floor(Math.random()*quotes.length);
    var autorName = quotes[random].autor;
    var autorQuote =  quotes[random].quote;
    var autorImg = quotes[random].img;

    document.getElementById("quote").innerHTML = autorQuote;
    document.getElementById("author").innerHTML = autorName;
    document.getElementById("img").src = autorImg;
    document.getElementById("img").classList.add("img-thumbnail");

    // matching media with border 768px up
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    if (mediaQuery.matches) {
      document.getElementById("imgContainer").classList.remove('border');
      document.getElementById("img").classList.add("mb-5");
    }
    else
    {
      document.getElementById("imgContainer").classList.add('border', 'border-2', 'border-bottom-0' ,'border-start-0' ,'border-top-0');
    }
  }
