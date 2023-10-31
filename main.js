// Get all the input elements
const salaryInput = document.getElementById('salary');
const daInput = document.getElementById('DA');
const hraInput = document.getElementById('hra');
const conveyanceInput = document.getElementById('Conveyance');
const medicalInput = document.getElementById('Medical');
const specialInput = document.getElementById('Special');
const othersInput = document.getElementById('Others');

const tot_salary = document.getElementById('total_salary');
const net_payable = document.getElementById('net_payable');

const totalSalaryOutput = document.getElementById('total-salary');

// Add input event listeners to all input elements
salaryInput.addEventListener('input', updateTotalSalary);
daInput.addEventListener('input', updateTotalSalary);
hraInput.addEventListener('input', updateTotalSalary);
conveyanceInput.addEventListener('input', updateTotalSalary);
medicalInput.addEventListener('input', updateTotalSalary);
specialInput.addEventListener('input', updateTotalSalary);
othersInput.addEventListener('input', updateTotalSalary);

function updateTotalSalary() {
  // Parse input values as numbers, and default to 0 if empty or not a number
  const salary = parseFloat(salaryInput.value) || 0;
  const da = parseFloat(daInput.value) || 0;
  const hra = parseFloat(hraInput.value) || 0;
  const conveyance = parseFloat(conveyanceInput.value) || 0;
  const medical = parseFloat(medicalInput.value) || 0;
  const special = parseFloat(specialInput.value) || 0;
  const others = parseFloat(othersInput.value) || 0;

  // Calculate the total salary earnings
  const totalEarnings = salary + da + hra + conveyance + medical + special + others;

  // Update the "Total salary earnings" field
  tot_salary.textContent = totalEarnings;

  // Update the net payable field immediately
  updateNetPayable();
}

// Get all the input elements for other earnings
const leaveInput = document.getElementById('leave');
const gratuityInput = document.getElementById('gratuity');
const incentivesInput = document.getElementById('incentives');
const others1Input = document.getElementById('others1');
const totalOtherEarnings = document.getElementById('total-other');

// Add event listeners to all the input fields
leaveInput.addEventListener('input', updateTotal);
gratuityInput.addEventListener('input', updateTotal);
incentivesInput.addEventListener('input', updateTotal);
others1Input.addEventListener('input', updateTotal);

function updateTotal() {
  // Get the values from the input fields
  const leaveValue = parseFloat(leaveInput.value) || 0;
  const gratuityValue = parseFloat(gratuityInput.value) || 0;
  const incentivesValue = parseFloat(incentivesInput.value) || 0;
  const others1Value = parseFloat(others1Input.value) || 0;

  // Calculate the total other earnings
  const totalOther = leaveValue + gratuityValue + incentivesValue + others1Value;

  // Update the "Total other earnings" field
  totalOtherEarnings.textContent = 'Total other earnings: ₹ ' + totalOther;

  // Update the net payable field immediately
  updateNetPayable();
}

// Get all the input elements for deductions
const epfInput = document.getElementById('epf');
const medicalInsuranceInput = document.getElementById('medical');
const professionalTaxInput = document.getElementById('professional');
const salaryAdvanceInput = document.getElementById('salary-advance');
const noticePayInput = document.getElementById('notice-pay');
const others2Input = document.getElementById('others2');
const totalDeductionOutput = document.getElementById('total-deduction');

// Add input event listeners to all input elements for deductions
epfInput.addEventListener('input', updateTotalDeductions);
medicalInsuranceInput.addEventListener('input', updateTotalDeductions);
professionalTaxInput.addEventListener('input', updateTotalDeductions);
salaryAdvanceInput.addEventListener('input', updateTotalDeductions);
noticePayInput.addEventListener('input', updateTotalDeductions);
others2Input.addEventListener('input', updateTotalDeductions);

function updateTotalDeductions() {
  // Parse input values as numbers, and default to 0 if empty or not a number
  const epf = parseFloat(epfInput.value) || 0;
  const medicalInsurance = parseFloat(medicalInsuranceInput.value) || 0;
  const professionalTax = parseFloat(professionalTaxInput.value) || 0;
  const salaryAdvance = parseFloat(salaryAdvanceInput.value) || 0;
  const noticePay = parseFloat(noticePayInput.value) || 0;
  const others2 = parseFloat(others2Input.value) || 0;

  // Calculate the total deductions
  const totalDeductions = epf + medicalInsurance + professionalTax + salaryAdvance + noticePay + others2;

  // Update the "Total deductions" field
  totalDeductionOutput.textContent = `Total deduction: ₹ ${totalDeductions}`;

  // Update the net payable field immediately
  updateNetPayable();
}

const TotalnetPayable = document.getElementById('net-payable');

function updateNetPayable() {
  const totalEarnings = parseFloat(tot_salary.textContent) || 0;
  const totalOther = parseFloat(totalOtherEarnings.textContent.split('₹ ')[1]) || 0;
  const totalDeductions = parseFloat(totalDeductionOutput.textContent.split('₹ ')[1]) || 0;

  const TotalNetPayableoutput = totalEarnings + totalOther - totalDeductions;

  // Update the "Net Payable" field
  TotalnetPayable.textContent = `Net Payable: ₹ ${TotalNetPayableoutput}`;
}

// Call the updateTotalSalary function to set the initial values
updateTotalSalary();






  
  document.addEventListener("DOMContentLoaded", function () {
    const totalWorkingDays = document.getElementById("myRangeValue");
    const totalPaidWorkingDays = document.getElementById("myRange1Value");
    
  
    // Add an event listener for the first slider (total working days)
    document.getElementById("myRange").addEventListener("input", function () {
      totalWorkingDays.value = this.value; // Updateconst netPayable = totalEarnings + totalOther - totalDeductions; the associated input field
    });
  
    // Add an event listener for the second slider (total paid working days)
    document.getElementById("myRange1").addEventListener("input", function () {
      totalPaidWorkingDays.value = this.value; // Update the associated input field
    });
  
    calculateButton.addEventListener("click", function () {

    });
  });
  