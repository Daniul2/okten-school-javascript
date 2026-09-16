const items = Array.from({ length: 100 }, (_, i) => ({ id: i + 1, name: 'Object ' + (i + 1) }));
let page = 0;
const perPage = 10;

function render() {
    const start = page * perPage;
    document.getElementById('list').innerHTML = items
        .slice(start, start + perPage)
        .map(item => '<div>' + item.id + '. ' + item.name + '</div>')
        .join('');
    document.getElementById('prev').disabled = page === 0;
    document.getElementById('next').disabled = page >= Math.floor(items.length / perPage) - 1;
}

document.getElementById('prev').onclick = () => { page--; render(); };
document.getElementById('next').onclick = () => { page++; render(); };
render();
