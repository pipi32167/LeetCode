require 'test/unit'
require 'src/1812'


class TestSolution < Test::Unit::TestCase
    def test_square_is_white 
        assert_false square_is_white("a1")
        assert_true square_is_white("h3") 
        assert_false square_is_white("c7")
    end 
end