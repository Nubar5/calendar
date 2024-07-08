document.addEventListener("DOMContentLoaded", () => {
    const monthYearElement = document.getElementById('month-year');
    const datesElement = document.querySelector('.dates');
    const prevMonthButton = document.getElementById('prev-month');
    const nextMonthButton = document.getElementById('next-month');

    let now = new Date();
    let month = now.getMonth();
    let year = now.getFullYear();

    const renderCalendar = (month, year) => {
        datesElement.innerHTML = '';
        monthYearElement.textContent = `${new Date(year, month).toLocaleString('default', { month: 'long' })} ${year}`;

        const firstDay = new Date(year, month, 1).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();

        for (let i = 0; i < firstDay; i++) {
            const emptyDiv = document.createElement('div');
            datesElement.appendChild(emptyDiv);
        }

        for (let i = 1; i <= daysInMonth; i++) {
            const dateDiv = document.createElement('div');
            dateDiv.textContent = i;
            datesElement.appendChild(dateDiv);
        }
    };

    const changeMonth = (direction) => {
        month += direction;
        if (month < 0) {
            month = 11;
            year--;
        } else if (month > 11) {
            month = 0;
            year++;
        }
        renderCalendar(month, year);
    };

    prevMonthButton.addEventListener('click', () => changeMonth(-1));
    nextMonthButton.addEventListener('click', () => changeMonth(1));

    renderCalendar(month, year);
});


