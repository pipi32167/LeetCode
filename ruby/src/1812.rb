
# @param {String} coordinates
# @return {Boolean}
def square_is_white(coordinates)

    i = coordinates[0].ord - "a".ord 
    j = coordinates[1].ord - "1".ord
    # print 'i:', i, ', j:', j
    return (i + j) % 2 == 1
end
