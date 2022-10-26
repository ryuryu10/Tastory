var INDEX_NowScrollValue = 1;
var INDEX_MaxScrollValue = 0;
var INDEX_ScrollLeftButton = document.querySelector(".LeftActionButton");
var INDEX_ScrollRightButton = document.querySelector(".RightActionButton");
var NAV_ModalCloseButton = document.querySelector("#NAV_Close");
var NAV_WantReadBookButton = document.querySelectorAll(".bottom > .nav-container >.nav-items")[2];
for(i=0;i<=99;i++){
    INDEX_MaxScrollValue++;
    if(!document.querySelector("#B"+INDEX_MaxScrollValue)){
        INDEX_MaxScrollValue--;
        break;
    }
}
INDEX_ScrollRightButton.addEventListener('click',function() {
    if(INDEX_MaxScrollValue == INDEX_NowScrollValue){
        $('#B'+INDEX_NowScrollValue).hide();
        INDEX_NowScrollValue = 1;
        $('#B'+INDEX_NowScrollValue).show();
    }else{
        $('#B'+INDEX_NowScrollValue).hide();
        INDEX_NowScrollValue++;
        $('#B'+INDEX_NowScrollValue).show();
    }
    console.log(INDEX_MaxScrollValue, INDEX_NowScrollValue);
})
INDEX_ScrollLeftButton.addEventListener('click',function() {
    if(1 == INDEX_NowScrollValue){
        $('#B'+INDEX_NowScrollValue).hide();
        INDEX_NowScrollValue = INDEX_MaxScrollValue-1;
        $('#B'+INDEX_NowScrollValue).show();
    }else{
        $('#B'+INDEX_NowScrollValue).hide();
        INDEX_NowScrollValue--;
        $('#B'+INDEX_NowScrollValue).show();
    }
    console.log(INDEX_MaxScrollValue, INDEX_NowScrollValue);
})
NAV_ModalCloseButton.addEventListener('click',function() {
    document.querySelector(".nav_overlay").style.display = "none";
})
NAV_WantReadBookButton.addEventListener('click',function() {
    document.querySelector(".nav_overlay").style.display = "flex";
})