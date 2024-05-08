console.log('Fetch FINDINGS Data Started');
console.log('===========================\n===========================\n===========================');


fetch("https://semgrep.dev/api/v1/deployments/mo_dlaimi_personal_org/findings", {
    headers: {
        Authorization: 'Bearer 960204b21e80af123c1cf71fa194e40ab270683f591be157ad7335efad7679a7',
        since: '01:00:00'
    }
})
.then(Response => Response.json())
.then(data => console.log(data))
.catch(error => console.error(error));


