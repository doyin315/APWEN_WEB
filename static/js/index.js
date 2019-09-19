content=document.getElementById('more')
less=document.getElementById('less')
more=document.getElementById('status')

content.style.display='none'
less.style.display='none'
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

