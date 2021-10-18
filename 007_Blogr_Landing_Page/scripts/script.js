document.querySelector("#hamburger").addEventListener("click", openMenu, false );
const navCard = document.querySelector("#nav-card");

const subMenuProduct = document.querySelector("#sub-menu-product");
const subMenuCompany = document.querySelector("#sub-menu-company");
const subMenuConnect = document.querySelector("#sub-menu-connect");
document.querySelector("#sub-menu-product-act").addEventListener("click", openSubMenuProduct, false );
document.querySelector("#sub-menu-company-act").addEventListener("click", openSubMenuCompany, false );
document.querySelector("#sub-menu-connect-act").addEventListener("click", openSubMenuConnect, false );

function openMenu(){
    
    if (navCard.classList.contains('nav-card-off')) {
        document.querySelector("#hamburger img").src = "img/icon-close.svg"; 
    }
    else {
        document.querySelector("#hamburger img").src = "img/icon-hamburger.svg";
    }

    navCard.classList.toggle('nav-card-off');
    subMenuProduct.classList.add('sub-menu-hide');
    subMenuCompany.classList.add('sub-menu-hide');
    subMenuConnect.classList.add('sub-menu-hide');
    document.querySelector("#img-connect").classList.remove('img-rotate');
    document.querySelector("#img-company").classList.remove('img-rotate');
    document.querySelector("#img-product").classList.remove('img-rotate');
}

function openSubMenuProduct() {
    subMenuProduct.classList.toggle('sub-menu-hide');
    subMenuCompany.classList.add('sub-menu-hide');
    subMenuConnect.classList.add('sub-menu-hide');

    document.querySelector("#img-product").classList.toggle('img-rotate');
    document.querySelector("#img-company").classList.remove('img-rotate');
    document.querySelector("#img-connect").classList.remove('img-rotate');
}

function openSubMenuCompany() {
    subMenuCompany.classList.toggle('sub-menu-hide');
    subMenuProduct.classList.add('sub-menu-hide');
    subMenuConnect.classList.add('sub-menu-hide');

    document.querySelector("#img-company").classList.toggle('img-rotate');
    document.querySelector("#img-product").classList.remove('img-rotate');
    document.querySelector("#img-connect").classList.remove('img-rotate');
}

function openSubMenuConnect() {
    subMenuConnect.classList.toggle('sub-menu-hide');
    subMenuCompany.classList.add('sub-menu-hide');
    subMenuProduct.classList.add('sub-menu-hide');

    document.querySelector("#img-connect").classList.toggle('img-rotate');
    document.querySelector("#img-company").classList.remove('img-rotate');
    document.querySelector("#img-product").classList.remove('img-rotate');
}