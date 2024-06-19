
function allOperations() {
    return Operation1()
        .then(() => Operation2())
        .then(() => Operation3())
        .then(() => {
            console.log('Finished');
        });
}

function Operation1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Operation 1 ');
            resolve();
        }, 2000);
    });
}

function Operation2() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Operation 2 ');
            resolve();
        }, 2000);
    });
}

function Operation3() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Operation 3 ');
            resolve();
        }, 2000);
    });
}

allOperations();

