function report(str) {
    console.log('htpp://report.log.com?from=ms&dc='+(+new Date()) + '&event=' + escape(str));
}
exports.report = report;
