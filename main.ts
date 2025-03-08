function parsePackets(data: string): string[] {
    let parts: string[] = [];
    for (let i = 0; i < data.length; i += 24) {
        parts.push(data.substr(i, 24));
    };
    return parts;
};


function getID(data: string) {
    
};

function handle(data: string) {
    parsePackets(data);
};
radio.onReceivedString(function (gotString) {
    fullString = "" + fullString + gotString;
    if (gotString.includes("<EOF>")) {
        handle(fullString);
        fullString = "";
    };
});
let fullString = "";
radio.setGroup(0);
basic.showIcon(IconNames.Heart);
