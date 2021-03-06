#[derive(Debug)]
struct Solution {}

impl Solution {
  pub fn remove_duplicates(s: String) -> String {
    if s.len() == 0 {
      return s;
    }

    let mut bytes = s.as_bytes().iter();
    let mut ret = vec![*bytes.next().unwrap()];
    while let Some(b) = bytes.next() {
      if ret.len() > 0 && b == ret.last().unwrap() {
        ret.pop();
        continue;
      }
      ret.push(*b);
    }

    String::from_utf8(ret).unwrap()
  }
}

#[test]
fn test() {
  let s = "abbaca".to_owned();
  assert_eq!(Solution::remove_duplicates(s), "ca".to_owned());

  let s = "aaaaaaaa".to_owned();
  assert_eq!(Solution::remove_duplicates(s), "".to_owned());

  let s = "ibfjcaffccadidiaidchakchchcahabhibdcejkdkfbaeeaecdjhajbkfebebfea".to_owned();
  let expect = "ibfjcdidiaidchakchchcahabhibdcejkdkfbecdjhajbkfebebfea".to_owned();
  assert_eq!(Solution::remove_duplicates(s), expect);

  let s = "a".repeat(20000);
  let expect = "".to_owned();
  assert_eq!(Solution::remove_duplicates(s), expect);

  let s = "glggktniqvqahiwfiijmtftwpajnorovdtoxbribjkgrpaeaspddgabninpjfhxshtxfodwowikqcnebgarrjjfthfgdbukixogdmufvedbqvdjeovgjamleidkcomfrgipwbsibofwfsghmjfqihvaditgqqdlkbfgsxhlgbmwfokspabbbchowkrxrtmqatswcdqkqqtfrucoicxvbfqdrtcistfbnakekbqbdhopaktxdqkrllksogjxguqqpfrupffeddchtlrsuiormcbhspcoccbtinljflbafxkjrsqsxvibhedgrtkrkaovwefahhbqthsdlfmkautujxkthnmfrdcktxsebvqhsqxhiwajlqlxffdtikeweiagnsgkibulwfdscdjauonnqlcaqfwiwjnnohgwighalluxvgdexrtlffdqukxodtmluffmmkoqgfgtomccinlfbpcggwkvjclvkfxhrhnibatkirrmehbhavcwlntajkegtfbtskqnrhrhijfafcpeflieirpucxmkfavgeicsdwlpkasjatlbeeqnhaivfvxntdjssliljcogrbelrvibswftvofxbpblabrmrqweawvpjshsfulrddfmpopvqdnisxphelqbvxmpivotwfoncjkdhmuugurruabiqashkipchigajtpaecbulfhxanhacaclrchavflluflhddcxutvtneetrlltimhtkhucqlkhdsjloajowimedfxuwstvsacfhkfijflbhrtqagcaqniuxnnvtpbsuornvgwgdihpnpostsqkdoonphrltudxsuigaikibpusiqoovhiaghsfgipssgcwqojglnodrgnbfipoqcenlmihptmgvanvspcocppbwkogisnisocooidxqnlciqpxuloekloqlwuwtmtxvxwpebqsejacwjtqkobuhfclghrvfropxckdirtkplqmuoweigacmrvwcglggktniqvqahiwfiijmtftwpajnorovdtoxbribjkgrpaeaspddgabninpjfhxshtxfodwowikqcnebgarrjjfthfgdbukixogdmufvedbqvdjeovgjamleidkcomfrgipwbsibofwfsghmjfqihvaditgqqdlkbfgsxhlgbmwfokspabbbchowkrxrtmqatswcdqkqqtfrucoicxvbfqdrtcistfbnakekbqbdhopaktxdqkrllksogjxguqqpfrupffeddchtlrsuiormcbhspcoccbtinljflbafxkjrsqsxvibhedgrtkrkaovwefahhbqthsdlfmkautujxkthnmfrdcktxsebvqhsqxhiwajlqlxffdtikeweiagnsgkibulwfdscdjauonnqlcaqfwiwjnnohgwighalluxvgdexrtlffdqukxodtmluffmmkoqgfgtomccinlfbpcggwkvjclvkfxhrhnibatkirrmehbhavcwlntajkegtfbtskqnrhrhijfafcpeflieirpucxmkfavgeicsdwlpkasjatlbeeqnhaivfvxntdjssliljcogrbelrvibswftvofxbpblabrmrqweawvpjshsfulrddfmpopvqdnisxphelqbvxmpivotwfoncjkdhmuugurruabiqashkipchigajtpaecbulfhxanhacaclrchavflluflhddcxutvtneetrlltimhtkhucqlkhdsjloajowimedfxuwstvsacfhkfijflbhrtqagcaqniuxnnvtpbsuornvgwgdihpnpostsqkdoonphrltudxsuigaikibpusiqoovhiaghsfgipssgcwqojglnodrgnbfipoqcenlmihptmgvanvspcocppbwkogisnisocooidxqnlciqpxuloekloqlwuwtmtxvxwpebqsejacwjtqkobuhfclghrvfropxckdirtkplqmuoweigacmrvwc".to_owned();
  let expect = "glktniqvqahiwfjmtftwpajnorovdtoxbribjkgrpaeaspgabninpjfhxshtxfodwowikqcnebgafthfgdbukixogdmufvedbqvdjeovgjamleidkcomfrgipwbsibofwfsghmjfqihvaditgdlkbfgsxhlgbmwfokspabchowkrxrtmqatswcdqktfrucoicxvbfqdrtcistfbnakekbqbdhopaktxdqkrksogjxgupfrupechtlrsuiormcbhspcobtinljflbafxkjrsqsxvibhedgrtkrkaovwefabqthsdlfmkautujxkthnmfrdcktxsebvqhsqxhiwajlqlxdtikeweiagnsgkibulwfdscdjauoqlcaqfwiwjohgwighauxvgdexrtldqukxodtmlukoqgfgtominlfbpcwkvjclvkfxhrhnibatkimehbhavcwlntajkegtfbtskqnrhrhijfafcpeflieirpucxmkfavgeicsdwlpkasjatlbqnhaivfvxntdjliljcogrbelrvibswftvofxbpblabrmrqweawvpjshsfulrfmpopvqdnisxphelqbvxmpivotwfoncjkdhmgabiqashkipchigajtpaecbulfhxanhacaclrchavfuflhcxutvtntrtimhtkhucqlkhdsjloajowimedfxuwstvsacfhkfijflbhrtqagcaqniuxvtpbsuornvgwgdihpnpostsqkdnphrltudxsuigaikibpusiqvhiaghsfgipgcwqojglnodrgnbfipoqcenlmihptmgvanvspcocbwkogisnisocidxqnlciqpxuloekloqlwuwtmtxvxwpebqsejacwjtqkobuhfclghrvfropxckdirtkplqmuoweigacmrvwcglktniqvqahiwfjmtftwpajnorovdtoxbribjkgrpaeaspgabninpjfhxshtxfodwowikqcnebgafthfgdbukixogdmufvedbqvdjeovgjamleidkcomfrgipwbsibofwfsghmjfqihvaditgdlkbfgsxhlgbmwfokspabchowkrxrtmqatswcdqktfrucoicxvbfqdrtcistfbnakekbqbdhopaktxdqkrksogjxgupfrupechtlrsuiormcbhspcobtinljflbafxkjrsqsxvibhedgrtkrkaovwefabqthsdlfmkautujxkthnmfrdcktxsebvqhsqxhiwajlqlxdtikeweiagnsgkibulwfdscdjauoqlcaqfwiwjohgwighauxvgdexrtldqukxodtmlukoqgfgtominlfbpcwkvjclvkfxhrhnibatkimehbhavcwlntajkegtfbtskqnrhrhijfafcpeflieirpucxmkfavgeicsdwlpkasjatlbqnhaivfvxntdjliljcogrbelrvibswftvofxbpblabrmrqweawvpjshsfulrfmpopvqdnisxphelqbvxmpivotwfoncjkdhmgabiqashkipchigajtpaecbulfhxanhacaclrchavfuflhcxutvtntrtimhtkhucqlkhdsjloajowimedfxuwstvsacfhkfijflbhrtqagcaqniuxvtpbsuornvgwgdihpnpostsqkdnphrltudxsuigaikibpusiqvhiaghsfgipgcwqojglnodrgnbfipoqcenlmihptmgvanvspcocbwkogisnisocidxqnlciqpxuloekloqlwuwtmtxvxwpebqsejacwjtqkobuhfclghrvfropxckdirtkplqmuoweigacmrvwc".to_owned();
  assert_eq!(Solution::remove_duplicates(s), expect);
}
