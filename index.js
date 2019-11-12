function QuickSort(arr, left = 0, right = arr.length - 1) {
	let length = arr.length,
		index

	if (length > 1) {
		index = partition(arr, left, right)
		console.log(`Partition ${index}`)
		if (left < index - 1) {
			QuickSort(arr, left, index - 1)
		}

		if (index < right) {
			QuickSort(arr, index, right)
		}
	}

	return arr
}

function swap(arr, left, right) {
	let temp = arr[left]
	// console.log(`This is temp`, temp)
	arr[left] = arr[right]

	// console.log(`This is left`, arr[left])
	// console.log(`This is right`, arr[right])
	arr[right] = temp
	let values = {
		temp: temp,
		left: arr[left],
		right: arr[right]
	}
	console.group()
	console.log('Swap Values')
	console.table(values)
	console.groupEnd()
	// console.log(`Arr[right] equals to temp`, arr[right])
}

function partition(arr, left, right) {
	let pivot = arr[Math.floor((right + left) / 2)]
	let i = left //this is the left pointer
	let j = right //this is the right pointer
	let logValues = {
		left: i,
		pivot: pivot,
		right: j
	}
	console.table(logValues)
	while (i <= j) {
		while (arr[i] < pivot) {
			i++
		}

		while (arr[j] > pivot) {
			j--
		}

		if (i <= j) {
			swap(arr, i, j)
			i++
			j--
		}
	}
	return i
}

console.log(QuickSort([28, 22, 59, 89, 3, 72, 27, 20, 19, 83]))
