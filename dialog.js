class GridDialog extends HTMLElement {
    constructor(props) {
        super();
        

        this.style.position = 'fixed'
        this.style.top = '0'
        this.style.left = '0'

        this.dialog = document.createElement('dialog')

        if (props !== undefined) {
            this.applyProps(props)
            this.props = props
        }
        this.appendChild(this.dialog)
        // console.log(this.dialog)

        
    }
    #iterateAndAsign(obj, target) {
        
        Object.keys(obj).forEach(key => {
            console.log(key, obj[key])
            if (typeof obj[key] === 'object' && obj[key] !== null) {
                if (key === "style") {
                    console.log(`applyStyles to ${target}`)
                    this.applyStyles(obj[key], target.style)
                    return
                }
                this.#iterateAndAsign(obj[key], target[key])
            }
            target[key] = obj[key]
        })
    }
    showModal() {
        this.dialog.showModal()
        this.dialog.style.gap = "20px"
        this.dialog.style.display = 'flex'
        this.dialog.style.flexDirection = 'column'
    }
    show() {
        this.dialog.show()
        this.dialog.style.display = 'flex'
        this.dialog.style.gap = "20px"
        this.dialog.style.flexDirection = 'column'
    }
    //document the funcyion with jsdoc
    /**
     * Adds a row to the dialog
     * @param {[HTMLElement]} elements 
     * @param {object} rowStyles styles for the row
     * @param {[object]} elementStyles an array of styles for each element
     */
    addRow(elements, rowStyles={}, elementStyles=[]) {
        const row = document.createElement('div')
        row.style.display = 'flex'
    
        this.applyStyles(rowStyles, row.style)
        elements.forEach((element, i) => {
            
            if (elementStyles[i] === undefined) elementStyles[i] = {}
            this.applyStyles(elementStyles[i], element.style)
            row.appendChild(element)
        });
        console.log(this.dialog)
        this.dialog.append(row)
        
        
    }
    addErrorRow(error, time=3000){
        const errorStyles = {
            color: 'red',
            fontSize: '20px',
            fontWeight: 'bold',
            fontFamily: 'monospace',
            display: 'flex',
            justifyContent: 'center',
        }
        const row = document.createElement('div')

        this.applyStyles(errorStyles, row.style)

        row.innerHTML = error

        this.dialog.appendChild(row)

        setTimeout(() => this.deleteRow(this.dialog.children.length - 1), time)



    }
    deleteRow(rowNumber){
        this.dialog.removeChild(this.children[rowNumber])
    }
    deleteElement(rowNumber, element){
        this.dialog.children[rowNumber].removeChild(element)
    }
    clearAll(){
        this.dialog.innerHTML = ''
    }
    addToBody(){document.body.appendChild(this);}
    getObject(){return this}
    hide() {
        this.dialog.close()
    }
    applyStyles(styles, target) {
        console.log(this.dialog)
        for (const key in styles) {
            this.dialog.style[key] = styles[key]
        }
        console.log( this.dialog)

    }
    applyProps(props) {
        this.#iterateAndAsign(props, this)        
    }
}

customElements.define('grid-dialog', GridDialog);




















