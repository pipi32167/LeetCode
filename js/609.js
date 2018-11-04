/**
 * @param {string[]} paths
 * @return {string[][]}
 */
var findDuplicate = function (paths) {
  const dict = {}

  for (let i = 0; i < paths.length; i++) {
    const path = paths[i];
    let [dir, ...files] = path.split(' ')
    // console.log(dir, files);
    for (let j = 0; j < files.length; j++) {
      const parts = files[j].split(/[\(\)]/)
      const filename = parts[0]
      const content = parts[1]
      const fullpath = dir + '/' + filename
      dict[content] = dict[content] || []
      dict[content].push(fullpath)
    }
  }
  // console.log(dict);
  return Object.keys(dict)
    .map(e => dict[e])
    .filter(e => e.length > 1);
};

var paths = ["root/a 1.txt(abcd) 2.txt(efgh)", "root/c 3.txt(abcd)", "root/c/d 4.txt(efgh)", "root 4.txt(efgh)"]
console.log(findDuplicate(paths).join() === [ [ 'root/a/1.txt', 'root/c/3.txt' ],
[ 'root/a/2.txt', 'root/c/d/4.txt', 'root/4.txt' ] ].join());
var paths = ["root/a 1.txt(abcd) 2.txt(efsfgh)","root/c 3.txt(abdfcd)","root/c/d 4.txt(efggdfh)"]
console.log(findDuplicate(paths).join() === [].join());