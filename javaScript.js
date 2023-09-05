
    //---------------------------------------Button Menu----------------------------------
    // Récupération des éléments HTML
    const menuButton = document.getElementById('menuButton');
    const menu = document.getElementById('menu');
    const noMenuButton = document.getElementById('noMenuButton');


    // Fonction pour ouvrir le menu
    function openMenu() {
        menu.classList.add('open');
        document.addEventListener('click', closeMenu);
        menuButton.style.display = 'none';
        noMenuButton.style.display = 'block';
    }

    // Fonction pour fermer le menu
    function closeMenu(event) {
        if (!menu.contains(event.target) && event.target !== menuButton) {
            menu.classList.remove('open');
            document.removeEventListener('click', closeMenu);
            noMenuButton.style.display = 'none';
            menuButton.style.display = 'block';
        }
    }

    // Ajout d'un écouteur d'événement pour ouvrir le menu au clic
    menuButton.addEventListener('click', openMenu);