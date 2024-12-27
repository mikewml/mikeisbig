// 骰子圖片URL
const diceImages = [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Dice-1-b.svg/1024px-Dice-1-b.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Dice-2-b.svg/1024px-Dice-2-b.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Dice-3-b.svg/1024px-Dice-3-b.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Dice-4-b.svg/1024px-Dice-4-b.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Dice-5-b.svg/1024px-Dice-5-b.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Dice-6-b.svg/1024px-Dice-6-b.svg.png"
];

// 按鈕和圖片
const rollButton = document.getElementById('rollButton');
const diceImage = document.getElementById('diceImage');
const result = document.getElementById('result');

// 擲骰子事件
rollButton.addEventListener('click', function() {
    // 隨機生成骰子結果 (1到6)
    const randomNumber = Math.floor(Math.random() * 6);
    
    // 更換圖片和顯示結果
    diceImage.src = diceImages[randomNumber];
    result.textContent = `你擲出了 ${randomNumber + 1} 點！`;
});