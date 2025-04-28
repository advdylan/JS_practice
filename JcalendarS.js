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

function getDaysOfAllMonths(year) {
		months = getAllMonths();
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
	
	
class JCalendarS {
	
	constructor(year = new Date().getFullYear()) {
		this.year = year;
		this.data = [];

	}
	init() {
			this.data = this.generateYearData();
		}
	
	generateYearData() {
		
			let yearInput = document.getElementById('year');
			let year = parseInt(yearInput.value);
			console.log(year);
			let daysOfMonthsArray = getDaysOfAllMonths(year);
			console.log(`Daysof the months array: ${daysOfMonthsArray[0]}`);
			
			daysOfMonthsArray.forEach((value,index) => {
				//console.log(`Value: ${value}`);
				//console.log(`Month : ${index+1}`);
				//Array of months? 
				for (i=0; i < value; i++)
				{
					//console.log(i);
					let date = new Date(year, index, i+1);
					let newDate = createDateStructure(date);
					data.push(newDate);
					
				}
			});
			 /*
			for (let newDate of data) {
				console.log(newDate.day);
			} */
			return data;
		
	}
}

let year = 1994;

let calendar = new JCalendarS(year);
console.log(calendar);
