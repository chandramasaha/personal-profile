for(let i=1; i<=5; i++)
 {
    const elem=document.getElementById(i+"");
    elem.addEventListener("click",visitLink);
 }


    function visitLink(event){
        const id=event.target.id;
        
        if(id=="1")
        {
            setTimeout(function() { window.location = 'http://www.instagram.com/rainyymoon/'; }, 5000);
        }


        else if(id=="2")
        {
            setTimeout(function() { window.location='https://www.linkedin.com/in/chandramasaha/';}, 5000);
        }

        else if(id=="3")
        {
            setTimeout(function() { window.location='https://www.figma.com/@chandrama';}, 5000);
        }

        else if(id=="4")
        {
            setTimeout(function() { window.location='https://github.com/chandramasaha';}, 5000);
        }

        else 
        {
            setTimeout(function() { window.location='https://chandramasaha.editorx.io/showcase';}, 5000);
        }


          }
          