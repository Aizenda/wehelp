const chang1 = ()=>{
    let aboutDiv = document.querySelector("#about");
    let ApplicationMotivationDiv = document.querySelector("#Application-motivation");
    aboutDiv.style.display = "flex";
    ApplicationMotivationDiv.style.display = "none";
};

const chang2 = ()=>{
    let aboutDiv = document.querySelector("#about");
    let ApplicationMotivationDiv = document.querySelector("#Application-motivation");
    aboutDiv.style.display = "none";
    ApplicationMotivationDiv.style.display = "flex";

};

const FrontEnd = ()=>{
    let htmlDiv = document.querySelector("#Front-end");
    let nodeDiv = document.querySelector("#Back-end");
    let pythonDiv = document.querySelector("#python");
    let other = document.querySelector("#other");
    htmlDiv.style.display = "block";
    nodeDiv.style.display = "none";
    pythonDiv.style.display= "none";
    other.style.display= "none";

};

const BackEnd = ()=>{
    let htmlDiv = document.querySelector("#Front-end");
    let nodeDiv = document.querySelector("#Back-end");
    let pythonDiv = document.querySelector("#python");
    let other = document.querySelector("#other");
    htmlDiv.style.display = "none";
    nodeDiv.style.display = "block";
    pythonDiv.style.display= "none";
    other.style.display= "none";
};

const python = ()=>{
    let htmlDiv = document.querySelector("#Front-end");
    let nodeDiv = document.querySelector("#Back-end");
    let pythonDiv = document.querySelector("#python");
    let other = document.querySelector("#other");
    htmlDiv.style.display = "none";
    nodeDiv.style.display = "none";
    pythonDiv.style.display= "block";
    other.style.display= "none";

};

const other = ()=>{
    let htmlDiv = document.querySelector("#Front-end");
    let nodeDiv = document.querySelector("#Back-end");
    let pythonDiv = document.querySelector("#python");
    let other = document.querySelector("#other");
    htmlDiv.style.display = "none";
    nodeDiv.style.display = "none";
    pythonDiv.style.display= "none";
    other.style.display= "block";
};

document.addEventListener("DOMContentLoaded", ()=> {
    // 1. 取得所有小圖片和 modal 元素
    const thumbnails = document.querySelectorAll('.image-thumbnail');
    const modal = document.createElement('div');
    const modalImage = document.createElement('img');

    // 2. 設定 modal 元素的基本樣式
    modal.classList.add('modal');
    modal.appendChild(modalImage);
    document.body.appendChild(modal);

    // 3. 為每張縮圖添加點擊事件
    thumbnails.forEach(function(thumbnail) {
        thumbnail.addEventListener('click', ()=> {
            // 取得大圖的 URL
            const fullSizeUrl = thumbnail.getAttribute('data-fullsize');
            // 設置 modal 顯示的圖片
            modalImage.src = fullSizeUrl;

            // 動態修改圖片大小，取消全局 img 的樣式
            modalImage.style.width = 'auto';   // 取消限制寬度
            modalImage.style.height = 'auto';  // 取消限制高度
            modalImage.style.maxWidth = '95%'; // 設置最大寬度
            modalImage.style.maxHeight = '95%';// 設置最大高度
            modalImage.style.padding = '0';     // 移除 padding

            // 顯示 modal
            modal.classList.add('show');
        });
    });

    // 4. 點擊 modal 任何地方關閉放大圖片
    modal.addEventListener('click', function() {
        modal.classList.remove('show');
    });
});




