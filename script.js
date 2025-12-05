document.addEventListener("DOMContentLoaded", function() {
    const seatsInput = document.getElementById("seats");
    const livePrice = document.getElementById("livePrice");

    seatsInput.addEventListener("input", function () {
        let seats = this.value;
        let pricePerSeat = 350;
        livePrice.innerText = seats * pricePerSeat || 0;
    });

    const form = document.getElementById("bookingForm");
    form.addEventListener("submit", function(e) {
        e.preventDefault();

        const from = document.getElementById("from").value;
        const to = document.getElementById("to").value;
        const date = document.getElementById("date").value;
        const seats = document.getElementById("seats").value;

        const name = document.getElementById("name").value;
        const age = document.getElementById("age").value;
        const phone = document.getElementById("phone").value;
        const email = document.getElementById("email").value;
        const payment = document.getElementById("payment").value;

        if (!name || !age || !phone || !email || !payment) {
            alert("Please fill all fields!");
            return;
        }

        const totalPrice = seats * 350;

        document.getElementById("outName").innerText = name;
        document.getElementById("outAge").innerText = age;
        document.getElementById("outPhone").innerText = phone;
        document.getElementById("outEmail").innerText = email;
        document.getElementById("outPayment").innerText = payment;

        document.getElementById("outFrom").innerText = from;
        document.getElementById("outTo").innerText = to;
        document.getElementById("outDate").innerText = date;
        document.getElementById("outSeats").innerText = seats;
        document.getElementById("outPrice").innerText = totalPrice;

        document.getElementById("ticket").classList.remove("hidden");
        document.getElementById("ticket").scrollIntoView({ behavior: "smooth" });
    });
});
