const mainContainer = document.getElementById('mainContainer')
const currentCalc = document.getElementById('currentCalc')

mainContainer.addEventListener('click', function (event) {
    let currentPress = event.target.innerHTML
    if(event.target.localName == 'button'){
        if(currentPress == 'Clear'){
            currentCalc.innerHTML = 0
        } else{
            if (currentCalc.innerHTML == 0) {
                currentCalc.innerHTML = currentPress
            } else {
                if(!currentPress.includes('.')){
                    currentCalc.innerHTML += currentPress
                } else if(!currentCalc.innerHTML.includes('.')&&currentPress.includes('.')){
                    currentCalc.innerHTML += currentPress
                }
            }
        }
    }
})