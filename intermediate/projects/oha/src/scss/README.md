# scssディレクトリについて

### `global`<br>
全体で使いたい変数,mixin,関数を記述したファイルを格納する。このディレクトリだけはglob機能で一括読み込みが出来ない。他のディレクトリで変数読み込みするため`＠forword`で`indexファイル`に読み込ませる。
`vite.config.js`でエイリアスを定義しているのでどの階層からでも`@use "@global"`で変数ファイルにアクセスが出来る。

<br>

 ### `base`<br>
リセットCSSやサイト全体に適用したいファイルを格納する。

<br>

### `parts`
サイトで使う各パーツを格納する。<br>

`components`<br>
buttonなどの粒度の小さいパーツを格納する。

`modules`<br>
header,footer,mainなど粒度の大きいパーツを格納する。

`pages`<br>
ページ固有で使うスタイルを格納する。

<br>

###  `plugin`
今のところ使うかは不明。外部ライブラリ系統ははpublicディレクトリに読み込ませて使う考えでいる。


<br>

### `utility`
Modifierでは付けにくい、わずかな調整用のスタイルを定義するディレクトリ

<br>

### `style.scss`
最上位のファイル。全てのスタイルファイルを読み込ませる。glob機能が使えるので`"ディレクトリ名/**/*.scss"`で一括読み込みが出来る。

