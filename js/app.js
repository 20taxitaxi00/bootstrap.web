// ぐるなびAPI用
// JavaScript 指定(授業コード)
document.addEventListener('DOMContentLoaded',function(){
  document.getElementById('submit').addEventListener('click', function(){
    ajaxRequest();
  });

  // 関数ajaxRequest
  function ajaxRequest(){
    // 結果の取得
    let result = document.getElementById('guru-result');
    // 勉強する必要あり
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
      if(xhr.readyState === 4) {
        if(xhr.status === 200) {
          result.textContent = '';
          let res = JSON.parse(xhr.responseText);
          console.log(res)
          for(item of res.rest){
            renderResult(item);
          }
        } else {
          result.textContent = 'サーバーエラー';
        }
      } else {
        result.textContent = '通信中';
      }
    };

    // グルナビAPIと自分のキー
    let url = 'https://api.gnavi.co.jp/RestSearchAPI/v3/?keyid=8b9899ee8b786d216eb0a28404ba7c4b';
    // 取得するデータ数
    // let part = '&part=snippet&maxResults=9';
    let area = '&area=AREA200';
    let areacode_s = '&areacode_s=AREAS8252';
    // let freeword_value = document.getElementById('key').value;
    let freeword = '&freeword=' + document.getElementById('key').value;
    // 指定変数の組み合わせ
    xhr.open('GET', url + area + areacode_s + freeword, true);
    xhr.send(null);
  };


  function renderResult(item){

    // 取得した内容を変数に格納
    let title = item.name;
    let open = item.opentime;
    let image = item.image_url;
    let link = item.url;

    // 要素の組み立て
    let img = document.createElement('img');
    let anchor = document.createElement('a');
    let text = document.createElement('p');
    let opentime = document.createElement('p');
    let div = document.createElement('div');
    div.classList.add('col-6');

    img.src = image.shop_image1;

    if (image.shop_image1 == ""){
      img.src = "./img/noimage.png";
    }
    
    // img.width = image.width;
    // img.height = image.height;

    anchor.href = link;

    text.textContent = title;
    opentime.textContent = open;
    // 画面に表示
    anchor.appendChild(img);
    div.appendChild(anchor);
    div.appendChild(text);
    div.appendChild(opentime);
    document.getElementById('guru-result').appendChild(div);

  };



});