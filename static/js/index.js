s=document.getElementById('status')
s.innerText='View More'

p=document.getElementById('more')
p.style.display='none';
s.addEventListener('click', function(){
    if (s.innerText=='View More'){
    s.innerText='View Less';
    p.style.display='inline';
    }
    else{
        s.innerText='View More'
        p.style.display='none';
    }
})

