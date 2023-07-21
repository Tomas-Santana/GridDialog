const gd = new GridDialog({hello: 'world'})

gd.addToBody()
gd.showModal()
const someProps = {
    dialog:{
        style: {
            border: "none",
            borderRadius: "10px",
            padding: "20px",
            backgroundColor: "DarkOrchid",
            boxShadow: "0px 5px 10px 2px rgba(0,0,0,0.6)"
    
        }

    },
}
const elementStyles = {
    input: {
        border: "none",
        borderRadius: "5px",
        padding: "5px",
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


// add row
const addRowInput = document.createElement("input")
addRowInput.placeholder = "Elementos 🍚"
const addRowStyle = document.createElement("input")
addRowStyle.placeholder = "Estilos 🖌️"
const addRowElementStyle = document.createElement("input")
addRowElementStyle.placeholder = "Estilos de elementos 🖌️"

const helloText = document.createElement("h1")
helloText.innerHTML = "Hola dialogo"
const addRowButton = document.createElement("button")
addRowButton.innerHTML= "Crear fila"

const closeButton = document.createElement('button')
closeButton.innerText = 'Decir adios'

gd.addRow([helloText, closeButton], elementStyles.row, [elementStyles.h1, elementStyles.button])

// gd.addRow([addRowInput,addRowStyle,addRowElementStyle, addRowButton], elementStyles.row, [elementStyles.input, elementStyles.input,elementStyles.input, elementStyles.button])

// addRowButton.addEventListener("click", () => {
//     let newRowStyles = {}
//     if (addRowStyle.value) {
//         try {
//             newRowStyles = JSON.parse(addRowStyle.value)
//         }
//         catch {
//             gd.addErrorRow("Error en el formato de los estilos")
//             return 
//         }
//     }
//     let newRowElementStyles = []
//     if (addRowElementStyle.value) {
//         try {
//             newRowElementStyles = JSON.parse(addRowElementStyle.value)
//         }
//         catch {
//             gd.addErrorRow("Error en el formato de los estilos de los elementos")
            
//             return
//         }
//     }

//     const wrapper = document.createElement("div")
//     wrapper.innerHTML = addRowInput.value

//     let elements  = Array.from(wrapper.children)
//     if (elements.length === 0) {
//         elements = [wrapper]
//     }
    
//     gd.addRow(elements, newRowStyles, newRowElementStyles)
// })

// // delete row

// const deleteRowInput = document.createElement("input")
// deleteRowInput.placeholder = "Numero de fila"
// const deleteRowButton = document.createElement("button")
// deleteRowButton.innerHTML = "Borrar fila"

// gd.addRow([deleteRowInput, deleteRowButton], {gap: "30px"})

// deleteRowButton.addEventListener('click', () => {
//     gd.deleteRow(deleteRowInput.value)
// })


// gd.addToBody()
// gd.showModal()

// closeButton.addEventListener('click', () => {
//     gd.hide()
// })



