var isMatch = function (s, idx, substr) {
  if (s.length - idx < substr.length) {
    return false
  }
  for (let i = 0; i < substr.length; i++) {
    if (s[idx + i] !== substr[i]) {
      return false
    }
  }
  return true
}

/**
 * @param {string} S
 * @param {number[]} indexes
 * @param {string[]} sources
 * @param {string[]} targets
 * @return {string}
 */
var findReplaceString = function (S, indexes, sources, targets) {
  S = Array.from(S)
  const replaces = []
  for (let i = 0; i < indexes.length; i++) {
    replaces.push([indexes[i], sources[i], targets[i]])
  }
  replaces.sort((a, b) => a[0] - b[0])
  for (let i = replaces.length - 1; i >= 0; i--) {
    if (isMatch(S, replaces[i][0], replaces[i][1])) {
      S.splice(replaces[i][0], replaces[i][1].length, ...Array.from(replaces[i][2]))
    }
  }
  return S.join('')
};

var assert = require('assert');
var S = "abcd",
  indexes = [0, 2],
  sources = ["a", "cd"],
  targets = ["eee", "ffff"]
assert.equal(findReplaceString(S, indexes, sources, targets), 'eeebffff')
var S = "abcd",
  indexes = [0, 2],
  sources = ["ab", "ec"],
  targets = ["eee", "ffff"]
assert.equal(findReplaceString(S, indexes, sources, targets), 'eeecd')
var S = "vmokgggqzp",
  indexes = [3, 5, 1],
  sources = ["kg", "ggq", "mo"],
  targets = ["s", "so", "bfr"]
assert.equal(findReplaceString(S, indexes, sources, targets), "vbfrssozp")
var S = "hjclvqqhbvvtqenyzudypfeyzwdnfozvozgzisyjqhzdbrilwyylyibfjvwfcsvfmngedhcufeprzrwvbhsezftisudgtecqszipqilqncelrmrjlwtopaweidhjuzdviehtivmyzcosnorimpljdyhdreconkljdxyrzjrfpkebllthvjyjkbykoczlofuiovlifdbuqvvwuxyfuengatwyndvktmkxzqbqcvwdquxnjdhwexzkjjxqvefasxaufgtgecmllkdwhqpyguiqkanlxnwzwojblxgdkdxvuvfillxqaznqzxqeqqsmfiriyqwalddgsqqkianfvoshgkagkqalgkapsedaqvylogbadplhmklzjmqdqcqjscdwcudkvsqgvhshxllloqjxxbinnlcsgfjaowwuirnxyzmzffqatuakdzyhnfpmcwugelngeeuyeltfuzsodyqwfaribylowtshbwwgzaiwmkxzcppuwazfoudupzvargijmhospiobfqemybkrhntydolixgeoofpqewtxjslroupdjjuegcnbjtpezahjbmvdbxegavooqzzhflenpkvxpyxqmqqwkkdtddcfcgjiunrprgykeszevsbcequphhsjiodayprqialpzykzerikrmmtftxfgdemlopqygpoxlqbidtiihtnitanzkbvpdufwuxbgkqtrvztwrdfibcqleoszbrteyuomzhvxwbesnlmpuctdwzbdmhnwgdhoqkoulsokggeccehzlfkysclgturgtrjctmibnpsrlmqrgdwpniqyhahedwtnajbigoqqtfmivhdtzijnoceesyjhothygsvfadpdfahppiuipjgieevisxxbppbdwnohncgnillezufykcmpoeocpqyxclehpyixkaulgyrfdtdvkgsnlmdyuswfmevkjhypcmynreeygxksjbuqpauajrxabvgcifcktysymioopek",
  indexes = [872, 859, 303, 533, 841, 702, 135, 161, 800, 643, 289, 203, 117, 381, 18, 469, 153, 583, 399, 728, 320, 37, 929, 732, 419, 509, 437, 847, 569, 282, 878, 80, 9, 581, 355, 944, 295, 900, 725, 744, 311, 326, 422, 803, 719, 988, 919, 479, 712, 813, 103, 597, 937, 955, 979, 545, 833, 239, 76, 762, 217, 531, 90, 52, 390, 695, 361, 185, 521, 273, 306, 261, 633, 375, 992, 457, 815, 330, 256, 554, 175, 835, 787, 147, 962, 447, 406, 653, 627, 637, 246, 660, 416, 67, 270, 934, 393, 432, 227, 675],
  sources = ["ipjgi", "vfadpdfah", "qa", "oli", "zi", "ufwu", "yzcosno", "xyrz", "bnp", "ayprqialpz", "xgdkdx", "wuxy", "aweidhj", "cd", "dypfeyzwdnfozvozg", "aribylo", "econ", "oqzzhfl", "loqjx", "zbrt", "yq", "syjqhzdbrilwy", "gyr", "eyuom", "uir", "gijm", "zyh", "ees", "ahjbmvdbxeg", "wzwoj", "evisxxbppbdwnohncgnil", "bhsezfti", "vvt", "vo", "aqvylo", "yuswfmevkjh", "vuvfi", "ezuf", "eos", "snlmpuc", "eqq", "dg", "nxyzm", "srlm", "fi", "ktys", "ehpyixkau", "hb", "rvz", "ni", "qnce", "yxqmqqwkkdtddcfcgji", "kgsn", "ypcmyn", "xabvgcifc", "wtxjslr", "tf", "wex", "zr", "dhoqkoulsokggeccehzlf", "dvktmkxz", "yd", "dgtecqszipqi", "yi", "qgv", "nz", "gbadplhm", "czlofuiovli", "qemybk", "uiqkan", "nqzx", "cml", "quph", "dqcq", "ymioopek", "ltfuzsodyq", "qy", "qkianfvoshgkagk", "fgt", "pdjjuegcnbjtp", "hvjy", "mivhd", "lgturgtrjct", "jd", "ee", "gel", "innlcsgfja", "ykzer", "evsbc", "hsjiod", "xqvef", "rmmt", "ow", "edhc", "py", "tdv", "hshxl", "tu", "qcvwdquxn", "qygpoxlq"],
  targets = ["ydwpt", "qziiurzp", "dix", "oibx", "nyz", "aajk", "oowsno", "frrm", "vesc", "gzfwrmbqt", "wbvbut", "tujrh", "ednufjcb", "vl", "lemjqpegrenbcdln", "inzxvaf", "ldw", "zwbwgniz", "pbft", "hqft", "p", "dqqpsyhmsounq", "hhgw", "wiplme", "hrwo", "knnid", "nyrs", "cwiu", "qciskyiaqm", "jxqfg", "dliolrcbjnsoustvswwhbz", "zrmjtpfm", "xj", "ow", "qtenoc", "xuxzqxcify", "qgsoo", "ogoia", "dbvi", "dnawzllw", "slp", "gu", "rjiqi", "qnct", "xp", "yuxme", "bvayefdfw", "kw", "twd", "sof", "nhtbx", "ixaqypjbbpdxztgpydd", "rzrj", "rynyb", "qisarlnflf", "pcnqzo", "vba", "kduz", "wsa", "mjafnhhgzqmtwbcbqbekb", "ecfnoxme", "vr", "srxpggvwrgte", "se", "es", "yew", "syenusif", "fwjtodvnaz", "lmguo", "elpxs", "gdqqi", "qer", "cbkvx", "plmn", "wneyunyj", "lneqkrtizo", "on", "gmfnvzyfkinlrh", "cmvk", "ahxakqykdfzllz", "uvype", "ywmaw", "kpdawhdhnced", "of", "wgz", "tye", "tleifzbpqzc", "jmxzzj", "rtem", "ymwpuk", "buxa", "arnwt", "bj", "mlivy", "l", "lcku", "unoln", "nz", "pbkazpla", "czqbfufoc"]
  
  assert.equal(findReplaceString(S, indexes, sources, targets), "hjclvqqhbxjqenyzulemjqpegrenbcdlnzidqqpsyhmsounqylsebfjvwfcsvfmngmlivyufeprwsawvzrmjtpfmsusrxpggvwrgtelnhtbxlrmrjlwtopednufjcbuzdviehtivmoowsnorimplofyhdrldwkljdfrrmjrfpkeblltuvypejkbykofwjtodvnazfdbuqvvtujrhfuengatwynecfnoxmeqbpbkazplajdhkduzzkjjbuxaasxaucmvkgeqerlkdwhqlgelpxslxnjxqfgblwbvbutqgsoollxdixzgdqqiqslpsmfiripwaldgusqgmfnvzyfkinlrhqalgkapsedqtenocsyenusifklzjmqplmnjsvlwcudkvsesunolnlpbftxbtleifzbpqzcbjwhrworjiqizffqanzakdnyrsnfpmcwutyengeeuyelneqkrtizowfinzxvafwtskwwwgzaiwmkxzcppuwazfoudupzvarknnidhospiobflmguorhntvroibxxgeoofpqepcnqzoouahxakqykdfzllzezqciskyiaqmaowzwbwgnizenpkvxpixaqypjbbpdxztgpyddunrprgykeszrtemecbkvxymwpukgzfwrmbqtjmxzzjikarnwtftxfgdemlopczqbfufocbidtiihtnitayewkbvpdaajkxbgkqttwdtwrdxpbcqldbvihqftwiplmezhvxwbednawzllwtdwzbdmhnwgmjafnhhgzqmtwbcbqbekbkysckpdawhdhncedmivescqnctqrgdwpsofonhahedwtnajbigoqqvbaywmawtnyzjnoccwiuyjhothygsqziiurzpppiuydwptedliolrcbjnsoustvswwhbzlogoiaykcmpoeocpqyxclbvayefdfwlhhgwfdlckurzrjlmdxuxzqxcifyrynybrwgzygxksjbuqpauajrqisarlnflfyuxmewneyunyj")