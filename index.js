/* EXTRA (use JavaScript code here) EX7.: Write a function to change the h1
    text */ 

    const changeColorOfH1=function(){
        let h1=document.querySelector(".head")
        h1.style.color="red"
    }
    changeColorOfH1()
   /*  EX8.: Write a function to change the page background color */ 
   const changeBGOfThePage=function(){
       let body=document.getElementsByTagName("body")[0]
       body.style.backgroundColor="ivory"
   }
   changeBGOfThePage()
   /* EX9.: Write
    a function to change the footer address with a fake one  */

    const changeFooterAdress=function(){
        let footer=document.getElementsByClassName("footer-address")[0]
        footer.innerHTML="bahnof str 02, 91522 Ansbach, Germany"
    }
    /* changeFooterAdress() */
    /* EX10.: Write a
    function to add a CSS class to every Amazon link */

    const addCssClassAllLinks=function(){
        let a=document.getElementsByTagName("a")
        for(let i=0;i<a.length;i++)
        {
            a[i].classList.add('new-class-link')
        }
    }
    addCssClassAllLinks()
    /*  EX11: Write a function to
    toggle a CSS class for all the images in the table; that class should set
    the visibility of the image  */
    const toogleImageVisiblity=function(){
        let img=document.getElementsByClassName('first')[0]
        let btn=document.querySelector("button")

        console.log(img.style.display==="block") /* always flase, it doesnt matter if #first{display:block} or #first{display:none}*/
        console.log(img.style.display!=="block") /* always true, it doesnt matter if #first{display:block} or #first{display:none}*/
        console.log(img.style.display)
        if(img.classList.contains('new-class-image-visible'))
        {
            img.classList.remove('new-class-image-visible')
            img.classList.add('new-class-image-hidden')
            btn.innerHTML="show"
        } else {
          img.classList.remove('new-class-image-hidden')
          img.classList.add('new-class-image-visible')
          btn.innerHTML="hide"
        }
           /*  if(btn.innerHTML==="hide")
            {
                img.classList.remove('new-class-image-visible')
                btn.innerHTML="show" 
                img.classList.add('new-class-image-hidden')
            }
            else{
                 img.classList.remove('new-class-image-hidden') 
                img.classList.add('new-class-image-visible')
                btn.innerHTML="hide"
            } */

        }
    
    /* toogleImageVisiblity()
    const hideVisibleImage=function(){
        let image=document.getElementsByTagName("image")
        let btn=document.getElementsByTagName("button")
        for(let i=0;i<a.length;i++)
        {
            if(image[i].style.visibility==="visible")
            {
                image[i].style.visibility="hidden"
                btn.innerHTML="show"
            }
            else{
                image[i].style.visibility="hidden"
            }

        }
    } */
    /* EX12: Write a function to color the price of
    each product in a different one every time it's invoked */
    const colorThePrice=function(){
        let price=document.getElementsByClassName("price")
        console.log(price)
        let r,g,b
        for(let i=0;i<price.length;i++)
        {
         r=Math.floor(Math.random()*255)
         g=Math.floor(Math.random()*255)
         b=Math.floor(Math.random()*255)
            price[i].style.color="rgb(" + r + ", " + g + ", " + b + ")";
        }
    }
    colorThePrice()