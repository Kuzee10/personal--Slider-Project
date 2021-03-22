var kuzee10 = document.querySelector('.slider-img');
var images = ["kuzee (1).jpg", "kuzee (2).jpg", "kuzee (3).jpg", 
"kuzee (4).jpg", "kuzee (5).jpg", "kuzee (6).jpg", "kuzee (7).jpg"];
var i = 0; //current image index

function prev (){
    if (i <= 0) i = images.length; i--;
    return setImg();
}

function next (){
    if (i >= images.length -1) i = - 1; i++;
    return setImg();
}

function setImg(){
    return kuzee10.setAttribute("src", "images/" + images[i]);
}




//nested Arrays and adding 100 to each.
var numbers = [
    [243, 12, 23, 12, 45, 45, 78, 66, 223, 3],
    [34, 2, 1, 553, 23, 4, 66, 23, 4, 55],
    [67, 56, 45, 553, 44, 55, 5, 428, 452, 3],
    [12, 31, 55, 445, 79, 44, 674, 224, 4, 21],
    [4, 2, 3, 52, 13, 51, 44, 1, 67, 50]
    ];

    for (var row = 0; row < numbers.length; row = row + 1){
        for (var column = 0; column < numbers[row].length; column = column + 1){
            numbers[row][column] += 100;
            console.log(numbers[row] [column]); 
        }
    }

    console.log(numbers);
