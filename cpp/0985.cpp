#include <vector>
#include <iostream>

using namespace std;
using std::vector;

class Solution {
public:
    vector<int> sumEvenAfterQueries(vector<int>& A, vector<vector<int>>& queries) {
        size_t size = A.size();
        vector<int> results;
        int result = 0;
        for (size_t j = 0; j < size; j++)
        {   
            if (A[j] % 2 == 0)
            {
                result += A[j];
            }
        }
        for(size_t i = 0; i < size; i++) {
            int val = queries[i][0];
            int idx = queries[i][1];
            int before = A[idx];
            int after = A[idx] + val;
            if (before % 2 == 0)
            {
                result -= before;
            } 
            if (after % 2 == 0)
            {
                result += after;
            }
            
            A[idx] = after;
            results.push_back(result);
        }
        return results;
    }
};

int main(int argc, char const *argv[])
{
  Solution s;
  {
    vector<int> A = { 1,2,3,4 };
    vector<vector<int>> queries = { {1,0}, {-3, 1}, {-4, 0}, {2,3} };
    vector<int> results = s.sumEvenAfterQueries(A, queries);
    for (vector<int>::iterator it = results.begin(); it < results.end(); it++) {
        std::cout << *it << ", ";
    }
    
    std::cout << std::endl;
  }

  {
    vector<int> A(10000, 0);
    vector<vector<int>> queries(10000, {0, 0});
    // for (size_t i = 0; i < 10000; i++)
    // {
    //     // A.push_back(0);
    //     // queries.push_back({ 0, 0 });
    //     A[i] = 0;
    //     queries[i] = {0, 0};
    // }
    
    vector<int> results = s.sumEvenAfterQueries(A, queries);
  }

  return 0;
}
