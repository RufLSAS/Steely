const textarea = document.querySelector('textarea')
textarea.addEventListener('keyup', e =>{
    textarea.style.height = '63px'
    let scrollHeight = e.target.scrollHeight
    textarea.style.height = `${scrollHeight}px`
})

function replaceWrapper() {
    const wrapper = document.querySelector('.wrapper');
    const replacement = document.createElement('div');
    replacement.textContent = 'Thank you for your inquiry!';
    replacement.classList.add('replacement');
    
    wrapper.parentNode.replaceChild(replacement, wrapper);

    setTimeout(function() {
        window.location.href = '../index/Suite.html';
    }, 1000);
}