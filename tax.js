document.getElementById("taxform").addEventListener("submit", function (event) {
  event.preventDefault();

  let basic_salary = Number(document.getElementById("basic").value);
  let benefits = Number(document.getElementById("benefits").value);

  function calculate_gross(basic, benefits) {
    return basic + benefits;
  }
  let gross_salary = calculate_gross(basic_salary, benefits);
  document.getElementById("gross").innerHTML = gross_salary;

  
  //   nhif
  function calculate_nhif(gross) {
    let nhif;
    if (gross > 0 && gross <= 5999) {
      nhif = 150;
    } else if (gross >= 6000 && gross <= 7999) {
      nhif = 300;
    } else if (gross >= 8000 && gross <= 11999) {
      nhif = 400;
    } else if (gross >= 12000 && gross <= 14999) {
      nhif = 500;
    } else if (gross >= 15000 && gross <= 19999) {
      nhif = 600;
    } else if (gross >= 20000 && gross <= 24999) {
      nhif = 750;
    } else if (gross >= 25000 && gross <= 29999) {
      nhif = 850;
    } else if (gross >= 30000 && gross <= 34999) {
      nhif = 900;
    } else if (gross >= 35000 && gross <= 39999) {
      nhif = 950;
    } else if (gross >= 40000 && gross <= 44999) {
      nhif = 1000;
    } else if (gross >= 45000 && gross <= 49999) {
      nhif = 1100;
    } else if (gross >= 50000 && gross <= 59999) {
      nhif = 1200;
    } else if (gross >= 60000 && gross <= 69999) {
      nhif = 1300;
    } else if (gross >= 70000 && gross <= 79999) {
      nhif = 1400;
    } else if (gross >= 80000 && gross <= 89999) {
      nhif = 1500;
    } else if (gross >= 90000 && gross <= 99999) {
      nhif = 1600;
    } else {
      nhif = 1700;
    }
    return nhif;
  }
  let nhif = calculate_nhif(gross_salary);
  document.getElementById("nhif").innerHTML = nhif;



  //nssf
  function calculate_nssf(gross) {
    let nssf;
    if (gross >= 18000) {
      nssf = 1080;
    } else {
      nssf = gross * 0.06;
    }
    return nssf;
  }
  let nssf = calculate_nssf(gross_salary);
  document.getElementById('nssf').innerHTML = nssf



  //nhdf
  function calculate_nhdf(gross) {
    return gross * 0.015;
  }
  let nhdf = calculate_nhdf(gross_salary);
  document.getElementById('nhdf').innerHTML = nhdf



  //taxable income
  function calculate_taxable_income(gross, nssf, nhdf, nhif) {
    let taxable_income = gross - (nssf + nhdf + nhif);
    return taxable_income;
  }
  let taxable_income = calculate_taxable_income(gross_salary, nssf, nhdf, nhif);
  document.getElementById('taxable').innerHTML = nssf


  //payee
  function calculate_payee(taxable_income) {
    let payee;
    let relief = 24000;
    if (taxable_income > 0 && taxable_income <= 24000) {
      payee = 0;
    } else if (taxable_income > 24000 && taxable_income <= 32333) {
      payee = 2400 + (taxable_income - 24000) * 0.25 - relief;
    } else if (taxable_income > 32333 && taxable_income <= 500000) {
      payee = 2400 + 8233 * 0.25 + (taxable_income - 32333) * 0.3 - relief;
    } else if (taxable_income > 500000 && taxable_income <= 800000) {
      payee = 2400 + (8233 * 0.25) + (467667 * 0.3) + (taxable_income - 500000) * 0.325 - relief;
    } else if (taxable_income > 800000) {
      payee = 2400 + (8233 * 0.25) + 467667 * 0.3 + ( 300000 * 0.325) + (taxable_income - 800000) * 0.35 - relief;
    } else {
      payee = "Invalid input";
    }
    return payee;
  }
  let payee = calculate_payee(taxable_income);
  document.getElementById('paye').innerHTML = payee



  function calculate_net_pay(gross, nhif, nhdf, nssf, payee) {
    return gross - (nhif + nhdf + nssf + payee);
  }
  let net_pay = calculate_net_pay(gross_salary, nhif, nhdf, nssf, payee);
  document.getElementById('net').innerHTML = net_pay
});

