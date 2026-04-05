export function renderPaginatedList(app, items, {
    pageSize = 8,
    listClassName = "races-grid",
    emptyMessage = "Aucun élément à afficher.",
    renderItem,
}) {
    const wrapper = document.createElement('div');

    let currentPage = 1;

    const list = document.createElement('ul');
    list.className = listClassName;
    wrapper.appendChild(list);

    const controls = document.createElement('div');
    controls.className = 'pagination-controls';

    const previousButton = document.createElement('button');
    previousButton.type = 'button';
    previousButton.textContent = 'Précédent';
    previousButton.className = 'dnd-button pagination-button';

    const pageInfo = document.createElement('span');
    pageInfo.className = 'pagination-page-info';

    const nextButton = document.createElement('button');
    nextButton.type = 'button';
    nextButton.textContent = 'Suivant';
    nextButton.className = 'dnd-button pagination-button';

    previousButton.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage -= 1;
            render();
        }
    });

    nextButton.addEventListener('click', () => {
        const totalPages = getTotalPages();
        if (currentPage < totalPages) {
            currentPage += 1;
            render();
        }
    });

    controls.appendChild(previousButton);
    controls.appendChild(pageInfo);
    controls.appendChild(nextButton);
    wrapper.appendChild(controls);

    function getTotalPages() {
        return items.length === 0 ? 0 : Math.ceil(items.length / pageSize);
    }

    function render() {
        const totalPages = getTotalPages();

        list.innerHTML = '';

        if (items.length === 0) {
            const emptyState = document.createElement('p');
            emptyState.className = 'dnd-text pagination-empty';
            emptyState.textContent = emptyMessage;
            list.appendChild(emptyState);
            previousButton.disabled = true;
            nextButton.disabled = true;
            pageInfo.textContent = '0 / 0';
            return;
        }

        if (currentPage > totalPages) {
            currentPage = totalPages;
        }

        const startIndex = (currentPage - 1) * pageSize;
        const pageItems = items.slice(startIndex, startIndex + pageSize);

        pageItems.forEach((item) => renderItem(item, list));

        previousButton.disabled = currentPage === 1;
        nextButton.disabled = currentPage === totalPages;
        pageInfo.textContent = `Page ${currentPage} / ${totalPages}`;
    }

    render();
    app.appendChild(wrapper);
}