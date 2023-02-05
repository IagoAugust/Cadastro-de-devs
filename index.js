const form = document.getElementById('devsForm')
const tec = document.getElementById('tec')

let numberTechnology = 0

let listTec = []


form.addEventListener('submit', allTechnology)

function allTechnology(ev) {
  ev.preventDefault()
  
  numberTechnology += 1

  const divTechnology = document.createElement('div')
  const name = document.querySelector('input[name="name"]').value
  const subTitle = document.createElement('h3')
  const labelTechnology = document.createElement('label')
  const nameTechnology = document.createElement('input')
  const titleRadio = document.createElement('a')
  const deleteTechnology = document.createElement('input')
  const salveTechnology = document.createElement('input')
  

  divTechnology.id = `divTechnology${numberTechnology}`

  subTitle.innerText = `Escreva o nome da tecnologia ${numberTechnology}`

  labelTechnology.htmlFor = `tecnologia${numberTechnology}`
  labelTechnology.innerText = 'Nome da tecnologia'

  nameTechnology.type = 'text'
  nameTechnology.name = 'tecnologia'
  nameTechnology.id = `tecnologia${numberTechnology}`

  titleRadio.innerText = 'Qual o tempo de experiência?'

  deleteTechnology.id = divTechnology
  deleteTechnology.type = 'button'
  deleteTechnology.value = 'Excluir'
  deleteTechnology.onclick = () => {
    removeChildren(divTechnology) 
    listTec.splice(numberTechnology - 1, 1)
    return alert('Tecnologia excluída com sucesso!')
  }
  
  salveTechnology.id = divTechnology
  salveTechnology.type = 'button'
  salveTechnology.value = 'Salvar'
  salveTechnology.onclick = () => {
    listTec.push({ 
      'id': divTechnology,
      'Nome da Pessoa': name,
      'Nome da Tecnologia': nameTechnology.value, 
      'Tempo de experiencia' : valueRadio() 
    })
    removeChildren(divTechnology)
    return alert('Tecnologia cadastrada com sucesso!')
    
  }

  form.appendChild(divTechnology)
  viewScreen(divTechnology,createBreakLine())
  viewScreen(divTechnology,subTitle)
  viewScreen(divTechnology,labelTechnology)
  viewScreen(divTechnology,nameTechnology)
  viewScreen(divTechnology,createBreakLine())
  viewScreen(divTechnology,createBreakLine())
  viewScreen(divTechnology,titleRadio)
  viewScreen(divTechnology,createBreakLine())
  viewScreen(divTechnology,createRadio('0a2', '0 - 2', numberTechnology))
  viewScreen(divTechnology,createLabelForRadio('0 - 2 anos', '0a2', numberTechnology))
  viewScreen(divTechnology,createBreakLine())
  viewScreen(divTechnology,createRadio('3a4', '3 - 4', numberTechnology))
  viewScreen(divTechnology,createLabelForRadio('3 - 4 anos', '3a4'))
  viewScreen(divTechnology,createBreakLine())
  viewScreen(divTechnology,createRadio('5+', '5+', numberTechnology)) 
  viewScreen(divTechnology,createLabelForRadio('5+ anos', '5+'))
  viewScreen(divTechnology,createBreakLine())
  viewScreen(divTechnology,createBreakLine())
  viewScreen(divTechnology,deleteTechnology)
  viewScreen(divTechnology,salveTechnology)




  function valueRadio(){
    const value = document.querySelector(`input[name="tempo de experiencia ${numberTechnology}"]:checked`).value
    return value
  }

  // console.log(listTec)
  

}

function viewScreen(divTechnology,element) {
  return divTechnology.appendChild(element)
}

function createRadio (id, value, numberTechnology){
  const radio = document.createElement('input')

  radio.type = 'radio'
  radio.name = `tempo de experiencia ${numberTechnology}`
  radio.id = `${id}${numberTechnology}`
  radio.value = value

  return radio
}

function createLabelForRadio (textLabel,id, numberTechnology) {
  const label = document.createElement('label')

  label.innerText = textLabel
  label.htmlFor = `${id}${numberTechnology}`

  return label
}


function createBreakLine() {
  const breakLine = document.createElement('br')
  return breakLine
}

function removeChildren(div) {
  form.removeChild(div)
}