function DynamicEvents() {
    function handleClick() {
        let randomNum = Math.floor(Math.random() * 3) + 1;
        console.log(randomNum);
        let userInput = prompt('type a number');
        alert(`computer number: ${randomNum}, your guess: ${userInput}`);
    }
    return (
        <button onClick={handleClick}>
            guess the number between 1 and 3
        </button>
    )
};

export default DynamicEvents;