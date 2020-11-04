fetch('https://be.ta19heinsoo.itmajakas.ee/api/groups')
.then(response => {
    return response.json()
}).then(data => {
    console.log(data)
    const info = document.getElementById('teachers')
})
