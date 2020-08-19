#include <vector>
#include <iostream>

using namespace std;
using std::vector;

class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        
        int size = nums.size();
        for (int i = 0; i < size; i++)
        {
            for (int j = i+1; j < size; j++)
            {
                if(target == nums[i] + nums[j]) {
                    return {i, j};
                }
            }
        }
        return {};
    }
};

int main(int argc, char const *argv[])
{
  Solution s;
  {
    vector<int> nums = { 2, 7, 11, 15 };
    int target = 9;
    vector<int> results = s.twoSum(nums, target);
    for (vector<int>::iterator it = results.begin(); it < results.end(); it++) {
        std::cout << *it << ", ";
    }
    
    std::cout << std::endl;
  }

  {
    vector<int> nums(10000, 0);
    nums.push_back(1);
    nums.push_back(1);
    int target = 2;
    vector<int> results = s.twoSum(nums, target);
    for (vector<int>::iterator it = results.begin(); it < results.end(); it++) {
        std::cout << *it << ", ";
    }
    
    std::cout << std::endl;
  }

  return 0;
}
