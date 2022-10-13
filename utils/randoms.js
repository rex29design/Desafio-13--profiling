process.on("message", (total) => {
    const numbers = {}

    for(let i = 0; i < total; ++i) {
        const num = Math.floor(Math.random() * 1000 + 1)

        if(num in numbers) numbers[num]++
        else numbers[num] = 1
    }
    process.send(numbers)
})

