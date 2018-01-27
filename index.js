var quotes=["\" Every child is an artist. The problem is how to remain an artist once he grows up.\"<br><br>- Pablo Picasso","\"Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.\"<br><br>- Thomas A. Edison","\"Either I will find a way, or I will make one.\"<br><br> - Philip Sidney","\"Whatever the mind of man can conceive and believe, it can achieve.\"<br><br>- Napoleon Hill","\"Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.\"<br><br>- Robert Frost","\"You miss 100% of the shots you don’t take.\"<br><br>- Wayne Gretzky","\"I've missed more than 9000 shots in my career. I've lost almost 300 games. 26 times I've been trusted to take the game winning shot and missed. I've failed over and over and over again in my life. And that is why I succeed.\"<br><br>- Michael Jordan","\"Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do, so throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails.<br>Explore, Dream, Discover.\"<br><br>- Mark Twain","\"The mind is everything. What you think you become.\"<br><br>- Buddha","\"The best time to plant a tree was 20 years ago. The second best time is now.\"<br><br>– Chinese Proverb","\" Don't cry because it's over, smile because it happened.\"<br><br>- Dr. Seuss","\"Be yourself; everyone else is already taken.\"<br><br>-Oscar Wilde","\"o things are infinite: the universe and human stupidity; and I'm not sure about the universe.\"<br><br>-Albert Einstein","\"You know you're in love when you can't fall asleep because reality is finally better than your dreams.\"<br><br>-Dr. Seuss","\"In three words I can sum up everything I've learned about life: it goes on.\"<br><br>-Robert Frost","\"A friend is someone who knows all about you and still loves you.\"<br><br>-Elbert Hubbard","\"Always forgive your enemies; nothing annoys them so much.\"<br><br>-Oscar Wilde","\"The fool doth think he is wise, but the wise man knows himself to be a fool.\"<br><br>-William Shakespeare","\"I have not failed. I've just found 10,000 ways that won't work.\"<br><br>-Thomas Edison","\"Glory is fleeting, but obscurity is forever.\"<br><br>-Napolean Bonaparte","\"The greatest weapon against stress is our ability to choose one thought over another.\"<br><br>-William James","\"The greatest accomplishment is not in never falling, but in rising again after you fall.\"<br><br>-Vince Lombardi","\"Life is either a great adventure or nothing.\"<br><br>-Helen Keller","\"I asked God for a bike, but I know God doesn’t work that way. So I stole a bike and asked for forgiveness.\"<br><br>- Emo Philips","\"Courage is contagious. When a brave man takes a stand, the spines of others are stiffened.\"<br><br>-Billy Graham","\"Patience is something you admire in the driver behind you, but not in one ahead.\"<br><br>-Bill McGlashen"];
function rg(m, n) {
    return Math.floor( Math.random() * (n - m + 1) ) + m;
}

function hex(i) {
    return i.toString(16);
}

function randColor() {
    return '#' + hex(rg(1, 15)) + hex(rg(1, 15)) + hex(rg(1, 15)) +
        hex(rg(1, 15)) + hex(rg(1, 15)) + hex(rg(1, 15));
}

function quote(){
  random=Math.floor(Math.random()*(quotes.length));
  document.getElementById('newQuote').innerHTML=quotes[random];
 }
$(document).ready(function(){
  $("#getQuote").on("click",function(){
    $(".colours").css("background-color",randColor());
    });
  $("#tweet").on("click", function() {
    window.open("https://twitter.com/intent/tweet/?text="+$('#newQuote').text(), '_blank');
    });
});