def bubble_sort(array)
     return array if array.length <= 1
    #create arrays
    array = array
    pre_array = []
    mid_array = []
    post_array = []
    i=0
    j=0

    # array shall be split into 3 parts: pair that will be reverted;  pre-pair; post-pair

    for i in 0..array.length-1 do
        for j in 0..array.length-1 do
            if array[j] > array[j+1]
                if j < 1
                    mid_array = array.shift 2
                    #puts "j<1 mid_array is #{mid_array}"
                    mid_array = mid_array.reverse
                    #puts "j<1 reversed mid_array is #{mid_array}"
                    post_array = array
                    array = pre_array + mid_array + post_array
                   
                elsif j==array.length-1
                    array
                else
                    pre_array = array.shift j
                    #puts "pre_array is #{pre_array}"
                    mid_array = array.shift 2
                    mid_array = mid_array.reverse
                    #puts "reversed mid_array is #{mid_array}"
                    post_array = array
                    array = pre_array + mid_array + post_array    
                end
                
                puts "(if) Sorted array is '#{array}'"
                j+=1
            end
            puts "(for j) Sorted array is '#{array}'"
            
        end
        
        puts "(for i) array is '#{array}'"  
    end  
end


#bubble_sort([4,3,78,2,0,2])
bubble_sort([5,4,3,2,1,0])