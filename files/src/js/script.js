

function NavOpen()
{
    document.querySelector('.nav-modal').style.display = 'block';
    document.querySelector('.nav-container').style.left = '0';
  
}

function NavClose()
{
    document.querySelector('.nav-modal').style.display = 'none';
    document.querySelector('.nav-container').style.left = '-250px';
}