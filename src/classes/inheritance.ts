// class receive behaivour of parent class

class Report {
    data: Array<string>;

    constructor(data:Array<string>) {
        this.data = data;
    }

    run() {
        this.data.forEach((line) => {
            console.log(line)
        });
    }
}

var report:Report = new Report(['first line', 'second line']);
report.run();

class TabbedReport extends Report {
    
    headers: Array<string>;

    constructor(headers: string[], values: string[]) {
        super(values);
        this.headers = headers;
    }

    run() {
        console.log(this.headers);
        super.run();
    }
}

var headers: string[] = ['Name'];
var data: string[] = ['Alice Green', 'Isaac Asimov', 'Isaac Delahaye'];
var r: TabbedReport = new TabbedReport(headers, data);
r.run();


// Second Example of inheritance

class CommonPerson {
  constructor(public name: string, public lastname: string) {}
}

const joe = new CommonPerson("Joe", "Smith");
console.log(joe);

// Subclass
class Programmer extends CommonPerson {
  constructor(firstname: string, lastname: string, public language: string) {
    super(firstname, lastname);
  }
}

const ryan = new Programmer("Ryan", "Ray", "JavaScript");
console.log(ryan);