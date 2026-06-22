const cupsContainer = document.getElementById('cups-container');
const bigCup = document.getElementById('big-cup');
let totalLiters = 0;

for (let i = 0; i < 8; i++) {
    const cup = document.createElement('div');
    cup.className = 'cup';
    cup.innerHTML = '250<br>мл';
    
    cup.addEventListener('click', () => {
        if (cup.classList.contains('full')) {
            cup.classList.remove('full');
            totalLiters -= 0.25;
        } else {
            cup.classList.add('full');
            totalLiters += 0.25;
        }
        
        bigCup.innerText = totalLiters % 1 === 0 ? `${totalLiters} Л` : `${totalLiters} Л`;
    });
    
    cupsContainer.appendChild(cup);
}