
const oUl = document.getElementById('oUl')
const aa = oUl.querySelectorAll('a')
const as = Array.from(aa)


as.forEach((e, i) => {
    e.onclick = function () {
        if (i == 0) {
            let oli2 = this.parentNode.parentNode.getElementsByTagName('li')
            let fli = e.parentNode
            console.log(fli);
            
            fli.onclick = function () {
                for (let j = 0; j < oli2.length; j++) {
                    oli2[j].classList.remove('active')

                }
                fli.classList.add('active')
                
            }

            
        }
        let next = this.nextElementSibling
        if (next) {
            let oul = this.parentNode.parentNode.getElementsByTagName('ul')
            let nextli = next.getElementsByTagName('li')
            let oli = this.parentNode.parentNode.getElementsByTagName('li')
            let len = nextli.length * 32
            let ali = Array.from(next.children)
            if (next != oul) {
                if (next.style.height == len + 'px') {
                    for (let i = 0; i < oul.length; i++) {
                        oul[i].style.height = '0px'
                    }
                    next.style.height = '0px'
                }
                else {
                    for (let i = 0; i < oul.length; i++) {
                        oul[i].style.height = '0px'
                    }
                    next.style.height = len + 'px'
                }
            }
            ali.forEach(e => {
                e.onclick = function () {
                    for (let j = 0; j < oli.length; j++) {
                        oli[j].classList.remove('active')

                    }
                    this.classList.add('active')
                }
            })

        }
    }
});
