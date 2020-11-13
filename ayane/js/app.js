// jQueryの書き方
// $(function(){jQueryを使って行いたい処理});
/*
classの追加　addClass('追加したいClass名')
classの削除　removeClass('削除したいClass名')
タグの追加$('<div>')
要素の取得
ータグを指定して取得$('div')
ークラス名を指定して取得$('.className')
ーid名を指定して取得$('#idName')


*/ 

$(function(){
// Q1
// JavaScriptで書いた場合
// document.queriSelector('q1-btn').addEventListner('click',function(){
// 	this.classList.add('large=btn');
// });

// jQueryの場合
$('#q1-btn').on('click',function(){
$(this).addClass('large-btn');
});

// Q2 ホバーで要素の透明度を変更する

$('#q2-btn').on('mouseover',function(){
	// cstyle="opacity:;0.5;"を指定したのと同じ
 $(this).css('opacity',0.5);
// 文字色を変える
// this.style.color='red';
 $(this).css('color','red');
});


// Q3
// $('#q3-btn').on('mouseover',function(){
// 	// cstyle="opacity:;0.5;"を指定したのと同じ
//  $(this).css('opacity',0.5);
// });

// $('#q3-btn').on('mouseleave',function(){
//  $(this).css('opacity',1);
// });
// ;(セミコロン)処理の終わりをつける
$('#q3-btn').on('mouseover',function(){
	// cstyle="opacity:;0.5;"を指定したのと同じ
 $(this).css('opacity',0.5);
})
.on('mouseleave',function(){
 $(this).css('opacity',1);
});


// Q4　以下のボタンがクリックされた時、テキストを任意の文字に変更する。

$('#q4-btn').on('click',function(){
	$('#q4-text').text('コレに変更');


});



// Q5 以下のボタンがクリックされた時、テキストがりんごの要素前に、以下の要素を追加する。
// 書き方1
$('#q5-btn').on('click',function(){
$('.apple').before('<li class="grape">ぶどう</li>');

// 書き方2
// let li= $('<li>');
// li.text('ぶどう');
// li.addClass('grape');
// $('.apple').before(li);
});

// Q6 以下のボタンがクリックされた時、<br>
          // pタグ内の最後に以下の内容を追加 <br>
          
          // tag: span <br>
          // text: 追加 <br>
          // class: red
$('#q6-btn').on('click',function(){
 $('.q6-text').append('<span class="red">追加</span>');

});

// Q7 クリックされたボタンに「on」というクラスがついていれば、外す、ついていなければ、つける

$('#q7-btn').on('click',function(){
 $(this).toggleClass('on');

});


// Q8 ddタグの要素をスライドで表示する /.siblingsは兄弟要素の取得
$('#q8-btn').on('click',function(){
 $(this)
 	.siblings()
 	.slideToggle();

});

// Q9 ページの最上部に戻る

$('#q9-btn').on('click',function(){
 // $(this)
// アニメーションを付けたい要素,animate({アニメーションの中で行いたい処理},アニメーションの間隔);
// body','html'と両方かくとこでブラウザ依存を防ぐ。
 	$('body,html').animate({scrollTop:0},500);

 });

// Q10
// // 表示ボタンが押された時
$('.q10-show-btn').on('click',function(){
$('.q10-target').fadeIn(1000);
});

// 非表示ボタンが押された時
$('.q10-hide-btn').on('click',function(){
$('.q10-target').fadeOut(1000);

});



// Q11 「Q11」という文字まで画面がスクロールされたら、水色の玉を表示
// 画面がスクロールされた時
$(window).on('scroll',function(){
	// idがQ11の要素の画面最上下部からの距離を取得
	let q11_position = $('#q11').offset().top;

// 画面の高さ
	let wh = $(window).height();


// 現在のスクロール位置
	let now_position =$(window).scrollTop();

	if (q11_position<= wh + now_position) {
		// q11まで画面がスクロールされている
		// hideクラスを削除することで水玉を表示する
		$('.q11-target').removeClass('hide');
	}else{
		// q11がまだ見えてない(上の方でスクロールが止まっている)
		// hideクラスを表示することだ水玉を隠す
		$('.q11-target').addClass('hide');
	}

});

// Q12 クラスの取り外し位置を移動させる

$('#q12-btn').on('click',function(){
	$('.q12-target').toggleClass('hide');

});











});

