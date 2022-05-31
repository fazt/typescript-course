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
