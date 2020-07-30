<!DOCTYPE html>
<html lang="ko">
    <head>
        <!-- Webpage Title -->
        <title>나홀로 쇼핑몰</title>

        <!-- Required meta tags -->
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

        <!-- Bootstrap CSS -->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
              integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
              crossorigin="anonymous">

        <!-- JS -->
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
                integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
                crossorigin="anonymous"></script>

        <!-- 구글폰트 -->
        <link href="https://fonts.googleapis.com/css?family=Stylish&display=swap" rel="stylesheet">

        <style type="text/css">
            * {
                font-family: 'Stylish', sans-serif;
            }

            .wrap {
                width: 500px;
                margin: auto;
            }

            .img {
                background-image: url('https://www.conscious-skincare.com/wp-content/uploads/2016/02/glc-candle-lit-with-new-gift-box.jpg');
                background-size: cover;
                background-position: center;
                width: 500px;
                height: 300px;
            }

            .info {
                margin-top: 20px;
                margin-bottom: 20px;
            }

            h1, h5 {
                display: inline;
            }

            .order {
                text-align: center;
            }

            .orders {
                margin-top: 100px;
            }
        </style>

        <script>
            function order() {

                let orderName = $('#order-name').val();
                if orderName == "" {
                    alert('이름을 입력해주세요');
                    return;
                }

                let orderCount = $('#order-count').val();
                if orderCount == "" {
                    alert('수량을 입력해주세요');
                    return;
                }
            }

        </script>
    </head>
    <body>
        <div class="wrap">
            <div class="img"></div>
            <div class="info">
                <h1>양초를 팝니다</h1>
                <h5>가격: 3,000원/개</h5>
                <p>이 양초는 사실 특별한 힘을 가지고 있어요. 양초를 켜고 소원을 빌면 짜자잔 뭐든지 이뤄지게 된답니다. 하나 사가세요! 대나무 향이 아주 좋아요</p>
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text">주문자 이름</span>
                    </div>
                    <input type="text" class="form-control" id="order-name">
                </div>
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <label class="input-group-text">수량</label>
                    </div>
                    <select class="custom-select" id="order-count">
                        <option selected value=""> -- 수량을 선택하세요 --</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                </div>
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text">주소</span>
                    </div>
                    <input type="text" class="form-control" id="order-address">
                </div>
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text">전화번호</span>
                    </div>
                    <input type="text" class="form-control" id="order-phone">
                </div>
                <div class="order">
                    <button onclick="order()" type="button" class="btn btn-primary">주문하기</button>
                </div>
            </div>
            <div class="orders">
                <table class="table">
                    <thead>
                    <tr>
                        <th scope="col">이름</th>
                        <th scope="col">수량</th>
                        <th scope="col">주소</th>
                        <th scope="col">전화번호</th>
                    </tr>
                    </thead>
                    <tbody id="orders-box">
                    <tr>
                        <td>박르탄</td>
                        <td>10000</td>
                        <td>르탄시 코딩구 열심동</td>
                        <td>010-1234-5678</td>
                    </tr>

                    </tbody>
                </table>
            </div>
        </div>
    </body>
</html>