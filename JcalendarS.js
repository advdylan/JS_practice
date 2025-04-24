function getDaysOfAllMonths(year) {
    let daysOfMonthsArray = [];
    for (let month = 0; month < 12; month++) {
        // Get the last day of the month by going to next month and day 0
        let lastDay = new Date(year, month + 1, 0).getDate();
        daysOfMonthsArray.push(lastDay);
    }
    return daysOfMonthsArray;
}

function milisecondsToDays(data) {
    let newDate = (data/(1000*60*60*24)).toFixed(0);
    return newDate;
}

function getAllMonths() {

    let months = [];
    for (let i=0; i <= 11; i++) {
        months.push(i);
    }
    console.log(months);
    return months;
}

class JcalendarS {
    constructor(year = new Date().getFullYear()) {
        this.year = year;
        this.data = []
    }

    init() {
        this.data = this.generateYearData();
    }

    

    generateYearData() {

            let year = this.year
            let months = getAllMonths();
            let daysOfMonthsArray = getDaysOfAllMonths(year);
            daysOfMonthsArray = [];
            
            for (let month of months) {
                let firstDayOfMonth = new Date(year, month, 0)
                let lastDayOfMonth = new Date(year, month + 1, 0 )
                let newDate = lastDayOfMonth - firstDayOfMonth;
                let formattedDate = milisecondsToDays(newDate);
                daysOfMonthsArray.push(formattedDate);
            }
            console.log(daysOfMonthsArray);
            return daysOfMonthsArray;
    }
}

let newCalendar =  new JcalendarS(1994)
newCalendar.init()
console.log(newCalendar)