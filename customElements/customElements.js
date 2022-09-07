   class MiMensaje extends HTMLElement{
        constructor(){
            super();
            this.addEventListener('click',function(e){
                alert('click en mensaje');
            });
            console.log("constructor cuando el elemento es criado");
            //propiedad para escuchar solo los atributos definidos en el arreglo usado
            //attributechangencallback
           
        }
        static get observedAttributes(){
            return ['msj'];
        }

        //callback cuando se inserta el elemtno en dom 
        connectedCallback(){
            console.log("connected callback:Cuando el elemento es insertado en el documento");
        }
        disconnectedCallback(){
            alert("diconnect: Cuando un elemento es eliminado del documento ")
        }
        adoptedCallback(){
            alert("adoptedCallback:Cuando el elemento es adoptado por otro documento");
        }
        // para poider afectar al mensjae de y se de un manera 

        //Aceso  da los atributos de DOM
        //Propiedad 'msj' sincronizado con el atribuitp 'msj'
        get msj(){
            return this.getAttribute('msj');
        }
        set msj(val){
            this.setAttribute('msj',val)

        }




        //cunado un atributo solo es llamandpo emn atrinuto observadop denidos en en 
        // lña porpoiedad observedatibuttes
        attributeChangedCallback(attrName,oldVal,newVal) {
            console.log("attributeschangen : cuando cambia un atributo");
            if(attrName === 'msj'){
                this.pintarmensaje(newVal)
            }
        }
        pintarmensaje(msj){
            this.innerHTML = msj;
        }
    }

    customElements.define("mi-mensaje",MiMensaje);

let miMensaje  =  document.createElement('mi-mensaje');
miMensaje.msj = "otro Mensaje";
document.body.appendChild(miMensaje);



//Tambien puedes crear un elemento en el operado new
//por que no se muestra la clase
let tercermensaje =  new MiMensaje();
tercermensaje.msj = 'Tercer Mensaje';
document.body.appendChild(tercermensaje);



let tuboton=  new MiMensaje();
tuboton.msj = 'Tu- Boton';
document.body.appendChild(tuboton)


/*

    class MiBoton extends HTMLElement{
        constructor(){
            super();
            this.addEventListener(`click`, alert(holaguapo))
        }
    }
    customElements.define("miboton",MiBoton);*/