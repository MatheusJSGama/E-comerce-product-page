const btnMenu = document.querySelector(".ham-img")
const btnCloseMenu = document.querySelector(".close-img")
const viewCart = document.querySelector(".view-cart")
const openModal = document.querySelector(".carrosel-images")
const imagesCarroselModal = document.querySelectorAll(".carrossel-images-modal")
const btnCloseModal = document.querySelector(".modal-close")
const btnPreviusModal = document.querySelector(".previus")
const btnNextModal = document.querySelector(".next")
const thumb = document.querySelectorAll(".thumbnail-images")
const thumbModal = document.querySelectorAll(".thumbnail-images-modal")
const modal = document.querySelector(".modal")
const btnMinus = document.querySelector(".fa-minus")
const btnPlus = document.querySelector(".fa-plus")
const quantityProduct = document.querySelector(".quantity")
const btnAddToCart = document.querySelector(".btn-add-to-cart")
const cartQuantity = document.querySelector(".cart-quantity")
const btnPreviusCarrosel = document.querySelector(".previus-carrosel")
const btnNextCarrosel = document.querySelector(".next-carrosel")

btnMenu.addEventListener("click", () => {
    document.querySelector(".mobile-navegation").classList.remove("inactive")
    document.querySelector(".overlay").classList.remove("inactive")
    document.querySelector(".mobile-navegation").classList.add("active")
    document.querySelector(".overlay").classList.add("active")
})

btnCloseMenu.addEventListener("click", () => {
    document.querySelector(".mobile-navegation").classList.add("inactive")
    document.querySelector(".mobile-navegation").classList.remove("active")
    document.querySelector(".overlay").classList.add("inactive")
})

document.querySelector(".cart-shopping").addEventListener("click", () => {
    document.querySelector(".cart-itens").classList.toggle("show")
})


thumb.forEach(function (element, index) {
    element.addEventListener("click", () => {
        closeImageOpen()
        showImage(index)
        thumbImagechange(element)
    })
});

function thumbImagechange(element) {
    const borda = document.querySelector(".show-border")
    const opacity = document.querySelector(".show-opacity")
    borda.classList.remove("show-border")
    opacity.classList.remove("show-opacity")
    element.classList.add("show-border")
    element.firstElementChild.classList.add("show-opacity")
}

function closeImageOpen() {
    const imageOpen = document.querySelector(".open")
    imageOpen.classList.remove("open")
}

function showImage(index) {
    const imagesCarrosel = document.querySelectorAll(".carrossel-images")
    imagesCarrosel[index].classList.add("open")
}

let modalSlide = 0

function openAndCloseModal() {
    openModal.addEventListener("click", () => {
        modal.classList.add("open-modal")
    })
    btnCloseModal.addEventListener("click", () => {
        modal.classList.remove("open-modal")
    })
    showOrHideBtn()
}

openAndCloseModal()

btnPreviusModal.addEventListener("click", () => {
    if (modalSlide === 0) {
        btnPreviusModal.classList.add("opacity")
        return
    }

    modalSlide--
    closeImageOpenModal()
    showImageModal(modalSlide)
    showOrHideBtn()
})

btnNextModal.addEventListener("click", () => {
    if (modalSlide === imagesCarroselModal.length - 1) {
        return
    }

    modalSlide++
    closeImageOpenModal()
    showImageModal(modalSlide)
    showOrHideBtn()
})

thumbModal.forEach(function (element, index) {
    element.addEventListener("click", () => {
        closeImageOpenModal()
        showImageModal(index)
        thumbModalchange(element)
        currentImage(index)
        showOrHideBtn()
    })
})

function currentImage(index) {
    modalSlide = index
}

function closeImageOpenModal() {
    const imageOpenModal = document.querySelector(".open-modal-image")
    imageOpenModal.classList.remove("open-modal-image")
}

function showImageModal(index) {
    imagesCarroselModal[index].classList.add("open-modal-image")
}

function thumbModalchange(element) {
    const borda = document.querySelector(".show-border-modal")
    const opacity = document.querySelector(".show-opacity-modal")
    borda.classList.remove("show-border-modal")
    opacity.classList.remove("show-opacity-modal")
    element.classList.add("show-border-modal")
    element.firstElementChild.classList.add("show-opacity-modal")
}

function showOrHideBtn() {
    const notFirstImage = modalSlide != 0
    if (notFirstImage) {
        document.querySelector(".previus").classList.remove("opacity-btn-modal")
    } else {
        document.querySelector(".previus").classList.add("opacity-btn-modal")
    }

    const itslastImage = modalSlide != 0 && modalSlide === imagesCarroselModal.length - 1
    if (itslastImage) {
        document.querySelector(".next").classList.add("opacity-btn-modal")
    } else {
        document.querySelector(".next").classList.remove("opacity-btn-modal")
    }
}

const sneakerObject = {
    image: "src/images/image-product-1-thumbnail.jpg",
    sneakerName: "Fall Limited Edition Sneakers",
    sneakerPrice: 125.00,
    quantity: "",
    totalPrice: "",
    setInfo(quantity){
        this.quantity = quantity
        this.totalPrice = quantity * this.sneakerPrice
    }
}


let quantity = 1
quantityProduct.innerHTML = quantity
showOrHideQuantity(quantity)


btnMinus.addEventListener("click",()=>{
    if(quantity === 1){
        return
    }
    quantity--
    quantityProduct.innerHTML = quantity
    showOrHideQuantity(quantity)
    sneakerObject.setInfo(quantity)
} )

 btnPlus.addEventListener("click",()=>{
        quantity++
        quantityProduct.innerHTML = quantity
        showOrHideQuantity(quantity)
} )

function showOrHideQuantity(quantity){
    if(quantity === 1){
        btnMinus.classList.add("opacity")
    }else{
        btnMinus.classList.remove("opacity")
    }
}

btnAddToCart.addEventListener("click", ()=>{
    sneakerObject.setInfo(quantityProduct.innerHTML)
    setShopCart.setScren(sneakerObject)
    cartQuantity.innerHTML = quantityProduct.innerHTML
    document.querySelector(".empty-cart").classList.add("close")
    document.querySelector(".item-cart").classList.add("show")
    document.querySelector(".icon-delete").addEventListener("click", ()=>{
        document.querySelector(".item-cart").classList.remove("show")
        document.querySelector(".empty-cart").classList.remove("close")
        cartQuantity.innerHTML = 0
    })
})

const setShopCart = {
    productImage: document.querySelector(".product-img-cart"),
    productName: document.querySelector(".product-name"),
    productPrice: document.querySelector(".product-price"),
    productQuantity: document.querySelector(".product-quantity"),
    productTotalPrice: document.querySelector(".total-purchase"),
    setScren(sneakerObject){
        this.productImage.src = sneakerObject.image
        this.productName.innerHTML = sneakerObject.sneakerName
        this.productPrice.innerHTML = `$${sneakerObject.sneakerPrice} x`
        this.productQuantity.innerHTML = sneakerObject.quantity
        this.productTotalPrice.innerHTML = `$${sneakerObject.totalPrice}`
    }
}

let slideCarrosel = 0
showOrHideBtnCarrosel()

 btnPreviusCarrosel.addEventListener("click", ()=>{
    if(slideCarrosel === 0){
        return
    }
    
    slideCarrosel--
    closeImagerCarrosel()
    showImageCarrosel()
    showOrHideBtnCarrosel()
 })

 btnNextCarrosel.addEventListener("click", ()=>{
    const imagesCarrosel = document.querySelectorAll(".carrossel-images")
    if(slideCarrosel === imagesCarrosel.length -1){
        return
    }

    slideCarrosel++

    closeImagerCarrosel()
    showImageCarrosel()
    showOrHideBtnCarrosel()
 })

 function showImageCarrosel(){
    const imagesCarrosel = document.querySelectorAll(".carrossel-images")
    imagesCarrosel[slideCarrosel].classList.add("open")
 }

 function closeImagerCarrosel(){
    const imageOpen = document.querySelector(".open")
    imageOpen.classList.remove("open")
 }

 function showOrHideBtnCarrosel() {
    const notFirstImage = slideCarrosel != 0
    if (notFirstImage) {
        document.querySelector(".previus-carrosel").classList.remove("opacity-carrosel")
    } else {
        document.querySelector(".previus-carrosel").classList.add("opacity-carrosel")
    }

    const itslastImage = slideCarrosel != 0 && slideCarrosel === imagesCarroselModal.length - 1
    if (itslastImage) {
        document.querySelector(".next-carrosel").classList.add("opacity-carrosel")
    } else {
        document.querySelector(".next-carrosel").classList.remove("opacity-carrosel")
    }
}