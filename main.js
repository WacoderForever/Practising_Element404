function start(the_page){
    let mydiv=the_page.div(()=>{
        the_page.h1("Hello world")
    })
    mydiv.inline_style({
        "color":"red"
    })
}

function main(){

    let element = createElement404(start,document.body)
    
    element.render()
}
    window.onload=main