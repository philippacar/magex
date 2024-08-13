const myTemplate = `
    <div>
        Current Time: ${(() => {
            const currentDate = new Date();
            return currentDate.getTime();
        })()}
    </div>
`;

// Assuming you want to insert this template into the DOM
document.body.innerHTML = myTemplate;
