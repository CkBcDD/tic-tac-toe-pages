//async function makeMove(index, player) {
//    const response = await fetch(`https://production.tic-tac-toe-communication.quqijiangbing.workers.dev/play?index=${index}&player=${player}`);
//    const result = await response.json();
//    return result;
//}

cells.forEach(cell => {
    cell.addEventListener('click', async () => {
        if (cell.textContent === '') {
            const index = cell.getAttribute('data-index');
            const result = await makeMove(index, currentPlayer);
            if (result.success) {
                cell.textContent = currentPlayer;
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            }
        }
    });
});
