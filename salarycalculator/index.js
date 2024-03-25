const nhifRates = [
    {
    salary: 5999,
    deduction: 150
},  {
    salary: 7999,
    deduction: 300
},  {
    salary: 11999,
    deduction: 400
},  {
    salary: 14999,
    deduction: 500
},  {
    salary: 19999,
    deduction: 600
},  {
    salary: 24999,
    deduction: 750
},  {
    salary: 29999,
    deduction: 850
},  {
    salary: 34999,
    deduction: 900
},  {
    salary: 39999,
    deduction: 950
},  {
    salary: 44999,
    deduction: 1000
},
{
    salary: 49999,
    deduction: 1100
},  {
    salary: 59999,
    deduction: 1200
},  {
    salary: 69999,
    deduction: 1300
},  {
    salary: 79999,
    deduction: 1400
},  {
    salary: 89999,
    deduction: 1500
},  {
    salary: 99999,
    deduction: 1600
},  {
    salary: 100000,
    deduction: 1700
}]
const calculateSalary = () => {
    let netIcome = 0
    let salary = Number(prompt("Enter basic monthly salary"))
    if(!Boolean(salary)) {
      salary = prompt("invalid input. enter monthly salary in figures: ")
      window.location.reload()
    } else {
        // calculate PAYE
        const paye = (mSalary) => {
            if (mSalary <= 24000){
                return mSalary * (10/100);

            }
            else if (mSalary >= 24001 && mSalary <= 32333){
                return ((mSalary-24000) * 0.25) + (24000 * 0.1);
            }
            else if (mSalary >= 32334 && mSalary <= 500000){
                return ((mSalary - 32333) * 0.3) + (24000 * 0.1) +  (32333 * 0.25);
            }
            else if (mSalary >= 500001 && mSalary <= 800000){
                return ((mSalary - 500000) * 0.32) + (24000 * 0.1) + (500000 * 0.3);
            }
            else {
                return mSalary * 0.35;
            }
        }
        // calculate NHIF
        const nhif = (s) => {
            for (const key in nhifRates) {
                if(s <= nhifRates[key].salary) {
                  return  nhifRates[key].deduction
                }
            }
        }
        // calculate NSSF
        const nssf = (grossSalary) => {
            if (grossSalary<=6000) {
                return grossSalary*0.06;
            }
             else if (grossSalary>6000 && grossSalary<18000) {
                remainingAmount = grossSalary-6000;
                const tier1 =6000*0.06;
                const tier2 = remainingAmount*0.06;
                nssfDeductions = tier1+tier2;

            }
            else{
                const tier1 = 6000*0.06;
                const tier2 = 18000*0.06;
                nssfDeductions = tier1+tier2;
            }
            return nssfDeductions
        }
        const payeAmount = paye(salary)
        const nhifAmount = nhif(salary)
        const nssfAmount = nssf(salary)
        netIcome = (salary - (payeAmount + nhifAmount + nssfAmount))
    }
    console.log(netIcome)
}
calculateSalary()