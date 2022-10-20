const button = document.querySelector("#btn");
const par = document.querySelector("#par");

const quots = [
    "«Success is often achieved by those who don’t know that failure is inevitable.» — Coco Chanel, fashion designer",
    "«Do the best you can until you know better. Then when you know better, do better.» — Maya Angelou, American poet, and civil rights activist",
    "«If your teacher, coach, or mentor believes you can do something, you’re more likely to do it.» — Gwen Moran, FastCompany",
    "«People who say it cannot be done should not interrupt those who are doing it.» — George Bernard Shaw, playwright",
    "«I am who I am today because of the choices I made yesterday.» — Eleanor Roosevelt, First Lady of the U.S.",
    "«Whatever we believe about ourselves and our ability comes true for us.» — Susan L. Taylor, journalist",
    "«If I have seen further, it is by standing on the shoulders of giants.» — Isaac Newton, mathematician, physicist, and author",
    "«The only thing standing between you and outrageous success is continuous progress.» — Dan Waldschmidt, business strategist",
    "«If you really look closely, most overnight successes took a long time.»  — Steve Jobs, co-Founder of Apple Inc.",
    "«Setting goals is the first step in turning the invisible into the visible.» —Tony Robbins, American author, and speaker",
    "«On any given Monday I am one sale closer and one idea away from being a millionaire.» — Larry D. Turner",
    "«Impossible is just an opinion.» — Paulo Coelho, Brazilian lyricist, and novelist»"
]

button.addEventListener("click", ()=>{
    let randomeQuote = quots[Math.floor(Math.random() *quots.length)];
    par.style.display = "block";
    par.textContent = randomeQuote;
});

