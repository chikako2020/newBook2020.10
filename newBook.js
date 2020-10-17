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
    '{userName}さんにおすすめの本は『ざんねんないきもの事典（じてん）』です。いきもののすきな{userName}さんが応援したくなるようなお話がたくさんのっていますよ。',
    '{userName}さんにおすすめの本は『おしりたんてい』です。洞察力のするどい{userName}さんなら、おしりたんていといっしょにすぐに犯人をみつけられるでしょう。',
    '{userName}さんにおすすめの本は『りんごかもしれない』です。考えることがすきな{userName}さんならどんなりんごを思いつくのかな？',
    '{userName}さんにおすすめの本は『銭天堂（ぜにてんどう）』です。おもしろくて、ちょっとこわいお話が好きな{userName}さんにぴったりな１冊です。',
    '{userName}さんにおすすめの本は『あるかしら書店（しょてん）』です。本好きな{userName}さんにぴったりの書店がのっているはずです。',
    '{userName}さんにおすすめの本は『ぼくらの七日間戦争（なのかかんせんそう）』です。まじめな{userName}さんですが、たまにはおもしろいイタズラを考えてみてはどうでしょう？',
    '{userName}さんにおすすめの本は『空想科学読本（くうそうかがくどくほん）』です。理科が得意な{userName}さんなら、じっくり読んで楽しめると思います。',
    '{userName}さんにおすすめの本は『ギネス世界記録（せかいきろく）』です。爆発的な潜在能力を秘めた{userName}さんなら、未来のギネス世界記録保持者になれるかも。',
    '{userName}さんにおすすめの本は『ブラックジャック』です。冷静沈着ですが心の底に熱いものを秘めている{userName}さんにおすすめのまんがです。、',
    '{userName}さんにおすすめの本は『赤毛（あかげ）のアン』です。実は乙女チックなところがある{userName}さん。物語の世界観がきっと気に入ると思います。',
    '{userName}さんにおすすめの本は『西遊記（さいゆうき）』です。誰かを守りたい強いハートをもつ{userName}さんは孫悟空に共感できるのでは？',
    '{userName}さんにおすすめの本は『小公女（しょうこうじょ）』です。ドラマチックなことが大好きな{userName}さんには、不幸に耐えて最後には大きな幸せを手に入れるセーラのお話がおすすめです。',
    '{userName}さんにおすすめの本は『銀河鉄道の夜（ぎんがてつどうのよる）』です。独特の感性を持った{userName}さんなら宮沢賢治の物語の世界を楽しめるでしょう。',
    '{userName}さんにおすすめの本は『源氏物語（げんじものがたり）』です。上品で、古風なところがある{userName}さん。きらびやかな平安貴族の物語がおすすめです。',
    '{userName}さんにおすすめの本は『スティーブジョブズの伝記』です。新しいことが大すきな{userName}さん。彼の伝記がインスピレーションを与えてくれるかもしれません',
    '{userName}さんにおすすめの本は『ほねほねザウルス』です。かわいいもの好きな{userName}さんなら、ティラノベビーたちの物語をきっと気にいってくれることでしょう。'
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
  //診断結果
  return answers[index].replace(/\{userName\}/g, userName);
}

  /**
   * 指定した要素に診断結果用のタグを設定する。
   *@param{HTMLElement}element HTMLの要素
   *@param{string}result　診断結果のテキスト
  */
function appendAssessmentResult(element,result){
  //result-areaにh3タグで'診断結果'という文字を表示
  const h3 = document.createElement('h3');//h3タグを作る
  h3.innerText = '診断結果';//h3タグに'診断結果'の文字列を設定
  element.appendChild(h3);//result-areaにh3変数を設定

//result-areaにpタグで診断結果を表示
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
  + encodeURIComponent('あなたのいいところ')
  + '&ref_src=twsrc%5Etfw';
a.setAttribute('href', href);
a.className = 'twitter-hashtag-button';
a.setAttribute('data-text', message);
a.innerText = 'Tweet #あなたのいいところ';

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
  
    console.assert(
      assessment('太郎') === '太郎のいいところは決断力です。太郎がする決断にいつも助けられる人がいます。',
      '診断結果の文言の特定の部分を名前に置き換える処理が正しくありません。'
      );



