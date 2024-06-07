console.log("js ok")

var swiper = new Swiper(".mySwiper-1",{
    slidesPerView:1,
    spaceBetween:30,
    loop:true,
    pagination:{
        el:".swiper-pagination",
        clickable: true,
    },
    navigation:{
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev",
    }
});

var swiper = new Swiper(".mySwiper-2",{
    slidesPerView:3,
    spaceBetween:20,
    loop:true,
    loopFillGroupWithBlank:true,
    navigation:{
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev",
    },
    breakpoints : {
        0:{
            slidesPerView:1,
        },

        520: {
            slidesPerView:2,
        },
        950: {
            slidesPerView:3,
        }
    }
});


let tabInputs = document.querySelectorAll(".tabImput");

tabInputs.forEach(function(input){
    input.addEventListener('chance', function(){
        let id= input.ariaValueMax;
        let thisSwiper = document.getElementById('swiper' + id);
        thisSwiper.swiper.update();

    })



});
document.addEventListener("DOMContentLoaded", () => {
    const datePicker = document.getElementById("selectorFecha");
    const timeSelect = document.getElementById("selectorHora");
    const reserveButton = document.getElementById("botonReserva");
    const details = document.getElementById("detalles");

    const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
    const saturday = "Saturday";
    
    function populateTimeOptions(dayOfWeek) {
        timeSelect.innerHTML = "";
        const times = [];
        if (weekdays.includes(dayOfWeek)) {
            for (let hour = 8; hour < 20; hour += 2) {
                times.push(`${hour}:00 - ${hour + 2}:00`);
            }
        } else if (dayOfWeek === saturday) {
            for (let hour = 8; hour < 12; hour += 2) {
                times.push(`${hour}:00 - ${hour + 2}:00`);
            }
        }

        times.forEach(time => {
            const option = document.createElement("option");
            option.value = time;
            option.textContent = time;
            timeSelect.appendChild(option);
        });
    }

    datePicker.addEventListener("change", (e) => {
        const selectedDate = new Date(e.target.value);
        const dayOfWeek = selectedDate.toLocaleString("en-US", { weekday: "long" });
        populateTimeOptions(dayOfWeek);
    });

    reserveButton.addEventListener("click", () => {
        const selectedDate = datePicker.value;
        const selectedRoom = document.getElementById("selectorAula").value;
        const selectedTime = timeSelect.value;
        if (selectedDate && selectedRoom && selectedTime) {
            details.textContent = `Has reservado ${selectedRoom} el día ${selectedDate} de ${selectedTime}.`;
        } else {
            details.textContent = "Por favor, completa todos los campos de la reserva.";
        }
    });
});


