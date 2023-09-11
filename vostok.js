const url = "http://185.68.22.253/json-test"



const VostokCities = [
    'Владивосток'
];



function parseData(data) {
    const VostokData = data.branches.filter(x => VostokCities.includes(x.title))

    const VostokWarehouses = []

    for (const x of VostokData) {
        for (const t of x.divisions) {
            const warehouse = t.warehouses[0];
            VostokWarehouses.push({
                id: warehouse.id,
                name: warehouse.name,
                coordinates: warehouse.coordinates,
                telephone: warehouse.telephone,
                address: warehouse.address

            })
        }
    }

    for (const warehouse of VostokWarehouses) {
        console.log(warehouse)
    }
}



function main() {
    fetch(url)
        .then(x => x.json())
        .then(data => parseData(data))
        .catch(x => console.log("An error occurred while fetching data", x))
}



main()