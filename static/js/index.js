
info=document.getElementById('more_info')
read_button=document.getElementById('read_button')
readless_button=document.getElementById('readless_button')

info.style.display='none'
readless_button.style.display='none'


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