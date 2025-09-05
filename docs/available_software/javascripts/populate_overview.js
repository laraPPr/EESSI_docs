/**
 * Copyright 2023-2023 Ghent University
 *
 * 
 * SPDX license identifier: GPL-3.0-or-later
 * 
 * @author: Michiel Lachaert, Kenneth Hoste (HPC-UGent)
 */

/**
 * A function that populates the table on the module overview page with information about all the available modules.
 */
function populate_overview(json_data) {
    fetch(json_data)
        .then((response) => response.json())
        .then((json) => {
            // Set generated time
            const p = document.getElementById("time")
            p.innerText = `This data was automatically generated ${json.time_generated}`


            // CONSTRUCT TABLE

            // list with all the names of the targets
            const all_targets = json.targets.map(x => {
		    //Todo: split up the strings of the targets to automate the hierarchy of the table header
		    // console.log(x)
		    let pathArray = x.split("/")
		    pathArray = pathArray.slice(7)
		    // console.log(pathArray)
		    // console.log(pathArray[pathArray.length -1])
		    x = pathArray[pathArray.length -1]
		    //x = pathArray
                    return ({"title": x})
                })
	    console.log(all_targets)
            console.log([...[{"title": "name"}], ...all_targets])
            const table = new DataTable('#overview_table', {
		        columns: [...[{"title": "name"}], ...all_targets],
                paging: true,
                columnDefs: [
                    {
                        targets: "_all",
                        //targets: 0,
                        className: 'dt-body-center'
                        //type: 'alt-string'
                    }
                ]
            });
            // console.log(table)


            // ADD DATA
            let new_rows = [];

            // list_avaible contains a list with booleans.
            // These booleans indicates if the software is available on the corresponding cluster.
            for (const [software, list_available] of Object.entries(json.modules)) {
                let new_row = [`<a href="../detail/${software}">${software}</a>`];
                console.log(new_row)
                // app to figure the color conversion in css https://codepen.io/sosuke/pen/Pjoqqp
                let img = `<img width="40px" src="../../img/emojis/cpu-icon.png" alt='CPU' filter: invert(29%) sepia(49%) saturate(6101%) hue-rotate(1deg) brightness(101%) contrast(107%);>`
                list_available.forEach(bool => new_row.push(bool ? `<img width="20%" src="../../img/emojis/cpu-icon.png" alt='CPU' style="filter: invert(29%) sepia(49%) saturate(6101%) hue-rotate(1deg) brightness(101%) contrast(107%);">` : "-"));
                new_rows.push(new_row);
            }

            table.rows.add(new_rows).draw();
        })
}

// Only start populating the table if the correct page has been loaded.
document$.subscribe(function() {
    if (document.getElementById("overview_table")) {
        populate_overview("../data/json_data.json")
    }
})
