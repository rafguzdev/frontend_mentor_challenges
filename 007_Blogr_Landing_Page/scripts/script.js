const hamburger = document.querySelector("#hamburger");
const navCard = document.querySelector("#nav-card");
hamburger.addEventListener("click", openMenu, false );

const subMenuProductAct = document.querySelector("#sub-menu-product-act");
const subMenuProduct = document.querySelector("#sub-menu-product");
const subMenuCompanyAct = document.querySelector("#sub-menu-company-act");
const subMenuCompany = document.querySelector("#sub-menu-company");
const subMenuConnectAct = document.querySelector("#sub-menu-connect-act");
const subMenuConnect = document.querySelector("#sub-menu-connect");
subMenuProductAct.addEventListener("click", openSubMenuProduct, false );
subMenuCompanyAct.addEventListener("click", openSubMenuCompany, false );
subMenuConnectAct.addEventListener("click", openSubMenuConnect, false );

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