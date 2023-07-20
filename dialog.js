class GridDialog extends HTMLDialogElement {
    constructor(props) {
        super();
        if (props !== undefined) {
            console.log(props)
            this.object = {};
            this.applyProps(props)
        }
        this.style.flexDirection = 'column'
        
        // setTimeout(() => {
        //     console.log(this.object)
        // }, 10);
        
    }
    #iterateAndAsign(obj, target) {
        Object.keys(obj).forEach(key => {
            if (typeof obj[key] === 'object' && obj[key] !== null) {
                if (key === "style") {
                    this.applyStyles(obj[key], this.style)
                    return
                }
                this.#iterateAndAsign(obj[key], target[key])
            }
            target[key] = obj[key]
        })
    }
    showModal() {
        super.showModal()
        this.style.display = 'flex'
        this.style.flexDirection = 'column'
    }
    show() {
        super.show()
        this.style.display = 'flex'
        this.style.flexDirection = 'column'
    }

    addRow(elements, styles){
        const row = document.createElement('div')
        row.style.display = 'flex'
        this.applyStyles(styles, row.style)
        elements.forEach(element => {
            row.appendChild(element)
        });
        this.appendChild(row)
    }
    deleteRow(rowNumber){
        this.removeChild(this.children[rowNumber])
    }
    deleteElement(rowNumber, element){
        this.children[rowNumber].removeChild(element)
    }
    clearAll(){
        this.innerHTML = ''
    }
    addToBody(){document.body.appendChild(this);}
    getObject(){return this.object;}
    hide() {
        super.close()
        this.style.display = 'none'
    }
    applyStyles(styles, target) {
        for (const key in styles) {
            console.log(key)
            target[key] = styles[key]
        }
    }
    applyProps(props) {

        this.#iterateAndAsign(props, this)        
        this.object = Object.assign({}, this.object, props);
    }
}

customElements.define('grid-dialog', GridDialog, { extends: 'dialog' });


const gd = new GridDialog({hello: 'world'})

const h1 = document.createElement('h1')
h1.innerText = 'Hello World'
const h11 = document.createElement('h1')
h11.innerText = 'goodbuye World'

const h2 = document.createElement('h2')
h2.innerText = 'Hello World'

gd.addRow([h1, h11], {gap: '10px', justifyContent: 'space-between', border: '1px solid black'})
gd.addRow([h2], {})

const button = document.createElement('button')
button.innerText = 'click me'

gd.addRow([button], {justifyContent: 'center'})


gd.addToBody()
gd.showModal()

button.addEventListener('click', () => {
    gd.hide()
}
)

console.log(gd.getObject())





