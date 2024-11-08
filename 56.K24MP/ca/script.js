const propertyForm = document.getElementById("property-form");
const analysisOutput = document.getElementById("analysis-output");

propertyForm.addEventListener("submit", (event) => {
  event.preventDefault();

  // Capture input values
  const propertyAddress = document.getElementById("property-address").value;
  const propertyType = document.getElementById("property-type").value;
  const propertyAge = parseInt(document.getElementById("property-age").value);
  const propertyCondition = document.getElementById("property-condition").value;
  const purchasePrice = parseFloat(
    document.getElementById("purchase-price").value
  );
  const downPayment = parseFloat(document.getElementById("down-payment").value);
  const loanTerm = parseInt(document.getElementById("loan-term").value);
  const interestRate = parseFloat(
    document.getElementById("interest-rate").value
  );
  const schoolsNearby = document.getElementById("schools-nearby").value;
  const parksNearby = document.getElementById("parks-nearby").value;
  const publicTransportation = document.getElementById(
    "public-transportation"
  ).value;

  // Perform calculations
  const mortgageAmount = purchasePrice - downPayment;
  const monthlyInterestRate = interestRate / (100 * 12);
  const monthlyMortgagePayment =
    (mortgageAmount *
      (monthlyInterestRate *
        Math.pow(1 + monthlyInterestRate, loanTerm * 12))) /
    (Math.pow(1 + monthlyInterestRate, loanTerm * 12) - 1);
  const totalInterestPaid =
    monthlyMortgagePayment * loanTerm * 12 - mortgageAmount;
  const annualPropertyTaxes = purchasePrice * 0.01;
  const monthlyPropertyTaxes = annualPropertyTaxes / 12;
  const annualHomeownersInsurance = 1000;
  const monthlyHomeownersInsurance = annualHomeownersInsurance / 12;
  const totalMonthlyExpenses =
    monthlyMortgagePayment + monthlyPropertyTaxes + monthlyHomeownersInsurance;

  // Prepare analysis results
  const analysisResults = `
  <div class="first">
        <h2>Property Analysis</h2>
        <p><strong>Property Address:</strong> ${propertyAddress}</p>
        <p><strong>Property Type:</strong> ${propertyType}</p>
        <p><strong>Property Age:</strong> ${propertyAge} years</p>
        <p><strong>Property Condition:</strong> ${propertyCondition}</p>
        <p><strong>Purchase Price:</strong> ${purchasePrice.toFixed(2)}</p>
        <p><strong>Down Payment:</strong> ${downPayment.toFixed(2)}</p>
        <p><strong>Mortgage Amount:</strong> ${mortgageAmount.toFixed(2)}</p>
        <p><strong>Loan Term (Years):</strong> ${loanTerm}</p>
        <p><strong>Interest Rate (%):</strong> ${interestRate.toFixed(2)}</p>
        <br>
        <h2>Neighborhood Amenities</h2>
        <p><strong>Schools Nearby:</strong> ${schoolsNearby}</p>
        <p><strong>Parks Nearby:</strong> ${parksNearby}</p>
        <p><strong>Public Transportation:</strong> ${publicTransportation}</p>
        <br>
        </div>
        <div class="2nd" style="margin-right:0px;"><h2>Monthly Expenses</h2>
        <p><strong>Mortgage Payment:</strong> ${monthlyMortgagePayment.toFixed(
          2
        )}</p>
        <p><strong>Property Taxes:</strong> ${monthlyPropertyTaxes.toFixed(
          2
        )}</p>
        <p><strong>Homeowners Insurance:</strong> ${monthlyHomeownersInsurance.toFixed(
          2
        )}</p>
        <p><strong>Total Monthly Expenses:</strong> ${totalMonthlyExpenses.toFixed(
          2
        )}</p>
        <br>
        <h2>Additional Costs</h2>
        <p><strong>Total Interest Paid:</strong> ${totalInterestPaid.toFixed(
          2
        )}</p>
        </div>
    `;

  // Display analysis results
  analysisOutput.innerHTML = analysisResults;
});
