function openMenu(){
        let menu = this.getElementsByClassName("menu-list")[0];
        menu.classList.add("open");
    }

    function closeMenu(){
        let menu = this.getElementsByClassName("menu-list")[0];
        menu.classList.remove("open");
    }

    function openSubmenu(){
        let menu = this.getElementsByClassName("submenu-list")[0];
        menu.classList.add("open");
    }

    function closeSubmenu(){
        let menu = this.getElementsByClassName("submenu-list")[0];
        menu.classList.remove("open");
    }

    let categories = document.getElementsByClassName("category-menu");

    for(let category of categories){
        category.addEventListener('mouseover', openMenu);
        category.addEventListener("mouseout", closeMenu);
        let name = category.getElementsByClassName("option-name")[0].innerHTML;
        console.log(name);
        let subcategories = category.getElementsByClassName('menu-list')[0].getElementsByTagName("li");
        for(let subcategory of subcategories){
            subcategory.addEventListener("mouseover", openSubmenu);
            subcategory.addEventListener("mouseout", closeSubmenu);
        }
    }