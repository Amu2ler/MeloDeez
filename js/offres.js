        const container = document.querySelector('.container_1');
        const paragraphes = container.querySelectorAll('p');

        // Cacher les paragraphes initialement
        paragraphes.forEach(paragraphe => {
            paragraphe.style.display = 'none';
        });

        // Ajouter un gestionnaire d'événements pour la survol de la souris
        container.addEventListener('mouseover', () => {
            paragraphes.forEach(paragraphe => {
                paragraphe.style.display = 'block';
            });
        });

        container.addEventListener('mouseout', () => {
            paragraphes.forEach(paragraphe => {
                paragraphe.style.display = 'none';
            });
        });