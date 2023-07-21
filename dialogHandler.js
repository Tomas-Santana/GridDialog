const gd = new GridDialog({hello: 'world'})

gd.addToBody()
const someProps = {
    dialog:{
        style: {
            border: "none",
            borderRadius: "5px",
            padding: "20px",
            backgroundColor: "#eda5ef",
            boxShadow: "0px 5px 10px 2px rgba(0,0,0,0.6)"
    
        }

    },
}
const elementStyles = {
    input: {
        border: "none",
        padding: "5px",
        width: "150px",
    },
    button: {
        height: "30px",
        border: "2px solid grey",
        boxShadow: "2px 2px 0px 0px gray",
        borderRadius: "5px",
        padding: "5px",
    },
    h1: {
        fontSize: "30px",
        color: "white",
        fontFamily: "sans-serif"
    },
    p: {
        fontSize: "15px",
        color: "white",
        fontFamily: "sans-serif"
    },
    row: {
        justifyContent: "space-around",
        alignItems: "center",
        gap: "10px"
    }
}


gd.applyProps(someProps)

// //Showcase

const openButton = document.createElement("button")
openButton.innerHTML = "Abrir"
gd.applyStyles(elementStyles.button, openButton.style)
openButton.style.margin = "10px"
openButton.addEventListener("click", () => gd.show())

const openModalButton = document.createElement("button")
openModalButton.innerHTML = "Abrir como modal"
gd.applyStyles(elementStyles.button, openModalButton.style)
openModalButton.style.margin = "10px"
openModalButton.addEventListener("click", () => gd.showModal())



document.body.appendChild(openButton)
document.body.appendChild(openModalButton)



const addRowInput = document.createElement("input")
addRowInput.placeholder = "Elementos 🍚"
const addRowStyle = document.createElement("input")
addRowStyle.placeholder = "Estilos 🖌️"
const addRowElementStyle = document.createElement("input")
addRowElementStyle.placeholder = "Estilos de elementos 🖌️"

// first row
const helloText = document.createElement("h1")
helloText.innerHTML = "Hola dialogo"
const addRowButton = document.createElement("button")
addRowButton.innerHTML= "Crear fila"

const closeButton = document.createElement('button')
closeButton.innerText = 'Decir adios'

const clearAllButton = document.createElement('button')
clearAllButton.innerText = 'Borrar todo'

const deleteRowInput = document.createElement("input")
deleteRowInput.placeholder = "Numero de fila"
const deleteRowButton = document.createElement("button")
deleteRowButton.innerHTML = "Borrar fila"

function addControlRows ()  {
    gd.addRow([helloText, closeButton, clearAllButton], elementStyles.row, [elementStyles.h1, elementStyles.button, elementStyles.button])
    
    gd.addRow([addRowInput,addRowStyle,addRowElementStyle, addRowButton], elementStyles.row, [elementStyles.input, elementStyles.input,elementStyles.input, elementStyles.button])

    gd.addRow([deleteRowInput, deleteRowButton], {gap: "30px"}, [elementStyles.input, elementStyles.button])
}
addControlRows()


addRowButton.addEventListener("click", () => {

    if (addRowInput.value === "") {
        gd.addErrorRow("No puede crearse una fila vacia")
        return
    }
    let newRowStyles = {}
    if (addRowStyle.value) {
        try {
            newRowStyles = JSON.parse(addRowStyle.value)
        }
        catch {
            gd.addErrorRow("Error en el formato de los estilos")
            return 
        }
    }
    let newRowElementStyles = []
    if (addRowElementStyle.value) {
        try {
            newRowElementStyles = JSON.parse(addRowElementStyle.value)
        }
        catch {
            gd.addErrorRow("Error en el formato de los estilos de los elementos")
            
            return
        }
    }

    const wrapper = document.createElement("div")
    wrapper.innerHTML = addRowInput.value

    let elements  = Array.from(wrapper.children)
    if (elements.length === 0) {
        elements = [wrapper]
    }
    
    gd.addRow(elements, newRowStyles, newRowElementStyles)
})

// delete row



deleteRowButton.addEventListener('click', () => {
    gd.deleteRow(deleteRowInput.value)
})


gd.addToBody()

closeButton.addEventListener('click', () => {
    gd.hide()
})

clearAllButton.addEventListener('click', () => {
    gd.clearAll()
}
)





