function Tabs() {
    let tabs = document.getElementsByClassName('tab');
    let articles = document.querySelectorAll('article');
    for (let i = 0; i < tabs.length; i++) {
         tabs[i].addEventListener('click', function() { 
           for (let a = 0; a < tabs.length; a++) {
               tabs[a].style.borderBottom = '1px solid #d8d8d8';
           }
           
           for (let b = 0; b < articles.length; b++) {
               articles[b].style.display = 'none';
           }
           document.getElementById('artcl' + (i + 1)).style.display = 'block';
           document.getElementById('tab' + (i + 1)).style.borderBottom = 'none';
    });
    }
};
Tabs();