for(let i=1; i<=5; i++)
 {
    const elem=document.getElementById(i+"");
    elem.addEventListener("click",visitLink);
 }


    function visitLink(event){
        const id=event.target.id;
        
        if(id=="1")
        {
            window.location='http://www.instagram.com/rainyymoon/';
        }

        else if(id=="2")
        {
            window.location='https://www.linkedin.com/in/chandramasaha/';
        }

        else if(id=="3")
        {
            window.location='https://www.figma.com/@chandrama';
        }

        else if(id=="4")
        {
            window.location='https://github.com/chandramasaha';
        }

        else 
        {
            window.location='https://chandramasaha.editorx.io/showcase';
        }


          }

