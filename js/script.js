// selezione gli oggetti
const items = document.getElementsByClassName('item');
console.log(items);

// seleziona i pulasnti
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
console.log(next , prev);

// imposta elemento visibile
let activeItem = 0;

// alclick

next.addEventListener('click',
    function(){

         // togli la visibilità all'elemento corrente
        items[activeItem].classList.remove('active');
        items[activeItem].classList.add('hidden');

        // aumenta l'elemento corrente
        activeItem++;

        // gestisci il superamento dell'ultima immagine
        if (activeItem === items.length) {
            activeItem = 0;
        }

        // metti visibilità al nuovo elemento corrente
        items[activeItem].classList.remove('hidden');
        items[activeItem].classList.add('active');
    });



    prev.addEventListener('click',
    function(){

         // togli la visibilità all'elemento corrente
        items[activeItem].classList.remove('active');
        items[activeItem].classList.add('hidden');

        // aumenta l'elemento corrente
        activeItem--;

        // gestisci il superamento dell'ultima immagine
        if (activeItem < 0) {
            activeItem =items.length -1;
        }

        // metti visibilità al nuovo elemento corrente
        items[activeItem].classList.remove('hidden');
        items[activeItem].classList.add('active');
    });




