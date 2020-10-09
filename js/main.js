let dataArray = [
    {
        buttonTitle:"tiempo aire electrónico",
        content:"Contenido de tiempo aire",
        logoSet:[
            "https://picsum.photos/id/237/50",
            "https://picsum.photos/id/200/50",
            "https://picsum.photos/id/222/50",
            "https://picsum.photos/id/237/50",
            "https://picsum.photos/id/27/50",
            "https://picsum.photos/id/37/50",
            "https://picsum.photos/id/2/50",
            "https://picsum.photos/id/7/50",
            "https://picsum.photos/id/217/50",
            "https://picsum.photos/id/17/50",
            "https://picsum.photos/id/78/50",
        ]
    },
    {
        buttonTitle:"pago de servicios (telefonía)",
        content:"Contenido de pago de servicios",
        logoSet:[
            "https://picsum.photos/id/237/50",
            "https://picsum.photos/id/200/50",
            "https://picsum.photos/id/222/50",
            "https://picsum.photos/id/237/50",
            "https://picsum.photos/id/27/50"
        ]
    },
    {
        buttonTitle:"pago de servicios (tv de paga)",
        content:"Contenido de tv",
        logoSet:[
            "https://picsum.photos/id/37/50",
            "https://picsum.photos/id/24/50",
            "https://picsum.photos/id/76/50",
            "https://picsum.photos/id/87/50",
            "https://picsum.photos/id/12/50",
            "https://picsum.photos/id/78/50",
        ]
    },
    {
        buttonTitle:"pago de servicios (energía)",
        content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus tenetur officiis soluta nobis quas temporibus.",
        logoSet:[
            "https://picsum.photos/id/37/50",
            "https://picsum.photos/id/24/50",
            "https://picsum.photos/id/76/50",
            "https://picsum.photos/id/87/50",
            "https://picsum.photos/id/12/50",
            "https://picsum.photos/id/78/50",
        ]
    },
    {
        buttonTitle:"pago de servicios (agua)",
        content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus tenetur officiis soluta nobis quas temporibus.",
        logoSet:[
            "https://picsum.photos/id/37/50",
            "https://picsum.photos/id/24/50",
            "https://picsum.photos/id/76/50",
            "https://picsum.photos/id/87/50",
            "https://picsum.photos/id/12/50",
            "https://picsum.photos/id/78/50",
        ]
    },
    {
        buttonTitle:"pago de impuestos (estatales)",
        content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus tenetur officiis soluta nobis quas temporibus.",
        logoSet:[
            "https://picsum.photos/id/37/50",
            "https://picsum.photos/id/24/50",
            "https://picsum.photos/id/76/50",
            "https://picsum.photos/id/87/50",
            "https://picsum.photos/id/12/50",
            "https://picsum.photos/id/78/50",
        ]
    },
    {
        buttonTitle:"ventas por catálogo",
        content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus tenetur officiis soluta nobis quas temporibus.",
        logoSet:[
            "https://picsum.photos/id/37/50",
            "https://picsum.photos/id/24/50",
            "https://picsum.photos/id/76/50",
            "https://picsum.photos/id/87/50",
            "https://picsum.photos/id/12/50",
            "https://picsum.photos/id/78/50",
        ]
    },
    {
        buttonTitle:"internet prepagado",
        content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus tenetur officiis soluta nobis quas temporibus.",
        logoSet:[
            "https://picsum.photos/id/37/50",
            "https://picsum.photos/id/24/50",
            "https://picsum.photos/id/76/50",
            "https://picsum.photos/id/87/50",
            "https://picsum.photos/id/12/50",
            "https://picsum.photos/id/78/50",
        ]
    },
    {
        buttonTitle:"pejae autopistas",
        content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus tenetur officiis soluta nobis quas temporibus.",
        logoSet:[
            "https://picsum.photos/id/37/50",
            "https://picsum.photos/id/24/50",
            "https://picsum.photos/id/76/50",
            "https://picsum.photos/id/87/50",
            "https://picsum.photos/id/12/50",
            "https://picsum.photos/id/78/50",
        ]
    },
    {
        buttonTitle:"servicios financieros",
        content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus tenetur officiis soluta nobis quas temporibus.",
        logoSet:[
            "https://picsum.photos/id/37/50",
            "https://picsum.photos/id/24/50",
            "https://picsum.photos/id/76/50",
            "https://picsum.photos/id/87/50",
            "https://picsum.photos/id/12/50",
            "https://picsum.photos/id/78/50",
        ]
    },
    {
        buttonTitle:"monederos electrónicos",
        content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus tenetur officiis soluta nobis quas temporibus.",
        logoSet:[
            "https://picsum.photos/id/37/50",
            "https://picsum.photos/id/24/50",
            "https://picsum.photos/id/76/50",
            "https://picsum.photos/id/87/50",
            "https://picsum.photos/id/12/50",
            "https://picsum.photos/id/78/50",
        ]
    },
    {
        buttonTitle:"entretenimiento",
        content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus tenetur officiis soluta nobis quas temporibus.",
        logoSet:[
            "https://picsum.photos/id/37/50",
            "https://picsum.photos/id/24/50",
            "https://picsum.photos/id/76/50",
            "https://picsum.photos/id/87/50",
            "https://picsum.photos/id/12/50",
            "https://picsum.photos/id/78/50",
        ]
    }
]

const printAccordion = () => {
    dataArray.forEach( ( item, index )  => {
        /*destructuring*/
        let { buttonTitle, content, logoSet } = item; 
        $("#main-accordion").append(`
            <div class="card">
                <div class="card-header" id="section-${index}">
                    <h2 class="mb-0">
                        <button class="btn btn-link btn-block text-left text-uppercase" type="button" data-toggle="collapse"
                            data-target="#collapse-${index}" aria-expanded="true" aria-controls="collapse-${index}">
                            ${buttonTitle}
                        </button>
                    </h2>
                </div>

                <div id="collapse-${index}" class="collapse" aria-labelledby="section-${index}"
                    data-parent="#main-accordion">
                    <div class="card-body">
                        <p>${content}</p>
                        <div id="logo-wrapper-${index}" class="logo-wrapper d-flex justify-content-around flex-wrap"></div>
                    </div>
                </div>
            </div>
        `)

        logoSet.forEach( logo => {
            $(`#logo-wrapper-${index}`).append(`
                <img class="mb-2" src=${logo}>
            `)
        })
    })
}

printAccordion()

const printList = () => {
    dataArray.forEach( ( item, index )  => {
        let { buttonTitle } = item
        $("#services-list").append(`
            <li 
                class="list-control list-group-item list-group-item-success text-uppercase"
                data-index=${index}    
            >
               ${ buttonTitle }
            </li>
        `)
    })

    $(".list-control").click(updateContent)
}

const updateContent = event => {
    console.log(event.target)
    let elementIndex = event.target.dataset.index
    console.log(elementIndex)
    console.log(dataArray[elementIndex])
    let elementData = dataArray[elementIndex]
    let { content, logoSet } = elementData

    $("#content-wrapper").find("p").text(content)
    $("#list-logo-wrapper").empty();
    logoSet.forEach( logo => {
        $("#list-logo-wrapper").append(`
            <img class="mb-3" src=${logo}>
        `)
    })
}

printList()