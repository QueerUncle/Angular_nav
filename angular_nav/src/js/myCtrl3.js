/**
 *   project:
 *   site:cbim,
 *   author：lize,
 *   time:2017/7/11
 */
angular.module('myApp')
.controller("myCtrl3",function($scope){
    console.log('3333');
    $scope.myInterval = 2000;
    $scope.noWrapSlides = false;
    var slides = $scope.slides = [];
    $scope.addSlide = function () {
        var newWidth = slides.length + 1;
        slides.push({
            image: 'http://steamcommunity-a.akamaihd.net/economy/image/U8721VM9p9C2v1o6cKJ4qEnGqnE7IoTQgZI-VTdwyTBeimAcIoxXpgK8bPeslY9pPJIvB5IWW2-452kaM8heLSRgleGArrBBwe94OfEh0bOlAlopvOVPAWe3GEKAgj6ULuupkVhtYZ0pIxzzk5gY59xSWJ95SOIxsbCuJg/1280x800',
            text: 'Chocola & Vanilla',
        });
        slides.push({
            image: 'http://steamcommunity-a.akamaihd.net/economy/image/U8721VM9p9C2v1o6cKJ4qEnGqnE7IoTQgZI-VTdwyTBeimAcIoxXpgK8bPeslY9pPJIvB5IWW2-452kaM8heLSRgleGArrBBwe94PqYvguSpXFVwv-URAD3mGBHRgzaceuqqk1BlN5IrcUvxlp8d5t8BX595SOKdq0CMpw/1280x800',
            text: 'Chocola & Vanilla',
        });
        slides.push({
            image: 'http://cdn.steamcommunity.com/economy/image/U8721VM9p9C2v1o6cKJ4qEnGqnE7IoTQgZI-VTdwyTBeimAcIoxXpgK8bPeslY9pPJIvB5IWW2-452kaM8heLSRgleGArrBBwe94PqUrgrStA1tw6OZBXGTgH0fQ1j-WeOeskQUxYcYuI02hkpgYuNZRW595SOLioa6j6w/1280x800',
            text: 'Chocola & Vanilla',
        });
        slides.push({
            image: 'http://steamcommunity-a.akamaihd.net/economy/image/U8721VM9p9C2v1o6cKJ4qEnGqnE7IoTQgZI-VTdwyTBeimAcIoxXpgK8bPeslY9pPJIvB5IWW2-452kaM8heLSRgleGArrBBwe94aqAq0-T4CVtyvLEUV2C1F0jU3mOTfrqqwlM0McZ9cBv0yckdvNxTUJ95SOId8xoS5w/1280x800',
            text: 'Chocola & Vanilla',
        });
        slides.push({
            image: 'http://steamcommunity-a.akamaihd.net/economy/image/U8721VM9p9C2v1o6cKJ4qEnGqnE7IoTQgZI-VTdwyTBeimAcIoxXpgK8bPeslY9pPJIvB5IWW2-452kaM8heLSRgleGArrBBwe94PqYvguSpXFVwv-URAD3mGBHRgzaceuqqk1BlN5IrcUvxlp8d5t8BX595SOKdq0CMpw/1280x800',
            text: 'Chocola & Vanilla',
        });
        slides.push({
            image: 'http://steamcommunity-a.akamaihd.net/economy/image/U8721VM9p9C2v1o6cKJ4qEnGqnE7IoTQgZI-VTdwyTBeimAcIoxXpgK8bPeslY9pPJIvB5IWW2-452kaM8heLSRgleGArrBBwe94OfEh0bOlAlopvOVPAWe3GEKAgj6ULuupkVhtYZ0pIxzzk5gY59xSWJ95SOIxsbCuJg/1280x800',
            text: 'Chocola & Vanilla',
        });
    };
    $scope.addSlide();
})