var bannerIndex = 0;
    var targetBannerIndex = 0

    const banners = document.querySelectorAll("#banner > img")
    const bannerCount = banners.length;
    
    var bannerWidth = document.querySelector("#banner").clientWidth
    banners.forEach((e, i) => {
        e.style.left = (i * bannerWidth) + "px"
    })
    banners[banners.length - 1].style.left = -bannerWidth + "px"

    var animationInProgress = false

    banners.forEach((e, i) => {
        var span = document.createElement("span")
        span.classList.add('pager-button')
        if (i == 0) span.classList.add('pager-button-active')
        span.onclick = () =>{
            SetTargetBannerIndex(i)
        }
        document.querySelector("#pager").append(span)
    })

    function SetTargetBannerIndex(index) {
        targetBannerIndex = index
        document.querySelectorAll('#pager > span').forEach((e, i) => {
            e.classList.remove("pager-button-active")
            if (index == i) {
                e.classList.add("pager-button-active")
            }
        })
        SetBannerIndex()
    }

    function SetBannerIndex(){
        if (animationInProgress || bannerIndex == targetBannerIndex) {
            return
        }
        var dir = ""
        if(bannerIndex < targetBannerIndex) {
            if (targetBannerIndex-bannerIndex < bannerCount / 2) {
                dir = 'right'
            }
            else dir = 'left'
        }
        else {
            if (bannerIndex - targetBannerIndex < bannerCount /2) {
                dir = 'left'
            }
            else dir = 'right'
        }

        if (dir == "right"){
            bannerIndex = bannerIndex == banners.length - 1 ? 0 : bannerIndex + 1
        }
        else {
            bannerIndex = bannerIndex == 0 ? banners.length - 1 : bannerIndex - 1
        }
        SetPositions(dir)
    }

    function SetPositions(direction){
        var before = bannerIndex == 0 ? banners.length - 1 : bannerIndex - 1;
        var after = bannerIndex == banners.length - 1 ? 0 : bannerIndex + 1;

        banners.forEach(e => {
            e.classList.remove('animated')
        })

        banners[bannerIndex].classList.add('animated')

        if(direction == 'left') {
            banners[after].classList.add('animated')
        }
        else{
            banners[before].classList.add('animated')
        }
        banners[before].style.left = "-"+bannerWidth+"px";
        banners[bannerIndex].style.left = "0px";
        banners[after].style.left = bannerWidth+"px";

        animationInProgress = true
        setTimeout(() => {
            animationInProgress = false
            SetBannerIndex()
        }, 200);
    }

    function Left(){
        clearInterval(interval)
        interval = setInterval(() => {
            Right()
        }, 5000);
        targetBannerIndex--;
        if (targetBannerIndex < 0) {
            targetBannerIndex = bannerCount - 1
        }
        SetTargetBannerIndex(targetBannerIndex)
    }
    function Right(){
        clearInterval(interval)
        interval = setInterval(() => {
            Right()
        }, 5000);
        targetBannerIndex++;
        if (targetBannerIndex > bannerCount-1) {
            targetBannerIndex = 0
        }
        SetTargetBannerIndex(targetBannerIndex)
    }
    var interval = setInterval(() => {
        Right()
    }, 5000);