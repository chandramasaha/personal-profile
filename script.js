for(let i=1; i<=5; i++)
 {
    const elem=document.getElementById(i+"");
    elem.addEventListener("click",visitLink);
 }


    function visitLink(event){
        const id=event.target.id;
        
        if(id=="1")
        {
            setTimeout(function() { window.open('https://www.instagram.com/rainyymoon/', "_blank") }, 5000);
        }


        else if(id=="2")
        {
            setTimeout(function() { window.open('https://www.linkedin.com/in/chandramasaha/', "_blank") }, 5000);
        }

        else if(id=="3")
        {
            setTimeout(function() { window.open('https://www.figma.com/@chandrama', "_blank") }, 5000);
        }

        else if(id=="4")
        {
            setTimeout(function() { window.open('https://github.com/chandramasaha', "_blank") }, 5000);
        }

        else 
        {
            setTimeout(function() { window.open('https://chandramasaha.editorx.io/showcase', "_blank") }, 5000);
        }


          }
          