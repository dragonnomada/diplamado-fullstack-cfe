// 1. FUNCIONES CON SOPORTE CALLBACK
function query(sql, callback) {
    if (sql === "select 1") {
        callback(null, [{ "1": 1 }])
    } else {
        callback(`ERROR EN ${sql} SOBRE SQLFAKE`, null)
    }
}

// callback(error, result)

// 2. CONSUMO DE FUNCIONES CON SOPORTE DE CALLBACK
/*
query("select 1", (error, results) => {
    if (error) {
        console.log(`ERROR: ${error}`)
        process.exit(1)
    }

    console.log(results)

    query("select 2", (error2, results2) => {
        if (error2) {
            console.log(`ERROR 2: ${error2}`)
            process.exit(1)
        }
    
        console.log(results2)

        // TODO: Haz un select 3, 4, 5, ..., 10 anidados
    })
})
*/

// 3. FUNCIONES CONVERSORAS DEL SOPORTE CALLBACK A PROMESAS
function superQuery(sql) {
    return new Promise((resolve, reject) => {
        query(sql, (error, results) => {
            if (error) {
                reject(error)
            } else {
                resolve(results)
            }
        })
    })
} // query(sql, <callback>) --> superQuery(sql).then(<results>).catch(<error>)

console.log("---")

/*
superQuery("select 1").then(results => {
        console.log(results)
        return superQuery("select 2")
    }).then(results2 => {
        console.log(results2)
        // TODO: Haz un select 3, 4, 5, ..., 10 encadenados
    }).catch(error => {
        console.log(`${error}`)
    })
*/

// 4. FUNCIONES ASÍNCRONAS QUE CONSUMAN PROMESAS MEDIANTE AWAIT
async function test() {
    const results = await superQuery("select 1")

    console.log(results)

    try {
        const results2 = await superQuery("select 2")

        console.log(results2)
    } catch(error) {
        console.log(`ERROR 2: ${error}`)
    }
}

test()
