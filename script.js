const mateus = document.querySelector('.mateus')
const main = document.querySelector ('body')
let isJumping = false
let isGameOver = false;
let position = 0

function handleKeyDown(event) {
    if (event.keyCode === 32) {
        if(!isJumping){
            jump()   
        }
    }
}

function jump() {  
    

    isJumping = true

    let upInterval = setInterval(() => {
        if (position >= 300) {
            clearInterval(upInterval)
        let downInterval = setInterval(()=>{
            if (position <= 0) {
                clearInterval(downInterval)
                isJumping = false
            } else {
                position -= 20
                mateus.style.bottom = position + 'px'
            }
        },20)
        } else {
            position += 20

            mateus.style.bottom = position + 'px'
        }
        
    },20)
}

function apareceTiaThay(){
    const tiaThay = document.createElement('div')
    let tiaThayPosition = 1000
    let randomTime = Math.random() * 6000

    if (isGameOver) return;

    tiaThay.classList.add('tiaThay')
    tiaThay.style.left = 1000 + 'px'
    main.appendChild(tiaThay)

    const tiaThayImg = document.createElement('img')
    tiaThayImg.src = 'tia-thay.png'
    tiaThayImg.classList.add('tiaThayImg')
    tiaThay.appendChild(tiaThayImg)


   
    
   
    let leftTimer = setInterval(() => {
        if(tiaThayPosition < -60) {
            clearInterval(leftTimer)
            main.removeChild(tiaThay)
        }else if (tiaThayPosition > 0 && tiaThayPosition < 60 && position < 80) {
            clearInterval(leftTimer)
            isGameOver = true; 
            document.body.innerHTML = '<h2 class="game-over"> Tia Thay pegou o Mateus</h2> <div class="game-over-img"> <img src="game-over.png"></div>'
        
        } else {
            tiaThayPosition -= 8;
            tiaThay.style.left = tiaThayPosition + 'px'
        }
            
        
    },20)    

    setTimeout(apareceTiaThay, randomTime)
}
apareceTiaThay()

document.addEventListener('keydown', handleKeyDown)