let page="hello"
let input_text=""

function start(the_page){
    if(page=="hello"){
    let mydiv=the_page.div(()=>{
        the_page.h1("Hello world")
    })
    mydiv.inline_style({
        "color":"red"
    })
    the_page.input({
        placeholder:"Type something",
        value:input_text,
        render_focusout:(input)=>{
            input_text = input.value
        }
    })
   let mybutton=the_page.button(()=>{
    the_page.p("Goodbye")
    the_page.set_prop("render_click",()=>{
        page="Bye"
    })
    the_page.inline_style({
        "color":"white",
        "background-color":"black",
        "border-radius":"50%"
    })
   })
}
    if(page=="Bye"){
        let mydiv2=the_page.div(()=>{
            the_page.h1("Goodbye world")
            the_page.inline_style({
                "color":"blue"
            })

        })
        let mybutton2=the_page.button(()=>{
            the_page.p("Hello")
            the_page.set_prop("render_click",()=>{
                page="hello"
            })
            the_page.inline_style({
                "color":"white",
                "background-color":"black",
                "border-radius":"50%"
            })
        })
    }
}

function main(){

    let element = createElement404(start,document.body)
    
    element.render()
}
    window.onload=main