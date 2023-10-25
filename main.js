
document.addEventListener("DOMContentLoaded", function () {
    const calculateButton = document.getElementById('calculateButton');

    calculateButton.addEventListener('click', calculateFullAndFinal);

    function calculateFullAndFinal() {
        const salary = parseFloat(document.getElementById('salary').value);
        const yearsWorked = parseFloat(document.getElementById('yearsWorked').value);
        const leaveBalance = parseFloat(document.getElementById('leaveBalance').value);
        const gratuityMonths = parseFloat(document.getElementById('gratuityMonths').value);
        const bonus = parseFloat(document.getElementById('bonus').value) || 0;
        const deductions = parseFloat(document.getElementById('deductions').value) || 0;
        const otherEarnings = parseFloat(document.getElementById('otherEarnings').value) || 0;

        // Calculate the final settlement amount in INR
        const gratuity = (salary * gratuityMonths) / 12;
        const leavePayment = (salary * leaveBalance) / 30;
        const totalSettlement = gratuity + leavePayment + bonus - deductions + otherEarnings;

        // Display the result with the ₹ symbol
        document.getElementById('result').innerHTML = `Final Settlement Amount: ₹${totalSettlement.toFixed(2)}`;
    }
});
