const fs = require('fs');

function directoryFileListRead(callback) {
  fs.readdir('./fill', function (error, filelist) {
    const fileArr = new Array();

    let breakPoint = 0;

    filelist.forEach(function (file, idx, arr) {
      fs.stat('./fill/' + file, function (err, stats) {
        fileArr.push({ fileName: file, birthTime: stats.birthtimeMs });

        // 반복문 실행회수를 더한다.

        breakPoint++;

        // 배열의 수와 반복문이 실행된 회수가 같은면, 마지막 값까지 반복문이 실행되면 콜백한다.

        if (arr.length === breakPoint) {
          // 오름차순 정렬

          // fileArr.sort(function(a, b) { return a.fileDate < b.fileDate ? -1 : a.fileDate > b.fileDate ? 1 : 0; });

          // 내림차순 정렬

          fileArr.sort(function (a, b) {
            return a.fileDate > b.fileDate
              ? -1
              : a.fileDate < b.fileDate
              ? 1
              : 0;
          });

          callback(fileArr);
        }
      });
    });
  });
}

directoryFileListRead(function (fileArr) {
  console.log(fileArr);
});
