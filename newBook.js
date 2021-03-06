'use strict';
const userNameInput = document.getElementById('user-name');
const assessmentButton = document.getElementById('assessment');
const resultDivided = document.getElementById('result-area');
const tweetDivided = document.getElementById('tweet-area');

/**
 * 指定した要素の子どもを全て削除する
 * @param {HTMLElement} element HTMLの要素
 */
function removeAllChildren(element) {
    while (element.firstChild) {
      // 何かタグがある限りループ
      element.removeChild(element.firstChild);
    }
  }
  const answers = [
    '{userName}さんにおすすめの本は『マンガでよくわかるねこねこ日本史（にほんし）』です。古都（こと）奈良（なら）に住（す）んでいても、意外（いがい）と知（し）らない日本（にほん）の歴史（れきし）。でも教科書（きょうかしょ）を読（よ）んでもよく分（わ）からなし、ねむくなっちゃう…。そんな{userName}さんにおすすめの１冊（さつ）です。日本史（にほんし）の重要人物（じゅうようじんぶつ）が、かわいいマンガで楽（たの）しく学（まな）べるニャー!!',
    '{userName}さんにおすすめの本は『飛行機（ひこうき）のサバイバル　1.2』です。どんな過酷（かこく）な状況（じょうきょう）に置（お）かれても、最後（さいご）まで決（けっ）してあきらめない、タフな{userName}さん。そんな{userName}さんには学校図書館（がっこうとしょかん）で人気（にんき）のサバイバルシリーズ最新刊（さいしんかん）をおすすめします。今度(こんど）のサバイバルの舞台（ぶたい）は空（そら）の上（うえ）! 次々（つぎつぎ）と起（お）きる飛行中（ひこうちゅう）のトラブルからサバイバルできるか！？',
    '{userName}さんにおすすめの本は『５分後（ふんご）に意外（いがい）な結末（けつまつ）ベスト・セレクション　黒（くろ）の巻（まき）』です。毎日（まいにち）学校（がっこう）、宿題（しゅくだい）、家（いえ）のお手伝（てつだ）いに大忙（おおいそが）しの{userName}さん。５分間（ふんかん）で読（よ）める、短（みじか）くてふしぎな話（はなし）がいっぱいつまった、この本（ほん）がおすすめです！どこから読（よ）んでも楽（たの）しめるショート・ショート集（しゅう）。',
    '{userName}さんにおすすめの本は『鬼滅（きめつ）の刃（やいば）３　風（かぜ）の道（みち）しるべ』です。自分（じぶん）では気（き）がついていないかもしれませんが、{userName}さんは美（うつく）しさと強（つよ）さを兼（か）ね備（そな）えた、みんなの人気者（にんきもの）。そんな{userName}さんにおすすめの本（ほん）は、平群小学校図書館（へぐりしょうがっこうとしょかん）の一番（いちばん）人気（にんき）の鬼滅（きめつ）の刃（やいば）の小説（しょうせつ）最新刊（さいしんかん）です。風柱（かぜばしら）・不死川実弥（しなずがわ さねみ）の誕生秘話（たんじょうひわ）など全（ぜん）5編（へん）を収録（しゅうろく）!',
    '{userName}さんにおすすめの本は『ずっと前（まえ）から好（す）きでした。』です。もしかして、{userName}さんには好（す）きな人（ひと）がいますか？はずかしがりやで素直（すなお）になれない{userName}さんは、好（す）きな人（ひと）の前（まえ）ではホントの気持（きも）ちをごまかしてしまうかも。そんな{userName}さんに読（よ）んでほしい1冊（さつ）です。',
    '{userName}さんにおすすめの本は『発表（はっぴょう）がうまくなる』です。人前（ひとまえ）で発表（はっぴょう）するのが苦手（にがて）な{userName}さん…もしかしたら発表（はっぴょう）のコツを知（し）らないだけかもしれない。原稿（げんこう）の書（か）き方（かた）や発表（はっぴょう）のコツを知（し）って、スキルを上（あ）げよう！大人（おとな）になっても役立（やくだ）つ力（ちから）が身（み）につくぞ。',
    '{userName}さんにおすすめの本は『釣（つ）りスピリッツ』です。{userName}さんはゲームが好（す）きですか？ゲームをやりすぎて、お家（うち）の人（ひと）に怒（おこ）られたことはありませんか？この本（ほん）はゲーム「釣（つ）りスピリッツ」の小説版（しょうせつばん）です。ゲームもいいけど、本（ほん）を読（よ）むのも楽（たの）しいですよ！',
    '{userName}さんにおすすめの本は『時間割男子（じかんわりだんし）』です。もしかして{userName}さんは、勉強（べんきょう）がニガテではありませんか？この本（ほん）の主人公（しゅじんこう）の花丸（はなまる）円（まどか）ちゃんは、勉強（べんきょう）が超超超（ちょうちょうちょう）ニガテでしたが、あることがおこり、算（さん）国（こく）理（り）社（しゃ）の猛勉強（もうべんきょう）をすることになります。',
    '{userName}さんにおすすめの本は『ようかいとりものちょう』です。{userName}さんは「岡（おか）っ引（ぴ）き」を知（し）っていますか？岡（おか）っ引（ぴ）きとは、江戸時代（えどじだい）に悪人（あくにん）をつかまえる、警察官（けいさつかん）のような人のことです。この本の主人公（しゅじんこう）いなりのコン七（しち）は、妖怪（ようかい）お江戸（えど）で評判（ひょうばん）の子（こ）どもの岡（おか）っ引（ぴ）き。さあて、コン七は見事（みごと）に解決（かいけつ）できるのでありましょうか。',
    '{userName}さんにおすすめの本は『まちがいなく名探偵（めいたんてい）』です。するどい直感（ちょっかん）を持（も）っている{userName}さんにおすすめの、なぞとき事件（じけん）が3つはいったお話（はなし）です。注意（ちゅうい）深（ぶか）く文章（ぶんしょう）を読（よ）んで、絵（え）を見（み）れば、{userName}さんは主人公（しゅじんこう）の名探偵（めいたんてい）、ミルキー杉山（すぎやま）より先（さき）に犯人（はんにん）がわかるかもしれません。',
    '{userName}さんにおすすめの本は『本当（ほんとう）はこわい話（はなし）』です。黒（くろ）いイヌを見（み）つけると男（おとこ）は赤（あか）い車（くるま）に戻（もど）った。銀色（ぎんいろ）の上着（うわぎ）を脱（ぬ）ぐと、青（あお）いワンピースの少女（しょうじょ）が男（おとこ）に聞（き）いた。「シロは見（み）つかった？」――こわーい!!!!  …え？　どこがこわいかわからない？よーく考（かんが）えてみて。この３行（ぎょう）にはとんでもない真実（しんじつ）がかくれています。{userName}さんにはお話（はなし）にかくされた真実（しんじつ）がわかるかな？※黒（くろ）いイヌの真実（しんじつ）は本（ほん）の中（なか）で確認（かくにん）してね。',
    '{userName}さんにおすすめの本は『発名対決（はつめいたいけつ）15』です。{userName}さんはちょっと人（ひと）とちがうことを思（おも）いつくことがありませんか？この『実験対決（じっけんたいけつ）』シリーズを読（よ）んで、自分（じぶん）だけの考（かんが）えをまとめて、便利（べんり）で役立（やくだ）つものを発明（はつめい）してみてはどうでしょう？金属（きんぞく）の炎色反応（えんしょくはんのう）、てこと滑車（かっしゃ）、揚力（ようりょく）、天気（てんき）と湿度（しつど）など、科学理論（かがくりろん）が楽（たの）しく学（まな）べます。',
    '{userName}さんにおすすめの本は『恋（こい）する図書室（としょしつ）１　放課後（ほうかご）、あこがれの先輩（せんぱい）と』です。{userName}さんはロマンチックな出会（であ）いを求（もと）めていませんか？そんな出会（であ）いは、ズバリ学校図書館（がっこうとしょかん）でおこります！！！まずはこの本（ほん）を読（よ）むために学校図書館（がっこうとしょかん）に来（き）てくださいね～',
    '{userName}さんにおすすめの本は『言葉（ことば）の力（ちから）』です。{userName}さんはふだん、どのような「言葉（ことば）」を使（つか）っていますか。言葉（ことば）は、相手（あいて）と思（おも）いを共有（きょうゆう）する大切（たいせつ）な手段（しゅだん）の１つです。使（つか）い方（かた）次第（しだい）で、相手（あいて）の気持（きも）ちはプラスにもマイナスにもなります。また、言葉（ことば）は自分（じぶん）らしく素直（すなお）に表現（ひょうげん）すると、相手（あいて）により伝（つた）わりやすくなります。 さまざまな人と前向（まえむ）きに関（かか）わっていけるよう、言葉（ことば）の力をたかめましょう。{userName}さんの今（いま）、そして未来（みらい）をひらくのにきっと役（やく）に立（た）ってくれるはずです！',
    '{userName}さんにおすすめの本は『プログラミングって何（なに）？』です。『プログラミング』って、あまり聞（き）き覚（おぼ）えのない言葉（ことば）かもしれないけど、実（じつ）は{userName}さんの生活（せいかつ）を支（ささ）えるたくさんのモノに使（つか）われているんだ！プログラミングを知（し）ることで、世（よ）の中（なか）のしくみをさらに深（ふか）く理解（りかい）してみよう！',
    '{userName}さんにおすすめの本は『ＡＩって何だろう？』です。「AI」といわれて{userName}さんはどんなことをイメージするかな？すでにAI（人工知能）は身（み）の回（まわ）りに存在（そんざい）している。そしてこれからもどんどん増（ふ）えていくといわれてるよ。そんなAIのことをしっかり理解（りかい）して、便利（べんり）な未来（みらい）を想像（そうぞう）してみよう！'
  ]; 


/**
 * 名前の文字列を渡すと診断結果を返す関数
 * @param{string} userName ユーザーの名前
 * @return{string} 診断結果
 */
function assessment(userName){
  //userName(文字列)を数値（漢字だと５桁）に変換
  let number = 0;
  for (let i =0;i < userName.length; i ++){
      number += userName.charCodeAt(i);
  }
  //5桁の数値を回答結果の範囲（０〜１５）に変換
  let index = number % answers.length;
  //おすすめの本
  return answers[index].replace(/\{userName\}/g, userName);
}

  /**
   * 指定した要素に診断結果用のタグを設定する。
   *@param{HTMLElement}element HTMLの要素
   *@param{string}result　おすすめの本のテキスト
  */
function appendAssessmentResult(element,result){
  //result-areaにh3タグで'おすすめの本'という文字を表示
  const h3 = document.createElement('h3');//h3タグを作る
  h3.innerText = 'おすすめの本';//h3タグに'おすすめの本'の文字列を設定
  element.appendChild(h3);//result-areaにh3変数を設定
  resultDivided.style.display = 'block'; //result-areaに枠線を表示

//result-areaにpタグでおすすめの本を表示
const p = document.createElement('p');
p.innerText = result;
element.appendChild(p);
}

/**
 * 指定した要素にツイートボタンを設定する。
 * @param{HTMLElement}element HTMLの要素
 * @param{string}message ツイート本文
 */
function appendTweetButton(element,message){
  //aタグを作って属性を設定する
  const a =document.createElement('a');
  const href =
  'https://twitter.com/intent/tweet?button_hashtag='
  + encodeURIComponent('あなたにおすすめの本')
  + '&ref_src=twsrc%5Etfw';
a.setAttribute('href', href);
a.className = 'twitter-hashtag-button';
a.setAttribute('data-text', message);
a.innerText = 'Tweet #あなたにおすすめの本';

// aタグをHTMLとして追加する
element.appendChild(a);

// scriptタグを作る
const script = document.createElement('script');
script.setAttribute('src', 'https://platform.twitter.com/widgets.js');
    
//scriptタグをHTMLとして追加する
element.appendChild(script);
}

  assessmentButton.onclick = () => {
    　let userName = userNameInput.value;
    if (!userName) {
      // 名前の入力がなかったので処理を中断
      return;
    }

    //診断結果の表示
    removeAllChildren(resultDivided);
    const result = assessment(userName);
    appendAssessmentResult(resultDivided,result);
  
//Tweetボタンの表示
removeAllChildren(tweetDivided);
appendTweetButton(tweetDivided,result);
  }

  //入力欄でEnterキーを押した時に診断を実行
  userNameInput.onkeydown = event =>{
    if(event.key === 'Enter'){
      assessmentButton.onclick();
    }
    };
  
   



