
const companies = [
    {name: "Company One", category:"Finance", start: 1981, end: 2003},
    {name: "Company Two", category:"Retail", start: 1982, end: 2008},
    {name: "Company Three", category:"Auto", start: 1999, end: 2007},
    {name: "Company Four", category:"Retail", start: 1989, end: 2010},
    {name: "Company Five", category:"Technology", start: 2009, end: 2014},
    {name: "Company Six", category:"Finance", start: 1987, end: 2010},
    {name: "Company Seven", category:"Auto", start: 1986, end: 1996},
    {name: "Company Eight", category:"Technology", start: 2011, end: 2016},
    {name: "Company Nine", category:"Retail", start: 1981, end: 1989},
]

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// forEach ..

companies.forEach(function(Company) {
    // console.log(Company)
});

// Filter..........

// Get 21 and older.
 
// const canDrink = ages.filter(function(age) {
//     if(age >= 12) {
//         return true;
//     }
// });

const canDrink = ages.filter(age => age >= 21)

// console.log(canDrink)

// Filter retail companies...
const retailCompanies = companies.filter(function(Company){
    if(Company.category === 'Retail'){
        return true;
    }
});


const retailCompanies = companies.filter(Company => Company.category === 'Retail');

// console.log(retailCompanies)

// Get 80s companies...
const eightiesCompanies = companies.filter(Company => (Company.start >= 1980 && Company.start < 1990));
// console.log(eightiesCompanies)

// Get companies lasted 10 years or more
const lastedTenYears = companies.filter(Company => (Company.end - Company.start >= 10));
// console.log(lastedTenYears)


// map..........

// Create array of company names
const companyNames = companies.map(function(company){
    return company.name;
});

const textMap = companies.map(function(company){
    return `${company.name} [${company.start} - ${company.end}]`
});

// console.log(textMap)

const ageMap = ages
.map(age => Math.sqrt(age))
.map(age => age * 2)

// console.log(ageMap)

