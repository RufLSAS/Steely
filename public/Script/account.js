
let readURL = function(input) {
    if (input.files && input.files[0]) {
        let reader = new FileReader()

        reader.onload = function (e) {
            $('.profile-pic').attr('src', e.target.result)
        }

        reader.readAsDataURL(input.files[0])
    }
}

$(".file-upload").on('change', function(){
    readURL(this)
});

$(".upload-button").on('click', function() {
$(".file-upload").click()
});

const btn = document.querySelector('#btn-list')
btn.addEventListener('click', function() {
btn.innerHTML =
(btn.innerHTML === 'Подписаться') ? btn.innerHTML = 'Отписаться' : btn.innerHTML = 'Подписаться'
})

const dropArea = document.querySelector('.drag-area')

dragText = dropArea.querySelector('strong')
let button = document.querySelector('.download-files__btn')
let input = document.querySelector('.add__file-back')

let file

button.onclick = () => {
input.click()
}

input.addEventListener('change', function() {
file = this.files[0]
showFile()
})

dropArea.addEventListener('dragover', (e) => {
e.preventDefault()
dropArea.classList.add('active')
dragText.textContent = 'Relese to Upload File'
})

dropArea.addEventListener('dragleave', () => {
dropArea.classList.remove('active')
dragText.textContent = 'Drop & Drop to Upload File'
})

dropArea.addEventListener('drop', (e)=> {
e.preventDefault()
file = e.dataTransfer.files[0]
showFile()
})

function showFile() {
let fileType = file.type
let validExtensions = ["image/jpeg", "image/jpg", "image/png"];
if (validExtensions.includes(fileType)) {
    let fileReader = new FileReader()
    fileReader.onload = () => {
        let fileURL = fileReader.result
        let imgTag = `<img src='${fileURL} alt="">`
        dropArea.innerHTML = imgTag
    }
    fileReader.readAsDataURL(file)
} else {
    alert('Недопустимый формат файла')
    dropArea.classList.remove('active')
}
}