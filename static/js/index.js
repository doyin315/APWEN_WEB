content=document.getElementById('more')
less=document.getElementById('less')
more=document.getElementById('status')
info=document.getElementById('more_info')
read_button=document.getElementById('read_button')
readless_button=document.getElementById('readless_button')
content.style.display='none'
less.style.display='none'
info.style.display='none'
readless_button.style.display='none'

more.addEventListener('click',function()
{
    less.style.display='inline'
    content.style.display='inline'
    more.style.display='none'
})

less.addEventListener('click',function()
{
    more.style.display='inline'
    content.style.display='none'
    less.style.display='none'
})
read_button.addEventListener('click', function(){
    info.style.display='inline' 
    read_button.style.display='none' 
    readless_button.style.display='inline'  
})
readless_button.addEventListener('click', function(){
    info.style.display='none'
    read_button.style.display='inline'
    readless_button.style.display='none'
})