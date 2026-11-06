function showWelcomeMessage() {
    const welcome = document.getElementById("welcomeMessage");

    if (welcome) {
        welcome.textContent =
            "Welcome to Adventure Escape SA! Escape the ordinary, experience the adventure.";
    }
}

function searchAdventures() {
    const searchInput = document.getElementById("searchInput");
    const cards = document.querySelectorAll(".adventure-card");

    if (!searchInput) return;

    const searchText = searchInput.value.toLowerCase();

    cards.forEach(function (card) {
        const adventureName = card.textContent.toLowerCase();

        card.style.display = adventureName.includes(searchText)
            ? "block"
            : "none";
    });
}

// Calculate fees and discounts
function calculateFees() {
    const checkboxes = document.querySelectorAll(
        'input[name="adventure"]:checked'
    );

    let subtotal = 0;
    const numberOfBookings = checkboxes.length;

    checkboxes.forEach(function (checkbox) {
        subtotal += Number(checkbox.value);
    });

    if (numberOfBookings === 0) {
        alert("Please select at least one adventure.");
        return;
    }

    let discountRate = 0;

    if (numberOfBookings === 2) {
        discountRate = 0.05;
    } else if (numberOfBookings === 3) {
        discountRate = 0.10;
    } else if (numberOfBookings > 3) {
        discountRate = 0.15;
    }

    const discountAmount = subtotal * discountRate;
    const discountedTotal = subtotal - discountAmount;
    const vat = discountedTotal * 0.15;
    const finalTotal = discountedTotal + vat;

    const result = document.getElementById("feeResult");

    if (result) {
        result.innerHTML = `
            <h3>Fee Summary</h3>
            <p>Number of bookings: ${numberOfBookings}</p>
            <p>Subtotal: R${subtotal.toFixed(2)}</p>
            <p>Discount: ${(discountRate * 100).toFixed(0)}%</p>
            <p>Discount amount: R${discountAmount.toFixed(2)}</p>
            <p>Total after discount: R${discountedTotal.toFixed(2)}</p>
            <p>VAT (15%): R${vat.toFixed(2)}</p>
            <h3>Final Total: R${finalTotal.toFixed(2)}</h3>
        `;
    }
}

function submitBooking(event) {
    event.preventDefault();
    alert("Your booking request has been submitted successfully!");
}

function submitMessage(event) {
    event.preventDefault();
    alert("Thank you! Your message has been received.");
}

function updateProfile(event) {
    event.preventDefault();
    alert("Your profile details have been updated!");
}

document.addEventListener("DOMContentLoaded", function () {
    showWelcomeMessage();
});
