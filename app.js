//基礎編

//Q1 変数
// 変数 nickname, age に自分の名前と年齢を代入し、文字列連結で以下のようにコンソールに出力してください。

//Q2 配列変数
//languages に JavaScript, PHP, Ruby, Python, Go の 5 つの値を持つ配列を代入し、その中から JavaScript, Python を取得し、テンプレートリテラルを用いて以下のようにコンソールに出力してください。

//Q3 オブジェクト
//下記の変数 user を使用し 26 をコンソールに出力してください。

let user = {
  name: 'John',
  age: 26,
  bloodType: 'A',
  favorite: 'card',
};

//Q4 配列 × オブジェクト
//下記の変数 playerList を使用し The Legend of Zelda をコンソールに出力してください。

let playerList = [
  {
    name: 'John',
    age: 26,
    favorites: ['Card Game', 'Basket Ball', 'Programming'],
  },
  {
    name: 'Bob',
    age: 33,
    favorites: ['Tinder', 'The Legend of Zelda'],
  },
  {
    name: 'Michael',
    age: 22,
    favorites: ['Football', 'Smash Bros.'],
  },
];

//Q5 四則演算
//Q4 で定義した変数 playerList を使用し、John, Bob, Michael の年齢の平均値を計算した結果をコンソールに出力してください。

//Q6 関数
//Hello とコンソールに出力する関数 sayHello を定義し、実行してください。
//変数 sayWorld に World とコンソールに出力する無名関数を代入し、実行してください。

//Q7 メソッド
//Q3 で定義した変数 user に '2000-09-27'を値とする birthday プロパティを追加してください。
//Q3 で定義した変数 user に Hello！とコンソールに出力するメソッド sayHello を追加し、実行してください。
//※ いずれも Q3 で定義した変数 user を直接書き換えないこと

//Q8 引数
//下記の空のオブジェクト calc を使用し、以下問題を解いてください。
//2 つの引数 x, y の和をコンソールに出力する add メソッドを定義し、7 になるように実行して下さい。
//2 つの引数 x, y の差をコンソールに出力する subtract メソッドを定義し、10 になるように実行して下さい。
//2 つの引数 x, y の積をコンソールに出力する multiply メソッドを定義し、49 になるように実行して下さい。
//2 つの引数 x, y の商をコンソールに出力する divide メソッドを定義し、5 になるように実行して下さい。

let calc = {};

//Q9 返り値
//2 つの引数 x, y を受け取り、x を y で割った剰余を返り値とする関数 remainder を定義し、5 と 3 を引数に渡して実行した返り値を用いて文字列連結で以下のようにコンソールに出力してください。

//Q10 スコープ
//下記の console.log(x); においてコンソールに 1 が出力されることはなく、x is not defined（変数 x が定義されていない）というエラーが出力されます。
//その理由を以下 2 つの単語を使用し app.js にコメントアウトで回答してください。
//・スコープ
//・参照
//let x = 0; コンソールの一括確認用
function foo() {
  let x = 1;
}
console.log(x);

//応用編

//Q1 標準組み込みオブジェクト
//標準組み込みオブジェクト Math を使用し、0 ~ 9 のランダムな整数をコンソールに出力してください。

//Q2 コールバック関数
//関数 setTimeout を使用し、3 秒後に以下のようにコンソールに出力してください。

//Q3 if
//変数 num に 任意の数値を代入し、下記条件のもと文字列をコンソールに出し分ける処理を作成してください。

//条件
//num が 0 より大きければnum is greater than 0
//num が 0 より小さければnum is less than 0
//num が 0 であればnum is 0

//Q4 for
//変数 numbers に空の配列を代入した後、0 ~ 99 までの数字を変数 numbers に全て追加し、値が追加された状態の変数 numbers をコンソールに出力してください

//Q5 for × if
//以下の変数 mixed から 要素を一つずつ取り出し、下記条件のもと文字列をコンソールに出し分ける処理を作成してください。

let mixed = [4, '2', 5, '8', '9', 0, 1];

//条件
//Number であり偶数の時は even
//Number であり奇数の時は odd
//Number 以外の時は not number