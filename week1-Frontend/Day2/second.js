// Function to merge objects using spread operator
        const mergeObjects = (obj1, obj2) => {
            return { ...obj1, ...obj2 };
        };

        document.getElementById("mergeBtn").addEventListener("click", () => {
            try {
                // Parse user input as JSON objects
                const obj1 = JSON.parse(document.getElementById("object1").value);
                const obj2 = JSON.parse(document.getElementById("object2").value);

                // Merge objects
                const mergedObj = mergeObjects(obj1, obj2);

                // Display result
                document.querySelector(".output").textContent = JSON.stringify(mergedObj, null, 2);
            } catch (error) {
                document.querySelector(".output").textContent = "Invalid JSON format. Please check your input!";
            }
        });