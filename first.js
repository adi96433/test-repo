function myFunction(e){
    let arr=[];
    let element=e.target;
    console.log(element);
    console.log(element.nodeName);
    if(element.nodeName=="LABEL" || element.nodeName=="IMG")
    {
        element=element.parentNode;
    }
    let img_src_tobeshown=element.childNodes[0].src;
    console.log(img_src_tobeshown,);

    let trgt_element=document.querySelector(".flex-item-right").childNodes[0];
    console.log(trgt_element);

    if(img_src_tobeshown==undefined)
        return;
    trgt_element.src=img_src_tobeshown;

}
